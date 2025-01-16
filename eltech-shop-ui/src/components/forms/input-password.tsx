"use client";
import * as React from 'react'
import { Input } from '../ui/input'
import { Lock, Unlock } from 'lucide-react'
import { cn } from '@/lib/utils';
import TypographyLabel from '../ui/typography-label';

export type PropsPassword = {
    variant?: 'base' | 'md' | 'lg' | 'xl';
    className?: string;
}
function InputPassword(
    {variant = 'lg', className, ...props}: React.ComponentPropsWithoutRef<"input"> & PropsPassword ,ref: React.Ref<HTMLInputElement>
) {
    const [isChecked, setIsChecked] = React.useState(false);
    const handleCheckboxChange = () => {
      setIsChecked((prev) => !prev);
    };
    const variantClass = {
      base: "text-sm py-4 xs:w-[10rem]",
      md: "text-md md:w-[30rem] py-5",
      lg: "w-full lg:w-[50rem] py-5 px-5",
      xl: "py-4 px-6 w-full xl:w-[64rem] py-5 px-5",
    }[variant];
    
    const typeInput = isChecked ? 'text': 'password';
    const lockIcon = isChecked ? Unlock : Lock

    return (
      <div>
        <Input
          type={typeInput}
          icon={lockIcon}
          ref={ref}
          className={cn(className, variantClass)}
          {...props}
        />
        <div className="flex gap-2 mt-3 items-center">
          <input
            id="display-pwd"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <TypographyLabel htmlFor='display-pwd' value="afficher le mot de passe" className="mt-0" />
        </div>
      </div>
    );
}

export default React.forwardRef(InputPassword);