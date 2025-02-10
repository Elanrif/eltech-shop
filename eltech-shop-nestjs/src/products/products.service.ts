import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../categories/entities/category.entity';
import { UploadImgProductDto } from './dto/upload-img-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(dto: CreateProductDto) {
    const currentDate = new Date();

    const category = await this.categoryRepository.findOne({
      where: { id: dto.category?.id },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const product: Product = this.productRepository.create({
      ...dto,
      category, // we directly associate category with entity product
      createdAt: currentDate,
      updatedAt: currentDate,
    });

    return await this.productRepository.save(product);
  }

  async update(id: number, dto: UpdateProductDto) {
    const product = await this.findOne(id);
    if (!product) {
      return new Error(`Product with id ${id} not found`);
    }
    const category = await this.categoryRepository.findOne({
      where: { id: dto.category?.id },
    });

    if (!category) {
      throw new NotFoundException('Category was not found in database');
    }

    const currentDate = new Date();
    const updateDto = { ...dto, category, updatedAt: currentDate };
    await this.productRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async findAll() {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    return this.productRepository.findOne({
      where: { id },
    });
  }

  async remove(id: number) {
    return this.productRepository.delete(id);
  }

  async uploadProductImage(dto: UploadImgProductDto) {
    const product = await this.findOne(dto.id);
    if (!product) {
      return new Error(`Product with id ${dto.id} not found`);
    }

    const currentDate = new Date();
    const updateDtoImg = {
      ...product,
      imageUrl: dto.imageUrl,
      updatedAt: currentDate,
    };
    console.log('imageUrl', updateDtoImg);
    await this.productRepository.update(product.id, updateDtoImg);
    return this.findOne(product.id);
  }
}
