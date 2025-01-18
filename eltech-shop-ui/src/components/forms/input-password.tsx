"use client";
import * as React from 'react'
import { Input } from '../ui/input'
import { Lock, Unlock } from 'lucide-react'
import { cn } from '@/lib/utils';
import TypographyLabel from '../ui/typography-label';
import { usePasswordContext } from './context/password-context';
import { cva, VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  "group text-shop-muted flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus:ring-2 focus:ring-bg focus-visible:ring-5 focus-visible:ring-shop-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "w-full py-8 px-4",
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
      //icon?: React.ReactNode
      widthOption?: string
      display? : boolean
    }
    
const InputPassword =  React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, display=false, widthOption="w-full", variant, ...props }, ref) => {
  const { isPasswordVisible, togglePasswordVisibility } = usePasswordContext();

  const typeInput = isPasswordVisible ? "text" : "password";
  const lockIcon = isPasswordVisible ? <Unlock /> : <Lock />;

  return (
    <div>
      <Input
        type={typeInput}
        icon={lockIcon}
        ref={ref}
        className={cn(inputVariants({ variant, className }),widthOption)}
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
})

InputPassword.displayName = "InputPassword"

export {InputPassword}