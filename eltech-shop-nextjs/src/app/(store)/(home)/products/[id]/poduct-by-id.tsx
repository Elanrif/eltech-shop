"use client"
import { ButtonIncrement } from '@/components/buttons/button-increment';
import CldImage from '@/components/next-cloudinary/cld-image';
import Pending from '@/components/pending';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useProductById } from '@/hooks/use-product'
import useCardLogic from '@/hooks/use-card-logic';
import { Separator } from '@radix-ui/react-separator';
import {useState} from "react";
import { VariantType } from '@/lib/product/models/product.model';
import { ButtonAddBasket } from '@/components/buttons/button-add-basket';

type variantsType = {
  variant: VariantType['variant'];
  bgColor: string;
  textColor: string;
}

export default function GetProductById({ productId }: { productId: number }) {
  const [variants, setVariants] = useState<variantsType[]>([
    {variant: "xs", bgColor: "bg-shop-secondary",textColor: "text-shop-accent"},
    {variant: "s", bgColor: "", textColor: ""},
    {variant: "m", bgColor: "", textColor: ""},
    {variant: "l", bgColor: "", textColor: ""},
    {variant: "xl", bgColor: "", textColor: ""},
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedVariant, setSelectedVariant] = useState<variantsType | null>(null);
  const {product,amount} = useProductById(productId);
  /*fix: the problem was here, productId__ from product?.id return a undefined value.*/
  const productId__ = productId
  const isStock__ = product?.in_stock as boolean;
  const { handleClick, counter, increment, decrement } = useCardLogic({
    productId__,
    isStock__,
  });

if(!product){
    return <Pending />;
}
 const handleSelectedVariant = (data: variantsType)=> {
  setSelectedVariant(data);
  setVariants((prevVariants) =>
  prevVariants.map((item) =>
   item.variant === data.variant ? {...item, bgColor: "bg-shop-secondary", textColor: "text-shop-accent" }
  :
       {...item, bgColor: "", textColor: ""}))
 }
  return (
    <>
        <div className="flex px-[10rem] my-7 items-start gap-4">
          <CldImage
            src={
              product.imageUrl
                ? product.imageUrl
                : (process.env.NEXT_PUBLIC_CLOUDINARY_DEFAULT_IMG_URL as string)
            }
            alt=""
            width="500"
            height="500"
            crop={{
              type: "auto",
              source: true,
            }}
          />
          <Card className="px-4 min-w-[450px]">
            <CardHeader>
              <CardTitle> {product.name}</CardTitle>
              <CardDescription> {product.description}</CardDescription>
            </CardHeader>
            <Separator className="my-4 h-[0.1px] bg-shop-muted" />
            <CardContent className="flex flex-col gap-3">
              <div>
                <span className="mr-3">Detaille:</span>{" "}
                <span className='text-shop-muted text-sm'>{product.detail}</span>
              </div>
              <div className="flex gap-3 items-center">
                <span>Taille:</span>
                <div className='flex gap-3 items-center'>
                  {variants.map((data, index) => (
                      <div
                          key={index}
                           className={`px-3 py-2 text-sm border hover:cursor-pointer hover:text-shop-background border-shop-secondary hover:bg-shop-secondary duration-300 ${data.bgColor} ${data.textColor}`}
                          onClick={() => handleSelectedVariant(data)}
                      >
                        {data.variant.toUpperCase()}
                      </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span>Prix:</span> <span className="text-xl">{amount}</span>
                </div>
                <span
                  className={`${
                    product.in_stock
                      ? "text-shop-secondary"
                      : "text-shop-danger line-through"
                  }`}
                >
                  En stock
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex items-center gap-3">
              <ButtonIncrement
                counter={counter}
                increment={increment}
                decrement={decrement}
              />
              {
                <ButtonAddBasket
                  onClick={handleClick}
                  className={`${
                    !product.in_stock &&
                    "hover:cursor-not-allowed hover:bg-shop-muted"
                  }`}
                />
              }
            </CardFooter>
          </Card>
        </div>
    </>
  );
}
