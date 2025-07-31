import { NestFactory } from '@nestjs/core';
import { CompanyUserModule } from './company.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app =
    await NestFactory.create<NestExpressApplication>(CompanyUserModule); // <-- deklarasikan tipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Untuk mengakses gambar di URL
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public/',
  });

  await app.listen(process.env.port ?? 3000);
}
bootstrap();
