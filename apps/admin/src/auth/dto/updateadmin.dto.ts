import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsBoolean,
  MinLength,
} from 'class-validator';
import { LevelStatus } from 'generated/prisma';

export class UpdateAdminDto {
  name?: string;

  @IsEmail()
  email?: string;

  @IsBoolean()
  status?: boolean;

  @IsEnum(LevelStatus)
  level?: LevelStatus;
}
