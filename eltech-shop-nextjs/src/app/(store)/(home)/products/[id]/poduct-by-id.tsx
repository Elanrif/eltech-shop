"use client"
import { ButtonAdd } from '@/components/buttons/button-add';
import { ButtonIncrement } from '@/components/buttons/button-increment';
import CldImage from '@/components/next-cloudinary/cld-image';
import Pending from '@/components/pending';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useProductById } from '@/hooks/use-product'
import useCardLogic from '@/lib/hooks/useCardLogic';
import { Separator } from '@radix-ui/react-separator';

export default function GetProductById({ productId }: { productId: number }) {
  const {product,amount} = useProductById(productId);
  const {
    handleClick,
    counter,
    increment,
    decrement,
  } = useCardLogic(product?.in_stock as boolean);
    

  return (
    <>
      {product ? (
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
                <span className='text-shop-muted'>{product.detail}</span>
              </div>
              <div className="flex gap-3 items-center">
                <span>Taille:</span>
                <div className='flex gap-3 items-center'>
                  <div>xs</div>
                  <div>sm</div>
                  <div>md</div>
                  <div>lg</div>
                  <div>xl</div>
                  <div>xxl</div>
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
                <ButtonAdd
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
      ) : (
        <Pending />
      )}
    </>
  );
}
