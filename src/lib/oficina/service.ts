export const OFICINA_SERVICES = [
  { value: "revisao", label: "Revisão", duration: 90 },
  { value: "oleo-filtros", label: "Mudança de óleo e filtros", duration: 45 },
  { value: "diagnostico", label: "Diagnóstico", duration: 60 },
  { value: "travoes", label: "Travões", duration: 120 },
  { value: "suspensao", label: "Suspensão", duration: 120 },
  { value: "mecanica-geral", label: "Mecânica geral", duration: 180 },
];

export const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export function getServiceByValue(value: string) {
  return OFICINA_SERVICES.find((service) => service.value === value);
}