"use client";
import * as React from "react";
import { ArrowRight, Heart } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import TypographyP from "../ui/typography-p";
import { Product } from "@/lib/basket/models/basket.model";
import { SwitchProduct } from "../ui/switch-product";
import { ButtonAdd } from "../buttons/button-add";
import { ButtonIncrement } from "../buttons/button-increment";
import { useCounter } from "@/lib/hooks/useIncrement";

type CardProps = React.ComponentProps<typeof Card> & { product: Product };

export function CardProduct({ product, className, ...props }: CardProps) {
  const [isActive, setIsActive] = React.useState(false);
  const [isChecked, setIschecked] = React.useState(false);
  const {count, increment, decrement} = useCounter(1);
  const handleIsChecked = () => {
    setIschecked(!isChecked);
  };

  const handleClick = () => {
        setIsActive(true);
  }
  const button = !isActive ? (
    <ButtonAdd
      onClick={handleClick}
      variant="secondary"
      className="group flex items-center gap-4 justify-around w-full h-12"
    >
      <span>Ajouté aux panier</span>
      <ArrowRight className="group-hover:block duration-400 ease-in hidden" />
    </ButtonAdd>
  ) : (
    <ButtonIncrement className="w-full h-12" count={count} increment={increment} decrement={decrement} />
  );
  return (
    <Card className={cn("w-[300px] h-[500px] relative", className)} {...props}>
      <CardHeader>
        <Image
          src={`/assets/${product.imageUrl}`}
          alt={`image product ${product.imageUrl}`}
          width={1040}
          height={450}
          className="object-cover"
        />
        {product.is_new && (
          <TypographyP
            value={"Nouveau"}
            color="light"
            className="w-32 p-2 bg-shop-primary"
          />
        )}
        <TypographyP value="En stock" className="w-full text-end pr-4 pb-2" />
      </CardHeader>
      <CardContent className="grid gap-4 my-7">
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
          <TypographyP
            value={product.name}
            transform="uppercase"
            fontWeight="semibold"
            textSize="sm"
            color="base"
          />
          <TypographyP
            value={product.description}
            transform="uppercase"
            textSize="xs"
            color="base"
          />
          <TypographyP value={`${product.price} €`} color="base" />
        </div>
      </CardContent>
      <CardFooter className="absolute bottom-0 w-full">{button}</CardFooter>
    </Card>
  );
}
