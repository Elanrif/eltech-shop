import React from 'react'
import { ButtonShopUi } from '../ui/button-shop-ui';
import { TypographyShopUi } from '../ui/typograpy-shop-ui';
import { TypographyHeading } from '../ui/typography-heading';
import { Input } from '../ui/input';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="bg-shop-accent py-5">
      <div className="flex flex-col gap-6 text-center mt-3 p-3 max-w-[50rem] mx-auto">
        <TypographyHeading>newsletter</TypographyHeading>
        <TypographyShopUi size={"sm"} transform="uppercase">
          INSCRIVEZ-VOUS POUR BÉNÉFICIER DE -10% SUR VOTRE PROCHAINE COMMANDE.
          DÉCOUVREZ EN AVANT-PREMIÈRE NOS LANCEMENTS ET RÉASSORTS DE COLLECTION
        </TypographyShopUi>

        <div className="flex w-full items-center justify-center gap-3">
          <Input
            id="newsletter"
            widthOption='w-1/2'
            placeholder="Entrez votre email"
            className='bg-white'
            icon={<Mail />}
          />
          <ButtonShopUi>valider</ButtonShopUi>
        </div>
        <TypographyShopUi>
          En vous inscrivant, vous acceptez notre politique de confidentialité
          et nos conditions générales de vente
        </TypographyShopUi>
      </div>
    </div>
  );
}
