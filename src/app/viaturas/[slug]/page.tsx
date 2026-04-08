import Image from "next/image";
import { notFound } from "next/navigation";
import type { SanityImageSource } from "@sanity/image-url";
import {
  Calendar,
  Gauge,
  Fuel,
  Cog,
  CarFront,
  BadgeEuro,
  Phone,
  MessageCircle,
  Star,
} from "lucide-react";
import { client } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";
import { VehicleGallery } from "@/components/vehicle-gallery";



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

function SpecCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
        {icon}
      </div>
      <p className="text-sm text-zinc-500">{label}</p>
      <p className="mt-1 font-semibold text-zinc-900">{value}</p>
    </div>
  );
}

export default async function VehiclePage({ params }: Props) {
  const { slug } = await params;

  const vehicle = await client.fetch<Vehicle | null>(vehicleQuery, { slug });

  if (!vehicle) {
    notFound();
  }

  const imageUrls =
    vehicle.images?.map((image) =>
      urlFor(image).width(1600).height(1200).quality(90).auto("format").url()
    ) ?? [];

  return (
    <main className="min-h-screen bg-[#f3f5f4] text-zinc-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            {vehicle.featured && (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                <Star className="h-3.5 w-3.5" />
                Em destaque
              </span>
            )}

            {(vehicle.brand || vehicle.model) && (
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
                {[vehicle.brand, vehicle.model].filter(Boolean).join(" • ")}
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {vehicle.title}
              </h1>

              <div className="mt-4 flex flex-wrap gap-3 text-sm text-zinc-600">
                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-zinc-200">
                  {vehicle.year}
                </span>
                {vehicle.mileage !== undefined && (
                  <span className="rounded-full bg-white px-3 py-1 ring-1 ring-zinc-200">
                    {vehicle.mileage.toLocaleString("pt-PT")} km
                  </span>
                )}
                {vehicle.fuel && (
                  <span className="rounded-full bg-white px-3 py-1 ring-1 ring-zinc-200">
                    {vehicle.fuel}
                  </span>
                )}
                {vehicle.transmission && (
                  <span className="rounded-full bg-white px-3 py-1 ring-1 ring-zinc-200">
                    {vehicle.transmission}
                  </span>
                )}
              </div>
            </div>

            <div className="rounded-[28px] border border-emerald-200 bg-white px-6 py-5 shadow-sm">
              <p className="text-sm text-zinc-500">Preço</p>
              <p className="mt-1 text-3xl font-bold text-emerald-700">
                {vehicle.price?.toLocaleString("pt-PT")} €
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <VehicleGallery title={vehicle.title} images={imageUrls} />

            <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Descrição da viatura
              </h2>
              <p className="mt-4 leading-8 text-zinc-600">
                {vehicle.description || "Sem descrição disponível."}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Ficha técnica
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <SpecCard
                  icon={<Calendar className="h-5 w-5" />}
                  label="Ano"
                  value={vehicle.year ? String(vehicle.year) : "—"}
                />

                <SpecCard
                  icon={<Gauge className="h-5 w-5" />}
                  label="Quilómetros"
                  value={
                    vehicle.mileage !== undefined
                      ? `${vehicle.mileage.toLocaleString("pt-PT")} km`
                      : "—"
                  }
                />

                <SpecCard
                  icon={<Fuel className="h-5 w-5" />}
                  label="Combustível"
                  value={vehicle.fuel || "—"}
                />

                <SpecCard
                  icon={<Cog className="h-5 w-5" />}
                  label="Caixa"
                  value={vehicle.transmission || "—"}
                />

                <SpecCard
                  icon={<CarFront className="h-5 w-5" />}
                  label="Marca"
                  value={vehicle.brand || "—"}
                />

                <SpecCard
                  icon={<BadgeEuro className="h-5 w-5" />}
                  label="Preço"
                  value={`${vehicle.price?.toLocaleString("pt-PT")} €`}
                />
              </div>
            </div>

            <div className="rounded-[28px] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Contacto
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Interessado nesta viatura?
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-300">
                Entre em contacto para obter mais informações, confirmar
                disponibilidade ou agendar visita.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+351900000000"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                >
                  <Phone className="h-4 w-4" />
                  Ligar
                </a>

                <a
                  href="https://wa.me/351900000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}