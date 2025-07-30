import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from 'apps/generated/prisma/company';

@Injectable()
export class UserCompanyService {
  constructor(private prisma: PrismaClient) {}

  async findByEmail(email: string) {
    const companyUser = await this.prisma.companyUser.findUnique({
      where: { email },
    });
    if (!companyUser || companyUser.deletedAt !== null) {
      throw new NotFoundException('companyUser Not Found');
    }
    return companyUser;
  }

  async updateOtp(companyUserId: number, otp: string, expired: Date) {
    return this.prisma.companyUser.update({
      where: { id: companyUserId },
      data: { otp, otpExpired: expired },
    });
  }

  async updatePasswordAndClearOtp(companyUserId: number, newPassword: string) {
    return this.prisma.companyUser.update({
      where: { id: companyUserId },
      data: {
        password: newPassword,
        otp: null,
        otpExpired: null,
        updatedAt: new Date(),
      },
    });
  }
}
