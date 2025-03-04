import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Basket } from '../../baskets/entities/basket.entity';
import { VariantType } from '../dto/variant.enum';

@Entity()
export class BasketLine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Basket, (basket) => basket.basketLines, {
    onDelete: 'CASCADE',
  })
  basket: Basket;

  @ManyToOne(() => Product, (product) => product.basketLines, {
    onDelete: 'NO ACTION',
  })
  product: Product;

  @Column({ type: 'int', default: 1 })
  clientQty: number;

  @Column()
  totalPrice: number;

  @Column()
  variant: VariantType;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
