import { Basket } from 'src/baskets/entities/basket.entity';
import { Role } from 'src/roles/role.enum';
export declare class CreateUserDto {
    email: string;
    password: string;
    firstName: string;
    role: Role;
    lastName: string;
    baskets: Basket[];
}
