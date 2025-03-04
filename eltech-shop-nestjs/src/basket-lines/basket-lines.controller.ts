import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BasketLinesService } from './basket-lines.service';
import { CreateBasketLineDto } from './dto/create-basket-line.dto';
import { UpdateBasketLineDto } from './dto/update-basket-line.dto';

@Controller('basket-lines')
export class BasketLinesController {
  constructor(private readonly basketLinesService: BasketLinesService) {}

  @Post()
  create(@Body() createBasketLineDto: CreateBasketLineDto) {
    return this.basketLinesService.create(createBasketLineDto);
  }

  @Get()
  findAll() {
    return this.basketLinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basketLinesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBasketLineDto: UpdateBasketLineDto,
  ) {
    return this.basketLinesService.update(+id, updateBasketLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basketLinesService.remove(+id);
  }
}
