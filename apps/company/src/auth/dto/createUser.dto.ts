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
  email: string;

  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsInt()
  companyId: number;

  @MinLength(8)
  password: string;

  @IsEnum(LevelStatus)
  level: LevelStatus;
}
