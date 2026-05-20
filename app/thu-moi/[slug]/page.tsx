import { notFound } from "next/navigation";

import EventPage from "@/app/component/EventPage";
import { INVITERS, getInviter } from "@/app/data/index";

export function generateStaticParams() {
  return INVITERS.map(({ slug }) => ({ slug }));
}

export default async function ThuMoiPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const inviter = getInviter(slug);

  if (!inviter) {
    notFound();
  }

  return <EventPage inviter={inviter} />;
}
