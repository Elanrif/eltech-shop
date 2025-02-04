import environment from "@/config/environment.config";
import axios, {AxiosError} from "axios";
import {Logger} from "@/config/loggers/default.logger";
import {requestLoggerInterceptor, responseLoggerInterceptor} from "@/config/interceptors/logger.interceptor";


const { http: httpConfig, apiProxyBase} = environment;

export const baseRequestConfig = {
    baseURL: '',
    timeout: httpConfig.request.timeout,
    headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'application/json; charset=UTF-8',
        Expires: 0,
        Pragma: 'no-cache',
    },
}

export default function httpClient({ logger} : { logger: Logger }) {
    const instance = axios.create({ ...baseRequestConfig });
    instance.interceptors.request.use(
        requestLoggerInterceptor(logger),
        (error) => {
            logger.error('Request error:', {error: error.message});
            return Promise.reject(error);
        },
    );
    instance.interceptors.response.use(
        responseLoggerInterceptor(logger),
        (error: AxiosError) => {
            let message: string = '';
            try{
                message = JSON.stringify(error.response?.data);
            } catch {
                // @ts-expect-error: false positive error, it is always a string
                message = error.message?.data ?? '';
            }
            logger.error('Response error:', {error: error.message, message});
            return Promise.reject(error);
        },
    );
    return instance;
}

export const frontendHttp = () => {
    // noinspection UnnecessaryLocalVariableJS
    const instance = axios.create({
        ...baseRequestConfig,
        baseURL: apiProxyBase,
    });
    // instance.interceptors.request.use(corsInterceptor);
    return instance;
}