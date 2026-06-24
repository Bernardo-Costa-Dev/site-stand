// import Image from "next/image";
// import Link from "next/link";
// import { client } from "@/lib/sanity/client";
// import { urlFor } from "@/lib/sanity/image";

// export const dynamic = "force-dynamic";

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
//   *[_type == "vehicle" && featured == true] | order(_createdAt desc) {
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

// function FacebookIcon() {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
//       <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.19 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.25.2 2.25.2v2.48H15.2c-1.25 0-1.64.78-1.64 1.57v1.88h2.79l-.45 2.91h-2.34V22c4.78-.74 8.44-4.9 8.44-9.93Z" />
//     </svg>
//   );
// }

// function InstagramIcon() {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
//       <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.37 1.73H7.88a4.15 4.15 0 0 0-4.15 4.15v8.24a4.15 4.15 0 0 0 4.15 4.15h8.24a4.15 4.15 0 0 0 4.15-4.15V7.88a4.15 4.15 0 0 0-4.15-4.15ZM12 7.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3Zm0 1.63A3.07 3.07 0 1 0 15.07 12 3.07 3.07 0 0 0 12 8.93Zm4.89-2.1a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
//     </svg>
//   );
// }

// export default async function Home() {
//   const homepageVehicles = await client.fetch<Vehicle[]>(vehiclesQuery);
//   const heroVehicle = homepageVehicles[0] || null;

//   return (
//     <main className="min-h-screen bg-white text-zinc-900">
//       <section className="relative overflow-hidden">
//         <div className="object-cover opacity-85">
//           <Image
//             src="/stand-image.png"
//             alt="Oficina S.I Auto"
//             fill
//             className="object-cover"
//             priority
//             sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
//           />
//         </div>
//         <div className="absolute inset-0 bg-zinc-950/65" />
//         <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/60 to-zinc-950/40" />

//         <div className="relative mx-auto grid min-h-[78vh] max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
//           <div>
//             <p className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white [-webkit-text-stroke:1px_#04802f] md:text-5xl lg:text-6xl text-center">
//               O seu stand automóvel
//             </p>

//             {/* <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white [-webkit-text-stroke:1px_#04802f] md:text-5xl lg:text-6xl text-center">
//               Stock Multimarcas para qualquer ocasião
//             </h1> */}

//             <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
//              A S.I Auto dispõe de um vasto stock multimarcas, com acompanhamento personalizado e preparação cuidada de cada viatura para garantir confiança na entrega.
//             </p>

//             <div className="mt-8 flex flex-wrap justify-center gap-3">
//               <Link
//                 href="/viaturas"
//                 className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-500"
//               >
//                 Ver viaturas
//               </Link>

//               <Link
//                 href="/oficina"
//                 className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/15"
//               >
//                 Marcar oficina
//               </Link>
//             </div>

//             <div className="mt-10 grid max-w-xl grid-cols-2 gap-4">
//               {/* <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
//                 <p className="text-2xl font-bold text-white">{homepageVehicles.length} Novas Entradas</p>
//                 <p className="mt-1 text-sm text-zinc-300">Novas Entradas</p>
//               </div> */}
//               <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
//                 <p className="text-2xl font-bold text-white">Garantia Stand</p>
//                 <p className="mt-1 text-sm text-zinc-300">Assistencia pós-venda</p>
//               </div>
//               <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
//                 <p className="text-2xl font-bold text-white">Pague até 120x</p>
//                 <p className="mt-1 text-sm text-zinc-300">Possiblidade de financiamento</p>
//               </div>
//             </div>
//           </div>

//           <div>
//             {heroVehicle ? (
//               <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/95 shadow-2xl">
//                 <div className="relative aspect-[4/3] w-full bg-zinc-100">
//                   {heroVehicle.images?.[0] ? (
//                     <Image
//                       src={urlFor(heroVehicle.images[0]).width(1600).quality(90).auto("format").url()}
//                       alt={heroVehicle.title}
//                       fill
//                       className="object-cover"
//                       priority
//                       sizes="(max-width: 1024px) 100vw, 45vw"
//                     />
//                   ) : (
//                     <div className="flex h-full items-center justify-center text-sm text-zinc-500">
//                       Sem imagem
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-6">
//                   <div className="mb-4 flex items-start justify-between gap-4">
//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
//                         Viatura em destaque
//                       </p>
//                       <h2 className="mt-2 text-2xl font-bold">{heroVehicle.title}</h2>
//                     </div>

//                     {/* <p className="whitespace-nowrap text-2xl font-bold text-emerald-700">
//                       Sob Consulta
//                     </p> */}
//                   </div>

