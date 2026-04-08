"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SALES_WHATSAPP = "351900000000";
const OFICINA_WHATSAPP = "351911111111";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="h-8 w-8"
      fill="currentColor"
    >
      <path d="M19.11 17.21c-.27-.14-1.58-.78-1.82-.87-.24-.09-.41-.14-.59.14-.18.27-.68.87-.84 1.05-.15.18-.31.2-.58.07-.27-.14-1.12-.41-2.13-1.3-.79-.7-1.32-1.56-1.47-1.83-.15-.27-.02-.41.11-.54.12-.12.27-.31.41-.46.14-.15.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.59-1.43-.81-1.96-.21-.5-.43-.43-.59-.44h-.5c-.18 0-.46.07-.71.34-.24.27-.93.91-.93 2.22s.96 2.57 1.1 2.75c.14.18 1.88 2.87 4.56 4.03.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.58-.64 1.8-1.26.22-.62.22-1.15.15-1.26-.06-.1-.24-.17-.51-.31Z" />
      <path d="M16.03 3.2c-7.07 0-12.8 5.72-12.8 12.79 0 2.26.59 4.47 1.71 6.41L3.2 28.8l6.57-1.72a12.8 12.8 0 0 0 6.26 1.61h.01c7.06 0 12.79-5.73 12.79-12.8 0-3.43-1.34-6.66-3.76-9.08A12.7 12.7 0 0 0 16.03 3.2Zm0 23.34h-.01a10.5 10.5 0 0 1-5.35-1.46l-.38-.22-3.9 1.02 1.04-3.8-.25-.39a10.56 10.56 0 1 1 8.85 4.85Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  const pathname = usePathname();

  const isOficinaPage = pathname === "/oficina";
  const phone = isOficinaPage ? OFICINA_WHATSAPP : SALES_WHATSAPP;

  const message = isOficinaPage
    ? "Olá, gostaria de obter informações sobre os serviços de oficina."
    : "Olá, gostaria de obter mais informações sobre as viaturas.";

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-18 w-18 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_rgba(0,0,0,0.28)] transition hover:scale-110 hover:bg-[#20c55a]"
    >
      <WhatsAppIcon />
    </Link>
  );
}