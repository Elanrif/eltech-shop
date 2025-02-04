import {Token} from "@/config/auth.config";
import {getLogger} from "@/config/logger.config";
import {RequestLogger} from "@/config/loggers/request.logger";
import httpClient from "@/config/axios.config";
import {slashInterceptor} from "@/config/interceptors/slash.interceptor";
import {headersInterceptor} from "@/config/interceptors/headers.interceptor";

const logger = getLogger('server')

export type Config = {
    token?: Token;
    headers?: Headers;
}

const apiLogger = (config?: Config) => {
    if (config?.headers) {
        const headers = new Headers(config.headers);
        const reqId = headers.get('X-Request-ID');
        if (reqId) {
            return new RequestLogger(logger, reqId);
        }
    }
    return logger;
};

export default function apiClient(anon?: boolean, config?: Config) {
    const instance = httpClient({
        logger: apiLogger(config),
    });
    instance.interceptors.request.use(slashInterceptor);
    if (config?.headers) {
        instance.interceptors.request.use(headersInterceptor(config.headers));
    }
    return instance;
}