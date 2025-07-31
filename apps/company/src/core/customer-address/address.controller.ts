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
import { AddressService } from './address.service';
import { CreateAddressDto, UpdateAddressDto } from './dto/address.dto';

@UseGuards(AuthGuardCompanyUser)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  findAll(@Req() req) {
    return this.addressService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.addressService.findOne(id);
  }

  @Post()
  async create(@Body() createAddressDto: CreateAddressDto, @Req() req) {
    return await this.addressService.create(createAddressDto, req.user);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAddressDto: UpdateAddressDto,
    @Req() req,
  ) {
    return await this.addressService.update(id, updateAddressDto, req.user);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return await this.addressService.delete(id, req.user);
  }
}
