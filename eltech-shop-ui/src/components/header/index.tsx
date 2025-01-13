import React from "react";
import TypographyP from "@/components/ui/typography-p";
import { ModeToggle } from "@/components/mode-toggle";
import { CircleUser, Search, Heart, ShoppingBag } from "lucide-react";
import Logo from "@/components/logo";

export default function HeaderBase() {
  
  return (
    <div>
      <div className="flex justify-between items-center gap-[10rem]">
        <Logo/>
        <TypographyP value="SOLDES | -10% supplémentaires dès 2 articles" textSize="sm" fontWeight="bold"/>
        <div className="flex gap-3 items-center">
          <CircleUser className="size-5"/>
          <Search className="size-5"/>
          <Heart className="size-5"/>
          <ShoppingBag className="size-5"/>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
