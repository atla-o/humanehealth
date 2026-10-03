# Humanehealth — Devo agent guide

## Standing objective (Devo UI-first)

Cursor cloud work for this product: **one promptable environment / one cloud workspace**, kept current.

Priority order for every task unless Devo says otherwise:

1. **Complete functional UI** — usable end-to-end (real submit paths, loading/empty/error/success). No blocking coming-soon for core flows. Function before polish.
2. Black text on **white** backgrounds always — never follow system dark mode / white-on-black.
3. **Unpushed UI still needs a live preview.** If the interface is not on `main`, run the real Next server of that working tree and put a clickable ephemeral URL in the PR (top of the description and a comment). Cursor preview tunnel, `cloudflared` quick tunnel, or similar. Screenshots are not a substitute. A static mock is last resort only. Do not invent a production host to stand in for that preview.
4. Do not merge. Do not deploy. Devo says **merge and deploy** before either happens. No auto-merge. No agent `gcloud run deploy`.

Publisher: **atla-o**. Parent: Devo Holdings. Public GitHub: [github.com/atla-o/humanehealth](https://github.com/atla-o/humanehealth).

There is no production host for this hub yet. Do not invent one (`humanehealth.devoutshaman.com` is not a host). GCP project, when a human later deploys, is `devo-holding` (`us-west1`). Cloudflare stays DNS-only. No Workers. No Pages. No Firebase.

Dev server: `npm run dev` → port **43181**. `next.config.ts` allows `127.0.0.1` and `*.trycloudflare.com` so a quick tunnel can load the client bundle. Without that, the preview is unhydrated HTML and desk submits do nothing.

## Nest map

Investor tops, and only these peers:

- [Arcada](https://github.com/atla-o/arcada) — social club. Recreation studios stay here, not on Humanehealth. No `arcada.devoutshaman.com` host.
- [Lightround](https://github.com/atla-o/lightround) — counterdecadence fund. Public host [lightround.devoutshaman.com](https://lightround.devoutshaman.com).
- **Humanehealth** — this clinic network hub.
- [Mattercircle](https://github.com/atla-o/mattercircle) — matter/factory hub. No public product host yet.

**Unnaturalfertility is not a peer hub.** It is a clinic arm inside Humanehealth.

Clinic arms are soft-wired (links and copy only). They keep their own repos:

- [Acashi](https://github.com/atla-o/acashi) — insurance nest. Public host [acashi.devoutshaman.com](https://acashi.devoutshaman.com).
- [Phenomatch](https://github.com/atla-o/phenomatch) — phenotype matching. Public host [phenomatch.devoutshaman.com](https://phenomatch.devoutshaman.com).
- [Antiporn](https://github.com/atla-o/antiporn) — content filter. Public host [antiporn.devoutshaman.com](https://antiporn.devoutshaman.com).
- [Lessfret](https://github.com/atla-o/lessfret) — coaching and care coordination. Public host [lessfret.devoutshaman.com](https://lessfret.devoutshaman.com).
- **devoutshaman** — consumer sell-health nest (edible/medicine). Not a lander peer top and not an investor top. There is no `atla-o/devoutshaman` repo. [devoutshaman.com](https://devoutshaman.com) is the Devo holding lander, so this hub does not use that host as the sell-health store.

## This product

Clinic operations hub. The five desks live in this repo:

- schedule wellness
- invasive diagnostic
- unnaturalfertility (clinic arm, not a peer hub)
- cosmetic restoration
- concentrated stimulants (visit queue only — no doses, sources, or preparation)

`GET /api/nest` is the nest map. `GET` and `POST /api/desk/[slug]` are the desk queue. The queue is in memory on the running process.

Read Next.js notes in `node_modules/next/dist/docs/` before inventing APIs from older training data. `next.config.ts` sets `agentRules: false` so this file stays the agent guide.
