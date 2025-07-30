import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsBoolean,
  MinLength,
  IsInt,
} from 'class-validator';
import { LevelStatus } from 'generated/prisma';

export class CreateCompanyUser {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  @IsInt()
  companyId: number;

  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @IsEnum(LevelStatus)
  @IsNotEmpty()
  level: LevelStatus;
}
