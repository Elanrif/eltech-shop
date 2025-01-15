import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputLabel } from "../forms/input-label";
import InputEmail from "../forms/input-email";
import InputDate from "../forms/input-date";
import InputPassword from "../forms/input-password";
import TypographyH from "../ui/typography-h";
import TypographyP from "../ui/typography-p";
import { ButtonBase } from "../buttons/button-base";

export function AuthSign() {
  return (
    <Tabs defaultValue="account" className="w-full md:w-[800px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">
          <span className="font-medium">Je suis un nouveau client</span>
        </TabsTrigger>
        <TabsTrigger value="password">
          <span className="font-medium">Je suis déjà client</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>
              <TypographyH value="Créer un compte" fontWeight="bold" />
            </CardTitle>
            <CardDescription>
              <TypographyP
                value="Créer un compte,pour faciliter vos achats et béneficier des promotions."
                textSize="sm"
                color="muted"
              />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="lastName">Nom</Label>
              <InputLabel
                id="lastName"
                className="text-shop-muted"
                defaultValue="saidbaco"
                variant="lg"
                placeholder="Entrer votre prénom"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="firstName">Prénom</Label>
              <InputLabel
                id="firstName"
                className="text-shop-muted"
                defaultValue="elanrif"
                variant="lg"
                placeholder="Entrer votre prénom"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="date">Date</Label>
              <InputDate
                id="date"
                className="text-shop-muted"
                defaultValue="elanrif"
                variant="lg"
                placeholder="Entrer votre prénom"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <InputEmail
                id="email"
                className="text-shop-muted"
                defaultValue="elanrif@gmail.com"
                variant="lg"
                placeholder="Entrer votre prénom"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Mot de passe</Label>
              <InputPassword
                id="password"
                className="text-shop-muted"
                defaultValue="elanrif"
                variant="lg"
                placeholder="Entrer votre prénom"
              />
            </div>
          </CardContent>
          <CardFooter>
           <ButtonBase size="md">Valider</ButtonBase>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>
              <TypographyH
                value="Connecter vous à votre compte"
                fontWeight="bold"
              />
            </CardTitle>
            <CardDescription>
              <TypographyP
                value="Ravi de vous revoir ! Veuillez vous connecter pour profiter pleinement de nos services."
                textSize="sm"
                color="muted"
              />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <InputEmail
                id="email"
                className="text-shop-muted"
                defaultValue="elanrif@gmail.com"
                variant="lg"
                placeholder="Entrer votre prénom"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Mot de passe</Label>
              <InputPassword
                id="password"
                className="text-shop-muted"
                defaultValue="elanrif"
                variant="lg"
                placeholder="Entrer votre prénom"
              />
            </div>
          </CardContent>
          <CardFooter>
            <ButtonBase size="md">Se connecter</ButtonBase>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
