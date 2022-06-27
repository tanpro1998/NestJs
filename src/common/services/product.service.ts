import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.schema';
import { ProductRepository } from '../repositories/product.repository';
import { v4 as uuidv4 } from 'uuid';
import { UpdateProductDto } from '../dtos/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProductById(_id: string): Promise<Product> {
    return this.productRepository.findOne({ _id });
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find({});
  }

  async createProduct(
    title: string,
    price: number,
    image: string,
    color: string[],
  ): Promise<Product> {
    return this.productRepository.create({
      title,
      price,
      image,
      color,
    });
  }

  async updateProduct(
    _id: string,
    productUpdates: UpdateProductDto,
  ): Promise<Product> {
    return this.productRepository.findOneAndUpdate({ _id }, productUpdates);
  }
}
