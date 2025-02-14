"use client";

import { Product } from "@/lib/product/models/product.model";
import { getProductById } from "@/lib/product/services/product.client.service";
import { useEffect, useState } from "react";

export function useProductById(productId: number) {
  const [product, setProduct] = useState<Product>();
  const [amount, setAmount] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      const product = await getProductById(productId);

      setTimeout(() => {
        if (product) {
          const amount_ = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(product?.price);
          setProduct(product);
          setAmount(amount_);
        }
      }, 3000);
    })();
  }, [productId]);

  return {
    product,
    amount,
  };
}
