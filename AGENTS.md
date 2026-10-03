# Humanehealth — Devo agent guide

## Standing objective (Devo UI-first)

Cursor cloud work for this product: **one promptable environment / one cloud workspace**, kept current.

Priority order for every task unless Devo says otherwise:

1. **Complete functional UI** — usable end-to-end (real submit paths, loading/empty/error/success). No blocking coming-soon for core flows. Function before polish.
2. Black text on **white** backgrounds always — never follow system dark mode / white-on-black.
3. **Any unpushed UI change needs a clickable live preview URL.** Screenshots alone are not enough. Run the real Next server of that working tree and put the exact URL at the top of the PR description and in a PR comment. Cursor preview tunnel, `cloudflared` quick tunnel, or similar. A static mock is last resort only. Do not invent a production host to stand in for that preview. Do not ask to merge until the preview link works.
4. Do not merge. Do not deploy. Devo says **merge and deploy** before either happens. No auto-merge. No agent `gcloud run deploy`.

Publisher: **atla-o**. Parent: Devo Holdings. Public GitHub: [github.com/atla-o/humanehealth](https://github.com/atla-o/humanehealth).

There is no production host for this hub yet. Do not invent one (`humanehealth.devoutshaman.com` is not a host). GCP project, when a human later deploys, is `devo-holding` (`us-west1`). Cloudflare stays DNS-only. No Workers. No Pages. No Firebase.

## Cursor Cloud

This repo is the cloud workspace. A new agent clones `atla-o/humanehealth`. It does not need a local folder.

- Install: `npm ci` (also `.cursor/environment.json`).
- Server: `npm run dev` → `http://127.0.0.1:43181` (`--hostname 0.0.0.0`).
- `next.config.ts` allows `127.0.0.1` and `*.trycloudflare.com`. A tunnel host that is not allowed serves HTML that never hydrates, so desk submits do nothing.
- Walk `/` and `/ops/wellness`, `/ops/diagnostic`, `/ops/unnaturalfertility`, `/ops/cosmetic`, `/ops/stimulants` on the preview URL.
- `GET /api/nest` is the nest map. `GET` and `POST /api/desk/[slug]` are the desk queue. The queue is in memory on the running process.
- Read Next.js notes in `node_modules/next/dist/docs/` before inventing APIs. `agentRules: false` keeps this file as the agent guide.

## Nest map

Investor tops, and only these peers:

- [Arcada](https://github.com/atla-o/arcada) — social club. Recreation stays in that repo.
- [Lightround](https://github.com/atla-o/lightround) — counterdecadence fund. Public host [lightround.devoutshaman.com](https://lightround.devoutshaman.com).
- **Humanehealth** — this clinic hub.
- [Mattercircle](https://github.com/atla-o/mattercircle) — matter/factory hub. No public product host yet.

**Unnaturalfertility is not a peer hub.** It is one of the five clinic desks in this repo.

Nested under Humanehealth. Not peer tops. Not this UI. Do not build their screens here:

- [Acashi](https://github.com/atla-o/acashi) — insurance. Public host [acashi.devoutshaman.com](https://acashi.devoutshaman.com).
- **devoutshaman** — consumer sell-health (edible/medicine). No `atla-o/devoutshaman` repo. [devoutshaman.com](https://devoutshaman.com) is the Devo holding lander, not a sell-health host to link from this app.

Own repos, not screens here: [Phenomatch](https://github.com/atla-o/phenomatch), [Antiporn](https://github.com/atla-o/antiporn), [Lessfret](https://github.com/atla-o/lessfret).

## This product

This UI is the five clinic desks only:

- schedule wellness
- invasive diagnostic
- unnaturalfertility
- cosmetic restoration
- concentrated stimulants (visit queue only — no doses, sources, or preparation)

Do not add recreation, insurance, or sell-health screens to this repo.
