import * as React from 'react'
import { Input } from '../ui/input'
import { Mail } from 'lucide-react'
import { cn } from '@/lib/utils';

export type PropsEmail = {
    variant?: 'base' | 'md' | 'lg' | 'xl';
    className?: string;
}
function InputEmail(
    {variant = 'lg', className, ...props}: React.ComponentPropsWithoutRef<"input"> & PropsEmail ,ref: React.Ref<HTMLInputElement>
) {
    const variantClass = {
      base: "text-sm py-4 xs:w-[10rem]",
      md: "text-md md:w-[30rem] py-5",
      lg: "w-full lg:w-[50rem] py-5 px-5",
      xl: "py-4 px-6 w-full xl:w-[64rem] py-5 px-5",
    }[variant];
    
    return (
      <Input
        icon={Mail}
        ref={ref}
        className={cn(className,variantClass)}
        {...props}
      />
    );
}

export default React.forwardRef(InputEmail);