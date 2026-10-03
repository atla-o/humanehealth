import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeskForm } from "@/app/ops/[slug]/desk-form";
import { getDesk } from "@/lib/nest";
import { listRequests } from "@/lib/queue";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ error?: string; saved?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const desk = getDesk((await params).slug);
  return { title: desk?.name ?? "Desk" };
}

export default async function DeskPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const desk = getDesk(slug);
  if (!desk) notFound();

  const query = await searchParams;
  const requests = listRequests(slug);
  const error = typeof query.error === "string" ? query.error : "";
  const saved = typeof query.saved === "string" ? query.saved : "";

  return (
    <>
      <p className="kicker">
        <Link href="/">Humanehealth</Link>
      </p>
      <h1>{desk.name}</h1>
      <p className="lede">{desk.summary}</p>
      <DeskForm slug={slug} whenRequired={desk.whenRequired} error={error} saved={saved} />
      {requests.length === 0 ? (
        <p className="empty">No requests on this desk.</p>
      ) : (
        <ol className="queue">
          {requests.map((entry) => (
            <li key={entry.id}>
              <strong>{entry.name}</strong>
              {entry.when ? <span> · {entry.when}</span> : null}
              {entry.contact ? <span> · {entry.contact}</span> : null}
              {entry.note ? <p>{entry.note}</p> : null}
              <p className="meta">{entry.createdAt}</p>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
