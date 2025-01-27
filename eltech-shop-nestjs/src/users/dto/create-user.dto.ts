import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Basket } from "src/baskets/entities/basket.entity";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsArray()
  @IsOptional()
  baskets: Basket[];
}
