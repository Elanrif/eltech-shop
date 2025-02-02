import { Product } from 'src/products/entities/product.entity';
export declare class Category {
    id: number;
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    products: Product[];
}
