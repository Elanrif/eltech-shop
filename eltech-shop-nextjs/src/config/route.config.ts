import environment from "@/config/environment.config";

const {baseUrl, apiBaseUrl, apiProxyBase} = environment;

export const routeEndpoints = {
    endpoints: {
        baseUrl,
        apiBaseUrl,
        apiProxyBase,
        home: `/`,
        login: `/sign-in-up`,
        register: `/sign-in-up`,

        /* Dashboard */
        dashboard: {
            base: `/dashboard`,
            orders: `/dashboard/orders`,
            users: `/dashboard/users`,
            categories: `/dashboard/categories`,
            products: `/dashboard/products`,
        }

    }
}