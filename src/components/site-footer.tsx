export function SiteFooter() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-white">S.I Auto</p>
          <p className="mt-2 text-sm text-zinc-400">Solid Interest</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Contacto
          </p>
          <p className="mt-3 text-sm">+351 900 000 000</p>
          <p className="mt-2 text-sm">geral@siauto.pt</p>
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
          <p className="mt-3 text-sm">Caldas da Rainha</p>
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