import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/LoginDto.dto';
import { compare } from 'bcrypt';
import * as process from 'node:process';

export interface Payload {
  username: string;
  sub: number;
  role: string;
}

const EXPIRE_TIME = 30 * 60 * 1000;
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);
    const payload: Payload = {
      username: user.email,
      sub: user.id,
      role: user.role,
    };

    return {
      user,
      backendTokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: '30m',
          secret: process.env.JWT_SECRET_KEY,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: '3d',
          secret: process.env.JWT_REFRESH_TOKEN_KEY,
        }),
        expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
      },
    };
  }

  /* Used to validate user during login (email && password) */
  async validateUser(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.username);

    if (user && (await compare(dto.password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }

    throw new UnauthorizedException();
  }

  /* Used to validate a user's ID (extracted from the JWT payload) */
  async validateUserById(userId: number): Promise<any> {
    const user = await this.userService.findById(userId);
    if (!user) {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, baskets, ...result } = user;
    return result;
  }

  async refreshToken(user: any) {
    const payload = {
      username: user.username,
      sub: user.sub,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '30m',
        secret: process.env.JWT_SECRET_KEY,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '3d',
        secret: process.env.JWT_REFRESH_TOKEN_KEY,
      }),
      expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
    };
  }
}
