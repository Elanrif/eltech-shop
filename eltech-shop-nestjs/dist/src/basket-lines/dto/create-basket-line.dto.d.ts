import { Basket } from '../../baskets/entities/basket.entity';
import { Product } from '../../products/entities/product.entity';
export declare class CreateBasketLineDto {
    basket: Basket;
    product: Product;
    clientQty: number;
    variant: string;
    totalPrice: number;
}
