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
                baskets: `${ELTECH_BASE_URL}/api/v1/baskets`,
                orders: `${ELTECH_BASE_URL}/api/v1/orders`,
                checkout: `${ELTECH_BASE_URL}/api/v1/checkout`,
                products: `${ELTECH_BASE_URL}/api/v1/products`,
                category: `${ELTECH_BASE_URL}/api/v1/categories`,
                users: `${ELTECH_BASE_URL}/api/v1/users`,
            }
        }
    },
    auth: {
        endpoints: {
            login: `${ELTECH_BASE_URL}/api/v1/auth/login`,
            register: `${ELTECH_BASE_URL}/api/v1/auth/register`,
            refreshToken: `${ELTECH_BASE_URL}/api/v1/auth/refreshToken`,
        },
        keys: {
            clientID: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        }
    }

}

export default environment;
