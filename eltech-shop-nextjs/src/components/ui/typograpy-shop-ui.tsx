import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import Link from "next/link";

const typographyVariants = cva("text-shop-muted", {
  variants: {
    variant: {
      default: "text-shop-muted",
      primary: "text-shop-primary",
      muted: "text-shop-muted",
      foreground: "text-shop-foreground"
    },
    size: {
      default: "text-base",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-3xl",
    },
    transform: {
      default: "normal-case",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
    fontWeight: {
      default: "font-normal",
      thin: "font-thin",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    transform: "default",
    fontWeight: "default",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLAnchorElement>,
    VariantProps<typeof typographyVariants> {
  isLink?: boolean;
  href?: string;
}

const TypographyShopUi = React.forwardRef<
  HTMLParagraphElement | HTMLAnchorElement,
  TypographyProps
>(
  (
    {
      className,
      variant,
      transform,
      fontWeight,
      isLink = false,
      size,
      href,
      ...props
    },
    ref
  ) => {
    if (isLink && href) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          passHref
          className={cn(
            typographyVariants({ variant, transform, fontWeight, size }),
            "hover:cursor-pointer hover:text-shop-secondary",
            className
          )}
          {...props}
        />
      );
    }

    return (
      <p
        ref={ref as React.Ref<HTMLParagraphElement>}
        className={cn(
          typographyVariants({ variant, transform, fontWeight, size }),
          className
        )}
        {...props}
      />
    );
  }
);

TypographyShopUi.displayName = "TypographyShopUi";

export { TypographyShopUi, typographyVariants };
