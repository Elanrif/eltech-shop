import React from 'react'
import { TypographyShopUi } from '../ui/typograpy-shop-ui';

export type Props = {
    icon: React.JSX.Element;
    value: string;
    bar?: boolean;
}
export default function CardFooter({data}:{data:Props}) {
  return (
    <div className='flex my-3 gap-5 items-center'>
      <div className="flex flex-col gap-4 justify-center items-center">
        {data.icon}
        <TypographyShopUi>{data.value}</TypographyShopUi>
      </div>
        {data.bar && <span className="w-[1px] bg-slate-500 h-10" />}
    </div>
  );
}
