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
  Zap,
  DoorOpen,
  Users,
  Star,
} from "lucide-react";
import { client } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";
import { VehicleGallery } from "@/components/vehicle-gallery";
import { ChessKnight } from "lucide-react";
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";



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

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const vehicle = await client.fetch<Vehicle | null>(
    `
      *[_type == "vehicle" && slug.current == $slug][0] {
        title,
        brand,
        model,
        year,
        fuel,
        images
      }
    `,
    { slug }
  );

  if (!vehicle) {
    return {
      title: "Viatura não encontrada",
    };
  }

  return {
    title: `${vehicle.title} à venda`,
    description: `${vehicle.brand || ""} ${vehicle.model || ""} ${
      vehicle.year || ""
    } disponível na S.I Auto. Consulte detalhes e contacte-nos para mais informações.`,
    alternates: {
      canonical: `https://www.si-auto.com/viaturas/${slug}`,
    },
    openGraph: {
      title: `${vehicle.title} | S.I Auto`,
      description: `Viatura disponível na S.I Auto. Contacte-nos para mais informações.`,
      type: "website",
    },
  };
}

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

    const vehicleUrl = vehicle.slug?.current
  ? `https://si-auto.com/viaturas/${vehicle.slug.current}`
  : "Link indisponível";

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
                Sob Consulta
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
              <p className="mt-4 whitespace-pre-line leading-8 text-zinc-600">
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
                  icon={<Cog className="h-5 w-5" />}
                  label="Velocidades da caixa"
                  value={vehicle.transmission_speeds || "—"}
                />

                <SpecCard
                  icon={<ChessKnight className="h-5 w-5" />}
                  label="Cv"
                  value={vehicle.horsepower !== undefined ? `${vehicle.horsepower} cv` : "—"}
                />

                <SpecCard
                  icon={<Zap className="h-5 w-5" />}
                  label="Potência"
                  value={vehicle.power !== undefined ? `${vehicle.power} CC` : "—"}
                />

                <SpecCard
                  icon={<DoorOpen className="h-5 w-5" />}
                  label="N.º de portas"
                  value={
                    vehicle.number_doors !== undefined
                      ? String(vehicle.number_doors)
                      : "—"
                  }
                />

                <SpecCard
                  icon={<Users className="h-5 w-5" />}
                  label="Lugares"
                  value={
                    vehicle.number_seats !== undefined
                      ? String(vehicle.number_seats)
                      : "—"
                  }
                />

                <SpecCard
                  icon={<CarFront className="h-5 w-5" />}
                  label="Marca"
                  value={vehicle.brand || "—"}
                />

                <SpecCard
                  icon={<CarFront className="h-5 w-5" />}
                  label="Modelo"
                  value={vehicle.model || "—"}
                />

                <SpecCard
                  icon={<BadgeEuro className="h-5 w-5" />}
                  label="Preço"
                  value="Sob Consulta"
                />

                <a
                  href={`https://wa.me/351925511320?text=${encodeURIComponent(
                    `Olá, gostaria de saber o preço desta viatura: ${vehicle.title}. Link do anúncio: ${vehicleUrl}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[28px] bg-emerald-900 p-6 text-white shadow-sm transition hover:bg-emerald-600 sm:col-span-2"
                >
                  <div className="flex items-center justify-center gap-3 text-center">
                    <div className="rounded-full bg-white/10 p-2">
                      <MessageCircle className="h-5 w-5 text-emerald-400" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold leading-tight">
                        Contactar para mais informações
                      </h3>
                      <p className="mt-2 text-sm text-zinc-200">
                        Pedir preço por WhatsApp
                      </p>
                    </div>
                  </div>
                </a>
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
                  href="tel:+351915382782"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                >
                  <Phone className="h-4 w-4" />
                  Ligar
                </a>

                <a
                  href="https://wa.me/351925511320"
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

// export default function MaintenancePage() {
//   return (
//     <main className="min-h-screen bg-[#0f172a] text-white">
//       <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
//         {/* Background glow */}
//         <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />
//         <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[100px]" />

//         <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-md md:p-12">
//           {/* Main Icon */}
//           <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20">
//             <WrenchIcon className="h-10 w-10 text-emerald-300" />
//           </div>

//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
//             Manutenção
//           </p>

//           <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
//             Website temporariamente indisponível
//           </h1>

//           <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
//             Estamos a realizar uma atualização técnica para melhorar a experiência
//             no website. Voltaremos a estar online brevemente.
//           </p>

//           {/* Info cards */}
//           <div className="grid gap-4 md:grid-cols-3">
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//               <ClockIcon className="mx-auto mb-3 h-7 w-7 text-emerald-300" />
//               <h2 className="mb-1 font-semibold">Temporário</h2>
//               <p className="text-sm text-slate-400">
//                 A interrupção é apenas momentânea.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//               <ShieldIcon className="mx-auto mb-3 h-7 w-7 text-emerald-300" />
//               <h2 className="mb-1 font-semibold">Seguro</h2>
//               <p className="text-sm text-slate-400">
//                 Os dados e conteúdos estão protegidos.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//               <SparklesIcon className="mx-auto mb-3 h-7 w-7 text-emerald-300" />
//               <h2 className="mb-1 font-semibold">Melhorias</h2>
//               <p className="text-sm text-slate-400">
//                 O website está a ser preparado para regressar.
//               </p>
//             </div>
//           </div>

//           {/* Status */}
//           <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm text-emerald-200">
//             <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-300" />
//             Sistema em manutenção
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function WrenchIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       className={className}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M14.7 6.3a4.5 4.5 0 0 0-5.7 5.7L3 18l3 3 6-6a4.5 4.5 0 0 0 5.7-5.7l-3 3-3-3 3-3Z" />
//     </svg>
//   );
// }

// function ClockIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       className={className}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="9" />
//       <path d="M12 7v5l3 2" />
//     </svg>
//   );
// }

// function ShieldIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       className={className}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
//       <path d="m9 12 2 2 4-4" />
//     </svg>
//   );
// }

// function SparklesIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       className={className}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 3l1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z" />
//       <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
//       <path d="M5 3l.8 2.2L8 6l-2.2.8L5 9l-.8-2.2L2 6l2.2-.8L5 3Z" />
//     </svg>
//   );
// }