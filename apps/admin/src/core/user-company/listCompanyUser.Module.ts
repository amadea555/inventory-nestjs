import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaClient } from 'apps/generated/prisma/admin';
import { ListCompanyUserController } from './listCompanyUser.Controller';
import { ListUserCompanyService } from './listCompanyUser.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '10m' },
    }),
  ],

  controllers: [ListCompanyUserController],
  providers: [ListUserCompanyService, PrismaClient],
})
export class ListCompanyUserModule {}
