import {
  Controller,
  Post,
  Body,
  BadRequestException,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordDto } from './dto/forgotpassword.dto';
import { ResetPasswordDto } from './dto/resetpassword.dto';
import { ForgotPasswordService } from './forgotpassword.service';

@Controller('forget')
export class ForgotPasswordController {
  constructor(private forget :ForgotPasswordService ) {}

  @Post('forgot-password')
  forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.forget.forgotPassword(dto);
  }

  @Post('reset-password')
  resetPassword(@Body() dto: ResetPasswordDto) {
    return this.forget.resetPassword(dto);
  }
}
