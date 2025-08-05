import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { CompanyUser, PrismaClient } from 'apps/generated/prisma/company';
import { CreateOrderDto, UpdateOrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaClient) {}

  async findAll(currentUser: CompanyUser) {
    return this.prisma.order.findMany({
      where: {
        deletedAt: null,
        companyId: currentUser.companyId,
      },
    });
  }

  async findOne(id: number, currentUser: CompanyUser) {
    const order = await this.prisma.order.findUnique({
      where: {
        id,
        deletedAt: null,
        companyId: currentUser.companyId,
      },
    });

    if (!order) {
      throw new NotFoundException('Data not found');
    }

    return order;
  }

  async createOrder(dto: CreateOrderDto, currentUser: CompanyUser) {
    const { customerId, companyId, products, status } = dto;

    if (companyId !== currentUser.companyId) {
      throw new ForbiddenException('wrong companyId');
    }

    // ✅ Tambahkan pengecekan apakah customer milik company yang sama
    const customer = await this.prisma.customer.findUnique({
      where: { id: customerId },
      select: { companyId: true },
    });

    if (!customer) {
      throw new NotFoundException('Customer tidak ditemukan');
    }

    if (customer.companyId !== currentUser.companyId) {
      throw new ForbiddenException('Your companyId is different');
    }

    if (!products || products.length === 0) {
      throw new BadRequestException('Produk harus diisi');
    }

    const productIds = products.map((p) => p.productId);
    const foundProducts = await this.prisma.product.findMany({
      where: { id: { in: productIds }, deletedAt: null },
    });

    if (foundProducts.length !== productIds.length) {
      throw new NotFoundException('Some products not found');
    }

    let grandTotal = 0;

    for (const item of products) {
      const product = foundProducts.find((p) => p.id === item.productId)!;

      if (item.qty > product.qty) {
        throw new BadRequestException(
          `Product ID ${item.productId} melebihi stok (tersedia: ${product.qty})`,
        );
      }

      grandTotal += product.price * item.qty;
    }

    const result = await this.prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          customerId,
          companyId,
          grandTotal,
          paymentStatus: status,
          createdAt: new Date(),
        },
      });

      for (const item of products) {
        const product = foundProducts.find((p) => p.id === item.productId)!;

        // Update stok produk
        const updateData: any = {
          qty: { decrement: item.qty },
        };
        if (status === 'PENDING')
          updateData.qtyBooked = { increment: item.qty };
        if (status === 'PAID') updateData.qtySold = { increment: item.qty };

        await tx.product.update({
          where: { id: item.productId },
          data: updateData,
        });

        // Buat order detail
        await tx.orderDetail.create({
          data: {
            orderId: order.id,
            companyId,
            productId: item.productId,
            qty: item.qty,
            price: product.price,
            subTotal: product.price * item.qty,
            createdAt: new Date(),
          },
        });
      }

      return order;
    });

    return result;
  }

  async updateOrder(
    orderId: number,
    dto: UpdateOrderDto,
    currentUser: CompanyUser,
  ) {
    const existingOrder = await this.prisma.order.findFirst({
      where: {
        id: orderId,
        companyId: currentUser.companyId,
      },
      include: { orderDetail: true },
    });

    if (!existingOrder) throw new NotFoundException('Order tidak ditemukan');

    const { customerId, status, products } = dto;

    // ✅ Tambahkan pengecekan apakah customer milik company yang sama
    const customer = await this.prisma.customer.findUnique({
      where: { id: customerId },
      select: { companyId: true },
    });

    if (!customer) {
      throw new NotFoundException('Customer tidak ditemukan');
    }

    if (customer.companyId !== currentUser.companyId) {
      throw new ForbiddenException('Your companyId is different');
    }

    if (status !== 'CANCELED' && (!products || products.length === 0)) {
      throw new BadRequestException('Produk harus diisi');
    }

    const productIds = products?.map((p) => p.productId) || [];
    const foundProducts = await this.prisma.product.findMany({
      where: { id: { in: productIds }, deletedAt: null },
    });

    if (status !== 'CANCELED' && foundProducts.length !== productIds.length) {
      throw new NotFoundException('Beberapa produk tidak ditemukan');
    }

    let grandTotal = 0;
    if (status !== 'CANCELED') {
      for (const item of products) {
        const product = foundProducts.find((p) => p.id === item.productId)!;

        if (item.qty > product.qty) {
          throw new BadRequestException(
            `Qty untuk produk ID ${item.productId} melebihi stok`,
          );
        }

        grandTotal += product.price * item.qty;
      }
    }

    const updatedOrder = await this.prisma.$transaction(async (tx) => {
      // Rollback stok dari order lama
      for (const oldDetail of existingOrder.orderDetail) {
        const product = await tx.product.findUnique({ 
          where: { id: oldDetail.productId },
        });
        if (!product) continue;

        const rollbackData: any = {
          qty: { increment: oldDetail.qty },
        };

        if (existingOrder.paymentStatus === 'PENDING') {
          const newQtyBooked = product.qtyBooked - oldDetail.qty;
          rollbackData.qtyBooked =
            newQtyBooked <= 0 ? 0 : { decrement: oldDetail.qty };
        }

        if (existingOrder.paymentStatus === 'PAID') {
          rollbackData.qtySold = { decrement: oldDetail.qty };
        }

        await tx.product.update({
          where: { id: oldDetail.productId },
          data: rollbackData,
        });
      }

      // Hapus detail order lama
      await tx.orderDetail.deleteMany({
        where: { orderId: existingOrder.id },
      });

      // Jika status CANCELED, cukup update status dan stop di sini
      if (status === 'CANCELED') {
        return await tx.order.update({
          where: { id: existingOrder.id },
          data: {
            ...(customerId && { customerId }),
            paymentStatus: 'CANCELED',
            updatedAt: new Date(),
          },
        });
      }

      // Update order utama
      const order = await tx.order.update({
        where: { id: existingOrder.id },
        data: {
          ...(customerId && { customerId }),
          ...(status && { paymentStatus: status }),
          grandTotal,
          updatedAt: new Date(),
        },
      });

      // Tambahkan order detail baru & update stok
      for (const item of products) {
        const product = foundProducts.find((p) => p.id === item.productId)!;

        const updateData: any = {
          qty: { decrement: item.qty },
          qtyBooked: undefined,
          qtySold: undefined,
        };

        if (status === 'PENDING') {
          updateData.qtyBooked = { increment: item.qty };
        }

        if (status === 'PAID') {
          updateData.qtySold = { increment: item.qty };

          const currentProduct = await tx.product.findUnique({
            where: { id: item.productId },
          });

          if (currentProduct) {
            const newQtyBooked = currentProduct.qtyBooked - item.qty;
            updateData.qtyBooked =
              newQtyBooked <= 0 ? 0 : { decrement: item.qty };
          }
        }

        await tx.product.update({
          where: { id: item.productId },
          data: updateData,
        });

        await tx.orderDetail.create({
          data: {
            orderId: order.id,
            companyId: currentUser.companyId,
            productId: item.productId,
            qty: item.qty,
            price: product.price,
            subTotal: product.price * item.qty,
            createdAt: new Date(),
          },
        });
      }

      return order;
    });

    return updatedOrder;
  }

  async delete(id: number, currentUser: CompanyUser) {
    const order = await this.prisma.order.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!order) {
      throw new NotFoundException('Data not found');
    }

    if (order.companyId !== currentUser.companyId) {
      throw new ForbiddenException('CategoryId not found in this company');
    }

    return this.prisma.order.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
