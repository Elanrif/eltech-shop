import environment from "@/config/environment.config";

const {baseUrl, apiBaseUrl, apiProxyBase} = environment;

export const protectedPaths = {
    /* Basket */
    cart: `/cart`,

    /* Checkout */
    checkout: `/checkout`,
    order: `/order`,
    voucher: `/voucher`,

    users: `/users`,
    passwordReset: `/password-reset`,

}

export const proxyEnvironment = {
    baseUrl,
    apiBaseUrl,
    apiProxyBase,
    api: {
        endpoints: {
            ...protectedPaths,
            categories: `/categories`,
            contacts: `/contacts`,

            products: `/products`,
            productById: `/products/id`,
            productByCategoryId: `/products/by-category`,
            register: `/register`,
            login: `/login`,

        }
    }
}