import { Basket } from 'src/baskets/entities/basket.entity';
import { Role } from 'src/roles/role.enum';
export declare class User {
    id: number;
    email: string;
    role: Role;
    password: string;
    firstName: string;
    lastName: string;
    baskets: Basket[];
}
