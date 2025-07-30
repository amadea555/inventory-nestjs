import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ListUserCompanyService } from './listCompanyUser.service';
import { AuthGuardCompanyUser } from 'apps/company/src/auth/auth.guard';

@UseGuards(AuthGuardCompanyUser)
@Controller('listCompanyUser')
export class ListCompanyUserController {
  constructor(
    private readonly listCompanyUserService: ListUserCompanyService,
  ) {}

  @Get()
  findAll() {
    return this.listCompanyUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.listCompanyUserService.findAllByCompanyId(id);
  }
}
