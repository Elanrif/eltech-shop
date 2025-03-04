import { Product } from '../../products/entities/product.entity';
import { Basket } from '../../baskets/entities/basket.entity';
import { VariantType } from "../dto/variant.enum";
export declare class BasketProduct {
    id: number;
    basket: Basket;
    product: Product;
    count: number;
    totalPrice: number;
    variant: VariantType;
    createdAt?: Date;
    updatedAt: Date;
}
