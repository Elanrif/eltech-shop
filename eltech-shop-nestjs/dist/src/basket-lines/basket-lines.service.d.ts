import { CreateBasketLineDto } from './dto/create-basket-line.dto';
import { UpdateBasketLineDto } from './dto/update-basket-line.dto';
export declare class BasketLinesService {
    create(createBasketLineDto: CreateBasketLineDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBasketLineDto: UpdateBasketLineDto): string;
    remove(id: number): string;
}
