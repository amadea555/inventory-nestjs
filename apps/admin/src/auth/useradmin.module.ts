import { Module } from '@nestjs/common';
import { UserAdminService } from './useradmin.service';
import { PrismaClient } from 'apps/generated/prisma/admin';

@Module({
  providers: [UserAdminService, PrismaClient],
  exports: [UserAdminService], //WAJIB agar bisa diakses oleh AuthModule
})
export class UserAdminModule {}
