import {
  Controller,
  Get,
  Post,
  Body,  
} from '@nestjs/common';


import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Post()
  create(@Body() input: CreateProductsDto) {
    return this.service.create(input);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
