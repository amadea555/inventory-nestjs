import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateCompanyUser } from './dto/createUser.dto';
import { UpdateCompanyUserDto } from './dto/updateUser.dto';
import { LoginCompanyUserDto } from './dto/loginUser.dto';
import { CompanyUser, PrismaClient } from 'apps/generated/prisma/company';

@Injectable()
export class AuthServiceCompanyUser {
  constructor(
    private prisma: PrismaClient,
    private jwtService: JwtService,
  ) {}

  async createCompanyUser(dto: CreateCompanyUser, currentUser: CompanyUser) {
    if (currentUser.level !== 'SUPER') {
      throw new ForbiddenException('Only SUPER user can create new users');
    }

    if (dto.companyId !== currentUser.companyId) {
      throw new BadRequestException('You can only assign users to your own company')
    }

    const existing = await this.prisma.companyUser.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new BadRequestException('Email Already Used');
    }

    const company = await this.prisma.company.findFirst({
      where: {
        id: dto.companyId,
        deletedAt: null,
      },
    });
    if (!company) {
      throw new BadRequestException('Company not found');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const newCompanyUser = await this.prisma.companyUser.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: hashedPassword,
        phoneNumber: dto.phoneNumber,
        companyId: dto.companyId,
        level: dto.level,
        createdAt: new Date(),
      },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        companyId: true,
        level: true,
        createdAt: true,
      },
    });

    return newCompanyUser;
  }

  async validateLogin(loginDto: LoginCompanyUserDto) {
    const { email, password, level } = loginDto;

    const companyUser = await this.prisma.companyUser.findFirst({
      where: {
        email,
        level,
        deletedAt: null,
      },
    });

    if (!companyUser) {
      throw new UnauthorizedException('Email atau level salah.');
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      companyUser.password,
    );
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Password salah.');
    }

    const payload = {
      sub: companyUser.id,
      email: companyUser.email,
      level: companyUser.level,
      companyId: companyUser.companyId,
    };

    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '10m',
    });

    return {
      access_token: token,
      expired_in: 600, // dalam detik
      companyUser: {
        id: companyUser.id,
        name: companyUser.name,
        email: companyUser.email,
        level: companyUser.level,
        companyId: companyUser.companyId,
      },
    };
  }

  async updateCompanyUserBySuperCompanyUser(
    dto: UpdateCompanyUserDto,
    currentCompanyUser: CompanyUser,
    companyUserId: number,
  ) {
    if (currentCompanyUser.level !== 'SUPER') {
      throw new ForbiddenException('Only SUPER User can update user');
    }

    const existing = await this.prisma.companyUser.findFirst({
      where: { id: companyUserId, deletedAt: null },
    });

    if (!existing) {
      throw new BadRequestException('User Not Found');
    }

    const updatedData = await this.prisma.companyUser.update({
      where: { id: companyUserId },
      data: {
        name: dto.name,
        email: dto.email,
        phoneNumber: dto.phoneNumber,
        level: dto.level,
        status: dto.status,
        updatedAt: new Date(),
      },
    });
    return updatedData;
  }

  async updateAdmimByCompanyUserId(
    dto: UpdateCompanyUserDto,
    currentCompanyUser: CompanyUser,
    CompanyUserId: number,
  ) {
    if (currentCompanyUser.id !== CompanyUserId) {
      throw new ForbiddenException('Use Your User Id');
    }

    const existing = await this.prisma.companyUser.findFirst({
      where: {
        id: CompanyUserId,
        deletedAt: null,
        status: true,
      },
    });

    if (!existing) {
      throw new BadRequestException('CompanyUser Not Found');
    }

    const updatedData = await this.prisma.companyUser.update({
      where: { id: CompanyUserId },
      data: {
        name: dto.name,
        email: dto.email,
        phoneNumber: dto.phoneNumber,
        updatedAt: new Date(),
      },
    });
    return updatedData;
  }

  async deleteCompanyUser(
    currentCompanyUser: CompanyUser,
    companyUserId: number,
  ) {
    if (currentCompanyUser.level !== 'SUPER') {
      throw new ForbiddenException('Only SUPER User can delete user');
    }

    const existing = await this.prisma.companyUser.findFirst({
      where: { id: companyUserId, deletedAt: null },
    });

    if (!existing) {
      throw new BadRequestException('User Not Found');
    }

    await this.prisma.companyUser.update({
      where: { id: companyUserId },
      data: { deletedAt: new Date() },
    });

    return { message: 'User deleted successfully' };
  }
}
