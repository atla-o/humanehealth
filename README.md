# Humanehealth

Devo clinic hub. Publisher: [atla-o](https://github.com/atla-o).

This app is five clinic desks: schedule wellness, invasive diagnostic, unnaturalfertility, cosmetic restoration, and concentrated stimulants. Unnaturalfertility is a desk here, not a peer hub.

Acashi (insurance) and devoutshaman (sell-health) are nested under Humanehealth. They are not peer tops and they are not screens in this app. Recreation stays in Arcada.

```bash
npm ci
npm run dev
```

The dev server listens on port 43181. `GET /api/nest` returns the nest map. Each desk is `GET` and `POST /api/desk/[slug]`.

No production host yet. Do not invent one. Merge and deploy only when Devo says so.
