import React from 'react'
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from 'next/link';
export default function ShareSocilaMedia() {

  const socialMedia = [
    {
      name: "facebook",
      component: <Facebook />,
      url: "url",
    },
    {
      name: "instagram",
      component: <Instagram />,
      url: "url",
    },
    {
      name: "twitter",
      component: <Twitter />,
      url: "url",
    },
    {
      name: "linkedin",
      component: <Linkedin />,
      url: "url",
    },
  ];
  return (
    <div className='my-7 text-center flex justify-center gap-7'>
      {socialMedia.map((icon,index)=>(
        <Link href={icon.url} key={index}>
          {icon.component}
        </Link>
      ))}
    </div>
  )
}
