import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from 'apps/generated/prisma/admin';

@Injectable()
export class ListUserCompanyService {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return this.prisma.companyUser.findMany({
      where: { deletedAt: null },
    });
  }

  async findAllByCompanyId(companyId: number) {
    const companyUser = await this.prisma.companyUser.findMany({
      where: {
        companyId,
        deletedAt: null,
      },
    });

    if (!companyUser) {
      throw new NotFoundException('Data not found');
    }

    return companyUser;
  }
}
