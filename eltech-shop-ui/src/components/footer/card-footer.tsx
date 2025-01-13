import React from 'react'
import TypographyP from '../ui/typography-p';

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
        <TypographyP value={data.value} transform="uppercase" textSize='xs' fontWeight='normal' />
      </div>
        {data.bar && <span className="w-[1px] bg-slate-500 h-10" />}
    </div>
  );
}
