import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';
import { UserAdminService } from './useradmin.service';
import { ForgotPasswordDto } from './dto/forgotpassword.dto';
import { ResetPasswordDto } from './dto/resetpassword.dto';

@Injectable()
export class ForgotPasswordService {
  constructor(
    private userAdmin: UserAdminService,
  ) {}

  // Kirim OTP ke email
  async sendOtpEmail(email: string, otp: string) {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

      // Baca template HTML
const templatePath = path.join(process.cwd(),'apps', 'admin', 'src', 'templates', 'otp-email.html');
  let html = fs.readFileSync(templatePath, 'utf8');

  // Ganti placeholder {{OTP_CODE}} dengan kode otp
  html = html.replace('{{OTP_CODE}}', otp);

    await transporter.sendMail({
      from: '"Reset Password" <no-reply@example.com>',
      to: email,
      subject: 'Kode OTP Reset Password',
      html: html,
      text: `Kode OTP kamu adalah: ${otp}`,
    });
  }

  // Proses permintaan lupa password
  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.userAdmin.findByEmail(dto.email);

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 menit dari sekarang

    await this.userAdmin.updateOtp(user.id, otp, otpExpires);
    await this.sendOtpEmail(dto.email, otp);

    return { message: 'OTP berhasil dikirim ke email kamu' };
  }

  // Proses reset password
  async resetPassword(dto: ResetPasswordDto) {
    const user = await this.userAdmin.findByEmail(dto.email);

    if (user.otp !== dto.otp) {
      throw new UnauthorizedException('OTP salah');
    }

    if (!user.otpExpired|| new Date() > user.otpExpired) {
      throw new UnauthorizedException('OTP kadaluarsa');
    }

    const hashed = await bcrypt.hash(dto.newPassword, 10);

    await this.userAdmin.updatePasswordAndClearOtp(user.id, hashed);
    return { message: 'Password berhasil direset' };
  }
}
