import { Category } from 'src/categories/entities/category.entity';
import { BasketLine } from '../../basket-lines/entities/basket-line.entity';
export declare class Product {
    id: number;
    name: string;
    description: string;
    detail: string;
    imageUrl?: string;
    is_new: boolean;
    in_stock: boolean;
    brand?: string;
    color: string;
    quantity: number;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    category: Category;
    basketLines: BasketLine[];
}
