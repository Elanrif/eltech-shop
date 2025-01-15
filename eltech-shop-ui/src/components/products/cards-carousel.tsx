"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardProduct } from "./card-product";
import { useProductContext } from "@/contexts/product/product.context";

export function CardsCarousel() {
  const products = useProductContext();
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[75rem]"
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <CardProduct product={product}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
