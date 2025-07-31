import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CompanyUser, PrismaClient } from 'apps/generated/prisma/company';
import { CreateAddressDto, UpdateAddressDto } from './dto/address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaClient) {}

  async findAll(currentUser: CompanyUser) {
    return this.prisma.addressCustomer.findMany({
      where: {
        deletedAt: null,
        customer: {
          companyId: currentUser.companyId,
        },
      },
      include: {
        customer: {
          select: {
            id: true,
            name: true,
            email: true,
            companyId: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const address = await this.prisma.addressCustomer.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!address) {
      throw new NotFoundException('Data not found');
    }

    return address;
  }

  async create(createAddressDto: CreateAddressDto, currentUser: CompanyUser) {
    const customer = await this.prisma.customer.findFirst({
      where: {
        id: createAddressDto.customerId,
        companyId: currentUser.companyId,
        deletedAt: null,
      },
    });

    if (!customer) {
      throw new ForbiddenException('Customer was not found');
    }
    const address = await this.prisma.addressCustomer.create({
      data: {
        customerId: createAddressDto.customerId,
        phoneNumber: createAddressDto.phoneNumber,
        address: createAddressDto.address,
        label: createAddressDto.label,
        note: createAddressDto.note,
        createdAt: new Date(),
      },
    });

    return address;
  }

  async update(
    addressId: number,
    updateAddressDto: UpdateAddressDto,
    currentUser: CompanyUser,
  ) {
    const address = await this.prisma.addressCustomer.findFirst({
      where: {
        id: addressId,
        deletedAt: null,
      },
      include: {
        customer: true,
      },
    });

    if (!address) {
      throw new NotFoundException('Data not found');
    }
    if (address.customer.companyId !== currentUser.companyId) {
      throw new ForbiddenException(
        'customer address id not found in this company',
      );
    }

    return this.prisma.addressCustomer.update({
      where: {
        id: addressId,
      },
      data: {
        phoneNumber: updateAddressDto.phoneNumber,
        address: updateAddressDto.address,
        label: updateAddressDto.label,
        note: updateAddressDto.note,
        updatedAt: new Date(),
      },
    });
  }

  async delete(id: number, currentUser: CompanyUser) {
    const address = await this.prisma.addressCustomer.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        customer: true,
      },
    });

    if (!address) {
      throw new NotFoundException('Data not found');
    }
    if (address.customer.companyId !== currentUser.companyId) {
      throw new ForbiddenException(
        'customer address id not found in this company',
      );
    }

    return this.prisma.addressCustomer.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
