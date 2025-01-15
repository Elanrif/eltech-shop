export type Product = {
  name: string;
  description: string;
  detail: string;
  image: string;
  is_new: boolean;
  in_stock: boolean;
  brand?: string;
  color: string;
  category?: Category;
  quantity: number;
  price: number;
};

export interface Category {
  id: number;
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Basket {
  id: string;
  userId?: string;
  items: BasketItem[];
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type BasketItem = {
  product: Product;
  quantity: number;
  totalPrice: number;
};
