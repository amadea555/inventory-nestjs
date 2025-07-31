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
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AuthGuardCompanyUser } from '../../auth/auth.guard';

@UseGuards(AuthGuardCompanyUser)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(@Req() req) {
    return this.productService.findAll(req.user);
  }

  // Get one category by ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.productService.findOne(id, req.user);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public/uploads/products',
        filename: (req, file, cb) => {
          const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `product-${unique}${ext}`);
        },
      }),
    }),
  )
  async create(
    @UploadedFile() image: Express.Multer.File,
    @Body() createProductDto: CreateProductDto,
    @Req() req,
  ) {
    return await this.productService.create(
      createProductDto,
      image?.filename,
      req.user,
    );
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public/uploads/products',
        filename: (req, file, cb) => {
          const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `product-${unique}${ext}`);
        },
      }),
    }),
  )
  async update(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() image: Express.Multer.File,
    @Body() updateProductDto: UpdateProductDto,
    @Req() req,
  ) {
    return await this.productService.update(
      id,
      updateProductDto,
      image?.filename,
      req.user,
    );
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return await this.productService.delete(id, req.user);
  }
}
