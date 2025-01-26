"use client";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Search, Heart, X } from "lucide-react";
import Logo from "@/components/logo";
import { Input } from "../ui/input";
import { MenuUser } from "./menu-user";
import { CardBasketSheet } from "../card/card-basket-sheet";
import { TypographyShopUi } from "../ui/typograpy-shop-ui";
import { TypographyHeading } from "../ui/typography-heading";

export default function HeaderBase() {
  const [display, setDisplay] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return false;
  }

  const handleDisplay = () => {
    setDisplay(!display);
    console.log("cliqué");
  };

  const subMenu: {value: string}[] = [
    {
      value: "soldes",
    },
    {
      value: "produits",
    },
    {
      value: "collection",
    },
    {
      value: "La marque",
    },
  ];

  const iconsData = [
    {
      name: "CircleUser",
      component: <MenuUser />,
    },
    { name: "Search", component: <Search />, click: true },
    { name: "Heart", component: <Heart /> },
    { name: "ShoppingBad", component: <CardBasketSheet /> },
  ];
  return (
    <div>
      <div className="flex justify-between items-center gap-[10rem]">
        <Logo />
        <TypographyShopUi
        className="text-sm font-thin text-shop-muted"
        >SOLDES | -10% supplémentaires dès 2 articles</TypographyShopUi>
        <div className="flex gap-3 items-center">
          {iconsData.map((icon, index) => (
            <div key={index}>
              {icon.click === true
                ? React.cloneElement(icon.component, {
                    onClick: handleDisplay,
                    className: "size-5 hover:cursor-pointer",
                  })
                : React.cloneElement(icon.component, {
                    className: "size-5 hover:cursor-pointer",
                  })}
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

      <div className="text-center mt-3">
        <TypographyHeading
          isLink={true}
          href="/"
        >eltech-shop</TypographyHeading>
        <div className="flex gap-3 items-center justify-center mt-3">
          {subMenu.map((payload, index) => {
            return (
              <React.Fragment key={index}>
                <TypographyShopUi isLink={true} href="#">{payload.value}</TypographyShopUi>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
