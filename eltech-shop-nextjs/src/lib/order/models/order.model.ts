import {Category} from "@/lib/basket/models/basket.model";

export type Order = {
  name: string;
  description: string;
  detail: string;
  image?: string;
  imageUrl?: string;
  status: "pending" | "processing" |  "failed" | "completed";
  is_new: boolean;
  in_stock: boolean;
  brand?: string;
  color: string;
  category?: Category;
  quantity: number;
  price: number;
  action?: string;
};