import {Category} from "@/lib/category/models/category.model";

export interface Product {
    id?: number;
    name: string;
    description: string;
    detail: string;
    imageUrl?: string;
    is_new?: boolean;
    in_stock?: boolean;
    brand?: string;
    color: string;
    variant?: VariantType;
    quantity: number;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
    category?: Category;
}

export interface ProductUploadImage {
    id: number;
    imageUrl: string;
}

export type VariantType = {
  variant: "xs" | "s" | "m" | "l" | "xl";
};

type ColorsProps = {
    name: "blanc" | "noire" | "orange" | "vert";
    color: string;
}

export const productColors : ColorsProps[] = [
    {
        name: 'blanc',
        color: 'bg-slate-300',
    },
    {
        name: 'noire',
        color: 'bg-black',
    },
    {
        name: 'orange',
        color: 'bg-orange-500',
    },
    {
        name: 'vert',
        color: 'bg-green-500',
    },
]