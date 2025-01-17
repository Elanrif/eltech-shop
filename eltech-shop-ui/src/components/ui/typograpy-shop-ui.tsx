import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const typograpyVariants = cva("text-shop-muted", {
  variants: {
    variant: {
      default: "text-shop-primary",
      primary: "text-shop-primary",
      muted: "text-shop-muted"
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-3xl",
    },
    transform: {
      default: "normalcase",
      upper: "uppercase",
      lower: "lowervase",
      capitalize: "capitalize"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    transform: "default"
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typograpyVariants> {}
const TypographyShopUi = React.forwardRef<HTMLParagraphElement, TypographyProps>(({className, variant, size, ...props}, ref) => {
  return (
    <p 
    className={cn(typograpyVariants({variant, size,className}), className)}
    ref={ref}
    {...props}
    />
  )
});

TypographyShopUi.displayName = "TypograpyShopUi"

export {TypographyShopUi, typograpyVariants}