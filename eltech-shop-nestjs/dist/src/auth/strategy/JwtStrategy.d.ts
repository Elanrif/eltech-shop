import { Strategy } from 'passport-jwt';
import { AuthService, Payload } from '../auth.service';
import { User } from '../../users/entities/user.entity';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithoutRequest] | [opt: import("passport-jwt").StrategyOptionsWithRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: Payload): Promise<User>;
}
export {};
