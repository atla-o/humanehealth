# Humanehealth — Devo agent guide

## Standing objective

Cursor cloud work for this product: **one promptable environment / one cloud workspace**, kept current.

The agent handles code. Devo handles the human UI himself and reiterates it. Do not restyle UI he will fix.

1. **Functional code** for the five desks — real submit paths, loading/empty/error/success. Black text on **white** backgrounds. Never follow system dark mode.
2. **Any UI change that is not yet what Devo should look at needs a clickable live preview he can open**, so he can watch and reiterate. Screenshots alone are not enough.
   - Before it is on the public host: a Cursor preview link to the real Next server of that working tree (preview tunnel or `cloudflared`), at the top of the PR description and in a PR comment.
   - Once the public host is the thing to look at: [https://humanehealth.devoutshaman.com](https://humanehealth.devoutshaman.com).
3. **Code publishes through GitHub to `main`, then that existing host.** No throwaway host. No new pull request unless a real code change needs one.

Publisher: **atla-o**. Parent: Devo Holdings. Public GitHub: [github.com/atla-o/humanehealth](https://github.com/atla-o/humanehealth).

Public host: [https://humanehealth.devoutshaman.com](https://humanehealth.devoutshaman.com). Cloud Run service `humanehealth-web`, project `devo-holding`, region `us-west1`. DNS is already a CNAME to `ghs.googlehosted.com` (DNS only). Do not change Cloudflare. Do not add DNS. No Workers. No Pages. No Firebase.

## Cursor Cloud

This repo is the cloud workspace. A new agent clones `atla-o/humanehealth`. It does not need a local folder.

- Install: `npm ci` (also `.cursor/environment.json`).
- Server: `npm run dev` → `http://127.0.0.1:43181` (`--hostname 0.0.0.0`).
- `next.config.ts` allows `127.0.0.1` and `*.trycloudflare.com`. A tunnel host that is not allowed serves HTML that never hydrates, so desk submits do nothing.
- Walk `/` and `/ops/wellness`, `/ops/diagnostic`, `/ops/unnaturalfertility`, `/ops/cosmetic`, `/ops/stimulants`. Use the Cursor preview while the change is still off the public host. Use [https://humanehealth.devoutshaman.com](https://humanehealth.devoutshaman.com) once that host is what Devo should look at.
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
