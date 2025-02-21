import * as React from "react"

import { cn } from "@/lib/utils"
import { LucideProps } from "lucide-react";

export type PropsInput = {
  variant?: "base" | "md" | "lg" | "xl";
  iconClass?: string;
  className?: string;
};
const Input = React.forwardRef<
  HTMLInputElement,
  {iconClass?: string} &
  React.ComponentProps<"input"> &
   {
    icon?: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  }
>(({ className, type, iconClass = 'right-10 top-2', icon:Icon, ...props }, ref) => {
  return (
    <div className={cn("flex justify-between group relative")}>
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus:ring-2 focus:ring-bg focus-visible:ring-5 focus-visible:ring-shop-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
      {Icon && <Icon className={cn("relative group-focus-within:text-shop-secondary text-shop-muted", iconClass)} />}
    </div>
  );
});
Input.displayName = "Input"

export { Input }
