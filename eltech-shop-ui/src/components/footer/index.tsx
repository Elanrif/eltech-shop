import React from 'react'
import CardFooter from './card-footer'
import { ShoppingBag, RefreshCcw, Send, MessageCircleQuestion} from "lucide-react";
import SubFooter from './sub-footer';
import ShareSocilaMedia from './share-social-media';
import TypographyA from '../ui/typography-a';

export default function Footer() {
  const payload = [
    {
      icon: <RefreshCcw />,
      value: "retour facile 14jours pour changer d'avis",
      bar: true,
    },
    {
      icon: <Send />,
      value: "livraison offerte aux comores",
      bar: true,
    },
    {
      icon: <MessageCircleQuestion />,
      value: "besoin d'aide",
      bar: true,
    },
    {
      icon: <ShoppingBag />,
      value: "payment sécurisé par stripe",
    },
  ];
  return (
    <div className='flex my-3 flex-col gap-5 justify-center'>
      <ShareSocilaMedia/>
      <div className="flex gap-7 items-center justify-center">
        {payload.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <CardFooter data={data} />
            </React.Fragment>
          );
        })}
      </div>
      <SubFooter/>
      <TypographyA 
        value="© ELTECH-SHOP & THE OZ - 2025 LEGAL NOTICE - PARAMÉTRER LES COOKIES" 
        className='mt-5'
        textSize='xs'
        fontWeight='semibold'
        />
    </div>
  );
}
