import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserAdminService {
  constructor(private prisma: PrismaClient) {}

  async findByEmail(email: string) {
    const admin = await this.prisma.admin.findUnique({
      where: { email },
    });
    if (!admin || admin.deletedAt !== null) {
      throw new NotFoundException('admin Not Found');
    }
    return admin;
  }

  async updateOtp(adminId: number, otp: string, expires: Date) {
    return this.prisma.admin.update({
      where: { id: adminId },
      data: { otp, otpExpired: expires },
    });
  }

  async updatePasswordAndClearOtp(userId: number, newPassword: string) {
    return this.prisma.admin.update({
      where: { id: userId },
      data: {
        password: newPassword,
        otp: null,
        otpExpired: null,
        updatedAt: new Date(),
      },
    });
  }
}
