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
import { AuthGuardCompanyUser } from '../../auth/auth.guard';
import { CustomerService } from './customer.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';

@UseGuards(AuthGuardCompanyUser)
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll(@Req() req) {
    return this.customerService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.customerService.findOne(id, req.user);
  }

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto, @Req() req) {
    return await this.customerService.create(createCustomerDto, req.user);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCustomerDto: UpdateCustomerDto,
    @Req() req,
  ) {
    return await this.customerService.update(id, updateCustomerDto, req.user);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return await this.customerService.delete(id, req.user);
  }
}
