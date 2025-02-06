import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Calendar, Mail, MapPinHouse, User} from "lucide-react";
import {InputPassword} from "@/components/forms/input-password";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {TypographyShopUi} from "@/components/ui/typograpy-shop-ui";
import {ButtonShopUi} from "@/components/ui/button-shop-ui";


export const FormSignUp= () => {
    return <Card className={'flex flex-col gap-3'}>
        <CardHeader>
            <CardTitle>
                <TypographyShopUi>Créer un compte</TypographyShopUi>
            </CardTitle>
            <CardDescription>
                <TypographyShopUi size={'xs'}>
                    Créer un compte,pour faciliter vos achats et béneficier des
                    promotions
                </TypographyShopUi>
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            <div className="flex flex-col gap-y-4">
                <div className="flex mt-3 items-center gap-3">
                    <div className="space-y-1 w-full">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input
                            id="lastName"
                            icon={<User />}
                            defaultValue="saidbaco"
                            placeholder="Entrer votre prénom"
                        />
                    </div>
                    <div className="space-y-1 w-full">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input
                            id="firstName"
                            icon={<User />}
                            defaultValue="elanrif"
                            placeholder="Entrer votre prénom"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="space-y-1 w-full">
                        <Label htmlFor="lastName">Addresse</Label>
                        <Input
                            id="addresse"
                            icon={<MapPinHouse />}
                            defaultValue="Mixtaa bloc 6 Apprt..."
                            placeholder="Mixtaa bloc 6 Apprt..."
                        />
                    </div>
                    <div className="w-full space-y-1">
                        <Label htmlFor="date">Date</Label>
                        <Input
                            id="date"
                            type="date"
                            icon={<Calendar />}
                            defaultValue="Mixtaa bloc 6 Apprt..."
                            placeholder="Mixtaa bloc 6 Apprt..."
                        />
                    </div>
                </div>
                <div className="w-full space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        icon={<Mail />}
                        defaultValue="elanrif@gmail.com"
                        placeholder="Entrer votre prénom"
                    />
                </div>
                <div className="space-y-1 w-full">
                    <Label htmlFor="password">Mot de passe</Label>
                    <InputPassword
                        id="password"
                        defaultValue="elanrif"
                        placeholder="Entrer votre mote de passe"
                    />
                </div>
                <div className="space-y-1 w-full">
                    <Label htmlFor="password">Confirmer mot de passe</Label>
                    <InputPassword
                        id="password"
                        defaultValue="elanrif"
                        placeholder="confirmer votre mot de passe"
                        display={true}
                    />
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <ButtonShopUi>Créer votre compte</ButtonShopUi>
        </CardFooter>
    </Card>
}