"use client";

import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Product} from "@/lib/product/models/product.model";
import {getProducts} from "@/lib/product/services/product.client.service";

const productContext = createContext<Product[]>([])

export default  function ProductProvider({children}: {children: ReactNode}) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        /*Immediately Invoked Function Expression,IIFE*/
        (async () => {
            const data = await getProducts();
            setProducts(data);
        })();

    }, []);
    return (
        <productContext.Provider value={products}>
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