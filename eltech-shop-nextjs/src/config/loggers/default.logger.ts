import environment from "@/config/environment.config";

const logConfig = environment.log.client;

const getLogLevelInt = (level: string) => {
    switch (level) {
        case  'error': {
            return 2;
        }
        case 'warn': {
            return 1;
        }
        case 'debug': {
            return -1;
        }
        case 'silly': {
            return -2;
        }
        default: {
            return 0;
        }
    }
};

export type Logger = Pick<Console, 'error' | 'warn' | 'info' | 'debug'> & {
    silly(message?: any, ...params: any[]): void;
};

let logger: Logger;
export const getDefaultLogger = () => {
    if (!logger) {
        logger = {
            error: (message?, ...params) => {
                if (getLogLevelInt(logConfig.level) <= getLogLevelInt('error')) {
                    console.error(message, ...params);
                }
            },
            warn: (message?, ...params) => {
                if (getLogLevelInt(logConfig.level) <= getLogLevelInt('warn')) {
                    console.warn(message, ...params);
                }
            },
            info: (message, ...params) => {
                if (getLogLevelInt(logConfig.level) <= getLogLevelInt('info')) {
                    console.info(message, ...params);
                }
            },
            debug: (message?, ...params) => {
                if (getLogLevelInt(logConfig.level) <= getLogLevelInt('debug')) {
                    console.debug(message, ...params);
                }
            },
            silly: (message?, ...params) => {
                if (getLogLevelInt(logConfig.level) <= getLogLevelInt('silly')) {
                    console.debug(message, ...params);
                }
            },
        };
    }
    return logger;
};