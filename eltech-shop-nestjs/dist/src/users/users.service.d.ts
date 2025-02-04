import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        firstName: string;
        role: import("../roles/role.enum").Role;
        lastName: string;
        baskets: import("../baskets/entities/basket.entity").Basket[];
        id: number;
    }>;
    findByEmail(email: string): Promise<User>;
    findById(id: number): Promise<User>;
    findAll(): Promise<User[]>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
