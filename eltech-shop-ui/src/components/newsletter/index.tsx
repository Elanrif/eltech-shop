import React from 'react'
import TypographyP from '../ui/typography-p'
import TypographyH from '../ui/typography-h';
import InputEmail from '../forms/input-email';
import { ButtonBase } from '../buttons/button-base';

export default function Newsletter() {
  return (
    <div className="bg-shop-accent py-5">
      <div className="flex flex-col gap-6 text-center mt-3 p-3 max-w-[50rem] mx-auto">
        <TypographyH
          value="newsletter"
          textSize="h6"
          transform="uppercase"
          fontWeight="semibold"
        />
        <TypographyP
          value="INSCRIVEZ-VOUS POUR BÉNÉFICIER DE -10% SUR VOTRE PROCHAINE COMMANDE. DÉCOUVREZ EN AVANT-PREMIÈRE NOS LANCEMENTS ET RÉASSORTS DE COLLECTION."
          transform="lowercase"
          fontWeight="medium"
          textSize="sm"
        />

        <div className="flex w-full items-center justify-center gap-3">
          <InputEmail 
          variant="md"
          placeholder="Entrez votre email"/>
          <ButtonBase size="md">valider</ButtonBase>
        </div>
        <TypographyP value="En vous inscrivant, vous acceptez notre politique de confidentialité et nos conditions générales de vente." />
      </div>
    </div>
  );
}
