"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {FormSignUp} from "@/components/forms/sign-in-up/form-sign-up";
import {FormSignIn} from "@/components/forms/sign-in-up/form-sign-in";

export function AuthSign() {
  return (
    <Tabs defaultValue="password" className="w-full md:w-[800px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="password">
          <span className="font-medium">Je suis déjà client</span>
        </TabsTrigger>
        <TabsTrigger value="account">
          <span className="font-medium">Je suis un nouveau client</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="password">
        <FormSignIn/>
      </TabsContent>
      <TabsContent value="account">
        <FormSignUp/>
      </TabsContent>
    </Tabs>
  );
}
