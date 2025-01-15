import React from 'react'

export type Props = {
    value: string;
    color?: 'base' | 'muted' | 'light';
    textSize?: 'h1' |'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
    fontWeight?: 'thin' | 'light' |'normal' | 'medium' | 'semibold' | 'bold' | 'black'; 
    transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal'
    className?: string;
}
export default function TypographyH({
    value,
    color = "base",
    textSize = 'h6',
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
        h1: 'text-6xl',
        h2 : 'text-5xl',
        h3: 'text-4xl',
        h4: 'text-3xl',
        h5: 'text-2xl',
        h6: 'text-xl',
        h7: 'text-md'
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

  return <p className={`${transformClass} ${colorClass} ${sizeClass} ${weightClass} ${className}`}>{value}</p>;
}
