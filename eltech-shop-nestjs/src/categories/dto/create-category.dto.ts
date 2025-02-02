import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Product } from '../../products/entities/product.entity';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsArray()
  @IsOptional()
  products: Product[];
}
