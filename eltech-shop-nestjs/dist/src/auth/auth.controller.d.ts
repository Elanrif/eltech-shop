import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/LoginDto.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthController {
    private userService;
    private readonly authService;
    constructor(userService: UsersService, authService: AuthService);
    create(dto: CreateUserDto): Promise<{
        email: string;
        firstName: string;
        role: import("../roles/role.enum").Role;
        lastName: string;
        baskets: import("../baskets/entities/basket.entity").Basket[];
        id: number;
    }>;
    login(dto: LoginDto): Promise<{
        user: {
            id: number;
            email: string;
            role: import("../roles/role.enum").Role;
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
    refreshToken(req: any): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    }>;
}
