import Image from "next/image";
import { notFound } from "next/navigation";
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

const vehicleQuery = `
  *[_type == "vehicle" && slug.current == $slug][0]{
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

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function VehiclePage({ params }: Props) {
  const { slug } = await params;

  const vehicle = await client.fetch<Vehicle | null>(vehicleQuery, { slug });

  if (!vehicle) {
    notFound();
  }

  const mainImage = vehicle.images?.[0];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100">
              {mainImage ? (
                <Image
                  src={urlFor(mainImage).width(1200).height(900).url()}
                  alt={vehicle.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-zinc-500">
                  Sem imagem
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
              {vehicle.brand} {vehicle.model}
            </p>

            <h1 className="text-4xl font-bold tracking-tight">
              {vehicle.title}
            </h1>

            <p className="mt-4 text-3xl font-bold">
              {vehicle.price?.toLocaleString("pt-PT")} €
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-zinc-200 p-5 text-sm">
              <div>
                <p className="text-zinc-500">Ano</p>
                <p className="font-semibold">{vehicle.year}</p>
              </div>

              <div>
                <p className="text-zinc-500">Quilómetros</p>
                <p className="font-semibold">
                  {vehicle.mileage?.toLocaleString("pt-PT")} km
                </p>
              </div>

              <div>
                <p className="text-zinc-500">Combustível</p>
                <p className="font-semibold">{vehicle.fuel}</p>
              </div>

              <div>
                <p className="text-zinc-500">Caixa</p>
                <p className="font-semibold">{vehicle.transmission}</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">Descrição</h2>
              <p className="mt-3 leading-7 text-zinc-600">
                {vehicle.description || "Sem descrição disponível."}
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="tel:+351900000000"
                className="inline-flex rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Ligar
              </a>

              <a
                href="https://wa.me/351900000000"
                target="_blank"
                className="inline-flex rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}