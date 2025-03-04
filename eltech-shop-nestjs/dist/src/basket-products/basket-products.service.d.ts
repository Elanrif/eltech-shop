import { CreateBasketProductDto } from './dto/create-basket-product.dto';
import { UpdateBasketProductDto } from './dto/update-basket-product.dto';
export declare class BasketProductsService {
    create(createBasketProductDto: CreateBasketProductDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBasketProductDto: UpdateBasketProductDto): string;
    remove(id: number): string;
}
