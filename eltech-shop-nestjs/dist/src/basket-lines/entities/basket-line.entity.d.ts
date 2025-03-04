import { Product } from '../../products/entities/product.entity';
import { Basket } from '../../baskets/entities/basket.entity';
import { VariantType } from '../dto/variant.enum';
export declare class BasketLine {
    id: number;
    basket: Basket;
    product: Product;
    count: number;
    amount: number;
    unitPrice: number;
    variant: VariantType;
    createdAt?: Date;
    updatedAt: Date;
}
