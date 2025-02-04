import {InternalAxiosRequestConfig} from "axios";

export const headersInterceptor = (headers: Headers) => (config: InternalAxiosRequestConfig) => {
    config.headers['X-Forwarded-For'] = headers.get('X-Forwarded-For');
    return config;
}