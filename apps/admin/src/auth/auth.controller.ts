import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Put,
  Param,
  ParseIntPipe,
  Delete,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateAdminDto } from './dto/createadmin.dto';
import { AuthGuard } from './auth.guard';
import { UpdateAdminDto } from './dto/updateadmin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Get('list')
  findAll() {
    return this.authService.findAllAdmin();
  }

  @UseGuards(AuthGuard)
  @Post('create')
  async createAdmin(@Body() dto: CreateAdminDto, @Req() req) {
    return this.authService.createAdmin(dto, req.admin);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.validateLogin(loginDto);
  }

  @UseGuards(AuthGuard)
  @Put('update/:adminId')
  updateAdminBySuperAdmin(
    @Param('adminId', ParseIntPipe) id: number,
    @Body() dto: UpdateAdminDto,
    @Req() req,
  ) {
    return this.authService.updateAdminBySuperAdmin(dto, req.admin, id);
  }

  @UseGuards(AuthGuard)
  @Put('update/profile/:adminId')
  updateAdminById(
    @Param('adminId', ParseIntPipe) id: number,
    @Body() dto: UpdateAdminDto,
    @Req() req,
  ) {
    return this.authService.updateAdmimByAdminId(dto, req.admin, id);
  }

  @UseGuards(AuthGuard)
  @Delete('delete/:adminId')
  delete(@Param('adminId', ParseIntPipe) adminId: number, @Req() req) {
    const currentAdmin = req.admin;
    return this.authService.deleteAdmin(currentAdmin, adminId);
  }
}
