import { Module } from '@nestjs/common';
import { AuthControllerCompanyUser } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaClient } from 'generated/prisma';
import { AuthServiceCompanyUser } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '10m' },
    }),
  ],

  controllers: [AuthControllerCompanyUser],
  providers: [AuthServiceCompanyUser, PrismaClient],
})
export class AuthModuleCompanyUser {}
