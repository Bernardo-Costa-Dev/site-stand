import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "S.I Auto | Solid Interest",
  description: "Stand automóvel e oficina com catálogo de viaturas e contacto direto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="relative isolate bg-[#f3f5f4] text-zinc-900 antialiased">
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <Image
            src="/bg-carro-site.png"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-100"
          />
          <div className="absolute inset-0 bg-[#328F52]/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(243,245,244,0.94),rgba(243,245,244,0.97))]" />
        </div>

        <div className="relative z-10">
          <SiteHeader />
          {children}
          <SiteFooter />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}