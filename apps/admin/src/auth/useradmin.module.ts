import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserAdminService } from './useradmin.service';

@Module({
  providers: [UserAdminService, PrismaClient],
  exports: [UserAdminService], //WAJIB agar bisa diakses oleh AuthModule
})
export class UserAdminModule {}
