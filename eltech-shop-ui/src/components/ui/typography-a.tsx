import Link from 'next/link';
import React from 'react'

export type Props = {
    value: string;
    url?: string;
    color?: 'base' | 'muted' | 'light';
    textSize?: 'xs' |'sm' | 'base' | 'lg' | 'xl';
    fontWeight?: 'thin' | 'light' |'normal' | 'medium' | 'semibold' | 'bold' | 'black'; 
    transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal'
    className?: string;
}
export default function TypographyA({
    value,
    url="#",
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
        muted: "text-shop-muted",
        light: "text-white",
    }[color]

  return <Link href={url} className={`hover:text-shop-secondary transition-all duration-400 ease-in-out ${transformClass} ${colorClass} ${sizeClass} ${weightClass} ${className}`}>{value}</Link>;
}
