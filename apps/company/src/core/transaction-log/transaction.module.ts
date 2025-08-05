import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaClient } from 'apps/generated/prisma/company';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '100m' },
    }),
  ],
  controllers: [TransactionController],
  providers: [TransactionService, PrismaClient],
})
export class TransactionModule {}
