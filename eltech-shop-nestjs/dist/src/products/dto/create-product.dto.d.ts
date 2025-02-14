import { Category } from '../../categories/entities/category.entity';
export declare class CreateProductDto {
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
    category?: Category;
}
