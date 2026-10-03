"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type DeskFormProps = {
  slug: string;
  whenRequired: boolean;
  error: string;
  saved: string;
};

export function DeskForm({ slug, whenRequired, error, saved }: DeskFormProps) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [clientError, setClientError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setClientError("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const body = {
      name: String(data.get("name") ?? ""),
      contact: String(data.get("contact") ?? ""),
      when: String(data.get("when") ?? ""),
      note: String(data.get("note") ?? ""),
    };

    try {
      const response = await fetch(`/api/desk/${slug}`, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify(body),
      });
      const payload = (await response.json()) as { error?: string; request?: { id: string } };
      if (!response.ok || !payload.request) {
        setClientError(payload.error || "The desk did not accept that request.");
        setPending(false);
        return;
      }
      form.reset();
      router.replace(`/ops/${slug}?saved=${encodeURIComponent(payload.request.id)}`);
      router.refresh();
    } catch {
      setClientError("The desk could not be reached.");
    } finally {
      setPending(false);
    }
  }

  const message = clientError || error;

  return (
    <form onSubmit={onSubmit}>
      {message ? (
        <p className="banner error" role="alert">
          {message}
        </p>
      ) : null}
      {saved && !message ? (
        <p className="banner" role="status">
          Request {saved} is on this desk.
        </p>
      ) : null}
      <label>
        Name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Contact
        <input name="contact" autoComplete="email" />
      </label>
      <label>
        Visit time{whenRequired ? "" : " (optional)"}
        <input name="when" type="datetime-local" required={whenRequired} />
      </label>
      <label>
        Note
        <textarea name="note" rows={3} />
      </label>
      <button type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
