import Link from "next/link";
import { OficinaBookingForm } from "@/components/oficina-booking-form";

const services = [
  {
    title: "Revisões",
    description:
      "Manutenção periódica para garantir fiabilidade, desempenho e segurança no dia a dia.",
  },
  {
    title: "Mudança de óleo e filtros",
    description:
      "Serviço essencial para preservar o motor e manter a performance do veículo.",
  },
  {
    title: "Diagnóstico",
    description:
      "Análise técnica para identificar avarias e antecipar problemas mecânicos.",
  },
  {
    title: "Travões",
    description:
      "Verificação e manutenção de um dos sistemas mais importantes para a segurança.",
  },
  {
    title: "Suspensão",
    description:
      "Intervenções focadas em conforto, estabilidade e controlo em estrada.",
  },
  {
    title: "Mecânica geral",
    description:
      "Serviços diversos com acompanhamento profissional e atenção ao detalhe.",
  },
];

const highlights = [
  "Pedido de marcação simples e intuitivo",
  "Imagem moderna e profissional",
  "Serviços organizados com clareza",
  "Experiência pensada para gerar confiança",
];

export default function OficinaPage() {
  return (
    <main className="min-h-screen bg-[#f3f5f4] text-zinc-900">
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_30%),linear-gradient(to_right,#09090b,#18181b,#09090b)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Oficina
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                Assistência automóvel, contacto simples e
                foco na confiança.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                Disponha dos nossos serviços de manutenção e apoio pós-venda, com um processo de marcação simples e claro.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#marcacao"
                  className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
                >
                  Agendar serviço
                </a>

                <Link
                  href="/contactos"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Falar connosco
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[24px] border border-white/10 bg-zinc-900/80 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                  Atendimento oficina
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white">
                  Mais do que vender carros — acompanhar o cliente depois da
                  compra.
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  Continuidade de serviço, apoio e manutenção.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                    Horário: Seg. a Sex. · 09:00 às 18:30
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                    Processo de marcação simples e claro
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                    Marque as vezes que precisar, sem complicações
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
            Uma oficina preparada para acompanhar o cliente para além da compra.
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            Serviços apresentados com clareza para transmitir profissionalismo,
            organização e confiança.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 h-1.5 w-14 rounded-full bg-emerald-500" />
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
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
      </section>

      <section
        id="marcacao"
        className="border-t border-zinc-200 bg-white/40 py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Pedido de marcação
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Formulário simples para demonstrar a experiência de marcação.
            </h2>

            <p className="mt-4 text-base leading-7 text-zinc-600">
              Aqui fica a área principal da página: um formulário organizado,
              claro e visualmente alinhado com o resto do site.
            </p>
          </div>

          <OficinaBookingForm />
        </div>
      </section>
    </main>
  );
}