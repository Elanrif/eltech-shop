"use client";
import * as React from 'react'
import { ButtonShopUi } from "../ui/button-shop-ui";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const ButtonIncrementVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
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
        base: "h-9 p-0",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
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
}
export type CounterProps = {
  count: number;
  increment: (step?: number) => void;
  decrement: (step?: number) => void;
};

const ButtonIncrement = React.forwardRef<
  HTMLButtonElement,
  ButtonIncrementProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <div
      className={cn(
        ButtonIncrementVariants({ variant, size, className }),
        "flex gap-0 items-center"
      )}
    >
      <ButtonShopUi
        className={cn(
          ButtonIncrementVariants({ variant, size, className }),
          "w-full h-full hover:bg-shop-secondary bg-shop-muted/30"
        )}
        ref={ref}
        {...props}
        onClick={() => decrement(1)}
      >
        -
      </ButtonShopUi>
      <button className="w-full h-full text-center bg-shop-muted/90">
        {count}
      </button>
      <ButtonShopUi
        className={cn(
          ButtonIncrementVariants({ variant, size, className }),
          "w-full h-full hover:bg-shop-secondary bg-shop-muted/30"
        )}
        ref={ref}
        {...props}
        onClick={() => increment(1)}
      >
        +
      </ButtonShopUi>
    </div>
  );
});
ButtonIncrement.displayName = "ButtonIncrement";

export { ButtonIncrement, ButtonIncrementVariants };