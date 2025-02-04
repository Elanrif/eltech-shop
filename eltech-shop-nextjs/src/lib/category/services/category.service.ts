import environment from "@/config/environment.config";
import apiClient, { Config } from "@/config/api.config";
import {Category} from "@/lib/category/models/category.model";
import {AxiosResponse} from "axios";

const {
    api: {
        rest: {
            endpoints: {
                categories: categoryUrl
            }
        }
    }
} = environment


/*
export async function fetchAllCategories(config: Config, query: URLSearchParams) {
    const queryStr = query.toString();
    const url = `${categoryUrl}${queryStr ? `?${queryStr}` : ''}`;
    return await apiClient(false, config).get<any, AxiosResponse<Category[]>>(url);
}
*/

export async function fetchAllCategories(config: Config) {
    return await apiClient(false, config)
        .get<any, AxiosResponse<Category[]>>(categoryUrl)
        .then((response) => response.data)
}

export const fetchCategoryById = (
    config: Config,
    id: number,
): Promise<Category | {message: string}> =>
    apiClient(false, config)
        .get(`${categoryUrl}/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            return {
                message: error.message,
            };
        });