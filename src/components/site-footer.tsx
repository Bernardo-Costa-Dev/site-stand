import Image from "next/image";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.19 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.25.2 2.25.2v2.48H15.2c-1.25 0-1.64.78-1.64 1.57v1.88h2.79l-.45 2.91h-2.34V22c4.78-.74 8.44-4.9 8.44-9.93Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.37 1.73H7.88a4.15 4.15 0 0 0-4.15 4.15v8.24a4.15 4.15 0 0 0 4.15 4.15h8.24a4.15 4.15 0 0 0 4.15-4.15V7.88a4.15 4.15 0 0 0-4.15-4.15ZM12 7.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3Zm0 1.63A3.07 3.07 0 1 0 15.07 12 3.07 3.07 0 0 0 12 8.93Zm4.89-2.1a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
    </svg>
  );
}

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
          <p className="mt-1 text-sm text-white-400">Solid Interest Comércio Auto <br /> UNIPESSOAL LDA</p>
        </div>

        <div>
          <p className="text-lg font-semibold text-white-500">
            Contactos:
          </p>
          <p className="mt-3 text-sm">+351 915 382 782</p>
          <p className="mt-2 text-sm">autosolidinterest@gmail.com</p>
        </div>

        <div>
            <span className="font-semibold text-lg">Redes Sociais:</span>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href="https://www.facebook.com/share/15tSTAWRDCo/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-emerald-400"
                aria-label="Facebook S.I Auto"
              >
                <FacebookIcon />
                <span>Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/si_auto_stand?igsh=d3N1YzBic2JwaGxq"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-emerald-400"
                aria-label="Instagram S.I Auto"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
            </div>
        </div>

        <div>
          <p className="text-lg font-semibold text-white-500">
            Localização:
          </p>
          <p className="mt-3 text-sm">Estrada Nacional N° 8, Q.ta do Mota, 2460-194 Alfeizerão</p>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-zinc-500 sm:px-6">
          © 2026 S.I Auto - Solid Interest. Desenvolvido por Bern@sByte. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}