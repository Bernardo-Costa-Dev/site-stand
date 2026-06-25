import { Analytics } from "@vercel/analytics/next"

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.19 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.25.2 2.25.2v2.48H15.2c-1.25 0-1.64.78-1.64 1.57v1.88h2.79l-.45 2.91h-2.34V22c4.78-.74 8.44-4.9 8.44-9.93Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.37 1.73H7.88a4.15 4.15 0 0 0-4.15 4.15v8.24a4.15 4.15 0 0 0 4.15 4.15h8.24a4.15 4.15 0 0 0 4.15-4.15V7.88a4.15 4.15 0 0 0-4.15-4.15ZM12 7.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3Zm0 1.63A3.07 3.07 0 1 0 15.07 12 3.07 3.07 0 0 0 12 8.93Zm4.89-2.1a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
    </svg>
  );
}

export default function ContactosPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Contactos
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Fale connosco</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            Entre em contacto com a S.I Auto para mais informações sobre viaturas ou serviços de oficina.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Informações</h2>

              <div className="mt-8 space-y-4 text-zinc-700">
                <p>
                <span className="font-semibold">Stand:</span> S.I Auto 
              </p>
              <p>
                <span className="font-semibold">Empresa:</span> Solid Interest Comércio Auto Unipessoal Lda.
              </p>
                <p><span className="font-semibold">Telefone:</span> +351 915 382 782</p>
                <p><span className="font-semibold">Email:</span> autosolidinterest@gmail.com</p>
                <p className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold">Redes Sociais:</span>

                  <a
                    href="https://www.facebook.com/share/15tSTAWRDCo/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-700 transition hover:text-emerald-700"
                    aria-label="Facebook S.I Auto"
                  >
                    <FacebookIcon />
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://www.instagram.com/si_auto_stand?igsh=d3N1YzBic2JwaGxq"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-700 transition hover:text-emerald-700"
                    aria-label="Instagram S.I Auto"
                  >
                    <InstagramIcon />
                    <span>Instagram</span>
                  </a>
                </p>
                <p><span className="font-semibold">Morada:</span> Estrada Nacional N° 8, Q.ta do Mota, 2460-194 Alfeizerão</p>
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
                  className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                >
                  Enviar email
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <h2 className="text-xl font-semibold">Horário</h2>
              <div className="mt-4 space-y-2 text-sm text-zinc-600">
                <p>Segunda a Sexta: 09:00 - 19:00</p>
                <p>Sábado: 09:00 - 13:00</p>
                <p>Domingo: Encerrado</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
            <iframe
              title="Mapa localização S.I Auto"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1088.8559639288187!2d-9.107544471294732!3d39.474981994533636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18b3804e9a0d47%3A0x44bc309b2cead288!2sS.I.%20Auto%20(Solid%20Interest%20Com%C3%A9rcio%20Auto%20Unp%20Lda)!5e0!3m2!1sen!2spt!4v1775747214009!5m2!1sen!2spt"
              className="h-[520px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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