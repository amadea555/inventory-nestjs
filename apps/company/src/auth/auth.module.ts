import { Module } from '@nestjs/common';
import { AuthControllerCompanyUser } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthServiceCompanyUser } from './auth.service';
import { PrismaClient } from 'apps/generated/prisma/company';
import { ForgotPasswordModuleUser } from './forgotpassword.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '100m' },
    }),
    ForgotPasswordModuleUser,
  ],

  controllers: [AuthControllerCompanyUser],
  providers: [AuthServiceCompanyUser, PrismaClient],
})
export class AuthModuleCompanyUser {}
