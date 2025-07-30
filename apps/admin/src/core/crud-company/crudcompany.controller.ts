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
import { CrudCompanyService } from './crudcompany.service';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/company.dto';
import { AuthGuard } from '../../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('company')
export class CrudCompanyController {
  constructor(private readonly crudCategoryService: CrudCompanyService) {}

  @Get()
  findAll() {
    return this.crudCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.crudCategoryService.findOne(id);
  }

  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return await this.crudCategoryService.create(createCompanyDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return await this.crudCategoryService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.crudCategoryService.delete(id);
  }
}
