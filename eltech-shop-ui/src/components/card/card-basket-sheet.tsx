import * as React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Basket } from "@/lib/basket/models/basket.model";
import { ShoppingBag } from "lucide-react";
import CardBasketLineSheet from "./card-basket-line-sheet";
import { ButtonBase } from "../buttons/button-base";

export function CardBasketSheet() {
const basket: Basket = {
  id: "basket_001",
  userId: "user_001",
  items: [
    {
      product: {
        name: "Robe d'été légère",
        description: "Robe fluide et légère pour les journées chaudes.",
        detail: "Tissu respirant, motifs floraux, longueur au genou.",
        image: "robe-ete.jpeg",
        imageUrl: "robe-ete.webp",
        is_new: false,
        in_stock: false,
        brand: "Zara",
        color: "Rose",
        category: {
          id: 1,
          name: "Vêtements Femmes",
        },
        quantity: 30,
        price: 39.99,
      },
      quantity: 2,
      totalPrice: 58.6,
    },
    {
      product: {
        name: "Baskets Air Max",
        description:
          "Baskets confortables et stylées pour le sport ou la ville.",
        detail: "Semelle rembourrée, disponibles en plusieurs tailles.",
        image: "baskets.webp",
        imageUrl: "basket-airmax.jpeg",
        is_new: false,
        in_stock: false,
        brand: "Nike",
        color: "Blanc",
        category: {
          id: 1,
          name: "Vêtements",
        },
        quantity: 25,
        price: 89.99,
      },
      quantity: 2,
      totalPrice: 58.6,
    },
    {
      product: {
        name: "Pantalon de sport",
        description: "Pantalon léger et extensible pour le fitness ou le yoga.",
        detail: "Tissu respirant, disponible en plusieurs tailles.",
        image: "pantalon.jpg",
        imageUrl: "pantalon.jpg",
        is_new: true,
        in_stock: true,
        brand: "Adidas",
        color: "Bleu",
        category: {
          id: 1,
          name: "Vêtements",
        },
        quantity: 20,
        price: 34.99,
      },
      quantity: 2,
      totalPrice: 58.6,
    },
  ],
  totalPrice: 58.6,
  createdAt: "2025-01-15T04:05:18.106383",
  updatedAt: "2025-01-15T04:05:18.106385",
};
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingBag />
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Mon panier</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 items-center">
          {[...basket.items, ...basket.items, ...basket.items]?.map((basketItem, index) => (
            <React.Fragment key={index}>
              <CardBasketLineSheet basketItem={basketItem} />
            </React.Fragment>
          ))}
        </div>
        <SheetFooter className="text-center mt-3 w-full flex justify-center">
          <SheetClose asChild>
            <ButtonBase type="submit">Passer à la caisse</ButtonBase>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
