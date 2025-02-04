import React from 'react'

export type Props = {
  value: string;
  color?: "base" | "muted" | "light";
  textSize?: "xs" | "sm" | "base" | "lg" | "xl";
  fontWeight?:
    | "thin"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "black";
  transform?: "uppercase" | "lowercase" | "capitalize" | "normal";
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export default function TypographyLabel({
    value,
    color = "base",
    textSize = 'sm',
    fontWeight = 'normal',
    transform = 'normal',
    className = '',
    ...props
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

  return (
    <label
      className={`${transformClass} ${colorClass} ${sizeClass} ${weightClass} ${className}`}
      {...props}
    >
      {value}
    </label>
  );
}
