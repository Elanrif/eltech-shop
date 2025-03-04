import { Test, TestingModule } from '@nestjs/testing';
import { BasketLinesController } from './basket-lines.controller';
import { BasketLinesService } from './basket-lines.service';

describe('BasketLinesController', () => {
  let controller: BasketLinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasketLinesController],
      providers: [BasketLinesService],
    }).compile();

    controller = module.get<BasketLinesController>(BasketLinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
