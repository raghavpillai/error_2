"use client";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <CSSReset />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}