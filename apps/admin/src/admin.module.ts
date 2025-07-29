import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { crudcompanyModule } from './core/crud-company/crudcompany.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    crudcompanyModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