//                   <div className="grid grid-cols-2 gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm">
//                     <p>
//                       <span className="text-zinc-500">Ano:</span>{" "}
//                       <span className="font-semibold">{heroVehicle.year}</span>
//                     </p>
//                     <p>
//                       <span className="text-zinc-500">Km:</span>{" "}
//                       <span className="font-semibold">
//                         {heroVehicle.mileage?.toLocaleString("pt-PT")}
//                       </span>
//                     </p>
//                     <p>
//                       <span className="text-zinc-500">Combustível:</span>{" "}
//                       <span className="font-semibold">{heroVehicle.fuel}</span>
//                     </p>
//                     <p>
//                       <span className="text-zinc-500">Caixa:</span>{" "}
//                       <span className="font-semibold">{heroVehicle.transmission}</span>
//                     </p>
//                   </div>

//                   <div className="mt-5">
//                     <Link
//                       href={heroVehicle.slug?.current ? `/viaturas/${heroVehicle.slug.current}` : "#"}
//                       className="inline-flex rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
//                     >
//                       Ver viatura
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="rounded-3xl border border-white/10 bg-white/10 p-10 text-center text-white backdrop-blur">
//                 Adiciona viaturas no CMS para aparecerem aqui.
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       <section id="viaturas" className="relative overflow-hidden py-16">
//       <div className="absolute inset-0">
//         <Image
//           src="/bg-carro-site.png"
//           alt=""
//           fill
//           className="object-cover object-right opacity-[0.16] brightness-75"
//         />
//         <div className="absolute inset-0 bg-[#328F52]/10 mix-blend-multiply" />
//         <div className="absolute inset-0 bg-[#f3f5f4]/78" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
//         <div className="mb-8 flex items-end justify-between gap-4">
//           <div>
//             {/* <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
//               Stock disponível
//             </p> */}
//             <h2 className="mt-2 text-3xl font-bold tracking-tight">
//               Viaturas em destaque
//             </h2>
//             {/* <p className="mt-3 max-w-2xl text-zinc-600">
//               As nossas viaturas selecionadas, com informação detalhada e contacto facilitado.
//             </p> */}
//           </div>

//           <Link
//             href="/viaturas"
//             className="hidden rounded-xl border border-zinc-300 px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 md:inline-flex"
//           >
//             Ver todas as viaturas
//           </Link>
//         </div>

//         {homepageVehicles.length === 0 ? (
//           <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-10 text-center text-zinc-500">
//             Ainda não existem viaturas publicadas.
//           </div>
//         ) : (
//           <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
//             {homepageVehicles.map((vehicle) => {
//               const image = vehicle.images?.[0];

//               return (
//                 <article
//                   key={vehicle._id}
//                   className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//                 >
//                   <div className="relative aspect-[4/3] w-full bg-zinc-100">
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
//                   </div>

//                   <div className="p-5">
//                     <div className="mb-3 flex items-start justify-between gap-4">
//                       <h3 className="text-xl font-semibold leading-tight">
//                         {vehicle.title}
//                       </h3>
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
//                         <span className="text-zinc-500">Caixa:</span> {vehicle.transmission}
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
//       </div>
//     </section>

//       <section className="border-y border-zinc-200 bg-zinc-50">
//         <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 py-16 lg:grid-cols-2">
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
//               Sobre a S.I Auto
//             </p>
//             <h2 className="mt-2 text-3xl font-bold tracking-tight">
//             Um Compromisso Com Pessoas
//             </h2>
//             <p className="mt-5 leading-8 text-zinc-600">
//               A SOLID INTEREST – COMÉRCIO AUTO UNIPESSOAL foi formalizada em maio de 2023, consolidando a experiência e visão empresarial de Vasco Santos, Sócio - Gerente da empresa.
//             </p>
//             <p className="mt-4 leading-8 text-zinc-600">
//               Com um percurso desenvolvido no setor automóvel enquanto empresário, Vasco Santos estruturou metodologias de trabalho orientadas para a qualidade, confiança e eficiência, tanto na área da reparação automóvel como no comércio de viaturas.
//             </p>
//             <p className="mt-4 leading-8 text-zinc-600">
//              A empresa reforça ainda a sua oferta com um Serviço de Reboque Rápido a nível nacional, disponível para apoiar particulares, empresas e clientes que necessitem de assistência rápida, segura e profissional.        
//             </p>
//             <p className="mt-4 leading-8 text-zinc-600">
//               A SOLID INTEREST assume-se assim como uma empresa focada em soluções automóveis completas, combinando experiência, responsabilidade e proximidade com o cliente.
//             </p>
//           </div>

//          <div className="grid grid-cols-1 gap-4">
//             <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
//               <Image
//                 src="/stand-image.png"
//                 alt="Stand S.I Auto Comércio Auto"
//                 width={1535}
//                 height={1024}
//                 className="h-auto w-full object-cover"
//               />
//             </div>

//             <div className="rounded-3xl border border-zinc-200 bg-white p-6">
//               <h3 className="text-center text-lg font-semibold">
//                 O Nosso Compromisso é a Sua Confiança
//               </h3>

//               <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
//                 <div className="space-y-3 text-sm leading-6 text-zinc-600">
//                   <p>✅ Facilidade de financiamento até 120x</p>
//                   <p>✅ Viaturas entregues com revisão e IPO</p>
//                   <p>✅ Garantia de 18 meses</p>
//                   <p>✅ Viaturas para comércio</p>
//                 </div>

