import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { TypographyShopUi } from "./typograpy-shop-ui";

const typographyHeadingVariants = cva("text-shop-muted", {
  variants: {
    variant: {
      default: "text-shop-primary",
      primary: "text-shop-primary",
      muted: "text-shop-muted",
    },
    size: {
      default: "text-3xl",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-3xl",
    },
    transform: {
      default: "uppercase",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
      nomal: "normal-case"
    },
    fontWeight: {
      default: "font-medium",
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
    VariantProps<typeof typographyHeadingVariants> {
  isLink?: boolean;
  href?: string;
}

const TypographyHeading = React.forwardRef<
  HTMLParagraphElement | HTMLAnchorElement,
  TypographyProps
>(
  (
    {
      className,
      variant,
      transform,
      fontWeight,
      size,
      ...props
    },
    ref
  ) => {

    return (
      <TypographyShopUi
        ref={ref as React.Ref<HTMLParagraphElement>}
        className={cn(
          typographyHeadingVariants({ variant, transform, fontWeight, size }),
          className
        )}
        {...props}
      />
    );
  }
);

TypographyHeading.displayName = "TypographyHeading";

export { TypographyHeading, typographyHeadingVariants };
