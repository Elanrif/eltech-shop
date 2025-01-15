import Newsletter from '@/components/newsletter'
import { CardsCarousel } from '@/components/products/cards-carousel';
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

        <div className="min-h-[18rem] flex justify-center items-center gap-3 py-5 m-10">
          <CardsCarousel/>
        </div>
      </main>
      <Newsletter />
    </div>
  );
}
