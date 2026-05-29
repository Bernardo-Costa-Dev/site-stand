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
  horsepower?: number;
  power?: number;
  transmission?: string;
  transmission_speeds?: string;
  brand?: string;
  model?: string;
  number_doors?: number;
  number_seats?: number;
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
    horsepower,
    power,
    transmission,
    transmission_speeds,
    brand,
    model,
    number_doors,
    number_seats,
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
      value: value as string,
    }));
}

type PageProps = {
  searchParams?: Promise<{
    minPrice?: string;
    maxPrice?: string;
    minYear?: string;
    maxYear?: string;
    minKm?: string;
    maxKm?: string;
    brand?: string;
    model?: string;
    fuel?: string;
    transmission?: string;
    q?: string;
    sort?: string;
  }>;
};

export default async function ViaturasPage({ searchParams }: PageProps) {
  const vehicles = await client.fetch<Vehicle[]>(vehiclesQuery);

  const params = (await searchParams) ?? {};

  const prices = vehicles
    .map((vehicle) => vehicle.price)
    .filter((value): value is number => typeof value === "number");

  const years = vehicles
    .map((vehicle) => vehicle.year)
    .filter((value): value is number => typeof value === "number");

  const mileages = vehicles
    .map((vehicle) => vehicle.mileage)
    .filter((value): value is number => typeof value === "number");

  const bounds = {
    priceMin: prices.length ? Math.min(...prices) : 0,
    priceMax: prices.length ? Math.max(...prices) : 0,
    yearMin: years.length ? Math.min(...years) : 0,
    yearMax: years.length ? Math.max(...years) : 0,
    kmMin: mileages.length ? Math.min(...mileages) : 0,
    kmMax: mileages.length ? Math.max(...mileages) : 0,
  };

  const brandOptions = buildOptions(vehicles.map((vehicle) => vehicle.brand));
  const modelOptions = buildOptions(vehicles.map((vehicle) => vehicle.model));
  const fuelOptions = buildOptions(vehicles.map((vehicle) => vehicle.fuel));
  const transmissionOptions = buildOptions(
    vehicles.map((vehicle) => vehicle.transmission)
  );

  const filters = {
    minPrice: Number(params.minPrice ?? bounds.priceMin),
    maxPrice: Number(params.maxPrice ?? bounds.priceMax),
    minYear: Number(params.minYear ?? bounds.yearMin),
    maxYear: Number(params.maxYear ?? bounds.yearMax),
    minKm: Number(params.minKm ?? bounds.kmMin),
    maxKm: Number(params.maxKm ?? bounds.kmMax),
    brand: params.brand ?? "",
    model: params.model ?? "",
    fuel: params.fuel ?? "",
    transmission: params.transmission ?? "",
    q: params.q ?? "",
    sort: params.sort ?? "",
  };

  let filteredVehicles = vehicles.filter((vehicle) => {
    const price = vehicle.price ?? 0;
    const year = vehicle.year ?? 0;
    const km = vehicle.mileage ?? 0;

    const matchesPrice =
      price >= filters.minPrice && price <= filters.maxPrice;

    const matchesYear =
      year >= filters.minYear && year <= filters.maxYear;

    const matchesKm =
      km >= filters.minKm && km <= filters.maxKm;

    const matchesBrand =
      !filters.brand || vehicle.brand === filters.brand;

    const matchesModel =
      !filters.model || vehicle.model === filters.model;

    const matchesFuel =
      !filters.fuel || vehicle.fuel === filters.fuel;

    const matchesTransmission =
      !filters.transmission || vehicle.transmission === filters.transmission;

    const searchText = [
      vehicle.title,
      vehicle.brand,
      vehicle.model,
      vehicle.description,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesQuery =
      !filters.q || searchText.includes(filters.q.toLowerCase());

    return (
      matchesPrice &&
      matchesYear &&
      matchesKm &&
      matchesBrand &&
      matchesModel &&
      matchesFuel &&
      matchesTransmission &&
      matchesQuery
    );
  });

  if (filters.sort === "price-asc") {
    filteredVehicles.sort((a, b) => a.price - b.price);
  } else if (filters.sort === "price-desc") {
    filteredVehicles.sort((a, b) => b.price - a.price);
  } else if (filters.sort === "year-desc") {
    filteredVehicles.sort((a, b) => b.year - a.year);
  } else if (filters.sort === "km-asc") {
    filteredVehicles.sort((a, b) => (a.mileage ?? 0) - (b.mileage ?? 0));
  }

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
          Explore o nosso stock de viaturas e contacte-nos para realizar o Test-Drive.
          <br></br>
          <br />
          Além das viaturas expostas, contamos com um leque de parceiros e fornecedores disponiveis a encontrar a sua viatura nova, semi-nova e usada, ideal ao seu gosto e perfil.
          Temos ao dispor a possibilidade e financiamento até 120 meses, sem entrada inicial.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mb-8">
          <VehicleFiltersBar
            total={filteredVehicles.length}
            brands={brandOptions}
            models={modelOptions}
            fuels={fuelOptions}
            transmissions={transmissionOptions}
            bounds={bounds}
            values={filters}
          />
        </div>

        {filteredVehicles.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-10 text-center text-zinc-500">
            Ainda não existem viaturas publicadas.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filteredVehicles.map((vehicle) => {
              const image = vehicle.images?.[0];

              return (
                <article
                  key={vehicle._id}
                  className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] w-full bg-zinc-100">
                    <Link
                        href={vehicle.slug?.current ? `/viaturas/${vehicle.slug.current}` : "#"}
                        className="inline-flex rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
                    >
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
                    </Link>
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