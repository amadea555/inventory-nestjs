import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { PrismaClient } from 'apps/generated/prisma/company';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '100m' },
    }),
  ],
  controllers: [OrderController],
  providers: [OrderService, PrismaClient],
})
export class OrderModule {}
