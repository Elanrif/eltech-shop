import { BasketsService } from './baskets.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { VariantType } from '../basket-lines/dto/variant.enum';
export declare class BasketsController {
    private readonly basketsService;
    constructor(basketsService: BasketsService);
    addProductToBasket(userId: number, productId: number, variant: VariantType, clientQty?: number): Promise<{
        message: string;
        basketLine: import("../basket-lines/entities/basket-line.entity").BasketLine;
    }>;
    create(createBasketDto: CreateBasketDto): string;
    findAll(): string;
    findOne(id: string): Promise<import("./entities/basket.entity").Basket>;
    update(id: string, updateBasketDto: UpdateBasketDto): string;
    remove(id: string): string;
}
