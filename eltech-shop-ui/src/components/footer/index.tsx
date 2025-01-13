import React from 'react'
import CardFooter from './card-footer'
import { CircleUser, Search, Heart, ShoppingBag} from "lucide-react";

export default function Footer() {
  const payload = [
    {
      icon: <Heart />,
      value: "retour facile 14jours pour changer d'avis",
    },
    {
      icon: <Search />,
      value: "livraison offerte aux comores",
    },
    {
      icon: <ShoppingBag />,
      value: "besoin d'aide",
    },
    {
      icon: <CircleUser />,
      value: "payment sécurisé par stripe",
    },
  ];
  return (
    <div className='flex gap-7 items-center justify-center'>
      {payload.map((data,index)=>{
        return(
          <React.Fragment key={index}>
            <CardFooter data={data}/>
          </React.Fragment>
        )
      })}
    </div>
  )
}
