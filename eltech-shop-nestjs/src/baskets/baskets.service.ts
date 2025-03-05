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
    count: number,
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
      // BasketLine exist, so update it
      basketLine.count = count;
      basketLine.unitPrice = product.price;
      basketLine.amount = product.price * count;
    } else {
      // Create a new basketLine
      basketLine = this.basketLineRepository.create({
        basket,
        product,
        variant,
        count,
        unitPrice: product.price,
        amount: product.price * count,
      });
    }
    const saved = await this.basketLineRepository.save(basketLine);
    // Update basket data
    await this.updateBasketTotalQtyAndPrice(basket.id);
    const result = this.basketLineRepository.findOne({
      where: { id: saved.id },
      relations: ['product'],
    });
    return result;
  }

  create(createBasketDto: CreateBasketDto) {
    return 'This action adds a new basket';
  }

  findAll() {
    return `This action returns all baskets`;
  }

  findOne(id: number) {
    const basket = this.basketRepository.findOne({
      where: { id },
      relations: ['basketLines', 'basketLines.product'],
    });
    if (!basket) {
      throw new NotFoundException('Basket not found');
    }
    return basket;
  }

  update(id: number, updateBasketDto: UpdateBasketDto) {
    return `This action updates a #${id} basket`;
  }

  remove(id: number) {
    return `This action removes a #${id} basket`;
  }

  async updateBasketTotalQtyAndPrice(id: number) {
    const basket = await this.basketRepository?.findOne({
      where: { id },
      relations: ['basketLines'],
    });
    if (!basket) {
      throw new NotFoundException('Basket not found');
    }
    const totalCount = (basket.basketLines || []).reduce(
      (sum, basketLine) => sum + (basketLine.count || 0),
      0,
    );
    const subTotalAmount = (basket.basketLines || []).reduce(
      (sum, basketLine) => {
        // MySql sometimes return DECIMAL columns as string instead of number
        const amount = Number(basketLine.amount);

        if (isNaN(amount)) {
          console.warn('Invalid amount found in basketLine:', basketLine);
          return sum;
        }
        return sum + amount;
      },
      0,
    );

    basket.totalCount = totalCount;
    basket.subTotalAmount = subTotalAmount;
    basket.totalAmount = totalCount * subTotalAmount;
    console.log(
      `[updateBasketTotalQtyAndPrice] totalCount: ${totalCount}, subTotalAmount: ${subTotalAmount}, totalAmount: ${totalCount * subTotalAmount}`,
    );

    const basket_ = await this.basketRepository.save(basket);
  }
}
