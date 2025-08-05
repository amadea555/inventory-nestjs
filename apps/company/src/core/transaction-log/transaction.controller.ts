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
import { TransactionService } from './transaction.service';
import {
  CreateTransactionDto,
  UpdateTransactionDto,
} from './dto/transaction.dto';

@UseGuards(AuthGuardCompanyUser)
@Controller('transactionLog')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  // Get all transactions
  @Get()
  findAll(@Req() req) {
    return this.transactionService.findAll(req.user);
  }

  // // Get one transaction by ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.transactionService.findOne(id, req.user);
  }

  // Create new transaction
  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto, @Req() req) {
    return await this.transactionService.create(createTransactionDto, req.user);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTransactionDto: UpdateTransactionDto,
    @Req() req,
  ) {
    return await this.transactionService.update(
      id,
      updateTransactionDto,
      req.user,
    );
  }

  // // Soft delete transaction
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return await this.transactionService.delete(id, req.user);
  }
}
