import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { Basket } from './entities/basket.entity';
import { Product } from '../products/entities/product.entity';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { BasketLine } from '../basket-lines/entities/basket-line.entity';
import { VariantType } from '../basket-lines/dto/variant.enum';
export declare class BasketsService {
    private basketLineRepository;
    private basketRepository;
    private productRepository;
    private userRepository;
    constructor(basketLineRepository: Repository<BasketLine>, basketRepository: Repository<Basket>, productRepository: Repository<Product>, userRepository: Repository<User>);
    addProductToBasket(userId: number, productId: number, variant: VariantType, count: number): Promise<BasketLine>;
    create(createBasketDto: CreateBasketDto): string;
    findAll(): string;
    findOne(id: number): Promise<Basket>;
    update(id: number, updateBasketDto: UpdateBasketDto): string;
    remove(id: number): string;
    updateBasketTotalQtyAndPrice(id: number): Promise<void>;
}
