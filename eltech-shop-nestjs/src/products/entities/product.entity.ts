import { Basket } from 'src/baskets/entities/basket.entity';
import { Category } from 'src/categories/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  detail: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ default: true })
  is_new: boolean;

  @Column({ default: true })
  in_stock: boolean;

  @Column({ nullable: true })
  brand?: string;

  @Column()
  color: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Category, (category) => category.products, {
    nullable: true,
    eager: true,
  })
  category?: Category;

  @ManyToMany(() => Basket, (basket) => basket.products)
  baskets: Basket[];
}
