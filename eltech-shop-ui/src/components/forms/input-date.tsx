import * as React from 'react'
import { Input } from '../ui/input'
import { Calendar } from 'lucide-react'
import { cn } from '@/lib/utils';

export type PropsEmail = {
    variant?: 'base' | 'md' | 'lg' | 'xl';
    className?: string;
}
function InputDate(
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
        type='date'
        icon={Calendar}
        ref={ref}
        className={cn(className,variantClass)}
        {...props}
      />
    );
}

export default React.forwardRef(InputDate);