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
} from '@nestjs/common';
import { AuthServiceCompanyUser } from './auth.service';
import { CreateCompanyUser } from './dto/createUser.dto';
import { LoginCompanyUserDto } from './dto/loginUser.dto';
import { UpdateCompanyUserDto } from './dto/updateUser.dto';
import { AuthGuardCompanyUser } from './auth.guard';

@Controller('auth')
export class AuthControllerCompanyUser {
  constructor(private readonly authService: AuthServiceCompanyUser) {}

  @UseGuards(AuthGuardCompanyUser)
  @Post('create')
  async createCompanyUser(@Body() dto: CreateCompanyUser, @Req() req) {
    return this.authService.createCompanyUser(dto, req.user);
  }

  @Post('login')
  async login(@Body() loginDto: LoginCompanyUserDto) {
    return this.authService.validateLogin(loginDto);
  }

  @UseGuards(AuthGuardCompanyUser)
  @Put('update/:companyUserId')
  updateCompanyUserBySuperUser(
    @Param('companyUserId', ParseIntPipe) id: number,
    @Body() dto: UpdateCompanyUserDto,
    @Req() req,
  ) {
    return this.authService.updateCompanyUserBySuperCompanyUser(
      dto,
      req.user,
      id,
    );
  }

  @UseGuards(AuthGuardCompanyUser)
  @Put('update/profile/:companyUserId')
  updateCompanyUserById(
    @Param('companyUserId', ParseIntPipe) id: number,
    @Body() dto: UpdateCompanyUserDto,
    @Req() req,
  ) {
    return this.authService.updateAdmimByCompanyUserId(dto, req.user, id);
  }

  @UseGuards(AuthGuardCompanyUser)
  @Delete('delete/:companyUserId')
  delete(
    @Param('companyUserId', ParseIntPipe) companyUserId: number,
    @Req() req,
  ) {
    const currentCompanyUser = req.user;
    return this.authService.deleteCompanyUser(
      currentCompanyUser,
      companyUserId,
    );
  }
}
