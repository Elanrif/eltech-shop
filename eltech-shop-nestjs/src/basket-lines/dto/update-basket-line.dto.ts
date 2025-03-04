import { PartialType } from '@nestjs/mapped-types';
import { CreateBasketLineDto } from './create-basket-line.dto';
import { IsInt } from 'class-validator';

export class UpdateBasketLineDto extends PartialType(CreateBasketLineDto) {
  @IsInt()
  id: number;
}
