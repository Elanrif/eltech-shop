import React from 'react'
import { TypographyShopUi } from '../ui/typograpy-shop-ui';

export default function SubFooter() {
    const links = [
      {
        name: "nous contacter",
        url: "#",
      },
      {
        name: "livraison",
        url: "#",
      },
      {
        name: "cgv",
        url: "#",
      },
      {
        name: "faq",
        url: "#",
      },
      {
        name: "politique de confidentialité",
        url: "#",
      },
      {
        name: "demande de retour",
        url: "#",
      },
      {
        name: "conditions d'utilisation",
        url: "#",
      },
      {
        name: "mentions légales",
        url: "#",
      },
      {
        name: "politique de remboursement",
        url: "#",
      },
      {
        name: "contactez-nous",
        url: "#",
      },
      {
        name: "offres du moment",
        url: "#",
      },
    ];
  return (
    <div className='flex justify-center gap-10 items-center bg-shop-accent px-10 py-5 text-center flex-wrap'>
        {links.map((data,index)=> (
            <React.Fragment key={index}>
                <TypographyShopUi size={"sm"} transform="uppercase" isLink={true} href={data.url}>{data.name}</TypographyShopUi>
            </React.Fragment>
        ))}
    </div>
  )
}
