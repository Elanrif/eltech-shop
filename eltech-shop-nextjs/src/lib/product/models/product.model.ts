import {Product} from "@/lib/category/models/category.model";

export interface Product {
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
    category?: Product;
}