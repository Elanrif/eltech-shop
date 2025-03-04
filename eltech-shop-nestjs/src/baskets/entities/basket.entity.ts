import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BasketLine } from '../../basket-lines/entities/basket-line.entity';

@Entity()
export class Basket {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.basket)
  user: User;

  @OneToMany(() => BasketLine, (basketLine) => basketLine.basket)
  basketLines: BasketLine[];

  @Column({ type: 'int', default: 1 })
  totalCount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  subTotalAmount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
