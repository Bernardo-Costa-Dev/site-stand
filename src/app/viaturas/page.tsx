// import Image from "next/image";
// import Link from "next/link";
// import type { SanityImageSource } from "@sanity/image-url";
// import { client } from "@/lib/sanity/client";
// import { urlFor } from "@/lib/sanity/image";
// import { VehicleFiltersBar } from "@/components/vehicle-filters-bar";

// type Vehicle = {
//   _id: string;
//   title: string;
//   slug?: {
//     current: string;
//   };
//   price: number;
//   year: number;
//   mileage?: number;
//   fuel?: string;
//   horsepower?: number;
//   power?: number;
//   transmission?: string;
//   transmission_speeds?: string;
//   brand?: string;
//   model?: string;
//   number_doors?: number;
//   number_seats?: number;
//   featured?: boolean;
//   images?: unknown[];
//   description?: string;
// };

// const vehiclesQuery = `
//   *[_type == "vehicle"] | order(featured desc, _createdAt desc) {
//     _id,
//     title,
//     slug,
//     price,
//     year,
//     mileage,
//     fuel,
//     horsepower,
//     power,
//     transmission,
//     transmission_speeds,
//     brand,
//     model,
//     number_doors,
//     number_seats,
//     featured,
//     images,
//     description
//   }
// `;

// function buildOptions(values: Array<string | undefined>) {
//   return [...new Set(values.filter(Boolean))]
//     .sort((a, b) => a!.localeCompare(b!, "pt"))
//     .map((value) => ({
//       label: value as string,
//       value: value as string,
//     }));
// }

// type PageProps = {
//   searchParams?: Promise<{
//     minYear?: string;
//     maxYear?: string;
//     minKm?: string;
//     maxKm?: string;
//     brand?: string;
//     model?: string;
//     fuel?: string;
//     transmission?: string;
//     q?: string;
//     sort?: string;
//   }>;
// };

// export default async function ViaturasPage({ searchParams }: PageProps) {
//   const vehicles = await client.fetch<Vehicle[]>(vehiclesQuery);

//   const params = (await searchParams) ?? {};

//   const years = vehicles
//     .map((vehicle) => vehicle.year)
//     .filter((value): value is number => typeof value === "number");

//   const mileages = vehicles
//     .map((vehicle) => vehicle.mileage)
//     .filter((value): value is number => typeof value === "number");

//   const bounds = {
//     yearMin: years.length ? Math.min(...years) : 0,
//     yearMax: years.length ? Math.max(...years) : 0,
//     kmMin: mileages.length ? Math.min(...mileages) : 0,
//     kmMax: mileages.length ? Math.max(...mileages) : 0,
//   };

//   const brandOptions = buildOptions(vehicles.map((vehicle) => vehicle.brand));
//   const modelOptions = buildOptions(vehicles.map((vehicle) => vehicle.model));
//   const fuelOptions = buildOptions(vehicles.map((vehicle) => vehicle.fuel));
//   const transmissionOptions = buildOptions(
//     vehicles.map((vehicle) => vehicle.transmission)
//   );

//   const filters = {
//     minYear: Number(params.minYear ?? bounds.yearMin),
//     maxYear: Number(params.maxYear ?? bounds.yearMax),
//     minKm: Number(params.minKm ?? bounds.kmMin),
//     maxKm: Number(params.maxKm ?? bounds.kmMax),
//     brand: params.brand ?? "",
//     model: params.model ?? "",
//     fuel: params.fuel ?? "",
//     transmission: params.transmission ?? "",
//     q: params.q ?? "",
//     sort: params.sort ?? "",
//   };

//   let filteredVehicles = vehicles.filter((vehicle) => {
//     const year = vehicle.year ?? 0;
//     const km = vehicle.mileage ?? 0;

//     const matchesYear =
//       year >= filters.minYear && year <= filters.maxYear;

//     const matchesKm =
//       km >= filters.minKm && km <= filters.maxKm;

//     const matchesBrand =
//       !filters.brand || vehicle.brand === filters.brand;

//     const matchesModel =
//       !filters.model || vehicle.model === filters.model;

//     const matchesFuel =
//       !filters.fuel || vehicle.fuel === filters.fuel;

//     const matchesTransmission =
//       !filters.transmission || vehicle.transmission === filters.transmission;

//     const searchText = [
//       vehicle.title,
//       vehicle.brand,
//       vehicle.model,
//       vehicle.description,
//     ]
//       .filter(Boolean)
//       .join(" ")
//       .toLowerCase();

//     const matchesQuery =
//       !filters.q || searchText.includes(filters.q.toLowerCase());

//     return (
//       matchesYear &&
//       matchesKm &&
//       matchesBrand &&
//       matchesModel &&
//       matchesFuel &&
//       matchesTransmission &&
//       matchesQuery
//     );
//   });

//   if (filters.sort === "year-desc") {
//     filteredVehicles.sort((a, b) => b.year - a.year);
//   } else if (filters.sort === "year-asc") {
//     filteredVehicles.sort((a, b) => a.year - b.year);
//   } else if (filters.sort === "km-asc") {
//     filteredVehicles.sort((a, b) => (a.mileage ?? 0) - (b.mileage ?? 0));
//   } else if (filters.sort === "km-desc") {
//     filteredVehicles.sort((a, b) => (b.mileage ?? 0) - (a.mileage ?? 0));
//   }

