import {CategoriesDataTable} from "@/components/table/categories/data-table-categories";
import {categoriesColumns} from "@/components/table/categories/columns-categories";
import { headers as nextHeaders } from 'next/headers';
import {Metadata} from "next";
import {fetchAllCategories} from "@/lib/category/services/category.service";
import {TypographyHeading} from "@/components/ui/typography-heading";
import React from "react";
import {DialogFormCategory} from "@/components/dialog/forms/category/dialog-form-category";

export async function generateMetadata(): Promise<Metadata>{
    return {
        title: 'Categories EL-techShop',
        description: 'Page description for SEO and social sharing',
    }
}
export default async function CategoryPage(){
    const headers = new Headers(await nextHeaders());
    const config = { headers };
    const categories = (await fetchAllCategories(config)) ?? [];

    return (
        <div>
            <div className={'flex items-center justify-between'}>
                <TypographyHeading fontWeight={"semibold"} size={"lg"}> Categories</TypographyHeading>
                <DialogFormCategory/>
            </div>
            <CategoriesDataTable columns={categoriesColumns} data={categories}/>
        </div>
    )
}