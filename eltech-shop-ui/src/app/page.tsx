import Newsletter from '@/components/newsletter'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  const img = { src: "/assets/soldes.webp", alt: "logo de la boutique" };
  return (
    <div className="min-h-[24rem] p-5">
      <main>
        <div className="hover:cursor-pointer w-full border border-gray-300 shadow-md rounded-lg">
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

        <div className="min-h-[18rem] bg-slate-100">CONTENU CARD</div>
      </main>
      <Newsletter />
    </div>
  );
}
