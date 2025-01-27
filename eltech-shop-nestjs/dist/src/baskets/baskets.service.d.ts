import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
export declare class BasketsService {
    create(createBasketDto: CreateBasketDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBasketDto: UpdateBasketDto): string;
    remove(id: number): string;
}
