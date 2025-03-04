import { Test, TestingModule } from '@nestjs/testing';
import { BasketLinesService } from './basket-lines.service';

describe('BasketLinesService', () => {
  let service: BasketLinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasketLinesService],
    }).compile();

    service = module.get<BasketLinesService>(BasketLinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
