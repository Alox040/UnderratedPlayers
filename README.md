# Underrated Players

Aktueller Projektstatus der Website nach Figma-Integration und technischer Stabilisierung.

## Statusdateien

- [Projektstatus](docs/status/PROJECT_STATUS.md)
- [Work Session](docs/status/WORK_SESSION.md)

## Deployment-Hinweis

- Die lauffaehige Next.js-App liegt aktuell im Repository-Root.
- `apps/website/` ist derzeit kein eigenstaendiges deploybares Next.js-Projekt.
- Fuer Vercel muss die Root Directory auf das Repository-Root (`.`) zeigen.

## Status

- Website basiert auf Next.js App Router.
- Figma-basierte Marketing-UI ist integriert.
- Zentrale Content-Anbindung liegt in `lib/site/content.ts`.
- Responsive Basis ist stabilisiert:
  Hero-Offset, Mobile-Navigation, Footer-Grid und CTA-/Section-Spacings wurden angepasst.
- Build ist erfolgreich: `npm run build`

## Aktive Marketing-Routen

- `/`
- `/impressum`
- `/datenschutz`
- `/kontakt`
- `/leistungen`
- `/mitwirkung`
- `/talent-bewerben`
- `/vereine`
- `/ueber-uns`

## Navigation / Links

- Header-Navigation ist auf Desktop und Mobile vorhanden.
- Footer-Links zu Impressum, Datenschutz, Kontakt und Hauptseiten sind gesetzt.
- Nicht funktionale UI-Elemente sind entschaerft:
  `Login` ist deaktiviert.
  Social Icons sind nur Platzhalter.
  Newsletter-Submit ist deaktiviert.

## Build / Validierung

- `npm run build` erfolgreich geprueft.
- Lokale Produktivpruefung erfolgreich:
  `/`, `/impressum`, `/datenschutz`, `/kontakt`, `/talent-bewerben`, `/vereine`, `/leistungen`, `/mitwirkung` liefern HTTP `200`.

## Offene Restpunkte

- CTA-Logik ist technisch valide, aber inhaltlich teils noch unscharf.
- Beispielspieler in der Startseite sind weiterhin Demo-Inhalte.
- `/leistungen`, `/vereine`, `/ueber-uns` und Teile der Marketing-Texte sind noch Platzhalter-/MVP-Inhalte.
- Testimonials-Komponente existiert, ist aber noch nicht auf der Startseite eingebunden.

## Naechste sinnvolle Schritte

- CTA-Texte und Zielgruppenfuehrung in `lib/site/content.ts` inhaltlich schaerfen.
- Demo-Spieler durch echte Daten oder neutrale Platzhalter ersetzen.
- Testimonials auf der Startseite einbinden.
- Platzhalterseiten inhaltlich ausbauen.
