import React from 'react'
import { TypographyShopUi } from '../ui/typograpy-shop-ui';

export type Props = {
    icon: React.JSX.Element;
    value: string;
    bar?: boolean;
}
export default function CardFooter({data}:{data:Props}) {
  return (
    <div className='group/links hover:cursor-pointer flex my-3 gap-5 items-center'>
      <div className="flex group-hover/links:text-shop-secondary flex-col gap-4 justify-center items-center">
        {data.icon}
        <TypographyShopUi className='group-hover/links:text-shop-secondary' transform={"uppercase"} size={"sm"}>{data.value}</TypographyShopUi>
      </div>
        {data.bar && <span className="w-[1px] bg-slate-500 h-10" />}
    </div>
  );
}
