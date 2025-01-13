"use client";
import React from "react";
import TypographyP from "@/components/ui/typography-p";
import { ModeToggle } from "@/components/mode-toggle";
import { CircleUser, Search, Heart, ShoppingBag, X } from "lucide-react";
import Logo from "@/components/logo";
import { Input } from "../ui/input";
import TypographyA from "../ui/typography-a";

export type Props = {
  value: string;
  color?: "base" | "muted" | "light";
  textSize?: "xs" | "sm" | "base" | "lg" | "xl";
  fontWeight?:
    | "thin"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "black";
  transform?: "uppercase" | "lowercase" | "capitalize" | "normal";
  className?: string;
};

export default function HeaderBase() {
  
    const [display, setDisplay] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(()=>{
        setMounted(true);
    },[])

    if(!mounted) {
        return false;
    }

    const handleDisplay = ()=> {
        setDisplay(!display);
        console.log("cliqué")
    }

    const subMenu:Props[] = [
      {
        value: "soldes",
        transform: "capitalize",
        textSize: "sm",
        fontWeight: "thin",
        color: "muted",
      },
      {
        value: "produits",
        transform: "capitalize",
        textSize: "sm",
        fontWeight: "thin",
        color: "muted",
      },
      {
        value: "collection",
        transform: "capitalize",
        textSize: "sm",
        fontWeight: "thin",
        color: "muted",
      },
      {
        value: "La marque",
        transform: "normal",
        textSize: "sm",
        fontWeight: "thin",
        color: "muted",
      },
    ];

    const iconsData = [
        {name: 'CircleUser', component: <CircleUser/>},
        {name: 'Search', component: <Search/>},
        {name: 'Heart', component: <Heart/>},
        {name: 'ShoppingBad', component: <ShoppingBag/>},
    ]
  return (
    <div>
      <div className="flex justify-between items-center gap-[10rem]">
        <Logo />
        <TypographyP
          value="SOLDES | -10% supplémentaires dès 2 articles"
          textSize="sm"
          fontWeight="thin"
          color="muted"
        />
        <div className="flex gap-3 items-center">
          {iconsData.map((icon,index)=> (
            <div key={index}>
                {icon.name === 'Search' ? (
                 React.cloneElement(icon.component, {onClick: handleDisplay})
                ):(
                icon.component
                )}
            </div>
          ))}
          <ModeToggle />
        </div>
      </div>

      <div
        className={`${
          display ? "flex" : "hidden"
        } bg-shop-primary mt-3 p-2 duration-400 ease-in-out rounded-md justify-between px-10 w-full  items-center space-x-2`}
      >
        <div className="flex items-center gap-3">
          <Search className="size-5 text-slate-100" onClick={handleDisplay} />
          <Input
            placeholder="Recherche..."
            className="focus:outline-none w-[500px]"
          />
        </div>
        <X onClick={handleDisplay} className="text-slate-100" />
      </div>

      <div className="text-center">
        <TypographyP
          value="eltech-shop"
          transform="uppercase"
          fontWeight="black"
          textSize="xl"
        />
        <div className="flex gap-3 items-center justify-center mt-3">
            {subMenu.map((payload,index)=>{
                return (
                  <React.Fragment key={index}>
                    <TypographyA
                      color="muted"
                      value={payload.value}
                      transform={payload.transform}
                      fontWeight={payload.fontWeight}
                      textSize={payload.textSize}
                    />
                  </React.Fragment>
                );
            })}
        </div>
      </div>
    </div>
  );
}
