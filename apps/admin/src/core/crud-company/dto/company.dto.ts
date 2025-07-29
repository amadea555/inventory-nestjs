import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  isNotEmpty,
  IsOptional,
  IsString,
  isString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class UpdateCompanyDto {
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsEmail()
  email?: string;

  @IsBoolean()
  status?: boolean;
}
