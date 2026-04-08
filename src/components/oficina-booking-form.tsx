"use client";

import { useMemo, useState } from "react";

const services = [
  { value: "revisao", label: "Revisão", duration: 90 },
  { value: "oleo-filtros", label: "Mudança de óleo e filtros", duration: 45 },
  { value: "diagnostico", label: "Diagnóstico", duration: 60 },
  { value: "travoes", label: "Travões", duration: 120 },
  { value: "suspensao", label: "Suspensão", duration: 120 },
  { value: "mecanica-geral", label: "Mecânica geral", duration: 180 },
] as const;

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const blockedSlotsByDate: Record<string, string[]> = {
  "2026-04-10": ["10:00", "12:00", "16:00"],
  "2026-04-11": ["09:00", "11:00", "15:00"],
  "2026-04-12": ["12:00", "14:00"],
};

type SubmitState = "idle" | "success" | "error";

export function OficinaBookingForm() {
  const [service, setService] = useState("revisao");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [notes, setNotes] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const selectedService = useMemo(
    () => services.find((item) => item.value === service),
    [service]
  );

  const blockedSlots = useMemo(() => {
    if (!date) return [];
    return blockedSlotsByDate[date] || [];
  }, [date]);

  const availableSlots = useMemo(() => {
    return timeSlots.filter((slot) => !blockedSlots.includes(slot));
  }, [blockedSlots]);

  const formattedDate = useMemo(() => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("pt-PT", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, [date]);

  function resetFeedback() {
    setSubmitState("idle");
    setSubmitMessage("");
  }

  function validatePhone(value: string) {
    const clean = value.replace(/\s+/g, "");
    return /^[+]?[0-9]{9,15}$/.test(clean);
  }

  function validateEmail(value: string) {
    if (!value) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    resetFeedback();

    if (!service || !date || !time || !name || !phone) {
      setSubmitState("error");
      setSubmitMessage("Preencha os campos obrigatórios antes de enviar.");
      return;
    }

    if (date < today) {
      setSubmitState("error");
      setSubmitMessage("Selecione uma data válida para o pedido de marcação.");
      return;
    }

    if (!validatePhone(phone)) {
      setSubmitState("error");
      setSubmitMessage("Introduza um número de telefone válido.");
      return;
    }

    if (!validateEmail(email)) {
      setSubmitState("error");
      setSubmitMessage("Introduza um endereço de email válido.");
      return;
    }

    if (blockedSlots.includes(time)) {
      setSubmitState("error");
      setSubmitMessage("Esse horário já não está disponível. Escolha outro.");
      return;
    }

    setSubmitState("success");
    setSubmitMessage(
      "Pedido de marcação enviado com sucesso. A oficina entrará em contacto para confirmação."
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Pedido de marcação
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Agende o seu serviço
          </h2>
          <p className="mt-4 text-zinc-600">
            Escolha o serviço, a data e a hora pretendida para submeter o pedido.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Serviço *
              </label>
              <select
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  resetFeedback();
                }}
                className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              >
                {services.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Data *
              </label>
              <input
                type="date"
                min={today}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setTime("");
                  resetFeedback();
                }}
                className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Hora *
              </label>
              <select
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                  resetFeedback();
                }}
                className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 disabled:cursor-not-allowed disabled:bg-zinc-100"
                disabled={!date}
              >
                <option value="">
                  {!date ? "Escolha primeiro uma data" : "Selecione uma hora"}
                </option>

                {timeSlots.map((slot) => {
                  const isBlocked = blockedSlots.includes(slot);

                  return (
                    <option key={slot} value={slot} disabled={isBlocked}>
                      {slot} {isBlocked ? "— indisponível" : ""}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Veículo / Matrícula
              </label>
              <input
                type="text"
                value={vehicle}
                onChange={(e) => {
                  setVehicle(e.target.value);
                  resetFeedback();
                }}
                placeholder="Ex: BMW Série 1 / 12-AB-34"
                className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Nome *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  resetFeedback();
                }}
                placeholder="O seu nome"
                className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Telefone *
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  resetFeedback();
                }}
                placeholder="+351 ..."
                className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                resetFeedback();
              }}
              placeholder="email@exemplo.pt"
              className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Observações
            </label>
            <textarea
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value);
                resetFeedback();
              }}
              rows={5}
              placeholder="Descreva brevemente o que pretende."
              className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 sm:w-auto"
          >
            Pedir marcação
          </button>

          {submitMessage && (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm ${
                submitState === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {submitMessage}
            </div>
          )}
        </form>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-semibold">Informação do serviço</h3>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm text-zinc-600">Serviço selecionado</p>
              <p className="mt-1 text-lg font-semibold text-zinc-900">
                {selectedService?.label}
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-600">Duração estimada</p>
              <p className="mt-1 text-lg font-semibold text-emerald-700">
                {selectedService?.duration} min
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-600">Data escolhida</p>
              <p className="mt-1 text-base font-medium text-zinc-900">
                {formattedDate || "Ainda não selecionada"}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-semibold">Disponibilidade</h3>
          <p className="mt-4 text-sm text-zinc-600">
            {date
              ? `Resumo de horários para ${formattedDate}:`
              : "Escolha uma data para visualizar a disponibilidade simulada."}
          </p>

          {date ? (
            <div className="mt-5 space-y-5">
              <div>
                <p className="mb-3 text-sm font-medium text-zinc-700">
                  Horários disponíveis
                </p>
                {availableSlots.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {availableSlots.map((slot) => (
                      <span
                        key={slot}
                        className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700"
                      >
                        {slot}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="rounded-2xl bg-zinc-100 px-4 py-3 text-sm text-zinc-600">
                    Não existem horários disponíveis nesta data.
                  </p>
                )}
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-zinc-700">
                  Horários indisponíveis
                </p>
                {blockedSlots.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {blockedSlots.map((slot) => (
                      <span
                        key={slot}
                        className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700"
                      >
                        {slot}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    Não existem horários assinalados como ocupados para esta data.
                  </p>
                )}
              </div>
            </div>
          ) : null}
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm sm:p-8">
          <h3 className="text-xl font-semibold">Nota de apresentação</h3>
          <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
            <p>Esta versão demonstra a experiência visual de marcação.</p>
            <p>Os horários indisponíveis estão simulados para apresentação ao cliente.</p>
            <p>
              Numa fase seguinte, esta área poderá ser ligada a um sistema real de
              disponibilidade e confirmação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}