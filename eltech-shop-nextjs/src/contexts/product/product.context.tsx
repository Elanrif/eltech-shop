"use client";

import { Product } from "@/lib/basket/models/basket.model";
import { eltechShopData } from "@/lib/eltech-shop-data";
import { createContext, ReactNode, useContext } from "react";

const productContext = createContext([] as Product[])

export default function ProductProvider({children}: {children: ReactNode}) {
    const value = eltechShopData.products;

    return (
        <productContext.Provider value={value}>
            {children}
        </productContext.Provider>
    )

}

export function useProductContext() {
    const context = useContext(productContext);
    if(!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
}