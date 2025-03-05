import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { API_PATH_BASKETS, API_VERSION_1 } from '../config/api.constant';
import { VariantType } from '../basket-lines/dto/variant.enum';

@Controller({
  version: API_VERSION_1,
  path: API_PATH_BASKETS,
})
export class BasketsController {
  constructor(private readonly basketsService: BasketsService) {}

  @Post('users/:userId/add-product/:productId')
  async addProductToBasket(
    @Param('userId') userId: number,
    @Param('productId') productId: number,
    @Body('variant') variant: VariantType,
    @Body('count') count: number,
  ) {
    try {
      const basketLine = await this.basketsService.addProductToBasket(
        userId,
        productId,
        variant,
        count,
      );
      return { message: 'Product added to basket', basketLine };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Delete(':basketId/users/:userId/delete')
  async removeBasket(
    @Param('userId') userId: number,
    @Param('basketId') basketId: number,
  ) {
    await this.basketsService.removeBasket(basketId, userId);
  }
  @Post()
  create(@Body() createBasketDto: CreateBasketDto) {
    return this.basketsService.create(createBasketDto);
  }

  @Get()
  findAll() {
    return this.basketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basketsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasketDto: UpdateBasketDto) {
    return this.basketsService.update(+id, updateBasketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basketsService.remove(+id);
  }
}
