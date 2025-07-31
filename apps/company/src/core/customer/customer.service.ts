import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClient } from 'apps/generated/prisma/company';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';
import { CompanyUser } from 'generated/prisma';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaClient) {}

  async findAll(currentUser: CompanyUser) {
    return this.prisma.customer.findMany({
      where: {
        deletedAt: null,
        companyId: currentUser.companyId,
      },
    });
  }

  async findOne(id: number, currentUser: CompanyUser) {
    const customer = await this.prisma.customer.findUnique({
      where: {
        id,
        deletedAt: null,
        companyId: currentUser.companyId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        companyId: true,
        status: true,
        address: {
          select: {
            id: true,
            address: true,
            label: true,
            note: true,
            phoneNumber: true,
          },
        },
      },
    });

    if (!customer) {
      throw new NotFoundException('Data not found');
    }

    return customer;
  }

  async create(createCustomerDto: CreateCustomerDto, currentUser: CompanyUser) {
    if (createCustomerDto.companyId !== currentUser.companyId) {
      throw new ForbiddenException('Failed to create Customer');
    }
    const existing = await this.prisma.customer.findUnique({
      where: { email: createCustomerDto.email },
    });

    if (existing) {
      throw new BadRequestException('Email Already Used');
    }

    const customer = await this.prisma.customer.create({
      data: {
        name: createCustomerDto.name,
        email: createCustomerDto.email,
        phoneNumber: createCustomerDto.phoneNumber,
        companyId: currentUser.companyId,
        createdAt: new Date(),
      },
    });

    return customer;
  }

  async update(
    customerId: number,
    updateCustomerDto: UpdateCustomerDto,
    currentUser: CompanyUser,
  ) {
    const customer = await this.prisma.customer.findFirst({
      where: {
        id: customerId,
        deletedAt: null,
      },
    });

    if (!customer) {
      throw new NotFoundException('Data not found');
    }

    if (customer.companyId !== currentUser.companyId) {
      throw new ForbiddenException('Customer not found in this company');
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

  async delete(id: number, currentUser: CompanyUser) {
    const customer = await this.prisma.customer.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!customer) {
      throw new NotFoundException('Data not found');
    }

    if (customer.companyId !== currentUser.companyId) {
      throw new ForbiddenException('Customer not found in this company');
    }

    return this.prisma.customer.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
