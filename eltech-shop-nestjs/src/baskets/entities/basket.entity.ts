import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Basket {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true })
  userId?: string;

  @ManyToMany(() => Product, (product) => product.baskets)
  products: Product[];

  @ManyToOne(() => User, (user) => user.baskets)
  user: User;

  quantity: number;

  totalPrice: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
