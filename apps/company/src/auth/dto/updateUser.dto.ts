import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsBoolean,
  MinLength,
} from 'class-validator';
import { LevelStatus } from 'generated/prisma';

export class UpdateCompanyUserDto {
  name?: string;

  @IsEmail()
  email?: string;

  phoneNumber?: string;

  @IsBoolean()
  status?: boolean;

  @IsEnum(LevelStatus)
  level?: LevelStatus;
  
}
