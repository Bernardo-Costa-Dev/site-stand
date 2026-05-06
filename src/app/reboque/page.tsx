import Link from "next/link";

const services = [
  "Prestação de serviços de reboque 24/7",
  "Assistência para particulares",
  "Assistência para empresas",
  "Apoio a eventos motorizados especializados",
  "Serviços nacionais",
];

const highlights = [
  {
    title: "Disponível 24/7",
    description:
      "Serviço de reboque disponível 24 horas por dia, 7 dias por semana.",
  },
  {
    title: "Serviço nacional",
    description:
      "Prestamos serviços em território nacional, com resposta rápida e profissional.",
  },
  {
    title: "Para várias necessidades",
    description:
      "Apoiamos particulares, empresas e eventos motorizados especializados.",
  },
];

export default function ReboquePage() {
  return (
    <main className="min-h-screen bg-[#f3f5f4] text-zinc-900">
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_30%),linear-gradient(to_right,#09090b,#18181b,#09090b)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Reboque
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                Prestação de serviços de reboque 24/7
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                Assistência de reboque para particulares, empresas e eventos
                motorizados especializados, com cobertura nacional.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+351900000000"
                  className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
                >
                  Ligar agora
                </a>

                <a
                  href="https://wa.me/351900000000"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[24px] border border-white/10 bg-zinc-900/80 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                  Assistência rápida
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white">
                  A sua viatura encontra-se sem seguro automóvel ou imobilizada?
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  Contacte-nos para assistência e transporte da sua viatura.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                    Serviço 24/7
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                    Apoio nacional
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                    Particulares, empresas e eventos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Serviços disponíveis
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Serviço de reboque profissional e sempre pronto a ajudar.
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            Uma apresentação simples e clara dos principais serviços prestados.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 h-1.5 w-14 rounded-full bg-emerald-500" />
              <h3 className="text-lg font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Porque escolher o nosso serviço
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Apoio rápido, profissional e adaptado à situação.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded-[28px] bg-zinc-950 px-6 py-10 text-white shadow-sm sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Contacto rápido
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            A sua viatura encontra-se sem seguro automóvel ou imobilizada?
          </h2>

          <p className="mt-4 max-w-3xl text-zinc-300">
            Contacte-nos para assistência imediata. Estamos disponíveis para
            responder com rapidez e profissionalismo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+351900000000"
              className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
            >
              Ligar agora
            </a>

            <a
              href="https://wa.me/351900000000"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Falar por WhatsApp
            </a>

            <Link
              href="/contactos"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Ver contactos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}