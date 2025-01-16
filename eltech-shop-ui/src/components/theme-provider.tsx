"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
<<<<<<< HEAD
  }, []);
  if (!mounted) {
=======
  },[])
  if(!mounted) {
>>>>>>> eltech-shop-ui
    return false;
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
