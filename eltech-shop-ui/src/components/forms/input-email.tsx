import * as React from 'react'
import { Input } from '../ui/input'
import { Facebook } from 'lucide-react'

export default function InputEmail(
    {className, ...props}: React.ComponentPropsWithoutRef<"input"> & {className?:string},ref: React.Ref<HTMLInputElement>
) {
    return <Input icon={<Facebook />} ref={ref} className={className} {...props} />;
}