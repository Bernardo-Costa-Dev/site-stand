import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.si-auto.com"),
  title: {
    default: "S.I Auto | Stand Automóvel, Oficina e Reboque",
    template: "%s | S.I Auto",
  },
  description:
    "S.I Auto é um stand automóvel com viaturas multimarcas, oficina automóvel e serviço de reboque. Consulte viaturas disponíveis e contacte-nos.",
  keywords: [
    "S.I Auto",
    "stand automóvel",
    "stand automóvel Caldas da Rainha",
    "carros usados",
    "viaturas usadas",
    "oficina automóvel",
    "reboque",
    "reboque 24h",
  ],
  openGraph: {
    title: "S.I Auto | Stand Automóvel, Oficina e Reboque",
    description:
      "Viaturas multimarcas, oficina automóvel e serviço de reboque.",
    url: "https://www.si-auto.com",
    siteName: "S.I Auto",
    locale: "pt_PT",
    type: "website",
  },
  alternates: {
    canonical: "https://www.si-auto.com",
  },
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
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(243,245,244,0.94),_rgba(243,245,244,0.97))]" />
        </div>

        <div className="relative z-10">
          <SiteHeader />
          {children}
          <SiteFooter />
          <WhatsAppFloat />
        </div>

        <Analytics />
      </body>
    </html>
  );
}