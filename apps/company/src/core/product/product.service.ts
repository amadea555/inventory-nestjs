import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CompanyUser, PrismaClient } from 'apps/generated/prisma/company';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(currentUser: CompanyUser) {
    return this.prisma.product.findMany({
      where: {
        deletedAt: null,
        companyId: currentUser.companyId,
      },
    });
  }

  async findOne(id: number, currentUser: CompanyUser) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
        deletedAt: null,
        companyId: currentUser.companyId,
      },
    });

    if (!product) {
      throw new NotFoundException('Data not found');
    }

    return product;
  }

  async create(
    createProductDto: CreateProductDto,
    imageFilename: string,
    currentUser: CompanyUser,
  ) {
    if (createProductDto.companyId !== currentUser.companyId) {
      throw new ForbiddenException('wrong companyId');
    }
    const data = await this.prisma.product.create({
      data: {
        name: createProductDto.name,
        description: createProductDto.description,
        image: imageFilename,
        price: createProductDto.price,
        qty: createProductDto.qty,
        categoryId: createProductDto.categoryId,
        companyId: createProductDto.companyId,
        createdAt: new Date(),
      },
    });
    return {
      ...data,
    };
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
    imageFilename: string,
    currentUser: CompanyUser,
  ) {
    const product = await this.prisma.product.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!product) {
      throw new NotFoundException('Data not found');
    }

    if (product.companyId !== currentUser.companyId) {
      throw new ForbiddenException('ProductId not found in this company');
    }

    return this.prisma.product.update({
      where: { id },
      data: {
        name: updateProductDto.name,
        description: updateProductDto.description,
        image: imageFilename,
        price: updateProductDto.price,
        qty: updateProductDto.qty,
        categoryId: updateProductDto.categoryId,
        companyId: updateProductDto.companyId,
        updatedAt: new Date(),
      },
    });
  }

  async delete(id: number, currentUser: CompanyUser) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!product) {
      throw new NotFoundException('Data not found');
    }

    if (product.companyId !== currentUser.companyId) {
      throw new ForbiddenException('ProductId not found in this company');
    }

    return this.prisma.product.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
