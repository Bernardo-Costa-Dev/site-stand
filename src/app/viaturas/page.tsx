import Image from "next/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";
import { VehicleFiltersBar } from "@/components/vehicle-filters-bar";

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
  images?: SanityImageSource[];
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

function buildOptions(values: Array<string | undefined>) {
  return [...new Set(values.filter(Boolean))]
    .sort((a, b) => a!.localeCompare(b!, "pt"))
    .map((value) => ({
      label: value as string,
      value: (value as string).toLowerCase().replace(/\s+/g, "-"),
    }));
}

export default async function ViaturasPage() {
  const vehicles = await client.fetch<Vehicle[]>(vehiclesQuery);

  const brandOptions = buildOptions(vehicles.map((vehicle) => vehicle.brand));
  const modelOptions = buildOptions(vehicles.map((vehicle) => vehicle.model));
  const fuelOptions = buildOptions(vehicles.map((vehicle) => vehicle.fuel));
  const transmissionOptions = buildOptions(
    vehicles.map((vehicle) => vehicle.transmission)
  );

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Catálogo
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Viaturas disponíveis
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            Explore o stock da S.I Auto com apresentação clara, moderna e focada
            no contacto rápido.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mb-8">
          <VehicleFiltersBar
            total={vehicles.length}
            brands={brandOptions}
            models={modelOptions}
            fuels={fuelOptions}
            transmissions={transmissionOptions}
          />
        </div>

        {vehicles.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-10 text-center text-zinc-500">
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
                      <div className="absolute left-4 top-4 rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
                        Destaque
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h2 className="text-xl font-semibold leading-tight">
                        {vehicle.title}
                      </h2>
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
    </main>
  );
}