//   return (
//     <main className="min-h-screen bg-white text-zinc-900">
//       <section className="border-b border-zinc-200 bg-gradient-to-b from-emerald-50 to-white">
//         <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
//           <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
//             Catálogo
//           </p>
//           <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
//             Viaturas disponíveis
//           </h1>
//           <p className="mt-4 max-w-2xl text-lg text-zinc-600">
//           Explore o nosso stock de viaturas e contacte-nos para realizar o Test-Drive.
//           <br></br>
//           <br />
//           Além das viaturas expostas, contamos com um leque de parceiros e fornecedores disponiveis a encontrar a sua viatura nova, semi-nova e ou usada, ideal ao seu gosto e perfil.
//           <br/>
//           Temos condições especiais de pagamento até 120x

//           </p>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
//         <div className="mb-8">
//           <VehicleFiltersBar
//             total={filteredVehicles.length}
//             brands={brandOptions}
//             models={modelOptions}
//             fuels={fuelOptions}
//             transmissions={transmissionOptions}
//             bounds={bounds}
//             values={filters}
//           />
//         </div>

//         {filteredVehicles.length === 0 ? (
//           <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-10 text-center text-zinc-500">
//             Ainda não existem viaturas publicadas.
//           </div>
//         ) : (
//           <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
//             {filteredVehicles.map((vehicle) => {
//               const image = vehicle.images?.[0];

//               return (
//                 <article
//                   key={vehicle._id}
//                   className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//                 >
//                   <div className="relative aspect-[4/3] w-full bg-zinc-100">
//                     <Link
//                         href={vehicle.slug?.current ? `/viaturas/${vehicle.slug.current}` : "#"}
//                         className="inline-flex rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
//                     >
//                     {image ? (
//                       <Image
//                         src={urlFor(image).width(1000).height(750).url()}
//                         alt={vehicle.title}
//                         fill
//                         className="object-cover"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-sm text-zinc-500">
//                         Sem imagem
//                       </div>
//                     )}

//                     {vehicle.featured && (
//                       <div className="absolute left-4 top-4 rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
//                         Destaque
//                       </div>
//                     )}
//                     </Link>
//                   </div>

//                   <div className="p-5">
//                     <div className="mb-3 flex items-start justify-between gap-4">
//                       <h2 className="text-xl font-semibold leading-tight">
//                         {vehicle.title}
//                       </h2>
//                       {/* <p className="whitespace-nowrap text-lg font-bold text-emerald-700">
//                         Sob Consulta
//                       </p> */}
//                     </div>

//                     <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-zinc-600">
//                       <p>
//                         <span className="text-zinc-500">Ano:</span> {vehicle.year}
//                       </p>
//                       <p>
//                         <span className="text-zinc-500">Km:</span>{" "}
//                         {vehicle.mileage?.toLocaleString("pt-PT")}
//                       </p>
//                       <p>
//                         <span className="text-zinc-500">Comb.:</span> {vehicle.fuel}
//                       </p>
//                       <p>
//                         <span className="text-zinc-500">Caixa:</span>{" "}
//                         {vehicle.transmission}
//                       </p>
//                     </div>

//                     {/* <p className="mb-5 min-h-[72px] text-sm leading-6 text-zinc-600">
//                       {vehicle.description || "Sem descrição disponível."}
//                     </p> */}

//                     <Link
//                       href={vehicle.slug?.current ? `/viaturas/${vehicle.slug.current}` : "#"}
//                       className="inline-flex rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
//                     >
//                       Ver viatura
//                     </Link>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
        {/* Background glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-md md:p-12">
          {/* Main Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20">
            <WrenchIcon className="h-10 w-10 text-emerald-300" />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Manutenção
          </p>

          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
            Website temporariamente indisponível
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Estamos a realizar uma atualização técnica para melhorar a experiência
            no website. Voltaremos a estar online brevemente.
          </p>

          {/* Info cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <ClockIcon className="mx-auto mb-3 h-7 w-7 text-emerald-300" />
              <h2 className="mb-1 font-semibold">Temporário</h2>
              <p className="text-sm text-slate-400">
                A interrupção é apenas momentânea.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <ShieldIcon className="mx-auto mb-3 h-7 w-7 text-emerald-300" />
              <h2 className="mb-1 font-semibold">Seguro</h2>
              <p className="text-sm text-slate-400">
                Os dados e conteúdos estão protegidos.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <SparklesIcon className="mx-auto mb-3 h-7 w-7 text-emerald-300" />
              <h2 className="mb-1 font-semibold">Melhorias</h2>
              <p className="text-sm text-slate-400">
                O website está a ser preparado para regressar.
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm text-emerald-200">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-300" />
            Sistema em manutenção
          </div>
        </div>
      </section>
    </main>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a4.5 4.5 0 0 0-5.7 5.7L3 18l3 3 6-6a4.5 4.5 0 0 0 5.7-5.7l-3 3-3-3 3-3Z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      <path d="M5 3l.8 2.2L8 6l-2.2.8L5 9l-.8-2.2L2 6l2.2-.8L5 3Z" />
    </svg>
  );
}