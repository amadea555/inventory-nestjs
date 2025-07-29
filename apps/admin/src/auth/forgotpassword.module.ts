import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaClient } from '@prisma/client';
import { UserAdminModule } from './useradmin.module';
import { ForgotPasswordController } from './forgotpassword.controller';
import { ForgotPasswordService } from './forgotpassword.service';

@Module({
  imports: [
    UserAdminModule,
    ConfigModule.forRoot(), // <== tambahkan ini
  ],
  controllers: [ForgotPasswordController],
  providers: [ForgotPasswordService, PrismaClient],
})
export class ForgotPasswordModule {}