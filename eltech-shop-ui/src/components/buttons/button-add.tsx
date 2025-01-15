import React from 'react'
import { ButtonShopUi } from '../ui/button-shop-ui'
import { cn } from "@/lib/utils";
import { ArrowRight } from 'lucide-react';

export interface ButtonAddProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
}
const ButtonAdd = React.forwardRef<HTMLButtonElement,ButtonAddProps>(
    ({ className, ...props}, ref) => {
        return (
          <ButtonShopUi
            variant="secondary"
            className={cn(
              className,
              "group flex items-center gap-4 justify-around w-full h-12"
            )}
            {...props}
            ref={ref}
          >
            <span>Ajouté aux panier</span>
            <ArrowRight className="group-hover:block duration-400 ease-in hidden" />
          </ButtonShopUi>
        );
    }
)
ButtonAdd.displayName = "ButtonAdd"

export {ButtonAdd}

/* 
<ButtonAdd
      onClick={handleClick}
      variant="secondary"
      className="group flex items-center gap-4 justify-around w-full h-12"
    >
      <span>Ajouté aux panier</span>
      <ArrowRight className="group-hover:block duration-400 ease-in hidden" />
    </ButtonAdd>
*/