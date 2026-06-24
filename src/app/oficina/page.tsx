// import Link from "next/link";
// import { OficinaBookingForm } from "@/components/oficina-booking-form";
// import Image from "next/image";

// const services = [
//   {
//     title: "Serviço de mecânica geral",
//     description: "Inclui os principais serviços de manutenção e acompanhamento técnico.",
//     items: ["Revisões", "Mudança de óleo e filtro", "Travões", "Suspensão"],
//   },
//   {
//     title: "Pneus",
//     description: "Serviços ligados à segurança, estabilidade e bom comportamento do veículo.",
//     items: ["Troca de pneus", "Alinhamento de direção"],
//   },
//   {
//     title: "Diagnóstico",
//     description: "Análise técnica para identificar avarias e antecipar problemas.",
//     items: [],
//   },
// ];

// export default function OficinaPage() {
//   return (
//   <main className="min-h-screen bg-[#f3f5f4] text-zinc-900">
//     <section className="relative overflow-hidden bg-zinc-950">

//       <div className="absolute inset-0">
//         <Image
//           src="/hero-oficina.jpeg"
//           alt="Oficina S.I Auto"
//           fill
//           className="object-cover object-center md:object-center"
//           priority
//           sizes="100vw"
//         />
//       </div>

//   {/* <div className="absolute inset-0 bg-zinc-950/70" /> */}

//   {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_30%),linear-gradient(to_right,rgba(9,9,11,0.85),rgba(24,24,27,0.75),rgba(9,9,11,0.85))]" /> */}

//       <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
//         <div className="flex justify-center">
//             <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/45 px-6 py-8 text-center shadow-2xl backdrop-blur-sm sm:px-8 sm:py-10">
//             <h1 className="text-4xl font-bold text-white [-webkit-text-stroke:2px_#328F52]">
//               Oficina
//             </h1>

//             <h2 className="mt-4 text-4xl font-bold tracking-tight text-white [-webkit-text-stroke:2px_#328F52] md:text-5xl">
//               Assistência automóvel
//             </h2>

//             <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
//               Disponha dos nossos serviços de manutenção e apoio pós-venda, com um processo de marcação simples e claro.
//             </p>

//             <div className="mt-8 flex flex-wrap justify-center gap-3">
//               <a
//                 href="#marcacao"
//                 className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
//               >
//                 Agendar serviço
//               </a>

//               <a
//                 href="tel:+351915382782"
//                 className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
//               >
//                 Falar connosco
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//       <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
//         <div className="mb-10 max-w-2xl">
//           <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
//             Serviços disponíveis
//           </p>

//           <h2 className="mt-2 text-3xl font-bold tracking-tight">
//             Uma oficina preparada para acompanhar o cliente para além da compra.
//           </h2>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {services.map((service) => (
//             <div
//               key={service.title}
//               className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//             >
//               <div className="mb-4 h-1.5 w-14 rounded-full bg-emerald-500" />

//               <h3 className="text-xl font-semibold">{service.title}</h3>

//               <p className="mt-3 text-sm leading-6 text-zinc-600">
//                 {service.description}
//               </p>

//               {service.items.length > 0 && (
//                 <ul className="mt-5 space-y-2 text-sm text-zinc-700">
//                   {service.items.map((item) => (
//                     <li key={item} className="flex items-start gap-2">
//                       <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
//         <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
//           <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
//             <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
//               Porque esta página funciona
//             </p>

//             <h2 className="mt-2 text-3xl font-bold tracking-tight">
//               Uma apresentação pensada para transmitir confiança ao cliente.
//             </h2>

//             <p className="mt-4 text-base leading-7 text-zinc-600">
//               Mesmo sendo uma versão demo, esta área já demonstra que o negócio
//               não termina na venda do automóvel. Existe apoio, manutenção e uma
//               experiência organizada para o cliente continuar ligado ao stand.
//             </p>

//             <div className="mt-8 grid gap-4 sm:grid-cols-2">
//               <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700">
//                 Serviço apresentado de forma clara
//               </div>
//               <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700">
//                 Visual premium e consistente
//               </div>
//               <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700">
//                 Ideal para demonstração comercial
//               </div>
//               <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700">
//                 Fácil de evoluir para sistema real
//               </div>
//             </div>
//           </div>

//           <div className="rounded-[28px] border border-white/10 bg-zinc-950 p-8 text-white shadow-sm">
//             <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
//               Como funciona
//             </p>

//             <h2 className="mt-2 text-2xl font-bold">
//               Um processo simples, claro e fácil de perceber.
//             </h2>

//             <div className="mt-8 space-y-4 text-sm text-zinc-300">
//               <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
//                 1. O cliente escolhe o serviço pretendido.
//               </div>
//               <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
//                 2. Seleciona data e horário disponíveis.
//               </div>
//               <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
//                 3. Envia os dados para pedido de confirmação.
//               </div>
//             </div>

//             <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
//               Nesta fase, o objetivo é mostrar uma experiência visual credível,
//               moderna e profissional, sem ainda depender de base de dados real.
//             </div>
//           </div>
//         </div>
//       </section> */}

//       <section
//         id="marcacao"
//         className="border-t border-zinc-200 bg-white/40 py-16 text-center"
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6">
//           <OficinaBookingForm />
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