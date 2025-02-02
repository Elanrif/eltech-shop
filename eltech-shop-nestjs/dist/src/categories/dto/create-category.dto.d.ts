import { Product } from '../../products/entities/product.entity';
export declare class CreateCategoryDto {
    name: string;
    description: string;
    products: Product[];
}
