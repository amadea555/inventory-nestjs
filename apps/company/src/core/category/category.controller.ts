import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { AuthGuardCompanyUser } from '../../auth/auth.guard';

@UseGuards(AuthGuardCompanyUser)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Get all categories
  @Get()
  findAll(@Req() req) {
    return this.categoryService.findAll(req.user);
  }

  // Get one category by ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.categoryService.findOne(id, req.user);
  }

  // Create new category
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto, @Req() req) {
    return await this.categoryService.create(createCategoryDto, req.user);
  }

  // Update category by ID
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Req() req,
  ) {
    return await this.categoryService.update(id, updateCategoryDto, req.user);
  }

  // Soft delete category
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return await this.categoryService.delete(id, req.user);
  }
}
