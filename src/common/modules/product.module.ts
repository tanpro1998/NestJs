import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Product, ProductSchema } from '../models/product.schema';
import { ProductsController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import { ProductRepository } from '../repositories/product.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
