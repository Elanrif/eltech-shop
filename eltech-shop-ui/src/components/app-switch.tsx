"use client";
import { Switch } from "@/components/ui/switch";
import TypographyLabel from "./ui/typography-label";
import React from "react";

export interface Props {
    id: string
    name: string
}
export function AppSwitch(data:Props) {
    const [checked,setChecked] = React.useState(false);
    
    const onChange = ()=> {
        setChecked(true)
    }

  return (
    <div className="flex items-center space-x-2">
      <Switch id={data.id} checked={checked} onCheckedChange={onChange} />
      <TypographyLabel
        value={data.name}
        textSize="sm"
        color="muted"
        htmlFor={data.id}
      />
    </div>
  );
}
