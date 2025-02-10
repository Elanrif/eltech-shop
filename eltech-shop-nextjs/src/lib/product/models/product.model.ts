import {Category} from "@/lib/category/models/category.model";

export interface Product {
    id?: number;
    name: string;
    description: string;
    detail: string;
    image?: string;
    is_new?: boolean;
    in_stock?: boolean;
    brand?: string;
    color: string;
    quantity: number;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
    category?: Category;
}

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