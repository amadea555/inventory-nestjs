import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { PrismaClient } from 'apps/generated/prisma/company';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '10m' },
    }),
  ],

  controllers: [CustomerController],
  providers: [CustomerService, PrismaClient],
})
export class CustomerModule {}
