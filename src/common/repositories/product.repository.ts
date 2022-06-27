import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDocument, Product } from '../models/product.schema';
import { FilterQuery, Model } from 'mongoose';
@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findOne(productFilterQuery: FilterQuery<Product>): Promise<Product> {
    return this.productModel.findOne(productFilterQuery);
  }

  async find(productFilterQuery: FilterQuery<Product>): Promise<Product[]> {
    return this.productModel.find(productFilterQuery);
  }

  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return await newProduct.save();
  }

  async findOneAndUpdate(
    productFilterQuery: FilterQuery<Product>,
    product: Partial<Product>,
  ): Promise<Product> {
    return this.productModel.findOneAndUpdate(productFilterQuery, product, {
      new: true,
    });
  }
}
