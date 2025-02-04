import { headers as nextHeaders } from 'next/headers';
import {Metadata} from "next";
import {TypographyHeading} from "@/components/ui/typography-heading";
import React from "react";
import {fetchAllProducts} from "@/lib/product/services/product.service";
import {productsColumns} from "@/components/table/products/columns-products";
import {ProductsDataTable} from "@/components/table/products/data-table-products";

export async function generateMetadata(): Promise<Metadata>{
    return {
        title: 'Products',
        description: 'Page description for SEO and social sharing',
    }
}
export default async function CategoryPage(){
    const headers = new Headers(await nextHeaders());
    const config = { headers };
    const products = (await fetchAllProducts(config)) ?? [];

    return (
        <div>
            <TypographyHeading fontWeight={"semibold"} size={"lg"}> Products</TypographyHeading>
            <ProductsDataTable columns={productsColumns} data={products}/>
        </div>
    )
}