"use client";
import { PasswordProvider } from '@/components/forms/context/password-context';
import React from 'react'

export default function AuthLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <PasswordProvider>{children}</PasswordProvider>
    </div>
  );
}
