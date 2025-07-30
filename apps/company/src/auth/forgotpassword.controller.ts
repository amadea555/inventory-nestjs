import { Controller, Post, Body } from '@nestjs/common';
import { ForgotPasswordCompanyUserDto } from './dto/forgotpasswordUser.dto';
import { ResetPasswordCompanyUserDto } from './dto/resetpasswordUser.dto';
import { ForgotPasswordServiceUser } from './forgotpassword.service';

@Controller('forget')
export class ForgotPasswordControllerUser {
  constructor(private forget: ForgotPasswordServiceUser) {}

  @Post('forgot-password')
  forgotPassword(@Body() dto: ForgotPasswordCompanyUserDto) {
    return this.forget.forgotPassword(dto);
  }

  @Post('reset-password')
  resetPassword(@Body() dto: ResetPasswordCompanyUserDto) {
    return this.forget.resetPassword(dto);
  }
}
