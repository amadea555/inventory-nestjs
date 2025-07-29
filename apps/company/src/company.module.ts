import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModuleCompanyUser } from './auth/auth.module';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModuleCompanyUser,
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyUserModule {}
