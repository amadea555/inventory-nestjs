import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  IsInt,
  IsNotEmpty,
  isNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  isString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsInt()
  companyId: number;
}

export class UpdateCategoryDto {
  @IsString()
  @MaxLength(100)
  name: string;
}
