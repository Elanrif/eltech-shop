import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

const inputVariants = cva(
  "group text-shop-muted flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus:ring-2 focus:ring-bg focus-visible:ring-5 focus-visible:ring-shop-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "w-full py-6 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
      icon?: React.ReactNode
      widthOption?: string
    }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, widthOption="w-full", icon, variant, ...props }, ref) => {
    
    if(icon) {
      return (
        <div
          className={
            `flex relative justify-between items-center ${widthOption}`}
        >
          <input
            type={type}
            className={cn(inputVariants({ variant, className }))}
            ref={ref}
            {...props}
          />
          <div className="group-focus-within:text-shop-secondary absolute right-2">
            {icon}
          </div>
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
)
Input.displayName = "Input"

export { Input }
