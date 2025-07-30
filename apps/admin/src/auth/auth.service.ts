import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { CreateAdminDto } from './dto/createadmin.dto';
import { UpdateAdminDto } from './dto/updateadmin.dto';
import { Admin, PrismaClient } from 'apps/generated/prisma/admin';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaClient,
    private jwtService: JwtService,
  ) {}

  async findAllAdmin() {
    return this.prisma.admin.findMany({
      where: {
        deletedAt: null,
        status: true,
        level: 'NORMAL',
      },
    });
  }

  async createAdmin(dto: CreateAdminDto, currentAdmin: Admin) {
    if (currentAdmin.level !== 'SUPER') {
      throw new ForbiddenException('Only SUPER Admin can create new admin');
    }

    const existing = await this.prisma.admin.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new BadRequestException('Email Already Used');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const newAdmin = await this.prisma.admin.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: hashedPassword,
        level: dto.level,
        createdAt: new Date(),
      },
      select: {
        id: true,
        name: true,
        email: true,
        level: true,
        createdAt: true,
      },
    });

    return newAdmin;
  }

  async validateLogin(loginDto: LoginDto) {
    const { email, password, level } = loginDto;

    const admin = await this.prisma.admin.findFirst({
      where: {
        email,
        level,
        deletedAt: null,
      },
    });

    if (!admin) {
      throw new UnauthorizedException('Email atau level salah.');
    }

    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Password salah.');
    }

    const payload = {
      sub: admin.id,
      email: admin.email,
      level: admin.level,
    };

    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '10m',
    });

    return {
      access_token: token,
      expired_in: 600, // dalam detik
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        level: admin.level,
      },
    };
  }

  async updateAdminBySuperAdmin(
    dto: UpdateAdminDto,
    currentAdmin: Admin,
    adminId: number,
  ) {
    if (currentAdmin.level !== 'SUPER') {
      throw new ForbiddenException('Only SUPER Admin can update admin');
    }

    const existing = await this.prisma.admin.findFirst({
      where: { id: adminId, deletedAt: null },
    });

    if (!existing) {
      throw new BadRequestException('Admin Not Found');
    }

    const updatedData = await this.prisma.admin.update({
      where: { id: adminId },
      data: {
        name: dto.name,
        email: dto.email,
        level: dto.level,
        status: dto.status,
        updatedAt: new Date(),
      },
    });
    return updatedData;
  }

  async updateAdmimByAdminId(
    dto: UpdateAdminDto,
    currentAdmin: Admin,
    adminId: number,
  ) {
    if (currentAdmin.id !== adminId) {
      throw new ForbiddenException('Use Your Admin Id');
    }

    const existing = await this.prisma.admin.findFirst({
      where: {
        id: adminId,
        deletedAt: null,
        status: true,
      },
    });

    if (!existing) {
      throw new BadRequestException('Admin Not Found');
    }

    const updatedData = await this.prisma.admin.update({
      where: { id: adminId },
      data: {
        name: dto.name,
        email: dto.email,
        updatedAt: new Date(),
      },
    });
    return updatedData;
  }

  async deleteAdmin(currentAdmin: Admin, adminId: number) {
    if (currentAdmin.level !== 'SUPER') {
      throw new ForbiddenException('Only SUPER Admin can delete admin');
    }

    const existing = await this.prisma.admin.findFirst({
      where: { id: adminId, deletedAt: null },
    });

    if (!existing) {
      throw new BadRequestException('Admin Not Found');
    }

    await this.prisma.admin.update({
      where: { id: adminId },
      data: { deletedAt: new Date() },
    });

    return { message: 'Admin deleted successfully' };
  }
}
