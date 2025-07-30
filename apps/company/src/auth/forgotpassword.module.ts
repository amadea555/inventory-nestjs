import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ForgotPasswordControllerUser } from './forgotpassword.controller';
import { ForgotPasswordServiceUser } from './forgotpassword.service';
import { PrismaClient } from 'apps/generated/prisma/admin';
import { UserCompanyModule } from './useradmin.module';

@Module({
  imports: [
    UserCompanyModule,
    ConfigModule.forRoot(), // <== tambahkan ini
  ],
  controllers: [ForgotPasswordControllerUser],
  providers: [ForgotPasswordServiceUser, PrismaClient],
})
export class ForgotPasswordModuleUser {}
