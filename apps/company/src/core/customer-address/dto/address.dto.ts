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

export class CreateAddressDto {
  @IsNotEmpty()
  @IsInt()
  customerId: number

  @IsNotEmpty()
  @MaxLength(20)
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  address: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  label: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  note: string;

}

export class UpdateAddressDto {
  @MaxLength(20)
  phoneNumber?: string;

  @IsString()
  @MaxLength(255)
  address?: string;

  @IsString()
  @MaxLength(100)
  label?: string;

  @IsString()
  @MaxLength(100)
  note?: string;
}
