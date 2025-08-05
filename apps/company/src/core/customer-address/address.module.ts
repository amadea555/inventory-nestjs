import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaClient } from 'apps/generated/prisma/company';
import { AddressController } from './address.controller';
import { CustomerService } from '../customer/customer.service';
import { AddressService } from './address.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '100m' },
    }),
  ],

  controllers: [AddressController],
  providers: [AddressService, PrismaClient],
})
export class AddressModule {}
