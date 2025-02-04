import {proxyEnvironment} from "@/config/proxy-api.config";
import {frontendHttp} from "@/config/axios.config";
import {AxiosResponse} from "axios";
import {Category} from "@/lib/category/models/category.model";

const {
    api : {
        endpoints: {
            categories
        }
    },
} = proxyEnvironment;

export async function getCategories() {
    return await frontendHttp()
        .get<any, AxiosResponse<Category[]>>(categories)
        .then((response) => response.data);
}

export async function getCategoryById(categoryId: number): Promise<Category> {
    return await frontendHttp()
        .get(`${categories}/${categoryId}`)
        .then((response) => response.data);
}

export async function searchCategories(
    query: string,
    params: URLSearchParams,
): Promise<Category[]> {
    const url = `${categories}/${query}${params.toString() ? `?${params.toString()}` : ''}`;
    return await frontendHttp()
        .get<any, AxiosResponse<Category[]>>(url)
        .then((response) => response.data);
}