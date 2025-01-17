"use client";
import * as React from 'react'
import { Input } from '../ui/input'
import { Lock, Unlock } from 'lucide-react'
import { cn } from '@/lib/utils';
import TypographyLabel from '../ui/typography-label';
import { usePasswordContext } from './context/password-context';

export type PropsPassword = {
    variant?: 'base' | 'md' | 'lg' | 'xl';
    display?: boolean;
    className?: string;
}
function InputPassword(
    {variant = 'lg', display=false, className, ...props}: React.ComponentPropsWithoutRef<"input"> & PropsPassword ,ref: React.Ref<HTMLInputElement>
) {
    const { isPasswordVisible, togglePasswordVisibility} = usePasswordContext();
    const variantClass = {
      base: "text-sm py-4 xs:w-[10rem]",
      md: "text-md md:w-[30rem] py-5",
      lg: "w-full lg:w-[50rem] py-5 px-5",
      xl: "py-4 px-6 w-full xl:w-[64rem] py-5 px-5",
    }[variant];
    
    const typeInput = isPasswordVisible ? 'text': 'password';
    const lockIcon = isPasswordVisible ? <Unlock/> : <Lock/>

    return (
      <div>
        <Input
          type={typeInput}
          icon={lockIcon}
          ref={ref}
          className={cn(className, variantClass)}
          {...props}
        />
        {display && (
          <div className="flex gap-2 mt-3 items-center">
            <input
              id="display-pwd"
              type="checkbox"
              checked={isPasswordVisible}
              onChange={togglePasswordVisibility}
            />
            <TypographyLabel
              htmlFor="display-pwd"
              value="afficher le mot de passe"
              className="mt-0"
            />
          </div>
        )}
      </div>
    );
}

export default React.forwardRef(InputPassword);