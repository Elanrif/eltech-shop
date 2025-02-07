import {proxyEnvironment} from "@/config/proxy-api.config";
import {frontendHttp} from "@/config/axios.config";
import {AxiosError, AxiosResponse} from "axios";
import {Product} from "@/lib/category/models/category.model";

const {
    api : {
        endpoints: {
            categories: categoryUrl
        }
    },
} = proxyEnvironment;

export async function getCategories() {
    return await frontendHttp()
        .get<any, AxiosResponse<Product[]>>(categoryUrl)
        .then((response) => response.data);
}

export async function getCategoryById(categoryId: number): Promise<Product> {
    return await frontendHttp()
        .get(`${categoryUrl}/${categoryId}`)
        .then((response) => response.data);
}

export async function searchCategories(
    query: string,
    params: URLSearchParams,
): Promise<Product[]> {
    const url = `${categoryUrl}/${query}${params.toString() ? `?${params.toString()}` : ''}`;
    return await frontendHttp()
        .get<any, AxiosResponse<Product[]>>(url)
        .then((response) => response.data);
}

export async function createCategory(category: Product) {
    return await frontendHttp()
        .post<any, AxiosResponse<Product                                                   >>(categoryUrl, category)
        .then((response) => response.data)
        .catch((error) => {
            const err = error as AxiosError<{message: string}>
            return err.response?.data;
        })
}

export async function updateCategory(category: Product) {
    return await frontendHttp()
        .put<any, AxiosResponse<Product>>(`${categoryUrl}/${category.id}`, category)
        .then((response) => response.data)
        .catch((error) => {
            const err = error as AxiosError<{message: string}>
            return err.response?.data;
        })
}

export async function deleteCategory(id: number) {
    return await frontendHttp()
        .delete<any, AxiosResponse<any>>(`${categoryUrl}/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            const err = error as AxiosError<{message: string}>
            return err.response?.data;
        })
}