//                 <div className="space-y-3 text-sm leading-6 text-zinc-600">
//                   <p>✅ Transferência de propriedade</p>
//                   <p>✅ Aceitamos retomas</p>
//                   <p>✅ Assistência pós-venda</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="oficina" className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
//         <div className="mb-10 max-w-2xl">
//           <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
//             Oficina
//           </p>
//           <h2 className="mt-2 text-3xl font-bold tracking-tight">
//             O Nosso Serviço Vai Além Da Sua Compra
//           </h2>
//           <p className="mt-4 text-zinc-600">
//            Um acompanhamento técnico que complementa a experiência do stand e por isso disponibilizamos aos nosso clientes um vasto serviço de assistência mecânica automóvel.
//           </p>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
//             <h3 className="text-lg font-semibold">Diagnóstico</h3>
//             <p className="mt-3 text-sm leading-6 text-zinc-600">
//               Identificação de problemas e apoio técnico para prevenção de avarias e comportamento anormal do veículo.
//             </p>
//           </div>

//           <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
//             <h3 className="text-lg font-semibold"> Revisão Geral - Óleo e Filtros</h3>
//             <p className="mt-3 text-sm leading-6 text-zinc-600">
//               Serviços rápidos para manter o motor em boas condições e manutenção preventiva para melhor durabilidade da sua viatura.           
//             </p>
//           </div>

//           <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
//             <h3 className="text-lg font-semibold">Pneus e Travões</h3>
//             <p className="mt-3 text-sm leading-6 text-zinc-600">
//               Cuidamos da segurança da sua viatura com serviços de substituição de pneus, montagem, equilibragem e verificação do sistema de travagem, garantindo um serviço profissional, rápido e de confiança.

//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="border-y border-zinc-200 bg-zinc-50">
//         <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 py-16 lg:grid-cols-2">
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
//               Contactos
//             </p>
//             <h2 className="mt-2 text-3xl font-bold tracking-tight">
//               Fale connosco
//             </h2>

//             <div className="mt-8 space-y-4 text-zinc-700">
//               <p>
//                 <span className="font-semibold">Stand:</span> S.I Auto 
//               </p>
//               <p>
//                 <span className="font-semibold">Empresa:</span> Solid Interest Comércio Auto Unipessoal Lda.
//               </p>
//               <p>
//                 <span className="font-semibold">Telefone:</span> +351 915 382 782
//               </p>
//               <p>
//                 <span className="font-semibold">Email:</span> autosolidinterest@gmail.com
//               </p>
//               <p className="flex flex-wrap items-center gap-3">
//                   <span className="font-semibold">Redes Sociais:</span>

//                   <a
//                     href="https://www.facebook.com/share/15tSTAWRDCo/"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-2 text-zinc-700 transition hover:text-emerald-700"
//                     aria-label="Facebook S.I Auto"
//                   >
//                     <FacebookIcon />
//                     <span>Facebook</span>
//                   </a>

//                   <a
//                     href="https://www.instagram.com/si_auto_stand?igsh=d3N1YzBic2JwaGxq"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-2 text-zinc-700 transition hover:text-emerald-700"
//                     aria-label="Instagram S.I Auto"
//                   >
//                     <InstagramIcon />
//                     <span>Instagram</span>
//                   </a>
//               </p>
//               <p>
//                 <span className="font-semibold">Morada:</span> Estrada Nacional N° 8, Q.ta do Mota, 2460-194 Alfeizerão
//               </p>
//             </div>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <a
//                 href="tel:+351900000000"
//                 className="rounded-xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-800"
//               >
//                 Ligar
//               </a>
//               <a
//                 href="mailto:geral@siauto.pt"
//                 className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
//               >
//                 Enviar email
//               </a>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//             <div>
//               <p className="mb-3 text-center text-sm font-semibold uppercase text-emerald-300">
//                 Stand
//               </p>

//               <iframe
//                 title="Mapa localização S.I Auto"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1088.8559639288187!2d-9.107544471294732!3d39.474981994533636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18b3804e9a0d47%3A0x44bc309b2cead288!2sS.I.%20Auto%20(Solid%20Interest%20Com%C3%A9rcio%20Auto%20Unp%20Lda)!5e0!3m2!1sen!2spt!4v1775747214009!5m2!1sen!2spt"
//                 className="h-[360px] w-full rounded-2xl border-0"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>

//             <div>
//               <p className="mb-3 text-center text-sm font-semibold uppercase text-emerald-300">
//                 Oficina
//               </p>

//               <iframe
//                 title="Mapa localização Oficina"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.015851584635!2d-9.165617210144838!3d39.42376600267762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18b37f588dfa7d%3A0xa3832b0c0a698465!2sTriumph%20Inc.PT!5e0!3m2!1spt-PT!2spt!4v1778691059397!5m2!1spt-PT!2spt"
//                 className="h-[360px] w-full rounded-2xl border-0"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </div>
//         </div>
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