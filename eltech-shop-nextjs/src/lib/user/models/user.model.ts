import { Basket } from "@/lib/basket/models/basket.model";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  address?: string;
  isAdmin?: boolean;
  basket?: Basket;
}
