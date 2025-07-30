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
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsEmail()
  email?: string;

  @MaxLength(20)
  numberPhone?: string;

  @IsInt()
  companyId?: number;

  @IsBoolean()
  status?: boolean;
}
