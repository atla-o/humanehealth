import { nestMap } from "@/lib/nest";

export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(nestMap());
}
