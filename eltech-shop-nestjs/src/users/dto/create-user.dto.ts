import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Basket } from 'src/baskets/entities/basket.entity';
import { Role } from 'src/roles/role.enum';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsEnum(Role)
  @IsOptional()
  role: Role;

  @IsString()
  lastName: string;

  @IsArray()
  @IsOptional()
  baskets: Basket[];
}
