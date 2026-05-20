"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { INVITERS } from "@/app/data/index";

function normalize(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

function invitePath(slug: string) {
  return `/thu-moi/${slug}`;
}

export default function TimLinkPage() {
  const [query, setQuery] = useState("");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const inviters = useMemo(
    () =>
      [...INVITERS].sort((a, b) =>
        `${a.title} ${a.name}`.localeCompare(`${b.title} ${b.name}`, "vi"),
      ),
    [],
  );

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return inviters;
    return inviters.filter((inviter) =>
      normalize(`${inviter.title} ${inviter.name}`).includes(q),
    );
  }, [inviters, query]);

  async function copyLink(slug: string) {
    const url = `${window.location.origin}${invitePath(slug)}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    } catch {
      setCopiedSlug(null);
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f3fa] px-4 py-8 font-sans">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-center font-essendine text-2xl text-[#4B2C82]">
          TÌM LINK THƯ MỜI
        </h1>
        <p className="mt-2 text-center text-sm text-[#666]">
          {filtered.length}/{inviters.length} người
        </p>

        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm theo tên..."
          className="mt-6 w-full rounded-full border border-[#4B2C82]/30 bg-white px-5 py-3 text-black outline-none placeholder:text-[#A0A0A0] focus-visible:ring-2 focus-visible:ring-[#4B2C82]/20"
        />

        <ul className="mt-6 flex flex-col gap-3">
          {filtered.map((inviter) => {
            const path = invitePath(inviter.slug);
            const copied = copiedSlug === inviter.slug;

            return (
              <li
                key={inviter.slug}
                className="rounded-2xl border border-[#4B2C82]/15 bg-white p-4 shadow-sm"
              >
                <div className="font-medium text-[#4B2C82]">
                  {inviter.title} {inviter.name}
                </div>
                <div className="mt-1 truncate text-xs text-[#888]">{path}</div>
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => copyLink(inviter.slug)}
                    className="cursor-pointer rounded-full bg-[#4B2C82] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#3d246c]"
                  >
                    {copied ? "Đã sao chép" : "Sao chép link"}
                  </button>
                  <Link
                    href={path}
                    target="_blank"
                    className="rounded-full border border-[#4B2C82] px-4 py-2 text-xs font-medium text-[#4B2C82] transition hover:bg-[#4B2C82]/5"
                  >
                    Mở thiệp
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        {filtered.length === 0 ? (
          <p className="mt-8 text-center text-sm text-[#888]">
            Không tìm thấy kết quả.
          </p>
        ) : null}
      </div>
    </div>
  );
}
