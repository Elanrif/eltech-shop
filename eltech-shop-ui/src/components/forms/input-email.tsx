import * as React from 'react'
import { Input } from '../ui/input'
import { Mail } from 'lucide-react'

function InputEmail(
    {className, ...props}: React.ComponentPropsWithoutRef<"input"> & {className?:string},ref: React.Ref<HTMLInputElement>
) {
    return <Input icon={<Mail className='size-1'/>} ref={ref} className={className} {...props} />;
}

export default React.forwardRef(InputEmail);