import environment from "@/config/environment.config";
import httpClient, {baseRequestConfig} from "@/config/axios.config";
import {slashInterceptor} from "@/config/interceptors/slash.interceptor";
import {getLogger} from "@/config/logger.config";

const logger = getLogger();

export interface Token {
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
    refresh_token: string;
    expiry: string;
    owned: boolean;
}

export enum TokenScope {
    READ = 'read',
    WRITE = 'write',
    READ_WRITE = 'read write',
}

//const { auth: authConfig, format: formatConfig } = environment;

const authRequestConfig = {
    ...baseRequestConfig,
    headers: {
        ...baseRequestConfig.headers,
        'Content-Type': 'application/x-www-form-urlencoded',
    },
} as const;

const authClient = () => {
    const instance = httpClient({
        logger,
    });
    instance.interceptors.request.use(slashInterceptor);
    return instance;
}