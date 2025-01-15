import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import TypographyP from "../ui/typography-p";
import TypographyH from "../ui/typography-h";
type CardProps = React.ComponentProps<typeof Card>;

export function CardProduct({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[300px]", className)} {...props}>
      <CardHeader>
        <Image
          src={`/assets/soldes.webp`}
          alt={`image product`}
          width={1040}
          height={450}
          className="object-cover"
        />
        <TypographyP value={"Nouveau"} color="light" className="w-32 p-2 bg-shop-primary"/>
        <TypographyP value="En stock" className="w-full text-end pr-4 pb-2"/>
      </CardHeader>
      <CardContent className="grid gap-4 my-7">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div className="flex flex-col gap-3 justify-start">
            <TypographyH value="olivia garden" transform="uppercase" fontWeight="semibold"/>
            <TypographyP value="coloration ton sur ton couleur touch" transform="uppercase"/>
            <TypographyP value="29,3 €"/>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full h-12">
          <Check /> Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  );
}
