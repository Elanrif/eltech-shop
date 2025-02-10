const parseBoolean = (
    value: string | undefined,
    dft: boolean = false,
): boolean => {
    return value ? value.trim().toLocaleLowerCase() === 'true' : dft;
};

const ELTECH_BASE_URL = process.env.ELTECH_BASE_URL ?? 'http://localhost:3020'
const BASE_URL = process.env.NEXT_PUBLIC_ELTECH_SHOP_URL ?? 'http://localhost:3000'
const HOST_NAME = process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? 'localhost';

const environment = {
    name: process.env.ENV,
    baseUrl: BASE_URL,
    rootDomain: HOST_NAME,
    apiBaseUrl: `${BASE_URL}/api-proxy`,
    apiProxyBase: `/api-proxy/`,
    baAPIBaseUrl: ELTECH_BASE_URL,
    defaultCurrency: process.env.NEXT_PUBLIC_DEFAULT_CURRENCY || 'EUR',
    api: {
        rest: {
            endpoints: {
                baskets: `${ELTECH_BASE_URL}/v1/baskets`,
                orders: `${ELTECH_BASE_URL}/v1/orders`,
                checkout: `${ELTECH_BASE_URL}/v1/checkout`,
                products: `${ELTECH_BASE_URL}/v1/products`,
                productsUploadImage: `${ELTECH_BASE_URL}/v1/products/upload-imageUrl`,
                categories: `${ELTECH_BASE_URL}/v1/categories`,
                users: `${ELTECH_BASE_URL}/v1/users`,
            }
        }
    },
    auth: {
        endpoints: {
            login: `${ELTECH_BASE_URL}/v1/auth/login`,
            register: `${ELTECH_BASE_URL}/v1/auth/register`,
            refreshToken: `${ELTECH_BASE_URL}/v1/auth/refreshToken`,
        },
        keys: {
            clientID: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        }
    },
    format: {
        dateTime: process.env.FORMAT_DATETIME_ISO || 'YYYY-MM-DDThh:mm:ssZD',
    },
    http: {
        request: {
            appendSlash: parseBoolean(process.env.HTTP_REQUEST_APPEND_SLASH, true),
            timeout:
                // @ts-expect-error: value is not null or undefined
                Number.parseInt(process.env.HTTP_REQUEST_TIMEOUT_MILLISECONDS) || 60_000,
        },
    },
    log: {
        client: {
            format: process.env.NEXT_PUBLIC_LOG_FORMAT || 'simple',
            level:
            process.env.NEXT_PUBLIC_LOG_LEVEL || process.env.LOG_LEVEL || 'info',
            output: process.env.NEXT_PUBLIC_LOG_OUTPUT || 'console',
        },
        server: {
            file: {
                path: process.env.LOG_FILE_PATH,
            },
            format: process.env.LOG_FORMAT || 'simple',
            level: process.env.LOG_LEVEL || 'info',
            output: process.env.LOG_OUTPUT || 'console',
        },
    }

} as const;

export default environment;
