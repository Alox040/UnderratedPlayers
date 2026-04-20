# PROJECT_STATUS

Stand: 2026-04-20

## Website

- Figma-basierte Marketing-UI ist integriert.
- Responsive Stabilisierung fuer Header, Hero, Features, CTA und Footer ist umgesetzt.
- Zentrale Content-Anbindung liegt in `lib/site/content.ts`.

## Routing

Aktive Marketing-Routen:

- `/`
- `/impressum`
- `/datenschutz`
- `/kontakt`
- `/leistungen`
- `/mitwirkung`
- `/talent-bewerben`
- `/vereine`
- `/ueber-uns`

## Navigation

- Header-Navigation ist auf Desktop und Mobile vorhanden.
- Footer-Links zu Hauptseiten, Kontakt, Datenschutz und Impressum sind gesetzt.
- Nicht funktionale Elemente sind entschärft:
  `Login` deaktiviert
  Social Icons Platzhalter
  Newsletter-Submit deaktiviert

## Build

- `npm run build` erfolgreich.
- Lokale Produktivpruefung fuer Kernrouten erfolgreich.

## Offene Punkte

- CTA-Logik ist technisch valide, aber inhaltlich noch unscharf.
- Beispielspieler auf der Startseite sind Demo-Inhalte.
- `/leistungen`, `/vereine`, `/ueber-uns` enthalten noch Platzhalter-/MVP-Inhalte.
- Testimonials sind vorhanden, aber nicht auf der Startseite eingebunden.
