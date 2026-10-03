import { getDesk } from "@/lib/nest";
import { addRequest, listRequests, type DeskInput } from "@/lib/queue";

export const dynamic = "force-dynamic";

type RouteParams = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, { params }: RouteParams) {
  const { slug } = await params;
  const desk = getDesk(slug);
  if (!desk) {
    return Response.json({ error: "Unknown clinic desk." }, { status: 404 });
  }
  return Response.json({ desk, requests: listRequests(slug) });
}

async function readInput(request: Request): Promise<DeskInput | { error: string }> {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const body = (await request.json()) as Partial<DeskInput>;
    return {
      name: String(body.name ?? ""),
      contact: String(body.contact ?? ""),
      when: String(body.when ?? ""),
      note: String(body.note ?? ""),
    };
  }
  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const form = await request.formData();
    return {
      name: String(form.get("name") ?? ""),
      contact: String(form.get("contact") ?? ""),
      when: String(form.get("when") ?? ""),
      note: String(form.get("note") ?? ""),
    };
  }
  return { error: "Send JSON or a form body." };
}

export async function POST(request: Request, { params }: RouteParams) {
  const { slug } = await params;
  if (!getDesk(slug)) {
    return Response.json({ error: "Unknown clinic desk." }, { status: 404 });
  }

  let input: DeskInput | { error: string };
  try {
    input = await readInput(request);
  } catch {
    return Response.json({ error: "Could not read the request body." }, { status: 400 });
  }
  if ("error" in input) {
    return Response.json({ error: input.error }, { status: 400 });
  }

  const result = addRequest(slug, input);
  if (!result.ok) {
    return Response.json({ error: result.error }, { status: 400 });
  }
  return Response.json({ desk: getDesk(slug), request: result.entry }, { status: 201 });
}
