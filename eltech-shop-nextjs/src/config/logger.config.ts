import {getDefaultLogger, Logger} from "@/config/loggers/default.logger";
import {getServerLogger} from "@/config/loggers/server.logger";

export const getLogger = (
    type: 'client' | 'server' | 'default' = 'default',
): Logger => {
    return type === 'server' ? getServerLogger(): getDefaultLogger();
};