import environment from "@/config/environment.config";
import apiClient, { Config } from "@/config/api.config";
import {Category} from "@/lib/category/models/category.model";
import {AxiosResponse} from "axios";

const {
    api: {
        rest: {
            endpoints: {
                products: productUrl
            }
        }
    }
} = environment


export async function fetchAllProducts(config: Config) {
    return await apiClient(false, config)
        .get<any, AxiosResponse<Category[]>>(productUrl)
        .then((response) => response.data)
}

export const fetchProductById = (
    config: Config,
    id: number,
): Promise<Category | {message: string}> =>
    apiClient(false, config)
        .get(`${productUrl}/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            return {
                message: error.message,
            };
        });