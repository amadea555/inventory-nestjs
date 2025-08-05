import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  PrismaClient,
  TransactionType,
  PaymentStatus,
  CompanyUser,
  TransactionLog,
} from 'apps/generated/prisma/company';
import {
  CreateTransactionDto,
  UpdateTransactionDto,
} from './dto/transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaClient) {}

  async findAll(currentUser: CompanyUser) {
    return this.prisma.transactionLog.findMany({
      where: {
        deletedAt: null,
        companyId: currentUser.companyId,
      },
    });
  }

  async findOne(id: number, currentUser: CompanyUser) {
    const transactionLog = await this.prisma.transactionLog.findUnique({
      where: {
        id,
        deletedAt: null,
        companyId: currentUser.companyId,
      },
    });

    if (!transactionLog) {
      throw new NotFoundException('Data not found');
    }

    return transactionLog;
  }

  async create(dto: CreateTransactionDto, currentUser: CompanyUser) {
    if (dto.companyId !== currentUser.companyId) {
      throw new ForbiddenException('wrong companyId');
    }

    if (dto.companyUserId !== currentUser.id) {
      throw new ForbiddenException('wrong companyUserId');
    }

    // Pastikan produk ada
    const product = await this.prisma.product.findFirst({
      where: {
        id: dto.productId,
        deletedAt: null,
      },
    });
    if (!product) {
      throw new NotFoundException('Produk tidak ditemukan');
    }

    if (dto.type === TransactionType.IN) {
      if (dto.orderDetailId) {
        throw new BadRequestException(
          'orderDetailId tidak boleh diisi saat type IN',
        );
      }

      // Tambahkan qty
      await this.prisma.product.update({
        where: { id: dto.productId },
        data: {
          qty: product.qty + dto.quantity,
        },
      });
    } else if (dto.type === TransactionType.OUT) {
      if (!dto.orderDetailId) {
        throw new BadRequestException(
          'orderDetailId harus diisi saat type OUT',
        );
      }

      // Cek orderDetail
      const orderDetail = await this.prisma.orderDetail.findFirst({
        where: {
          id: dto.orderDetailId,
          deletedAt: null,
        },
        include: {
          order: true,
        },
      });
      // Cek apakah orderDetailId sudah pernah digunakan di transactionLog
      const existingTransaction = await this.prisma.transactionLog.findFirst({
        where: {
          orderDetailId: dto.orderDetailId,
        },
      });

      if (existingTransaction) {
        throw new ForbiddenException(
          `orderDetailId ${dto.orderDetailId} sudah pernah digunakan`,
        );
      }

      if (!orderDetail) {
        throw new NotFoundException('Order detail tidak ditemukan');
      }

      if (orderDetail.order.paymentStatus !== PaymentStatus.PAID) {
        throw new ForbiddenException('Status pembayaran belum PAID');
      }

      if (orderDetail.qty !== dto.quantity) {
        throw new ForbiddenException(
          'Jumlah quantity tidak sesuai dengan order detail',
        );
      }

      if (orderDetail.productId !== dto.productId) {
        throw new ForbiddenException(
          'Product Id tidak sesuai dengan order detail',
        );
      }
    }

    // Simpan transaction log
    const transaction = await this.prisma.transactionLog.create({
      data: {
        companyId: dto.companyId,
        companyUserId: dto.companyUserId,
        type: dto.type,
        orderDetailId: dto.orderDetailId || null,
        productId: dto.productId,
        quantity: dto.quantity,
        transactionDate: dto.transactionDate,
        remarks: dto.remarks,
      },
    });

    let message = '';
    if (dto.type === 'IN') {
      message = `Product id ${dto.productId} masuk sebanyak ${dto.quantity} dari supplier pada waktu ${dto.transactionDate}`;
    } else {
      message = `Product id ${dto.productId} keluar sebanyak ${dto.quantity} dari order detail id ${dto.orderDetailId} pada waktu ${dto.transactionDate}`;
    }

    return {
      message,
      transaction,
    };
  }

  async update(
    id: number,
    updateTransactionDto: UpdateTransactionDto,
    currentUser: CompanyUser,
  ) {
    const existing = await this.prisma.transactionLog.findFirst({
      where: {
        id,
        companyId: currentUser.companyId,
      },
    });

    if (!existing) {
      throw new NotFoundException('Transaction not found');
    }

    if (
      currentUser.level !== 'SUPER' &&
      existing.companyUserId !== currentUser.id
    ) {
      throw new ForbiddenException('Cannot edit this transactionLog');
    }

    const updatedType = updateTransactionDto.type ?? existing.type;
    const updatedProductId =
      updateTransactionDto.productId ?? existing.productId;
    const updatedQuantity = updateTransactionDto.quantity ?? existing.quantity;

    const product = await this.prisma.product.findFirst({
      where: {
        id: updatedProductId,
        deletedAt: null,
      },
    });

    if (!product) {
      throw new NotFoundException('Produk tidak ditemukan');
    }

    if (updatedType === TransactionType.IN) {
      if (updateTransactionDto.orderDetailId) {
        throw new BadRequestException(
          'orderDetailId tidak boleh diisi saat type IN',
        );
      }
    }

    if (updatedType === TransactionType.OUT) {
      if (!updateTransactionDto.orderDetailId) {
        throw new BadRequestException(
          'orderDetailId harus diisi saat type OUT',
        );
      }

      const orderDetail = await this.prisma.orderDetail.findFirst({
        where: {
          id: updateTransactionDto.orderDetailId,
          deletedAt: null,
        },
        include: {
          order: true,
        },
      });

      if (!orderDetail) {
        throw new NotFoundException('Order detail tidak ditemukan');
      }

      if (orderDetail.order.paymentStatus !== PaymentStatus.PAID) {
        throw new ForbiddenException('Status pembayaran belum PAID');
      }

      if (orderDetail.qty !== updatedQuantity) {
        throw new ForbiddenException(
          'Jumlah quantity tidak sesuai dengan order detail',
        );
      }

      if (orderDetail.productId !== updatedProductId) {
        throw new ForbiddenException(
          'Product Id tidak sesuai dengan order detail',
        );
      }
    }

    const updated = await this.prisma.transactionLog.update({
      where: { id },
      data: {
        productId: updateTransactionDto.productId,
        type: updateTransactionDto.type,
        quantity: updateTransactionDto.quantity,
        orderDetailId: updateTransactionDto.orderDetailId ?? undefined,
        transactionDate: updateTransactionDto.transactionDate,
        remarks: updateTransactionDto.remarks,
      },
    });

    return updated;
  }

  async delete(id: number, currentUser) {
    const transactionLog = await this.prisma.transactionLog.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!transactionLog) {
      throw new NotFoundException('Data not found');
    }

    if (transactionLog.companyId !== currentUser.companyId) {
      throw new ForbiddenException('TransactionId not found in this company');
    }

    return this.prisma.transactionLog.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
