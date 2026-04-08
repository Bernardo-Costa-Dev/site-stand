// import { NextResponse } from "next/server";
// import { adminDb } from "@/lib/firebase/admin";
// import { getServiceByValue } from "@/lib/oficina/service";

// type BookingPayload = {
//   service: string;
//   date: string;
//   time: string;
//   name: string;
//   phone: string;
//   email?: string;
//   vehicle?: string;
//   notes?: string;
// };

// function makeBookingId(date: string, time: string) {
//   return `${date}_${time.replace(":", "-")}`;
// }

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const date = searchParams.get("date");

//   if (!date) {
//     return NextResponse.json({ blockedSlots: [] });
//   }

//   const snapshot = await adminDb
//     .collection("oficinaBookings")
//     .where("date", "==", date)
//     .where("status", "in", ["pending", "confirmed"])
//     .get();

//   const blockedSlots = snapshot.docs.map((doc) => doc.data().time as string);

//   return NextResponse.json({ blockedSlots });
// }

// export async function POST(request: Request) {
//   try {
//     const body = (await request.json()) as BookingPayload;

//     const { service, date, time, name, phone, email = "", vehicle = "", notes = "" } = body;

//     if (!service || !date || !time || !name || !phone) {
//       return NextResponse.json(
//         { message: "Preencha os campos obrigatórios." },
//         { status: 400 }
//       );
//     }

//     const selectedService = getServiceByValue(service);

//     if (!selectedService) {
//       return NextResponse.json(
//         { message: "Serviço inválido." },
//         { status: 400 }
//       );
//     }

//     const bookingId = makeBookingId(date, time);
//     const bookingRef = adminDb.collection("oficinaBookings").doc(bookingId);

//     await adminDb.runTransaction(async (transaction) => {
//       const existing = await transaction.get(bookingRef);

//       if (existing.exists) {
//         throw new Error("SLOT_TAKEN");
//       }

//       transaction.set(bookingRef, {
//         service,
//         serviceLabel: selectedService.label,
//         duration: selectedService.duration,
//         date,
//         time,
//         name,
//         phone,
//         email,
//         vehicle,
//         notes,
//         status: "pending",
//         createdAt: new Date().toISOString(),
//       });
//     });

//     return NextResponse.json({
//       message: "Pedido de marcação enviado com sucesso.",
//     });
//   } catch (error) {
//     if (error instanceof Error && error.message === "SLOT_TAKEN") {
//       return NextResponse.json(
//         { message: "Esse horário já não está disponível. Escolha outro." },
//         { status: 409 }
//       );
//     }

//     return NextResponse.json(
//       { message: "Ocorreu um erro ao guardar a marcação." },
//       { status: 500 }
//     );
//   }
// }