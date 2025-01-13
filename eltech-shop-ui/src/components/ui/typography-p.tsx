import React from 'react'

export type Props = {
    value: string;
    color?: 'base' | 'muted' | 'light';
    textSize?: 'xs' |'sm' | 'base' | 'lg' | 'xl';
    fontWeight?: 'thin' | 'light' |'normal' | 'medium' | 'semibold' | 'bold' | 'black'; 
    transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal'
    className?: string;
}
export default function TypographyP({
    value,
    color = "base",
    textSize = 'base',
    fontWeight = 'normal',
    transform = 'normal',
    className = ''
}: Props) {

    const transformClass = {
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        capitalize: 'capitalize',
        normal: 'normal-case'
    }[transform];

    const sizeClass = {
        xs: 'text-xs',
        sm : 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
    }[textSize];

    /* si fontWeight = "black", alors weightClass = {black: "font-black"} */
    const weightClass = {
      thin: "font-thin",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    }[fontWeight];

    const colorClass = {
        base: "text-black",
        muted: "text-slate-500",
        light: "text-white",
    }[color]

  return <p className={`${transformClass} ${colorClass} ${sizeClass} ${weightClass} ${className}`}>{value}</p>;
}
