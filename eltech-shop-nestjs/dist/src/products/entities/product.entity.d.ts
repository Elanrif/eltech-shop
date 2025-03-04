import { Category } from 'src/categories/entities/category.entity';
import { BasketProduct } from '../../basket-products/entities/basket-product.entity';
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
    basketProducts: BasketProduct[];
}
