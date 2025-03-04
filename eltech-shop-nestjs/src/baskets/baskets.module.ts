import { Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketsController } from './baskets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Basket } from './entities/basket.entity';
import { BasketLine } from '../basket-lines/entities/basket-line.entity';
import { Product } from '../products/entities/product.entity';
import { User } from '../users/entities/user.entity';

@Module({
  controllers: [BasketsController],
  imports: [TypeOrmModule.forFeature([Basket, BasketLine, Product, User])],
  providers: [BasketsService],
})
export class BasketsModule {}
