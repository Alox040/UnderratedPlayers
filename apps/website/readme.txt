Website-Kapsel (fachlich)

Die lauffähige Next.js-App liegt aktuell im Repository-Root:
- app/
- components/ (ui, sections, layout, forms)
- lib/ (shared utilities, site helpers unter lib/site/)

Dieser Ordner apps/website/ dient als Anker für eine spätere Auslagerung in ein Monorepo
(z. B. apps/website mit eigenem package.json), ohne die bestehende Logik zu verschieben.
