import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { ForgotPasswordDto } from './dto/forgotpassword.dto';
import { ResetPasswordDto } from './dto/resetpassword.dto';
import { ForgotPasswordService } from './forgotpassword.service';

@Controller('forget')
export class ForgotPasswordController {
  constructor(private forget: ForgotPasswordService) {}

  @Post('forgot-password')
  forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.forget.forgotPassword(dto);
  }

  @Post('reset-password')
  resetPassword(@Body() dto: ResetPasswordDto) {
    return this.forget.resetPassword(dto);
  }
}
