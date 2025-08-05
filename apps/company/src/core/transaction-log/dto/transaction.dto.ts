import { IsInt, IsOptional, IsString, IsEnum, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { TransactionType } from 'apps/generated/prisma/company'; // sesuaikan dengan path enum-mu

export class CreateTransactionDto {
  @IsInt()
  @Type(() => Number)
  companyId: number;

  @IsInt()
  @Type(() => Number)
  companyUserId: number;

  @IsInt()
  @Type(() => Number)
  productId: number;

  @IsEnum(TransactionType)
  type: TransactionType;

  @IsInt()
  @Type(() => Number)
  quantity: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  orderDetailId?: number;

  @IsDate()
  @Type(() => Date)
  transactionDate: Date;

  @IsString()
  remarks: string;
}
export class UpdateTransactionDto {
  @IsInt()
  @Type(() => Number)
  productId: number;

  @IsEnum(TransactionType)
  type: TransactionType;

  @IsInt()
  @Type(() => Number)
  quantity: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  orderDetailId?: number;

  @IsDate()
  @Type(() => Date)
  transactionDate: Date;

  @IsString()
  remarks: string;
}
