import { BasketProductsService } from './basket-products.service';
import { CreateBasketProductDto } from './dto/create-basket-product.dto';
import { UpdateBasketProductDto } from './dto/update-basket-product.dto';
export declare class BasketProductsController {
    private readonly basketProductsService;
    constructor(basketProductsService: BasketProductsService);
    create(createBasketProductDto: CreateBasketProductDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBasketProductDto: UpdateBasketProductDto): string;
    remove(id: string): string;
}
