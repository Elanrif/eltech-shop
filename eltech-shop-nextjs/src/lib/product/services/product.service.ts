import environment from "@/config/environment.config";
import apiClient, { Config } from "@/config/api.config";
import { AxiosError, AxiosResponse } from "axios";
import {
  Product,
  ProductUploadImage,
} from "@/lib/product/models/product.model";
import { CrudApiError } from "@/lib/shared/helpers/ApiError";
import { getLogger } from "@/config/logger.config";

const {
  api: {
    rest: {
      endpoints: {
        products: productUrl,
        productsUploadImage: productUploadImageUrl,
      },
    },
  },
} = environment;
const logger = getLogger("server");

export async function fetchAllProducts(config: Config) {
  return await apiClient(false, config)
    .get<any, AxiosResponse<Product[]>>(productUrl)
    .then((response) => response.data);
}

export const fetchProductById = (
  config: Config,
  id: number
): Promise<Product | { message: string }> =>
  apiClient(false, config)
    .get(`${productUrl}/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      return {
        message: error.message,
      };
    });

export async function createProduct(
  config: Config,
  product: Product
): Promise<Product | CrudApiError> {
  try {
    const res = await apiClient(false, config).post(`${productUrl}`, product);
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    logger.error("Error creating product", {
      status: err.response?.status,
      message: err.response?.data,
    });
    return {
      statusCode: (error as AxiosError).response?.status || 500,
      message: "Server Error",
    };
  }
}

export async function uploadProductImage(
  config: Config,
  product: ProductUploadImage
): Promise<Product | CrudApiError> {
  try {
    const res = await apiClient(false, config).patch(
      `${productUploadImageUrl}`,
      product
    );
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    logger.error("Error adding product image", {
      status: err.response?.status,
      message: err.response?.data,
    });
    return {
      statusCode: (error as AxiosError).response?.status || 500,
      message: "Server Error",
    };
  }
}

export async function updateProduct(
  config: Config,
  product: Product
): Promise<Product | CrudApiError> {
  try {
    const res = await apiClient(false, config).patch(
      `${productUrl}/${product.id}`,
      product
    );
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    logger.error("Error updating product", {
      status: err.response?.status,
      message: err.response?.data,
    });
    return {
      statusCode: (error as AxiosError).response?.status || 500,
      message: "Server Error",
    };
  }
}

export async function deleteProduct(
  config: Config,
  id: number
): Promise<Product | CrudApiError> {
  try {
    const res = await apiClient(false, config).delete(`${productUrl}/${id}`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    logger.error("Error deleting product", {
      status: err.response?.status,
      message: err.response?.data,
    });
    return {
      statusCode: (error as AxiosError).response?.status || 500,
      message: "Server Error",
    };
  }
}
