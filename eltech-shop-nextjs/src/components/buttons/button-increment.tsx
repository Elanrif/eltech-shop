"use client";
import * as React from 'react'
import { ButtonShopUi } from "../ui/button-shop-ui";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Minus, Plus } from 'lucide-react';
import { PayloadProps } from '@/lib/hooks/useIncrement';
const ButtonIncrementVariants = cva(
  "w-full h-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-shop-primary",
        primary: "bg-primary text-shop-foreground shadow hover:bg-shop-primary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-shop-primary text-shop-foreground shadow-sm hover:bg-shop-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        base: "h-12 p-0",
        sm: "h-8  px-3 text-xs",
        xs: "h-7 px-3 text-xs",
        lg: "py-4 text-xs px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "base",
    },
  }
);

export interface ButtonIncrementProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonIncrementVariants> {
  asChild?: boolean;
  counter: PayloadProps;
  increment: (step?: number) => void;
  decrement: (step?: number) => void;
}
/* forwardRed passe 2 argument: type de référence HTMLDivElement et les props ButtonIncrementProps */
const ButtonIncrement = React.forwardRef<
  HTMLButtonElement,
  ButtonIncrementProps
>(({ className, variant, size, counter, increment, decrement, ...props }, ref) => {
  return (
    <div className={cn("bg-black flex gap-0 items-center")}>
      <ButtonShopUi
        className={cn(
          ButtonIncrementVariants({ variant, size, className }),
          "rounded-none hover:bg-shop-secondary bg-shop-muted/60"
        )}
        ref={ref}
        {...props}
        onClick={() => decrement(1)}
      >
        <Minus />
      </ButtonShopUi>
      <ButtonShopUi
        className={cn(
          ButtonIncrementVariants({ variant, size, className }),
          "text-md rounded-none bg-shop-primary/10 "
        )}
        ref={ref}
        {...props}
      >
        {counter?.count}
      </ButtonShopUi>
      <ButtonShopUi
        className={cn(
          ButtonIncrementVariants({ variant, size, className }),
          "rounded-none hover:bg-shop-secondary bg-shop-muted/60"
        )}
        ref={ref}
        {...props}
        onClick={() => increment(1)}
      >
        <Plus />
      </ButtonShopUi>
    </div>
  );
});
ButtonIncrement.displayName = "ButtonIncrement";

export { ButtonIncrement, ButtonIncrementVariants };