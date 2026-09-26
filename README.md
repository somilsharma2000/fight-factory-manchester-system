# FIGHT FACTORY MANCHESTER — Digital System (canonical template, site 4 of 8)

Rebuilt 2026-09-26 on the Beyond Pixells canonical client template (via client_site_factory.py).
Live: https://somilsharma2000.github.io/fight-factory-manchester-system/

## Structure
- `index.html` — branded landing on the shared design system (bp-design-system.css + bp-motion.js)
- `site.config.js` — ALL club data: contact, plans, coaches, timetable, rating. Owner-editable, zero code.
- `styles.css` / `script.js` — template styles + config renderer
- `gym-os-connect.js` — Gym OS integration: portal links, QR check-in, lead capture (consent + offline fallback)
- `portal/` · `dashboard/` — member portal + staff dashboard entry points
- `website/` — legacy page (kept for reference, unreferenced)

## Data provenance (no invention)
Every value is the club's real, published information: Lord North Street M40 2HJ address,
+44 7746 661931, £10 day pass / £45 Factory Standard / £75 Pro Combat Unlimited plans,
12 real timetable entries with real coaches (Sean Krool, Marcus Vance, Elena Rostova, Sarah Jenkins),
real coach credentials. No Google rating is published by the club, so the review badge stays hidden.

## Owner sign-off
`isDemo: true` in index.html until founder/club sign-off → flip to `false` to remove the demo banner.
