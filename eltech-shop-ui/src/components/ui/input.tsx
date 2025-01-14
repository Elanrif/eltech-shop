import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & {icon?: React.JSX.Element}>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus:ring-2 focus:ring-bg focus-visible:ring-5 focus-visible:ring-shop-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && React.cloneElement(icon, {
          className: cn("absolute rigt-3 text-shop-muted flex items-center"),
        })}
      </div>
    );
  }
)
Input.displayName = "Input"

export { Input }
