import { Basket } from 'src/baskets/entities/basket.entity';
import { Category } from 'src/categories/entities/category.entity';
export declare class Product {
    id: number;
    name: string;
    description: string;
    detail: string;
    image?: string;
    is_new: boolean;
    in_stock: boolean;
    brand?: string;
    color: string;
    quantity: number;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    category?: Category;
    baskets: Basket[];
}
