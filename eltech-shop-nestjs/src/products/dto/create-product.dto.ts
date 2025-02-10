import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Category } from '../../categories/entities/category.entity';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  detail: string;

  @IsOptional()
  imageUrl?: string;

  @IsBoolean()
  @IsOptional()
  is_new: boolean;

  @IsBoolean()
  @IsOptional()
  in_stock: boolean;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsString()
  color: string;

  @IsInt()
  quantity: number;

  @IsNumber()
  price: number;

  @IsOptional()
  category?: Category;
}
