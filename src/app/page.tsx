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
  *[_type == "vehicle"] | order(featured desc, _createdAt desc) {
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
  const vehicles = await client.fetch<Vehicle[]>(vehiclesQuery);

  const featuredVehicles = vehicles.filter((vehicle) => vehicle.featured);
  const heroVehicle = featuredVehicles[0] || vehicles[0] || null;

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-sm font-bold text-white">
              ST
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">Stand Teste</p>
              <p className="text-xs text-zinc-500">Viaturas selecionadas</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#viaturas" className="text-sm text-zinc-600 hover:text-zinc-900">
              Viaturas
            </a>
            <a href="#vantagens" className="text-sm text-zinc-600 hover:text-zinc-900">
              Vantagens
            </a>
            <a
              href="tel:+351900000000"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Contactar
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Stand automóvel
            </p>

            <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">
              Encontre a viatura certa com confiança e rapidez.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              Um catálogo simples, profissional e pronto para apresentar viaturas
              com qualidade, detalhe e contacto direto.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#viaturas"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Ver viaturas
              </a>

              <a
                href="tel:+351900000000"
                className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
              >
                Falar agora
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-2xl font-bold">{vehicles.length}</p>
                <p className="mt-1 text-sm text-zinc-500">Viaturas</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-2xl font-bold">{featuredVehicles.length}</p>
                <p className="mt-1 text-sm text-zinc-500">Em destaque</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-2xl font-bold">100%</p>
                <p className="mt-1 text-sm text-zinc-500">Digital</p>
              </div>
            </div>
          </div>

          <div>
            {heroVehicle ? (
              <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3] w-full bg-zinc-100">
                  {heroVehicle.images?.[0] ? (
                    <Image
                      src={urlFor(heroVehicle.images[0]).width(1400).height(1000).url()}
                      alt={heroVehicle.title}
                      fill
                      className="object-cover"
                      priority
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
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        {heroVehicle.featured ? "Viatura em destaque" : "Viatura disponível"}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold">{heroVehicle.title}</h2>
                    </div>

                    <p className="whitespace-nowrap text-2xl font-bold">
                      {heroVehicle.price?.toLocaleString("pt-PT")} €
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 rounded-2xl border border-zinc-200 p-4 text-sm">
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

                  <div className="mt-5 flex gap-3">
                    <Link
                      href={
                        heroVehicle.slug?.current
                          ? `/viaturas/${heroVehicle.slug.current}`
                          : "#"
                      }
                      className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                    >
                      Ver detalhe
                    </Link>

                    <a
                      href="https://wa.me/351900000000"
                      target="_blank"
                      className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-100"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-10 text-center text-zinc-500">
                Adiciona a primeira viatura no Sanity para a mostrar aqui.
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="viaturas" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Stock disponível
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Viaturas em destaque
            </h2>
          </div>
        </div>

        {vehicles.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-10 text-center text-zinc-500">
            Ainda não existem viaturas publicadas.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {vehicles.map((vehicle) => {
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
                      <div className="absolute left-4 top-4 rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
                        Destaque
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold leading-tight">
                        {vehicle.title}
                      </h3>
                      <p className="whitespace-nowrap text-lg font-bold">
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
                        <span className="text-zinc-500">Caixa:</span>{" "}
                        {vehicle.transmission}
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
      </section>

      <section id="vantagens" className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Porque escolher-nos
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Uma apresentação clara, profissional e feita para gerar confiança.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-zinc-200 p-6">
              <h3 className="text-lg font-semibold">Viaturas selecionadas</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Cada anúncio é apresentado com foco na clareza, imagem e detalhe.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-6">
              <h3 className="text-lg font-semibold">Contacto direto</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Chamada e WhatsApp disponíveis para resposta rápida ao cliente.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-6">
              <h3 className="text-lg font-semibold">Gestão simples</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                As viaturas podem ser adicionadas e editadas facilmente no CMS.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-6">
              <h3 className="text-lg font-semibold">Presença profissional</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Um site pensado para valorizar o stock e causar boa impressão.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-zinc-900 px-8 py-10 text-white md:flex md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Demonstração
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Pronto para apresentar a um potencial cliente.
            </h2>
            <p className="mt-4 text-zinc-300">
              Esta homepage já mostra uma estrutura profissional, catálogo dinâmico e
              página individual por viatura.
            </p>
          </div>

          <div className="mt-6 flex gap-3 md:mt-0">
            <a
              href="tel:+351900000000"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
            >
              Ligar
            </a>
            <a
              href="#viaturas"
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Ver stock
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Stand Teste. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="tel:+351900000000" className="hover:text-zinc-900">
              +351 900 000 000
            </a>
            <a href="mailto:geral@stand.pt" className="hover:text-zinc-900">
              geral@stand.pt
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}