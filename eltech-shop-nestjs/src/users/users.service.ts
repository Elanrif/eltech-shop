import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User> ){}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({where: {email: createUserDto.email}});

    if (user) throw new ConflictException('Email duplicated!');

    const newUser = await this.userRepository.save({
      ...createUserDto,
      password: await hash(createUserDto.password, 10),
    })
    const { password, ...result} = newUser;
    return result;
  }

  async findByEmail(email: string){
    return this.userRepository.findOne({
      where: {email},
    })
  };

  async findById(id: number) {
    return this.userRepository.findOne({
      where: {id},
    })
  }

  findAll() {
    return `This action returns all users`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
