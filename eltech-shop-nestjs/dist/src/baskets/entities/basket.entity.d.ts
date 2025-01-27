import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
export declare class Basket {
    id: string;
    userId?: string;
    products: Product[];
    user: User;
    quantity: number;
    totalPrice: number;
    createdAt?: Date;
    updatedAt: Date;
}
