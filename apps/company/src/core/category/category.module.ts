import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaClient } from 'apps/generated/prisma/company';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '100m' },
    }),
  ],

  controllers: [CategoryController],
  providers: [CategoryService, PrismaClient],
})
export class CategoryModule {}
