"use client";

import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Product} from "@/lib/product/models/product.model";
import {getProducts} from "@/lib/product/services/product.client.service";

export interface ProductContextType {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
const productContext = createContext<ProductContextType | undefined>(undefined);

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
        <productContext.Provider value={{products,setProducts}}>
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

export function useCurrentProduct(){
    const {products,setProducts} = useProductContext();

    useEffect(() => {

        /*Immediately Invoked Function Expression,IIFE*/
        ( async() => {
            const fetchProducts = await getProducts();
            setProducts(fetchProducts);
        })();
    }, [setProducts]);

    return products;
}
