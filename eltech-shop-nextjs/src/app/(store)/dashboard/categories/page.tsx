import {CategoriesDataTable} from "@/components/table/categories/data-table-categories";
import {categoriesColumns} from "@/components/table/categories/columns-categories";
import { headers as nextHeaders } from 'next/headers';
import {Metadata} from "next";
import {fetchAllCategories} from "@/lib/category/services/category.service";
import {TypographyHeading} from "@/components/ui/typography-heading";
import React from "react";

export async function generateMetadata(): Promise<Metadata>{
    return {
        title: 'Categories',
        description: 'Page description for SEO and social sharing',
    }
}
export default async function CategoryPage(){
    const headers = new Headers(await nextHeaders());
    const config = { headers };
    const categories = (await fetchAllCategories(config)) ?? [];

    return (
        <div>
            <TypographyHeading fontWeight={"semibold"} size={"lg"}> Categories</TypographyHeading>
            <CategoriesDataTable columns={categoriesColumns} data={categories}/>
        </div>
    )
}