import { Button } from "@/components/ui/button";
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
import { ShoppingBag } from "lucide-react";

export function CardBasketSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingBag />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Mon panier</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            Details de produits
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            description produits
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Passer à la caisse</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
