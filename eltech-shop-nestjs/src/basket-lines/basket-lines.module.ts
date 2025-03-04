import { Module } from '@nestjs/common';
import { BasketLinesService } from './basket-lines.service';
import { BasketLinesController } from './basket-lines.controller';

@Module({
  controllers: [BasketLinesController],
  providers: [BasketLinesService],
})
export class BasketLinesModule {}
