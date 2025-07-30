import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from 'apps/generated/prisma/company';
import { CreateAddressDto, UpdateAddressDto } from './dto/address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return this.prisma.addressCustomer.findMany({
      where: { deletedAt: null },
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

  async create(createAddressDto: CreateAddressDto) {
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

  async update(addressId: number, updateAddressDto: UpdateAddressDto) {
    const address = await this.prisma.addressCustomer.findFirst({
      where: {
        id: addressId,
        deletedAt: null,
      },
    });

    if (!address) {
      throw new NotFoundException('Data not found');
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

  async delete(id: number) {
    const address = await this.prisma.addressCustomer.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!address) {
      throw new NotFoundException('Data not found');
    }

    return this.prisma.addressCustomer.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
