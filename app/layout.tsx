import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar"), {
  ssr: false,
}) as React.FC<{ navItems: any }>;
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
import { navItems } from "@/data";
export const metadata: Metadata = {
  title: "great western construction and nginieering",
  description: "cosntruction and Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/GREAT-WESTERN-FARM-PORTRIAT-LOGO.png"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />

          <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
