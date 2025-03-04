import { User } from 'src/users/entities/user.entity';
import { BasketProduct } from '../../basket-products/entities/basket-product.entity';
export declare class Basket {
    id: number;
    user: User;
    basketProducts: BasketProduct[];
    quantity: number;
    totalPrice: number;
    createdAt?: Date;
    updatedAt: Date;
}
