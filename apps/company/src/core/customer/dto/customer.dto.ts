import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  IsInt,
  IsNotEmpty,
  isNotEmpty,
  IsOptional,
  IsString,
  isString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(20)
  phoneNumber: string;

  @IsNotEmpty()
  @IsInt()
  companyId: number;
}

export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @MaxLength(20)
  phoneNumber?: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
