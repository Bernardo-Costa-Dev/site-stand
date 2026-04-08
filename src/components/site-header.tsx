"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/viaturas", label: "Viaturas" },
  { href: "/oficina", label: "Oficina" },
  { href: "/contatos", label: "Contactos" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:py-3">
        <Link href="/" className="shrink-0">
            <Image
                src="/logo-siauto.png"
                alt="S.I Auto"
                width={420}
                height={120}
                className="h-auto w-48 sm:w-56 lg:w-64"
                priority
            />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium transition ${
                isActive(link.href)
                  ? "text-emerald-400"
                  : "text-white/85 hover:text-emerald-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="tel:+351900000000"
            className="inline-flex rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-500"
          >
            Ligar agora
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-zinc-950/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isActive(link.href)
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-white/85 hover:bg-white/5 hover:text-emerald-400"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:+351900000000"
              className="mt-3 inline-flex justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-emerald-500"
            >
              Ligar agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}