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
import { SwitchProduct } from "../ui/switch-product";
import { ButtonAdd } from "../buttons/button-add";
import { ButtonIncrement } from "../buttons/button-increment";
import useCardLogic from "@/hooks/use-card-logic";
import { TypographyShopUi } from "../ui/typograpy-shop-ui";
import {Product} from "@/lib/product/models/product.model";
import CldImage from "@/components/next-cloudinary/cld-image";
import { routeEndpoints } from "@/config/route.config";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card> & { product: Product };

export function CardProduct({ product, className, ...props }: CardProps) {
  const productId__  = product.id as number
  const isStock__ = product.in_stock as boolean
  const {
    isDisplay,
    isActive_,
    isChecked,
    counter,
    handleIsChecked,
    handleClick,
    handleOnMouseEnter,
    handleOnMouseLeave,
    increment,
    decrement,
  } = useCardLogic({ productId__, isStock__ });

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

  const {
    endpoints: {
      products: productsUrl
    }
  } = routeEndpoints

  return (
    <Card
      className={cn("group/card w-[300px] h-[530px] relative", className)}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      {...props}
    >
      <CardHeader>
        <Link href={`${productsUrl}/${product.id}`} className="hover:cursor-pointer hover:duration-400 relative w-full">
          <CldImage
              src={product.imageUrl ?
                  product.imageUrl
                  :
                  process.env.NEXT_PUBLIC_CLOUDINARY_DEFAULT_IMG_URL as string
              }
              alt=""
              width="500"
              height="240"
              crop={{
                type: 'auto',
                source: true,
              }}
          />
        </Link>
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
        {button(product.in_stock as boolean)}
      </CardFooter>
    </Card>
  );
}
