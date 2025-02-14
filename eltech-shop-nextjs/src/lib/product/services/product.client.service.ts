import {proxyEnvironment} from "@/config/proxy-api.config";
import {frontendHttp} from "@/config/axios.config";
import {AxiosError, AxiosResponse} from "axios";
import {Product, ProductUploadImage} from "@/lib/product/models/product.model";

const {
    api : {
        endpoints: {
            products: productUrl,
            productsUploadImage: productUploadImgUrl,
        }
    },
} = proxyEnvironment;

export async function getProducts() {
    return await frontendHttp()
        .get<any, AxiosResponse<Product[]>>(productUrl)
        .then((response) => response.data);
}

export async function getProductById(productId: number): Promise<Product> {
    return await frontendHttp()
        .get(`${productUrl}/${productId}`)
        .then((response) => response.data);
}

export async function searchProducts(
    query: string,
    params: URLSearchParams,
): Promise<Product[]> {
    const url = `${productUrl}/${query}${params.toString() ? `?${params.toString()}` : ''}`;
    return await frontendHttp()
        .get<any, AxiosResponse<Product[]>>(url)
        .then((response) => response.data);
}

export async function createProduct(product: Product) {
    return await frontendHttp()
        .post<any, AxiosResponse<Product>>(productUrl, product)
        .then((response) => response.data)
        .catch((error) => {
            const err = error as AxiosError<{message: string}>
            return err.response?.data;
        })
}

export async function uploadProductImage(product: ProductUploadImage) {
    return await frontendHttp()
        .put<any, AxiosResponse<Product>>(productUploadImgUrl, product)
        .then((response) => response.data)
        .catch((error) => {
            const err = error as AxiosError<{message: string}>
            return err.response?.data;
        })
}

export async function updateProduct(product: Product) {
    return await frontendHttp()
        .put<any, AxiosResponse<Product>>(`${productUrl}/${product.id}`, product)
        .then((response) => response.data)
        .catch((error) => {
            const err = error as AxiosError<{message: string}>
            return err.response?.data;
        })
}

export async function deleteProduct(id: number) {
    return await frontendHttp()
        .delete<any, AxiosResponse<any>>(`${productUrl}/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            const err = error as AxiosError<{message: string}>
            return err.response?.data;
        })
}