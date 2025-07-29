import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsBoolean,
  MinLength,
} from 'class-validator';
import { LevelStatus } from 'generated/prisma';

export class CreateAdminDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;

  @IsEnum(LevelStatus)
  level: LevelStatus;
}
