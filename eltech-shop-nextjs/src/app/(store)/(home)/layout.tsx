"use client";
import { PasswordProvider } from '@/components/forms/context/password-context';
import React from 'react'
import Footer from "@/components/footer";
import HeaderBase from "@/components/header";

export default function AuthLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <HeaderBase />
        <PasswordProvider>{children}</PasswordProvider>
        <Footer />
    </div>
  );
}
