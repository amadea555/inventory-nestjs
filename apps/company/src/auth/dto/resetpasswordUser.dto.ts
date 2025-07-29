import { IsEmail, IsString, Length } from 'class-validator';

export class ResetPasswordCompanyUserDto {
  @IsEmail({}, { message: 'Email Invalid' })
  email: string;

  @IsString()
  @Length(6, 6, { message: 'OTP Invalid' })
  otp: string;

  @IsString()
  @Length(8, 50, { message: 'Password Minimum Eight Characters ' })
  newPassword: string;
}
