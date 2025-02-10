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
import { useProductContext } from "@/contexts/product.context";

export function CardsCarousel() {
  const products = useProductContext();
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[100rem]"
    >
      <CarouselContent>
        {products.map((product, index) => (
          /* basis-1/n va afficher n elements */
          <CarouselItem key={index} className="lg:basis-1/4">
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
