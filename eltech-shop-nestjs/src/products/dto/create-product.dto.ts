import { IsBoolean, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { Category } from '../../categories/entities/category.entity';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  detail: string;

  @IsOptional()
  image?: string;

  @IsBoolean()
  is_new: boolean;

  @IsBoolean()
  in_stock: boolean;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsString()
  color: string;

  @IsInt()
  @Min(0)
  quantity: number;

  @Min(0)
  price: number;

  @IsOptional()
  category?: Category;
}
