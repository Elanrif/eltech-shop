import {AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {Logger} from "@/config/loggers/default.logger";

export const requestLoggerInterceptor =
    (logger: Logger) => (config: InternalAxiosRequestConfig):
    InternalAxiosRequestConfig => {
    logger.debug('Request', {
        method: config.method?.toUpperCase(),
        url: config.url,
    });
    logger.silly('Request headers', {
        headers: config.headers,
    });
    logger.debug('Response headers', { data: config.data });
    return config;
    };

export const responseLoggerInterceptor =
    (logger: Logger) => (response: AxiosResponse): AxiosResponse => {
    logger.debug('Response', {
        method: response.config.method?.toUpperCase(),
        url: response.config.url,
        status: response.status,
    });
    logger.silly('Response headers', {
        headers: response.headers,
    });
    logger.silly('Response data', { data: response.data });
    return response;
    }