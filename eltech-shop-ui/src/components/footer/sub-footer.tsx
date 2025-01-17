import React from 'react'
import TypographyAnchor from '../ui/typography-anchor';

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
                <TypographyAnchor value={data.name} url={data.url} transform='uppercase' textSize='xs'/>
            </React.Fragment>
        ))}
    </div>
  )
}
