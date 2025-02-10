"use client";

import {createContext, useContext, useEffect, useState} from "react";
import {Category} from "@/lib/category/models/category.model";
import {getCategories} from "@/lib/category/services/category.client.service";

const categoryContext = createContext<Category[]>([])

export default  function CategoryProvider({ children }: { children: React.ReactNode }) {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        /*Immediately Invoked Function Expression,IIFE*/
        (async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        })();

    }, []);

    return (
        <categoryContext.Provider value={categories}>
            {children}
        </categoryContext.Provider>
    )
}

export function useCategoryContext() {
    const context = useContext(categoryContext);
    if (!context) {
        throw new Error('useCategoryContext must be used to use a context');
    }
    return context;
}