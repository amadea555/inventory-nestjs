import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModuleCompanyUser } from './auth/auth.module';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CustomerModule } from './core/customer/customer.module';
import { AddressModule } from './core/customer-address/address.module';
import { CategoryModule } from './core/category/category.module';
import { ProductModule } from './core/product/product.module';
import { OrderModule } from './core/order/order.module';
import { TransactionModule } from './core/transaction-log/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModuleCompanyUser,
    CustomerModule,
    AddressModule,
    CategoryModule,
    ProductModule,
    OrderModule,
    TransactionModule,
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyUserModule {}
