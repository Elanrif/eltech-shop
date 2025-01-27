import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): string;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
}
