import React from 'react'
import { ButtonShopUi } from '../ui/button-shop-ui'
import { cn } from "@/lib/utils";
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-shop-primary text-shop-foreground shadow hover:bg-shop-secondary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-10 rounded-md px-8",
        lg: "h-12 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants> {
    asChild?: boolean
}
const ButtonBase = React.forwardRef<HTMLButtonElement,ButtonBaseProps>(
    ({ className,variant, size, ...props}, ref) => {
        return (
          <ButtonShopUi
            variant="secondary"
            className={cn(buttonVariants({ variant, size, className}))}
            {...props}
            ref={ref}
          />
        );
    }
)
ButtonBase.displayName = "ButtonBase"

export {ButtonBase}