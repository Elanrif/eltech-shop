import * as React from 'react'
import { Input } from '../ui/input'
import { Mail } from 'lucide-react'
import { cn } from '@/lib/utils';

export type PropsEmail = {
    variant: 'base' | 'md' | 'lg' | 'xl';
    className: string;
}
function InputEmail(
    {variant = 'lg', className, ...props}: React.ComponentPropsWithoutRef<"input"> & PropsEmail & {className?:string},ref: React.Ref<HTMLInputElement>
) {
    const variantClass = {
      base: "text-sm py-2 px-3",
      md: "text-md py-2.5 px-4",
      lg: "text-lg py-3 px-5",
      xl: "text-xl py-4 px-6",
    }[variant];
    
    return (
      <Input
        icon={<Mail className="size-1" />}
        ref={ref}
        className={cn(className,variantClass)}
        {...props}
      />
    );
}

export default React.forwardRef(InputEmail);