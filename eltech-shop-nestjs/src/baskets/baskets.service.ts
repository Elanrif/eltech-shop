import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Basket } from './entities/basket.entity';
import { Product } from '../products/entities/product.entity';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { BasketLine } from '../basket-lines/entities/basket-line.entity';
import { VariantType } from '../basket-lines/dto/variant.enum';

@Injectable()
export class BasketsService {
  constructor(
    @InjectRepository(BasketLine)
    private basketLineRepository: Repository<BasketLine>,
    @InjectRepository(Basket)
    private basketRepository: Repository<Basket>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async addProductToBasket(
    userId: number,
    productId: number,
    variant: VariantType,
    clientQty: number = 1,
  ) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['basket'],
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // verify if user had a basket
    let basket = user.basket;
    if (!basket) {
      basket = this.basketRepository.create({ user });
      await this.basketRepository.save(basket);

      // Associate basket to user
      user.basket = basket;
      await this.userRepository.save(user);
    }

    // Find the product
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    // Checkout out if product already is in basket
    let basketLine = await this.basketLineRepository.findOne({
      where: { basket: { id: basket.id }, product: { id: productId }, variant },
    });
    if (basketLine) {
      basketLine.clientQty += clientQty;
    } else {
      basketLine = this.basketLineRepository.create({
        basket,
        product,
        variant,
        clientQty,
        totalPrice: product.price * clientQty,
      });
    }

    return this.basketLineRepository.save(basketLine);
  }

  create(createBasketDto: CreateBasketDto) {
    return 'This action adds a new basket';
  }

  findAll() {
    return `This action returns all baskets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basket`;
  }

  update(id: number, updateBasketDto: UpdateBasketDto) {
    return `This action updates a #${id} basket`;
  }

  remove(id: number) {
    return `This action removes a #${id} basket`;
  }
}
