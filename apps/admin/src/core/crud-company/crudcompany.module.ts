import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaClient } from 'generated/prisma';
import { CrudCompanyController } from './crudcompany.controller';
import { CrudCompanyService } from './crudcompany.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '10m' },
    }),
  ],

  controllers: [CrudCompanyController],
  providers: [CrudCompanyService, PrismaClient],
})
export class crudcompanyModule {}
