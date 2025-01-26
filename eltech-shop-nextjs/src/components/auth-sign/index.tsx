"use client";
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
import {InputPassword} from "../forms/input-password";
import { ButtonShopUi } from "../ui/button-shop-ui";
import { TypographyShopUi } from "../ui/typograpy-shop-ui";
import { Input } from "../ui/input";
import { Calendar, Mail, MapPinHouse, User } from "lucide-react";

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
              <TypographyShopUi>Créer un compte</TypographyShopUi>
            </CardTitle>
            <CardDescription>
              <TypographyShopUi>
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
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>
              <TypographyShopUi>Connecter vous à votre compte</TypographyShopUi>
            </CardTitle>
            <CardDescription>
              <TypographyShopUi>
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
      </TabsContent>
    </Tabs>
  );
}
