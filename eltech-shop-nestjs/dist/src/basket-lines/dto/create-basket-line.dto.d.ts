import { Basket } from '../../baskets/entities/basket.entity';
import { Product } from '../../products/entities/product.entity';
export declare class CreateBasketLineDto {
    basket: Basket;
    product: Product;
    count: number;
    variant: string;
    amount: number;
}
