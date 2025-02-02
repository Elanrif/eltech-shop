import { IsEnum } from 'class-validator';
import { Basket } from 'src/baskets/entities/basket.entity';
import { Role } from 'src/roles/role.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => Basket, (basket) => basket.user)
  baskets: Basket[];
}
