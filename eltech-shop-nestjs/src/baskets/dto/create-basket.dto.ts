import { User } from '../../users/entities/user.entity';
import { BasketLine } from '../../basket-lines/entities/basket-line.entity';
import { IsInt, IsNumber } from 'class-validator';

export class CreateBasketDto {
  user: User;

  basketLines: BasketLine[];

  @IsInt()
  amount: number;

  @IsNumber()
  count: number;
}
