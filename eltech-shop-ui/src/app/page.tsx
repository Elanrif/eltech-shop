import Newsletter from '@/components/newsletter'
import { CardsCarousel } from '@/components/products/cards-carousel';
import TypographyA from '@/components/ui/typography-a';
import TypographyH from '@/components/ui/typography-h';
import { Eye } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

export default function Home() {
  const img = { src: "/assets/soldes.webp", alt: "logo de la boutique" };
  return (
    <div className="min-h-[24rem] py-5">
      <main>
        <div className="hover:cursor-pointer w-full shadow-md rounded-lg">
          <Image
            src={img.src}
            alt={img.alt}
            layout="responsive"
            width={1920}
            height={1080}
            className="rounded-md"
            quality={100}
          />
        </div>

        <div className="min-h-[18rem] flex flex-col gap-3 justify-center items-center py-5 m-10">
          <div className="flex w-full items-center justify-between">
            <span></span>
            <TypographyH
              value="nouveauté"
              fontWeight="semibold"
              textSize="h5"
              transform="uppercase"
            />
            <div className='group/list hover:cursor-pointer flex justify-center items-center gap-2'>
              <TypographyA
                value="Voir tout les produits"
                url="#"
                color='muted'
                fontWeight="semibold"
                textSize="sm"
                transform="uppercase"
                className='group-hover/list:text-shop-secondary'
              />
              <Eye className='group-hover/list:text-shop-secondary text-shop-muted'/>
            </div>
          </div>
          <CardsCarousel />
        </div>
      </main>
      <Newsletter />
    </div>
  );
}
