import { Facebook } from "lucide-react";
import { Input } from "../ui/input";
import React from "react";


const InputLabel = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & {className?: string}>(
    ({ className, ...props }, ref) => {
        return <Input
            icon={<Facebook />}
            ref={ref}
            className={className}
            {...props}
          />
    }
);

InputLabel.displayName = "InputLabel";

export { InputLabel}