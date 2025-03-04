import { IsEnum, IsInt, IsNumber, IsOptional } from 'class-validator';
import { Basket } from '../../baskets/entities/basket.entity';
import { Product } from '../../products/entities/product.entity';
import { VariantType } from './variant.enum';

export class CreateBasketLineDto {
  @IsOptional()
  basket: Basket;

  @IsOptional()
  product: Product;

  @IsInt()
  clientQty: number;

  @IsEnum(VariantType)
  variant: string;

  @IsNumber()
  totalPrice: number;
}
