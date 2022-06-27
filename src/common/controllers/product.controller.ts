import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';

import { Product } from '../models/product.schema';
import { ProductService } from '../services/product.service';
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get(':productId')
  async getProduct(@Param('productId') productId: string): Promise<Product> {
    return this.productService.getProductById(productId);
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Post()
  async createProduct(@Body() CreateProductDto): Promise<Product> {
    return this.productService.createProduct(
      CreateProductDto.title,
      CreateProductDto.price,
      CreateProductDto.image,
      CreateProductDto.color,
    );
  }

  @Patch(':productId')
  async updateProduct(
    @Param('productId') productId: string,
    @Body() UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProduct(productId, UpdateProductDto);
  }
}
