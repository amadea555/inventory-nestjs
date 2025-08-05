import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CrudCompanyController } from './crudcompany.controller';
import { CrudCompanyService } from './crudcompany.service';
import { PrismaClient } from 'apps/generated/prisma/admin';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '100m' },
    }),
  ],

  controllers: [CrudCompanyController],
  providers: [CrudCompanyService, PrismaClient],
})
export class CrudcompanyModule {}
