import { NextResponse } from "next/server";

import { appendSheetRows } from "@/lib/google-sheet-append";

type Body = {
  question?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const question =
    typeof body.question === "string" ? body.question.trim() : "";

  if (!question) {
    return NextResponse.json(
      { error: "Question is required" },
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

  const row = [question];

  try {
    await appendSheetRows({
      spreadsheetId,
      range: "questions!B:B",
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
