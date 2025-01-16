"use client";
import { Switch } from "@/components/ui/switch";
import TypographyLabel from "./ui/typography-label";
import React from "react";

export interface Props {
    id: string
    name: string
}
export function AppSwitch(data:Props) {
   
  return (
    <span className="flex items-center space-x-2">
      <Switch id={data.id}/>
      <TypographyLabel
        value={data.name}
        textSize="sm"
        color="muted"
        htmlFor={data.id}
      />
    </span>
  );
}
