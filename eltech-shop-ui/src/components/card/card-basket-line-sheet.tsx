import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TypographyH from "@/components/ui/typography-h";
import TypographyP from "@/components/ui/typography-p";
import TypographyA from "@/components/ui/typography-a";
import Image from "next/image";
import { BasketItem } from "@/lib/basket/models/basket.model";
import { ButtonIncrement } from "../buttons/button-increment";
import { useCounter } from "@/lib/hooks/useIncrement";


export default function CardBasketLineSheet({ basketItem }: { basketItem: BasketItem }) {
    const { counter, increment, decrement } = useCounter(1)
  return (
    <Card className="flex items-center gap-1 bg-shop-accent/30">
      <CardHeader>
        <div className="relative w-36 h-[100px]">
          <Image
            src={`/assets/products/${basketItem.product?.imageUrl}`}
            alt={`image product ${basketItem.product?.imageUrl}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex py-3 flex-col gap-3">
        <TypographyH
          value={basketItem.product?.name}
          textSize="h7"
          fontWeight="semibold"
          className="max-w-[24rem]"
        />
        <TypographyP
          value={basketItem.product?.name}
          textSize="sm"
          className="max-w-[24rem]"
        />
        <TypographyA value={basketItem.product?.name} url={"#"} textSize="sm" />
        <ButtonIncrement size={"xs"} counter={counter} increment={increment} decrement={decrement}/>
      </CardContent>
    </Card>
  );
}
