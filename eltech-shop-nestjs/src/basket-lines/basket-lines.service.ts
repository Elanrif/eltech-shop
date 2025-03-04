import { Injectable } from '@nestjs/common';
import { CreateBasketLineDto } from './dto/create-basket-line.dto';
import { UpdateBasketLineDto } from './dto/update-basket-line.dto';

@Injectable()
export class BasketLinesService {
  create(createBasketLineDto: CreateBasketLineDto) {
    return 'This action adds a new basketLine';
  }

  findAll() {
    return `This action returns all basketLines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basketLine`;
  }

  update(id: number, updateBasketLineDto: UpdateBasketLineDto) {
    return `This action updates a #${id} basketLine`;
  }

  remove(id: number) {
    return `This action removes a #${id} basketLine`;
  }
}
