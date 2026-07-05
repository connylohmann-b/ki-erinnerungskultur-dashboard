# KI & Erinnerungskultur Intelligence Dashboard

Schlanker erster Prototyp als statische Web-App. Das Dashboard macht die kuratierten Seed-Daten zu KI und Erinnerungskultur sofort explorierbar, ohne Backend, Datenbank oder API-Schicht.

## Start

Die App kann direkt im Browser geöffnet werden:

```text
index.html
```

Optional kann ein lokaler statischer Server genutzt werden.

## Inhalt

- Kerndiskussionen: fünf Themenfelder mit Quellen
- Stakeholder: sechs Gruppen mit Positionen, Akteuren und weiterführenden Quellen
- Vorreiter-Projekte: internationale und nationale Beispiele

## Nächste Ausbaustufe

Für automatische Aktualisierung kann später eine API-/Datenbank-Schicht ergänzt werden:

- Datenbank: SQLite oder Supabase
- Updates: wöchentlicher Crawl über Anthropic/Websuche
- Deployment: Vercel mit Cron Job

Die aktuelle Version ist bewusst statisch gehalten, damit Struktur, Informationsarchitektur und UI zuerst belastbar werden.
