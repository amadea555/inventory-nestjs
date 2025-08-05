import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto, UpdateOrderDto } from './dto/order.dto';
import { AuthGuardCompanyUser } from '../../auth/auth.guard';

@UseGuards(AuthGuardCompanyUser)
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Get()
  findAll(@Req() req) {
    return this.orderService.findAll(req.user);
  }

  // Get one category by ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.orderService.findOne(id, req.user);
  }

  @Post()
  async createOrder(@Body() dto: CreateOrderDto, @Req() req) {
    return this.orderService.createOrder(dto, req.user);
  }

  @Put(':id')
  async updateOrder(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateOrderDto,
    @Req() req,
  ) {
    return this.orderService.updateOrder(id, dto, req.user);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return await this.orderService.delete(id, req.user);
  }
}
