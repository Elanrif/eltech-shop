import { User } from 'src/users/entities/user.entity';
import { BasketLine } from '../../basket-lines/entities/basket-line.entity';
export declare class Basket {
    id: number;
    user: User;
    basketLines: BasketLine[];
    totalCount: number;
    subTotalAmount: number;
    totalAmount: number;
    createdAt?: Date;
    updatedAt: Date;
}
