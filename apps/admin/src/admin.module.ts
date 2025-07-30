import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CrudcompanyModule } from './core/crud-company/crudcompany.module';
import { ListCompanyUserModule } from './core/user-company/listCompanyUser.Module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    CrudcompanyModule,
    ListCompanyUserModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
