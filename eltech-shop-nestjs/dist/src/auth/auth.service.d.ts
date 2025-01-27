import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/LoginDto.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(dto: LoginDto): Promise<{
        user: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
            baskets: import("../baskets/entities/basket.entity").Basket[];
        };
        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }>;
    validateUser(dto: LoginDto): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        baskets: import("../baskets/entities/basket.entity").Basket[];
    }>;
    refreshToken(user: any): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    }>;
}
