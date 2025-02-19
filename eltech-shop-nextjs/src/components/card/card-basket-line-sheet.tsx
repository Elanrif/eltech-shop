import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { BasketItem } from "@/lib/basket/models/basket.model";
import { ButtonIncrement } from "../buttons/button-increment";
import { useCounter } from "@/hooks/use-counter";
import { TypographyShopUi } from "../ui/typograpy-shop-ui";


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
        <TypographyShopUi
          className="max-w-[24rem]"
        >{basketItem.product?.name}</TypographyShopUi>
        <TypographyShopUi>{basketItem.product?.name}</TypographyShopUi>
        <TypographyShopUi isLink={true} href="#">{basketItem.product?.name}</TypographyShopUi>
        <ButtonIncrement size={"xs"} counter={counter} increment={increment} decrement={decrement}/>
      </CardContent>
    </Card>
  );
}
