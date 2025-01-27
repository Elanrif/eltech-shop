import { Basket } from "src/baskets/entities/basket.entity";
export declare class CreateUserDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    baskets: Basket[];
}
