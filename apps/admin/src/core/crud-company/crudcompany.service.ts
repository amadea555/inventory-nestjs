import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/company.dto';

@Injectable()
export class CrudCompanyService {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return this.prisma.company.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const company = await this.prisma.company.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!company) {
      throw new NotFoundException('Data not found');
    }

    return company;
  }

  async create(createCompanyDto: CreateCompanyDto) {
    const company = await this.prisma.company.create({
      data: {
        name: createCompanyDto.name,
        email: createCompanyDto.email,
        createdAt: new Date(),
      },
    });

    return company;
  }

  async update(companyId: number, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.prisma.company.findFirst({
      where: {
        id: companyId,
        deletedAt: null,
      },
    });

    if (!company) {
      throw new NotFoundException('Data not found');
    }

    return this.prisma.company.update({
      where: {
        id: companyId,
      },
      data: {
        name: updateCompanyDto.name,
        email: updateCompanyDto.email,
        status: updateCompanyDto.status,
        updatedAt: new Date(),
      },
    });
  }

  async delete(id: number) {
    const company = await this.prisma.company.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!company) {
      throw new NotFoundException('Data not found');
    }

    return this.prisma.company.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
