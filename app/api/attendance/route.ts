import { NextResponse } from "next/server";

import { appendSheetRows } from "@/lib/google-sheet-append";

type Body = {
  name?: string;
  phone?: string;
  attendance?: "attend" | "definite";
  travelWithProgram?: "yes" | "no";
};

function attendanceLabel(a: Body["attendance"]): string {
  if (a === "attend") return "Có thể tham dự";
  if (a === "definite") return "Không thể tham dự";
  return "";
}

function travelWithProgramLabel(v: Body["travelWithProgram"]): string {
  if (v === "yes") return "Có";
  if (v === "no") return "Không";
  return "";
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const attendance =
    body.attendance === "attend" || body.attendance === "definite"
      ? body.attendance
      : null;
  const travelWithProgram =
    body.travelWithProgram === "yes" || body.travelWithProgram === "no"
      ? body.travelWithProgram
      : null;

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required" },
      { status: 400 },
    );
  }
  if (!attendance) {
    return NextResponse.json(
      { error: "Please select an attendance option" },
      { status: 400 },
    );
  }
  if (!travelWithProgram) {
    return NextResponse.json(
      { error: "Please select a travel option" },
      { status: 400 },
    );
  }

  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  const privateKeyPem = rawKey?.replace(/\\n/g, "\n");

  if (!spreadsheetId || !clientEmail || !privateKeyPem) {
    return NextResponse.json(
      { error: "Sheet integration is not configured" },
      { status: 500 },
    );
  }

  const range = process.env.GOOGLE_SHEET_RANGE?.trim() || "participants!B:E";
  const row = [
    name,
    phone,
    attendanceLabel(attendance),
    travelWithProgramLabel(travelWithProgram),
  ];

  try {
    await appendSheetRows({
      spreadsheetId,
      range,
      values: [row],
      clientEmail,
      privateKeyPem,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
