import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserAdminModule } from './useradmin.module';
import { ForgotPasswordController } from './forgotpassword.controller';
import { ForgotPasswordService } from './forgotpassword.service';
import { PrismaClient } from 'apps/generated/prisma/admin';

@Module({
  imports: [
    UserAdminModule,
    ConfigModule.forRoot(), // <== tambahkan ini
  ],
  controllers: [ForgotPasswordController],
  providers: [ForgotPasswordService, PrismaClient],
})
export class ForgotPasswordModule {}
