import { User } from "lucide-react";
import { Input } from "../ui/input";
import React from "react";
import { cn } from "@/lib/utils";

export type PropsEmail = {
  variant?: "base" | "md" | "lg" | "xl";
  className?: string;
};

const InputText = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & PropsEmail>(
    ({variant= 'md', className, ...props }, ref) => {
         const variantClass = {
           base: "text-sm py-4 px-3 xs:w-[10rem]",
           md: "text-md md:w-[30rem]",
           lg: "w-full lg:w-[50rem] py-5 px-5",
           xl: "py-4 px-6 w-full xl:w-[64rem] py-5 px-5",
         }[variant];
        return (
          <Input
            icon={<User/>}
            ref={ref}
            className={cn(className, variantClass)}
            {...props}
          />
        );
    }
);

InputText.displayName = "InputText";

export { InputText}