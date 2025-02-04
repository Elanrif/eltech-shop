import environment from "@/config/environment.config";
import winston from "winston";

const logConfig = environment.log.server;

const getLogFormat = () => {
    switch (logConfig.format) {
        case 'json': {
            return winston.format.json();
        }
        default: {
            return winston.format.simple();
        }
    }
};

const getLogTransports = () => {
    return logConfig.output.split(',').map((output) => {
        switch (output) {
            case 'file': {
                return new winston.transports.File({
                    filename: logConfig.file.path,
                });
            }
            default: {
                return new winston.transports.Console({})
            }
        }
    });
};

let logger: winston.Logger | undefined;
export const getServerLogger = () => {
    if (!logger) {
        logger = winston.createLogger({
            level: logConfig.level,
            transports: getLogTransports(),
            format: winston.format.combine(
                winston.format.timestamp(),
                getLogFormat(),
            ),
        });
    }
    return logger;
};