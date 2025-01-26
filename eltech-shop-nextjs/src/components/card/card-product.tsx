"use client";
import * as React from "react";
import { Heart } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Product } from "@/lib/basket/models/basket.model";
import { SwitchProduct } from "../ui/switch-product";
import { ButtonAdd } from "../buttons/button-add";
import { ButtonIncrement } from "../buttons/button-increment";
import useCardLogic from "@/lib/hooks/useCardLogic";
import { TypographyShopUi } from "../ui/typograpy-shop-ui";

type CardProps = React.ComponentProps<typeof Card> & { product: Product };

export function CardProduct({ product, className, ...props }: CardProps) {
  const {
    isDisplay,
    isActive_,
    isChecked,
    handleIsChecked,
    handleClick,
    handleOnMouseEnter,
    handleOnMouseLeave,
    counter,
    increment,
    decrement,
  } = useCardLogic(product.in_stock);

   const button = (isStock: boolean) =>{
     if(isActive_ && isStock){
      return(
       <ButtonIncrement
         counter={counter}
         increment={increment}
         decrement={decrement}
       />)
     }
     return <ButtonAdd 
              onClick={handleClick} 
              className={`${!isStock && 
                    "hover:cursor-not-allowed hover:bg-shop-muted"}`} 
              />
   }

  return (
    <Card
      className={cn("group/card w-[300px] h-[530px] relative", className)}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      {...props}
    >
      <CardHeader>
        <div className="relative w-full h-[150px]">
          <Image
            src={`/assets/products/${product.imageUrl}`}
            alt={`image product ${product.imageUrl}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {product.is_new && (
          <TypographyShopUi
            variant={"foreground"}
            className="w-32 p-2 bg-shop-primary"
          >
            Nouveau
          </TypographyShopUi>
        )}
        <TypographyShopUi
          className={cn(`w-full text-end pr-4 pb-2`, product.in_stock ? "text-shop-muted" : "text-shop-danger")}
        >
          {product.in_stock ? "En stock" : "Rupture de stock"}
        </TypographyShopUi>
      </CardHeader>
      <CardContent className="grid gap-4 my-3">
        <div
          className="group hover:cursor-pointer flex items-center space-x-4 rounded-md border p-4"
          onClick={handleIsChecked}
        >
          <Heart className={`${isChecked && "text-shop-secondary"}`} />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Favoris</p>
            <p
              className={`${
                isChecked && "text-shop-secondary"
              } text-sm text-muted-foreground`}
            >
              {isChecked ? "Produit ajouté" : "Ajouté aux favoris"}
            </p>
          </div>
          <SwitchProduct checked={isChecked} />
        </div>
        <div className="flex flex-col gap-3 justify-start">
          <TypographyShopUi
            transform="uppercase"
            variant={"primary"}
            fontWeight={"semibold"}
          >
            {product.name}
          </TypographyShopUi>
          <TypographyShopUi
            transform="uppercase"
            variant={"primary"}
            size={"xs"}
            fontWeight={"medium"}
          >
            {product.description}
          </TypographyShopUi>
          <TypographyShopUi transform="uppercase" variant={"primary"}>
            {product.price} €
          </TypographyShopUi>
        </div>
      </CardContent>
      <CardFooter
        className={`${
          isDisplay ? "block" : "hidden"
        } p-0 absolute bottom-0 w-full`}
      >
        {button(product.in_stock)}
      </CardFooter>
    </Card>
  );
}
