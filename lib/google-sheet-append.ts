import { createPrivateKey, sign as cryptoSign } from "node:crypto";

function base64UrlEncode(data: Buffer | string): string {
  const buf =
    typeof data === "string" ? Buffer.from(data, "utf8") : Buffer.from(data);
  return buf
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function mintServiceAccountJwt(
  clientEmail: string,
  privateKeyPem: string,
): string {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signingInput = `${encodedHeader}.${encodedPayload}`;
  const key = createPrivateKey(privateKeyPem);
  const sig = cryptoSign("RSA-SHA256", Buffer.from(signingInput, "utf8"), key);
  return `${signingInput}.${base64UrlEncode(sig)}`;
}

async function fetchAccessToken(
  clientEmail: string,
  privateKeyPem: string,
): Promise<string> {
  const assertion = mintServiceAccountJwt(clientEmail, privateKeyPem);
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const json = (await res.json()) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };
  if (!res.ok || !json.access_token) {
    const detail = json.error_description ?? json.error ?? res.statusText;
    throw new Error(`Google OAuth failed: ${detail}`);
  }
  return json.access_token;
}

export type AppendRowArgs = {
  spreadsheetId: string;
  range: string;
  values: unknown[][];
  clientEmail: string;
  privateKeyPem: string;
};

export async function appendSheetRows({
  spreadsheetId,
  range,
  values,
  clientEmail,
  privateKeyPem,
}: AppendRowArgs): Promise<void> {
  const token = await fetchAccessToken(clientEmail, privateKeyPem);
  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append`,
  );
  url.searchParams.set("valueInputOption", "USER_ENTERED");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values }),
  });

  const errBody = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = errBody as { error?: { message?: string } };
    throw new Error(
      err?.error?.message ?? `Google Sheets append failed (${res.status})`,
    );
  }
}
