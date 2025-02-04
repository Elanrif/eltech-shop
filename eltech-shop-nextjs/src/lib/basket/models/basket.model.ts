export interface Category {
  id: number;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Basket {
  id: string;
  userId?: string;
  totalPrice: number;
  createdAt?: string;
  updatedAt?: string;
}

