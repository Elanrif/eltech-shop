import CardSpeechClient from "@/components/card-speech-client";
import Newsletter from "@/components/newsletter";
import { CardsCarousel } from "@/components/card/cards-carousel";
import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";
import { TypographyShopUi } from "@/components/ui/typograpy-shop-ui";
const speechs = [
  {
    title: "Des tarifs préférentiels pros/étudiants",
    imageUrl: "jenna-ortega.webp",
    message:
      "Inscrivez-vous simplement et bénéficiez des tarifs préférentiels et d'avantages!",
    url: "je suis un pro-étudiants",
  },
  {
    title: "Des clients satisfais",
    imageUrl: "el-anrif.png",
    message:
      "Nos clients sont satisfaits et ils n'hésitent pas à nous le dire! Consultez leurs avis pour en savoir plus sur Bleu eltech-shop FAQ",
    url: "Lire les avis clients",
  },
];

export default function Home() {
  const img = { src: "/assets/soldes.webp", alt: "logo de la boutique" };
  return (
    <>
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
              <TypographyShopUi
              >Nouveauté</TypographyShopUi>
              <div className="group/list hover:cursor-pointer flex justify-center items-center gap-2">
                <TypographyShopUi
                    isLink={true}
                    href="#"
                    className="group-hover/list:text-shop-secondary"
                >Voir tout les produits</TypographyShopUi>
                <Eye className="group-hover/list:text-shop-secondary text-shop-muted" />
              </div>
            </div>
            <CardsCarousel />
            <div className="flex mt-7 justify-center gap-10 items-center">
              {speechs.map((speech, index) => (
                  <React.Fragment key={index}>
                    <CardSpeechClient speech={speech} />
                  </React.Fragment>
              ))}
            </div>
          </div>
        </main>
        <Newsletter />
      </div>
    </>
  );
}
