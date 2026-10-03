import { getDesk } from "@/lib/nest";

export type DeskRequest = {
  id: string;
  slug: string;
  name: string;
  contact: string;
  when: string;
  note: string;
  createdAt: string;
};

export type DeskInput = {
  name: string;
  contact: string;
  when: string;
  note: string;
};

type Store = { requests: DeskRequest[] };

const globalStore = globalThis as typeof globalThis & { __hhDeskQueue?: Store };

function store(): Store {
  if (!globalStore.__hhDeskQueue) {
    globalStore.__hhDeskQueue = { requests: [] };
  }
  return globalStore.__hhDeskQueue;
}

function clip(value: string, max: number): string {
  return value.trim().slice(0, max);
}

export function listRequests(slug: string): DeskRequest[] {
  return store()
    .requests.filter((entry) => entry.slug === slug)
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function addRequest(
  slug: string,
  input: DeskInput,
): { ok: true; entry: DeskRequest } | { ok: false; error: string } {
  const desk = getDesk(slug);
  if (!desk) {
    return { ok: false, error: "Unknown clinic desk." };
  }

  const name = clip(input.name, 80);
  const contact = clip(input.contact, 120);
  const when = clip(input.when, 40);
  const note = clip(input.note, 500);

  if (!name) {
    return { ok: false, error: "Name is required." };
  }
  if (desk.whenRequired && !when) {
    return { ok: false, error: "A visit time is required for schedule wellness." };
  }
  if (when && Number.isNaN(Date.parse(when))) {
    return { ok: false, error: "Visit time is not a valid date." };
  }

  const entry: DeskRequest = {
    id: crypto.randomUUID(),
    slug,
    name,
    contact,
    when,
    note,
    createdAt: new Date().toISOString(),
  };
  store().requests.push(entry);
  return { ok: true, entry };
}
