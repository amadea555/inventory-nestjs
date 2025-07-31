import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CompanyUser, PrismaClient } from 'apps/generated/prisma/company';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaClient) {}

  async findAll(currentUser: CompanyUser) {
    return this.prisma.category.findMany({
      where: {
        deletedAt: null,
        companyId: currentUser.companyId,
      },
    });
  }

  async findOne(id: number, currentUser: CompanyUser) {
    const category = await this.prisma.category.findUnique({
      where: {
        id,
        deletedAt: null,
        companyId: currentUser.companyId,
      },
    });

    if (!category) {
      throw new NotFoundException('Data not found');
    }

    return category;
  }

  async create(createCategoryDto: CreateCategoryDto, currentUser: CompanyUser) {
    if (createCategoryDto.companyId !== currentUser.companyId) {
      throw new ForbiddenException('Wrong CompanyId');
    }
    const category = await this.prisma.category.create({
      data: {
        name: createCategoryDto.name,
        companyId: createCategoryDto.companyId,
        createdAt: new Date(),
      },
    });

    return category;
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
    currentUser: CompanyUser,
  ) {
    const category = await this.prisma.category.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!category) {
      throw new NotFoundException('Data not found');
    }

    if (category.companyId !== currentUser.companyId) {
      throw new ForbiddenException('CategoryId not found in this company');
    }

    return this.prisma.category.update({
      where: { id },
      data: {
        name: updateCategoryDto.name,
        updatedAt: new Date(),
      },
    });
  }

  async delete(id: number, currentUser) {
    const category = await this.prisma.category.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!category) {
      throw new NotFoundException('Data not found');
    }

    if (category.companyId !== currentUser.companyId) {
      throw new ForbiddenException('CategoryId not found in this company');
    }

    return this.prisma.category.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
