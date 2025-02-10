import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { API_PATH_PRODUCTS, API_VERSION_1 } from '../config/api.constant';
import { routeEndpoints } from '../config/route.config';
import { UploadImgProductDto } from './dto/upload-img-product.dto';

const {
  endpoints: {
    products: { productsUploadImage },
  },
} = routeEndpoints;

@Controller({
  version: API_VERSION_1,
  path: API_PATH_PRODUCTS,
})
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Patch(productsUploadImage)
  addProductImage(@Body() dto: UploadImgProductDto) {
    return this.productsService.uploadProductImage(dto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
