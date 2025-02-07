import environment from "@/config/environment.config";
import apiClient, { Config } from "@/config/api.config";
import {Product} from "@/lib/category/models/category.model";
import {AxiosError, AxiosResponse} from "axios";
import {CrudApiError} from "@/lib/shared/helpers/ApiError";
import {getLogger} from "@/config/logger.config";

const {
    api: {
        rest: {
            endpoints: {
                categories: categoryUrl
            }
        }
    }
} = environment
const logger = getLogger('server');

/*
export async function fetchAllCategories(config: Config, query: URLSearchParams) {
    const queryStr = query.toString();
    const url = `${categoryUrl}${queryStr ? `?${queryStr}` : ''}`;
    return await apiClient(false, config).get<any, AxiosResponse<Category[]>>(url);
}
*/


export async function fetchAllCategories(config: Config) {
    return await apiClient(false, config)
        .get<any, AxiosResponse<Product[]>>(categoryUrl)
        .then((response) => response.data)
}

export const fetchCategoryById = (
    config: Config,
    id: number,
): Promise<Product | {message: string}> =>
    apiClient(false, config)
        .get(`${categoryUrl}/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            return {
                message: error.message,
            };
        });

export async function createCategory(
    config: Config,
    category: Product
): Promise<Product | CrudApiError> {
    try {
        const res = await apiClient(false,config)
            .post(`${categoryUrl}`, category);
        return res.data;
    } catch (error) {
        const err = error as AxiosError;
        logger.error('Error creating category', {
            status: err.response?.status,
            message: err.response?.data,
        });
        return {
            statusCode: (error as AxiosError).response?.status || 500,
            message: "Server Error",
        };
    }
}

export async function updateCategory(
    config: Config,
    category: Product,
): Promise<Product | CrudApiError> {
    try {
        const res = await apiClient(false,config)
            .patch(`${categoryUrl}/${category.id}`, category);
        return res.data;
    } catch (error) {
        const err = error as AxiosError;
        logger.error('Error updating category', {
            status: err.response?.status,
            message: err.response?.data,
        });
        return {
            statusCode: (error as AxiosError).response?.status || 500,
            message: "Server Error",
        };
    }
}

export async function deleteCategory(
    config: Config,
    id: number,
): Promise<Product | CrudApiError> {
    try {
        const res = await apiClient(false,config)
            .delete(`${categoryUrl}/${id}`);
        return res.data;
    } catch (error) {
        const err = error as AxiosError;
        logger.error('Error deleting category', {
            status: err.response?.status,
            message: err.response?.data,
        });
        return {
            statusCode: (error as AxiosError).response?.status || 500,
            message: "Server Error",
        };
    }
}