import { Module } from '@nestjs/common';
import { PrismaClient } from 'apps/generated/prisma/company';
import { UserCompanyService } from './userCompany.service';

@Module({
  providers: [UserCompanyService, PrismaClient],
  exports: [UserCompanyService], //WAJIB agar bisa diakses oleh AuthModule
})
export class UserCompanyModule {}
