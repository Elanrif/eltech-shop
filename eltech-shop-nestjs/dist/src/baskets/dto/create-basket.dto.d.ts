import { User } from '../../users/entities/user.entity';
import { BasketLine } from '../../basket-lines/entities/basket-line.entity';
export declare class CreateBasketDto {
    user: User;
    basketLines: BasketLine[];
    amount: number;
    count: number;
}
