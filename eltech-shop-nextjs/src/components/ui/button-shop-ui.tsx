import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex rounded-xl rounded items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-shop-secondary",
        primary: "bg-primary text-shop-foreground shadow hover:bg-shop-primary/80",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-primary text-primary-foreground shadow hover:bg-shop-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-2.5 text-sm",
        base: "px-6 py-2.5 text-sm",
        xs: "px-4 py-2 text-xs",
        sm: "px-6 py-2.5 text-sm",
        md: "px-7 py-3 text-md",
        lg: "px-24 py-4 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean,
  icon?: React.ReactNode
}

const ButtonShopUi = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className,children, variant, size, icon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }),`${icon && "flex justify-between items-center"}`)}
        ref={ref}
        {...props}
      >
      {children}  {icon && icon}
      </Comp>
    )
  }
)
ButtonShopUi.displayName = "ButtonShopUi"

export { ButtonShopUi, buttonVariants }
