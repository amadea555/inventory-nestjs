import { NestFactory } from '@nestjs/core';
import { CompanyUserModule } from './company.module';

async function bootstrap() {
  const app = await NestFactory.create(CompanyUserModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
