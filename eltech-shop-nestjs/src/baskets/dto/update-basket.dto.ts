import { PartialType } from '@nestjs/mapped-types';
import { CreateBasketDto } from './create-basket.dto';
import { IsInt } from 'class-validator';

export class UpdateBasketDto extends PartialType(CreateBasketDto) {
  @IsInt()
  id: number;
}
