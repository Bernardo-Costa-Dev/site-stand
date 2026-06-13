import Link from "next/link";
import { OficinaBookingForm } from "@/components/oficina-booking-form";
import Image from "next/image";

const services = [
  {
    title: "Serviço de mecânica geral",
    description: "Inclui os principais serviços de manutenção e acompanhamento técnico.",
    items: ["Revisões", "Mudança de óleo e filtro", "Travões", "Suspensão"],
  },
  {
    title: "Pneus",
    description: "Serviços ligados à segurança, estabilidade e bom comportamento do veículo.",
    items: ["Troca de pneus", "Alinhamento de direção"],
  },
  {
    title: "Diagnóstico",
    description: "Análise técnica para identificar avarias e antecipar problemas.",
    items: [],
  },
];

export default function OficinaPage() {
  return (
  <main className="min-h-screen bg-[#f3f5f4] text-zinc-900">
    <section className="relative overflow-hidden bg-zinc-950">

      <div className="absolute inset-0">
        <Image
          src="/hero-oficina.jpeg"
          alt="Oficina S.I Auto"
          fill
          className="object-cover object-center md:object-center"
          priority
          sizes="100vw"
        />
      </div>

  {/* <div className="absolute inset-0 bg-zinc-950/70" /> */}

  {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_30%),linear-gradient(to_right,rgba(9,9,11,0.85),rgba(24,24,27,0.75),rgba(9,9,11,0.85))]" /> */}

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex justify-center">
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/45 px-6 py-8 text-center shadow-2xl backdrop-blur-sm sm:px-8 sm:py-10">
            <h1 className="text-4xl font-bold text-white [-webkit-text-stroke:2px_#328F52]">
              Oficina
            </h1>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white [-webkit-text-stroke:2px_#328F52] md:text-5xl">
              Assistência automóvel
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
              Disponha dos nossos serviços de manutenção e apoio pós-venda, com um processo de marcação simples e claro.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#marcacao"
                className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
              >
                Agendar serviço
              </a>

              <a
                href="tel:+3519XXXXXXXX"
                className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
              >
                Falar connosco
              </a>
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
            Uma oficina preparada para acompanhar o cliente para além da compra.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 h-1.5 w-14 rounded-full bg-emerald-500" />

              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {service.description}
              </p>

              {service.items.length > 0 && (
                <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Porque esta página funciona
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Uma apresentação pensada para transmitir confiança ao cliente.
            </h2>

            <p className="mt-4 text-base leading-7 text-zinc-600">
              Mesmo sendo uma versão demo, esta área já demonstra que o negócio
              não termina na venda do automóvel. Existe apoio, manutenção e uma
              experiência organizada para o cliente continuar ligado ao stand.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700">
                Serviço apresentado de forma clara
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700">
                Visual premium e consistente
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700">
                Ideal para demonstração comercial
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700">
                Fácil de evoluir para sistema real
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-zinc-950 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Como funciona
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Um processo simples, claro e fácil de perceber.
            </h2>

            <div className="mt-8 space-y-4 text-sm text-zinc-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                1. O cliente escolhe o serviço pretendido.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                2. Seleciona data e horário disponíveis.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                3. Envia os dados para pedido de confirmação.
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
              Nesta fase, o objetivo é mostrar uma experiência visual credível,
              moderna e profissional, sem ainda depender de base de dados real.
            </div>
          </div>
        </div>
      </section> */}

      <section
        id="marcacao"
        className="border-t border-zinc-200 bg-white/40 py-16 text-center"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <OficinaBookingForm />
        </div>
      </section>
    </main>
  );
}