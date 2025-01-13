import React from 'react'

export type Props = {
    value: string;
    color?: 'base' | 'muted' | 'light';
    textSize?: 'sm' | 'md' | 'lg' | 'xl';
    fontWeight?: 'normal' | 'bold' | 'light'; 
    className?: string;
}
export default function TypographyP({
    value,
    color = "base",
    textSize = 'md',
    className = ''
}: Props) {
    const sizeClass = {
        sm : 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
    }[textSize];

    const weightClass = {
    normal: 'font-normal',
    bold: 'font-bold',
    light: 'font-light',
  }

  return <p className={`${color} ${sizeClass} ${weightClass} ${className}`}>{value}</p>;
}
