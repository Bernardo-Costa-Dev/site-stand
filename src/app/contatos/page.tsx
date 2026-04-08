export default function ContactosPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Contactos
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">Fale connosco</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            Entre em contacto com a S.I Auto para mais informações sobre viaturas ou serviços de oficina.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Informações</h2>

              <div className="mt-8 space-y-4 text-zinc-700">
                <p><span className="font-semibold">Empresa:</span> S.I Auto | Solid Interest</p>
                <p><span className="font-semibold">Telefone:</span> +351 900 000 000</p>
                <p><span className="font-semibold">Email:</span> geral@siauto.pt</p>
                <p><span className="font-semibold">Redes Sociais:</span> Facebook | Instagram</p>
                <p><span className="font-semibold">Morada:</span> Rua Exemplo, Caldas da Rainha</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+351900000000"
                  className="rounded-xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-800"
                >
                  Ligar
                </a>
                <a
                  href="mailto:geral@siauto.pt"
                  className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                >
                  Enviar email
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <h2 className="text-xl font-semibold">Horário</h2>
              <div className="mt-4 space-y-2 text-sm text-zinc-600">
                <p>Segunda a Sexta: 09:00 - 19:00</p>
                <p>Sábado: 09:00 - 13:00</p>
                <p>Domingo: Encerrado</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
            <iframe
              title="Mapa localização S.I Auto"
              src="https://www.google.com/maps?q=Caldas%20da%20Rainha&output=embed"
              className="h-[520px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}