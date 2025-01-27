import { BasketsService } from './baskets.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
export declare class BasketsController {
    private readonly basketsService;
    constructor(basketsService: BasketsService);
    create(createBasketDto: CreateBasketDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBasketDto: UpdateBasketDto): string;
    remove(id: string): string;
}
