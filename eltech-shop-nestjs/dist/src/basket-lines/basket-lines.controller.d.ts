import { BasketLinesService } from './basket-lines.service';
import { CreateBasketLineDto } from './dto/create-basket-line.dto';
import { UpdateBasketLineDto } from './dto/update-basket-line.dto';
export declare class BasketLinesController {
    private readonly basketLinesService;
    constructor(basketLinesService: BasketLinesService);
    create(createBasketLineDto: CreateBasketLineDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBasketLineDto: UpdateBasketLineDto): string;
    remove(id: string): string;
}
