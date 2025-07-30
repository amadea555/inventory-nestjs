import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModuleCompanyUser } from './auth/auth.module';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CustomerModule } from './core/customer/customer.module';
import { AddressModule } from './core/customer-address/address.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModuleCompanyUser,
    CustomerModule,
    AddressModule,
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyUserModule {}
