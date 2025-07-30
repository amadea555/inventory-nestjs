import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from 'apps/generated/prisma/company';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return this.prisma.customer.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const customer = await this.prisma.customer.findUnique({
      where: {
        id,
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        companyId: true,
        status: true,
        address: {
            select:{
                id: true,
                address: true,
                label: true,
                note: true,
                phoneNumber: true,
            }
        },
      }
    });

    if (!customer) {
      throw new NotFoundException('Data not found');
    }

    return customer;
  }

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await this.prisma.customer.create({
      data: {
        name: createCustomerDto.name,
        email: createCustomerDto.email,
        phoneNumber: createCustomerDto.phoneNumber,
        companyId: createCustomerDto.companyId,
        createdAt: new Date(),
      },
    });

    return customer;
  }

  async update(customerId: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.prisma.customer.findFirst({
      where: {
        id: customerId,
        deletedAt: null,
      },
    });

    if (!customer) {
      throw new NotFoundException('Data not found');
    }

    return this.prisma.customer.update({
      where: {
        id: customerId,
      },
      data: {
        name: updateCustomerDto.name,
        email: updateCustomerDto.email,
        status: updateCustomerDto.status,
        updatedAt: new Date(),
      },
    });
  }

  async delete(id: number) {
    const customer = await this.prisma.customer.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!customer) {
      throw new NotFoundException('Data not found');
    }

    return this.prisma.customer.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
