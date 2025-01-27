import { Basket } from "src/baskets/entities/basket.entity";
export declare class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    baskets: Basket[];
}
