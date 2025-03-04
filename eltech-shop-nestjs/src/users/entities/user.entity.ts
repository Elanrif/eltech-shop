import { Basket } from 'src/baskets/entities/basket.entity';
import { Role } from 'src/users/roles/role.enum';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ default: Role.USER })
  role: Role;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToOne(() => Basket, { cascade: true, eager: true })
  @JoinColumn()
  basket: Basket;
}
