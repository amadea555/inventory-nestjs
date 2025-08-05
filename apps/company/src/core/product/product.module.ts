import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaClient } from 'apps/generated/prisma/company';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '100m' },
    }),
  ],

  controllers: [ProductController],
  providers: [ProductService, PrismaClient],
})
export class ProductModule {}
