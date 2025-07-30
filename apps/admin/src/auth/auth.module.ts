import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ForgotPasswordModule } from './forgotpassword.module';
import { PrismaClient } from 'apps/generated/prisma/admin';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '10m' },
    }),
    ForgotPasswordModule,
  ],

  controllers: [AuthController],
  providers: [AuthService, PrismaClient],
})
export class AuthModule {}
