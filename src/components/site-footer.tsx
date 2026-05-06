import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <Image
            src="/logo-siauto.png"
            alt="S.I Auto"
            width={280}
            height={120}
            className="h-16 w-auto"
          />
          <p className="mt-1 text-sm text-zinc-400">Solid Interest Auto</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Contacto
          </p>
          <p className="mt-3 text-sm">+351 915 382 782</p>
          <p className="mt-2 text-sm">autosolidinterest@gmail.com</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Redes Sociais
          </p>
          <p className="mt-3 text-sm">Facebook</p>
          <p className="mt-2 text-sm">Instagram</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Localização
          </p>
          <p className="mt-3 text-sm">Estrada Nacional N° 8, Q.ta do Mota, 2460-194 Alfeizerão</p>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-zinc-500 sm:px-6">
          © 2026 S.I Auto - Solid Interest. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}