import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import TypographyLabel from "./ui/typography-label";

export interface Props {
    id: string
    name: string
}
export function AppSwitch(data:Props) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={data.id} />
      <TypographyLabel
        value="Je suis un nouveau client"
        textSize="sm"
        color="muted"
        htmlFor={data.id}
      />
      <Label htmlFor={data.id}>{data.name}</Label>
    </div>
  );
}
