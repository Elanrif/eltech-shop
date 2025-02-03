import environment from "@/config/environment.config";

const {baseUrl, apiBaseUrl, apiProxyBase} = environment;

export const routeEndpoints = {
    endpoints: {
        baseUrl,
        apiBaseUrl,
        apiProxyBase,
        store: `/`,
        login: `/login`,
        register: `/register`,

        /* Dashboard */
        dashboard: {
            default: `/dashboard`,
            orders: `/orders`,
            users: `/users`,
            categories: `/categories`,
            products: `/products`,
        }

    }
}