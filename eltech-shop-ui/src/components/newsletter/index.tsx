import React from 'react'
import InputEmail from '../forms/input-email';
import { ButtonShopUi } from '../ui/button-shop-ui';
import { TypographyShopUi } from '../ui/typograpy-shop-ui';

export default function Newsletter() {
  return (
    <div className="bg-shop-accent py-5">
      <div className="flex flex-col gap-6 text-center mt-3 p-3 max-w-[50rem] mx-auto">
        <TypographyShopUi>H newsletter</TypographyShopUi>
        <TypographyShopUi transform="upper">
          INSCRIVEZ-VOUS POUR BÉNÉFICIER DE -10% SUR VOTRE PROCHAINE COMMANDE.
          DÉCOUVREZ EN AVANT-PREMIÈRE NOS LANCEMENTS ET RÉASSORTS DE COLLECTION
        </TypographyShopUi>

        <div className="flex w-full items-center justify-center gap-3">
          <InputEmail variant="md" placeholder="Entrez votre email" />
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
