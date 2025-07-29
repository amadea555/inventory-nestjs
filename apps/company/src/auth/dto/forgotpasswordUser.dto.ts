import { IsEmail } from 'class-validator';

export class ForgotPasswordCompanyUserDto {
  @IsEmail({}, { message: 'Email tidak valid' })
  email: string;
}
