import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";

type Vehicle = {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  price: number;
  year: number;
  mileage?: number;
  fuel?: string;
  transmission?: string;
  brand?: string;
  model?: string;
  featured?: boolean;
  images?: unknown[];
  description?: string;
};

const vehiclesQuery = `
  *[_type == "vehicle" && featured == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    price,
    year,
    mileage,
    fuel,
    transmission,
    brand,
    model,
    featured,
    images,
    description
  }
`;

export default async function Home() {
  const homepageVehicles = await client.fetch<Vehicle[]>(vehiclesQuery);
  const heroVehicle = homepageVehicles[0] || null;

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/oficina-hero.jpg"
            alt="Oficina S.I Auto"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-zinc-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/60 to-zinc-950/40" />

        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Stand automóvel & oficina
            </p>

            <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Viaturas selecionadas com serviço completo e imagem profissional.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
              A S.I Auto junta comércio automóvel e oficina para oferecer uma solução
              completa, com foco na confiança, proximidade e atendimento personalizado.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/viaturas"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-500"
              >
                Ver viaturas
              </Link>

              <Link
                href="/oficina"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/15"
              >
                Marcar oficina
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white">{homepageVehicles.length}</p>
                <p className="mt-1 text-sm text-zinc-300">Em destaque</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white">Oficina</p>
                <p className="mt-1 text-sm text-zinc-300">Serviço completo</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="mt-1 text-sm text-zinc-300">Profissional</p>
              </div>
            </div>
          </div>

          <div>
            {heroVehicle ? (
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/95 shadow-2xl">
                <div className="relative aspect-[4/3] w-full bg-zinc-100">
                  {heroVehicle.images?.[0] ? (
                    <Image
                      src={urlFor(heroVehicle.images[0]).width(1600).quality(90).auto("format").url()}
                      alt={heroVehicle.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-zinc-500">
                      Sem imagem
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                        Viatura em destaque
                      </p>
                      <h2 className="mt-2 text-2xl font-bold">{heroVehicle.title}</h2>
                    </div>

                    <p className="whitespace-nowrap text-2xl font-bold text-emerald-700">
                      {heroVehicle.price?.toLocaleString("pt-PT")} €
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm">
                    <p>
                      <span className="text-zinc-500">Ano:</span>{" "}
                      <span className="font-semibold">{heroVehicle.year}</span>
                    </p>
                    <p>
                      <span className="text-zinc-500">Km:</span>{" "}
                      <span className="font-semibold">
                        {heroVehicle.mileage?.toLocaleString("pt-PT")}
                      </span>
                    </p>
                    <p>
                      <span className="text-zinc-500">Combustível:</span>{" "}
                      <span className="font-semibold">{heroVehicle.fuel}</span>
                    </p>
                    <p>
                      <span className="text-zinc-500">Caixa:</span>{" "}
                      <span className="font-semibold">{heroVehicle.transmission}</span>
                    </p>
                  </div>

                  <div className="mt-5">
                    <Link
                      href={heroVehicle.slug?.current ? `/viaturas/${heroVehicle.slug.current}` : "#"}
                      className="inline-flex rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                    >
                      Ver viatura
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/10 p-10 text-center text-white backdrop-blur">
                Adiciona viaturas no CMS para aparecerem aqui.
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="viaturas" className="relative overflow-hidden py-16">
      <div className="absolute inset-0">
        <Image
          src="/bg-carro-site.png"
          alt=""
          fill
          className="object-cover object-right opacity-[0.16] brightness-75"
        />
        <div className="absolute inset-0 bg-[#328F52]/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#f3f5f4]/78" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Stock disponível
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Viaturas em destaque
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              A homepage foi preparada para mostrar até 12 viaturas, tal como pedido
              pelo cliente.
            </p>
          </div>

          <Link
            href="/viaturas"
            className="hidden rounded-xl border border-zinc-300 px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 md:inline-flex"
          >
            Ver todas
          </Link>
        </div>

        {homepageVehicles.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-10 text-center text-zinc-500">
            Ainda não existem viaturas publicadas.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {homepageVehicles.map((vehicle) => {
              const image = vehicle.images?.[0];

              return (
                <article
                  key={vehicle._id}
                  className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] w-full bg-zinc-100">
                    {image ? (
                      <Image
                        src={urlFor(image).width(1000).height(750).url()}
                        alt={vehicle.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-zinc-500">
                        Sem imagem
                      </div>
                    )}

                    {vehicle.featured && (
                      <div className="absolute left-4 top-4 rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
                        Destaque
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold leading-tight">
                        {vehicle.title}
                      </h3>
                      <p className="whitespace-nowrap text-lg font-bold text-emerald-700">
                        {vehicle.price?.toLocaleString("pt-PT")} €
                      </p>
                    </div>

                    <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-zinc-600">
                      <p>
                        <span className="text-zinc-500">Ano:</span> {vehicle.year}
                      </p>
                      <p>
                        <span className="text-zinc-500">Km:</span>{" "}
                        {vehicle.mileage?.toLocaleString("pt-PT")}
                      </p>
                      <p>
                        <span className="text-zinc-500">Comb.:</span> {vehicle.fuel}
                      </p>
                      <p>
                        <span className="text-zinc-500">Caixa:</span> {vehicle.transmission}
                      </p>
                    </div>

                    <p className="mb-5 min-h-[72px] text-sm leading-6 text-zinc-600">
                      {vehicle.description || "Sem descrição disponível."}
                    </p>

                    <Link
                      href={vehicle.slug?.current ? `/viaturas/${vehicle.slug.current}` : "#"}
                      className="inline-flex rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
                    >
                      Ver viatura
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Sobre a S.I Auto
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Uma empresa focada em confiança, proximidade e serviço completo.
            </h2>
            <p className="mt-5 leading-8 text-zinc-600">
              A Solid Interest, através da S.I Auto, dedica-se à comercialização de
              viaturas e serviços de oficina, oferecendo uma solução completa para quem
              procura comprar, manter e cuidar do seu automóvel com segurança.
            </p>
            <p className="mt-4 leading-8 text-zinc-600">
              O objetivo desta presença online é valorizar o stock disponível, facilitar
              o contacto com os clientes e destacar também a área de oficina.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Atendimento próximo</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Comunicação clara e acompanhamento em todas as fases.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Catálogo atualizado</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Viaturas geridas de forma simples através do painel privado.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Serviço de oficina</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Uma área dedicada à manutenção e acompanhamento técnico.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Presença profissional</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Um site pensado para causar boa impressão e gerar contactos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="oficina" className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Oficina
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Serviços pensados para acompanhar o cliente para além da compra.
          </h2>
          <p className="mt-4 text-zinc-600">
            Inspirada na direção visual e comercial do exemplo que o cliente gostou,
            esta secção reforça a área técnica da empresa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Revisões</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Manutenção periódica e controlo preventivo para maior segurança.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Mecânica geral</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Intervenções técnicas e reparações com foco na fiabilidade do veículo.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Diagnóstico</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Identificação de problemas e apoio técnico para uma decisão rápida.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Travões e suspensão</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Verificação e manutenção de componentes críticos de segurança.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Óleo e filtros</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Serviços rápidos para manter o motor em boas condições.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Acompanhamento técnico</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Uma oficina que complementa a experiência do stand.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Contactos
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Fale connosco
            </h2>

            <div className="mt-8 space-y-4 text-zinc-700">
              <p>
                <span className="font-semibold">Empresa:</span> S.I Auto | Solid Interest
              </p>
              <p>
                <span className="font-semibold">Telefone:</span> +351 900 000 000
              </p>
              <p>
                <span className="font-semibold">Email:</span> geral@siauto.pt
              </p>
              <p>
                <span className="font-semibold">Redes Sociais:</span> Facebook | Instagram
              </p>
              <p>
                <span className="font-semibold">Morada:</span> Rua Exemplo, Caldas da Rainha
              </p>
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
                className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
              >
                Enviar email
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
            <iframe
              title="Mapa localização S.I Auto"
              src="https://www.google.com/maps?q=Caldas%20da%20Rainha&output=embed"
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}