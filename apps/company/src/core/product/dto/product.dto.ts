import { Transform, Type } from 'class-transformer';
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

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  qty: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  categoryId: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  companyId: number;
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  price?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  qty?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  categoryId?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  companyId?: number;
}
