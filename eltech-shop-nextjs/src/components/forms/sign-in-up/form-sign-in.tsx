import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {InputPassword} from "@/components/forms/input-password";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {TypographyShopUi} from "@/components/ui/typograpy-shop-ui";
import {ButtonShopUi} from "@/components/ui/button-shop-ui";

export const FormSignIn= () => {

    return <Card className={'flex flex-col gap-3'}>
        <CardHeader>
            <CardTitle>
                <TypographyShopUi>Connecter vous à votre compte</TypographyShopUi>
            </CardTitle>
            <CardDescription>
                <TypographyShopUi size={'xs'}>
                    Ravi de vous revoir ! Veuillez vous connecter pour profiter
                    pleinement de nos services
                </TypographyShopUi>
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    defaultValue="elanrif@gmail.com"
                    placeholder="Entrer votre prénom"
                />
            </div>
            <div className="space-y-1">
                <Label htmlFor="password">Mot de passe</Label>
                <InputPassword
                    id="password"
                    defaultValue="elanrif"
                    placeholder="Entrer votre prénom"
                />
            </div>
        </CardContent>
        <CardFooter>
            <ButtonShopUi>Se connecter</ButtonShopUi>
        </CardFooter>
    </Card>
}