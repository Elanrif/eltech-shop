import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/LoginDto.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RefreshJwtGuard } from './guards/refresh.guard';
import { API_PATH_AUTH, API_VERSION_1 } from '../config/api.constant';

@Controller({
  version: API_VERSION_1,
  path: API_PATH_AUTH,
})
export class AuthController {
  constructor(
    private userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user);
  }
}
