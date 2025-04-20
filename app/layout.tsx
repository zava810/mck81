import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import React from "react";
import UserContextProvider from "@/components/providers/userProvider";
import { inglishenglosoftw8asc } from "@/components/lifonts/localfonts";


export const metadata: Metadata = {
  title: "kyuiz",
  description: "get ready to Have a funny time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inglishenglosoftw8asc.className}>
        <UserContextProvider>
          {children}
          <Toaster />
        </UserContextProvider></body>
    </html>
  );
}
