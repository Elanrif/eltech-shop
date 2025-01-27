import { Basket } from "src/baskets/entities/basket.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @OneToMany(() => Basket, (basket) => basket.user)
    baskets: Basket[];

}
