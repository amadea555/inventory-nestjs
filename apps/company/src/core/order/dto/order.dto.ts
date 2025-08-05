import { PaymentStatus } from 'apps/generated/prisma/company';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Min,
  ValidateNested,
} from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsInt()
  productId: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  qty: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  @IsInt()
  customerId: number;

  @IsNotEmpty()
  @IsInt()
  companyId: number;

  @IsNotEmpty()
  @IsEnum(PaymentStatus)
  status: PaymentStatus;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateItemDto)
  products: CreateItemDto[];
}

export class UpdateItemDto {
  @IsInt()
  productId: number;

  @IsInt()
  @Min(1)
  qty: number;
}

export class UpdateOrderDto {
  @IsOptional()
  @IsInt()
  customerId: number;

  @IsOptional()
  @IsEnum(PaymentStatus)
  status: PaymentStatus;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateItemDto)
  products: UpdateItemDto[];
}
