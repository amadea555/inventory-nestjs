import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsBoolean,
} from 'class-validator';
import { LevelStatus } from 'generated/prisma';

export class LoginCompanyUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEnum(LevelStatus)
  level: LevelStatus;
}
