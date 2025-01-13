import React from 'react'
import TypographyA from '../ui/typography-a';

export type Props = {
    icon: React.JSX.Element;
    value: string;
    bar?: boolean;
}
export default function CardFooter({data}:{data:Props}) {
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
        {data.icon}
        <TypographyA value={data.value} transform='uppercase'/>
        {data.bar && <></>}
    </div>
  )
}
