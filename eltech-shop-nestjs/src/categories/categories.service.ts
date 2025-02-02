import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(dto: CreateCategoryDto) {
    const currentDate = new Date();
    const category = this.categoryRepository.create({
      ...dto,
      createdAt: currentDate,
      updatedAt: currentDate,
    });
    return this.categoryRepository.save(category);
  }

  async findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    const category = this.categoryRepository.findOne({ where: { id } });
    if (!category) return null;

    return await category;
  }

  async update(id: number, dto: UpdateCategoryDto) {
    const category = await this.findOne(id);
    if (!category) return new Error(`Category with id ${id} not found`);
    const currentDate = new Date();
    const updateDto = {
      ...dto,
      createdAt: currentDate,
      updatedAt: currentDate,
    };
    await this.categoryRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) return null;
    return this.categoryRepository.delete(category);
  }
}
