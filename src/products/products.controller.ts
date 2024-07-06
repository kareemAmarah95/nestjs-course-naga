import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
  // Req,
} from '@nestjs/common';
// import { Request } from 'express';
import { ProductsService } from './products.service';
import { Product } from 'src/interfaces/products';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get() // ** /products
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id') // products/:id
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getSingleProduct(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  addProduct(@Body() createProductDto: CreateProductDto): Product {
    return this.productsService.createNew(createProductDto);
  }

  @Delete(':id') // ** /products/:id
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteById(id);
  }

  @Put(':id') // ** /products/:id
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Product | string {
    return this.productsService.updateProduct(+id, updateProductDto);
  }
}
