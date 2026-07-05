# Codex Briefing v2: KI & Erinnerungskultur — Intelligence Dashboard

**Auftraggeber:** Freiberufliche Beraterin, Schwerpunkt KI, Kultur & Medienpolitik  
**Ziel:** Webapplikation zur strukturierten Darstellung der Landscape "KI und Erinnerungskultur"  
**Version:** 2.0 — erweitert um Stakeholder & Vorreiter-Sektionen  
**Datum:** Juni 2026

---

## 1. Projektziel

Baue eine single-page Web-Applikation als strukturiertes Intelligence Dashboard. Die App hat **drei gleichwertige Hauptsektionen**, die jeweils mit kuratierten Basisquellen (Seed-Daten) befüllt und wöchentlich mit gecrawlten News aktualisiert werden:

**A — Kerndiskussionen** (5 Themenfelder)  
**B — Stakeholder & Positionen** (6 Gruppen)  
**C — Vorreiter & Innovative Beispiele** (international + national)

---

## 2. Tech Stack

| Layer | Empfehlung |
|-------|-----------|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Backend/API | Next.js API Routes |
| Datenbank | SQLite lokal ODER Supabase (cloud) |
| Search | Anthropic API `claude-sonnet-4-6` + web_search Tool |
| Deployment | Vercel (inkl. Cron-Job-Support) |
| Scheduler | Vercel Cron ODER GitHub Actions (wöchentlich montags) |

---

## 3. Datenmodell

```typescript
// Die drei Hauptsektionen
type SectionType = "themenfeld" | "stakeholder" | "vorreiter";

// Für Themenfelder (Sektion A)
interface Topic {
  id: string;
  section: "themenfeld";
  title: string;
  subtitle: string;
  color: string;
  searchQueries: string[];
}

// Für Stakeholder (Sektion B)
interface StakeholderGroup {
  id: string;
  section: "stakeholder";
  title: string;           // z.B. "Gedenkstätten & Erinnerungsinstitutionen"
  position: string;        // Kurzbeschreibung der Haltung (1 Satz)
  positionTag: "kritisch-wachsam" | "innovationsoffen" | "normgebend" | "verantwortungspflichtig" | "pioniere" | "betroffene";
  color: string;
  searchQueries: string[];
}

// Für Vorreiter (Sektion C)
interface PioneerGroup {
  id: string;
  section: "vorreiter";
  title: "international" | "national";
  color: string;
  searchQueries: string[];
}

// Artikel / Quellen (für alle drei Sektionen)
interface Article {
  id: string;
  parentId: string;            // Referenz auf Topic, StakeholderGroup oder PioneerGroup
  parentSection: SectionType;
  title: string;
  source: string;
  url: string;
  date: string;                // ISO 8601
  abstract: string;            // 2-3 Sätze
  type: "news" | "wissenschaft" | "institutionell" | "projekt" | "policy" | "podcast" | "essay" | "rechtsanalyse" | "übersicht";
  language: "de" | "en";
  isSeeded: boolean;
  addedAt: string;
}

// Stakeholder-Einträge (Personen/Organisationen, nicht Artikel)
interface StakeholderEntry {
  id: string;
  groupId: string;
  name: string;               // z.B. "USC Shoah Foundation"
  role: string;               // Rolle/Position, 1-2 Sätze
  url: string;
  country: string;
}

// Vorreiter-Projekt-Einträge
interface PioneerProject {
  id: string;
  groupId: string;            // "international" | "national"
  name: string;               // Projektname
  carrier: string;            // Träger/Organisation
  description: string;        // 2-3 Sätze
  url: string;
  country: string;
  category: string;           // z.B. "Avatar / Interaktiv", "Gamification", "VR"
}
```

---

## 4. Architektur

```
/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Titel, letztes Update, manueller Update-Button
│   │   │   └── SectionNav.tsx          # Haupt-Navigation: A / B / C
│   │   ├── sections/
│   │   │   ├── ThemenfelderSection.tsx # Sektion A: 5 Themenfelder mit Cards
│   │   │   ├── StakeholderSection.tsx  # Sektion B: 6 Gruppen mit Profilen + Links
│   │   │   └── VorreiterSection.tsx    # Sektion C: International / National mit Projektkarten
│   │   ├── cards/
│   │   │   ├── ArticleCard.tsx         # Klickbare Artikel-Card
│   │   │   ├── StakeholderCard.tsx     # Profil-Card für Personen/Orgs
│   │   │   └── ProjectCard.tsx         # Projekt-Card für Vorreiter
│   │   └── ui/
│   │       ├── FilterBar.tsx           # Filter: Typ, Sprache, Datum
│   │       ├── TagBadge.tsx            # Farbige Tags (Typ, Position, Kategorie)
│   │       └── LastUpdated.tsx
│   ├── data/
│   │   └── seed.ts                     # Konvertierte Seed-Daten (Fallback)
│   └── app/
│       ├── page.tsx                    # Haupt-SPA
│       └── api/
│           ├── articles/route.ts       # GET /api/articles
│           ├── stakeholders/route.ts   # GET /api/stakeholders
│           ├── projects/route.ts       # GET /api/projects
│           └── update/route.ts         # POST /api/update (auth-gesichert)
├── scripts/
│   ├── seed.ts                         # Liest seed-Datei, befüllt DB
│   └── crawl.ts                        # Wöchentlicher Crawl-Job
├── db/
│   └── schema.sql
└── .github/workflows/weekly-crawl.yml
```

---

## 5. Navigation & Layout

### Haupt-Navigation (3 Tabs)
```
┌─────────────────────────────────────────────────────────────┐
│  KI & Erinnerungskultur — Intelligence Dashboard   [↻ Update] │
│  Letztes Update: 23. Juni 2026                              │
├──────────────────┬──────────────────┬───────────────────────┤
│  A  Kerndiskussionen │  B  Stakeholder  │  C  Vorreiter & Projekte │
└──────────────────┴──────────────────┴───────────────────────┘
```

### Sektion A — Kerndiskussionen
- Sub-Tabs: 5 Themenfelder (farbcodiert)
- Pro Themenfeld: Kurzbeschreibung + Artikel-Grid (3-spaltig Desktop)
- Filter: Typ, Sprache, Zeitraum

### Sektion B — Stakeholder & Positionen
- 6 Gruppen als Akkordeon oder Tabs
- Pro Gruppe: Positions-Badge + Liste der Akteure als StakeholderCards
- Pro Akteur: Name, Rolle (2 Sätze), Link
- Darunter: verknüpfte Artikel/Quellen als ArticleCards

### Sektion C — Vorreiter & Projekte
- Toggle: 🌍 International / 🇩🇪 Deutschland
- Projekt-Grid: ProjectCards (breiter als ArticleCards)
- Pro Projekt: Name, Träger, Land-Flag, Kategorie-Tag, Beschreibung, Link

---

## 6. Konfiguration der Sektionen

### Sektion A: Themenfelder

```typescript
const TOPICS = [
  {
    id: "desinformation",
    title: "Desinformation & KI-Fälschungen",
    subtitle: "AI Slop, Holocaust-Fälschungen in Social Media",
    color: "red",
    searchQueries: [
      "Holocaust deepfake KI-generiert 2026",
      "AI Slop NS-Geschichte social media",
      "generative AI Holocaust disinformation"
    ]
  },
  {
    id: "avatar-ethik",
    title: "Avatar-Ethik: Zeitzeugen als KI",
    subtitle: "Simulation von Überlebenden — pädagogisch oder problematisch?",
    color: "amber",
    searchQueries: [
      "Holocaust survivor AI avatar ethics 2026",
      "Zeitzeugen KI Avatar Erinnerungskultur",
      "Dimensions in Testimony USC Shoah Foundation"
    ]
  },
  {
    id: "digital-resurrection",
    title: "Digital Resurrection",
    subtitle: "Deepfakes historischer Persönlichkeiten",
    color: "purple",
    searchQueries: [
      "digital resurrection historical figures deepfake",
      "KI historische Personen Deepfake Erinnerung",
      "AI deceased persons memorial ethics"
    ]
  },
  {
    id: "vermittlung",
    title: "Innovative Vermittlung & Bildung",
    subtitle: "KI in Gedenkstätten, VR, Gamification",
    color: "teal",
    searchQueries: [
      "KI Gedenkstätten Bildung innovative Formate 2026",
      "Holocaust education AI museum VR",
      "digitale Erinnerungskultur Gamification"
    ]
  },
  {
    id: "regulierung",
    title: "Regulierung & Governance",
    subtitle: "EU AI Act, Plattformverantwortung, UNESCO-Standards",
    color: "blue",
    searchQueries: [
      "EU AI Act deepfake Holocaust regulation",
      "UNESCO AI Holocaust memory standards 2026",
      "Plattformverantwortung KI historische Inhalte"
    ]
  }
];
```

### Sektion B: Stakeholder-Gruppen

```typescript
const STAKEHOLDER_GROUPS = [
  {
    id: "gedenkstaetten",
    title: "Gedenkstätten & Erinnerungsinstitutionen",
    positionTag: "kritisch-wachsam",
    color: "red",
    searchQueries: [
      "Gedenkstätten KI Stellungnahme 2026",
      "Holocaust memorial AI statement",
      "Haus Wannsee-Konferenz Arolsen Archives KI"
    ]
  },
  {
    id: "wissenschaft",
    title: "Wissenschaft & Forschung",
    positionTag: "innovationsoffen",
    color: "teal",
    searchQueries: [
      "KI Holocaust Forschung digitale Erinnerung Studie 2026",
      "AI Holocaust education research empathy",
      "digitale Erinnerungskultur Wissenschaft"
    ]
  },
  {
    id: "internationale-institutionen",
    title: "Internationale Institutionen & NGOs",
    positionTag: "normgebend",
    color: "blue",
    searchQueries: [
      "UNESCO AI Holocaust standards 2026",
      "UN Holocaust remembrance technology",
      "IHRA artificial intelligence"
    ]
  },
  {
    id: "tech",
    title: "Technologieanbieter & Plattformen",
    positionTag: "verantwortungspflichtig",
    color: "amber",
    searchQueries: [
      "OpenAI historical figures policy 2026",
      "Meta Facebook Holocaust content moderation AI",
      "tech companies Holocaust memory responsibility"
    ]
  },
  {
    id: "politik",
    title: "Politische Institutionen & Kulturpolitik",
    positionTag: "normgebend",
    color: "purple",
    searchQueries: [
      "EU AI Act Deepfake Regulierung 2026",
      "Kulturpolitik KI Erinnerungskultur Deutschland",
      "bpb digitale Bildung KI Geschichte"
    ]
  },
  {
    id: "ueberlebende",
    title: "Überlebende, Nachkommen & Zivilgesellschaft",
    positionTag: "betroffene",
    color: "coral",
    searchQueries: [
      "Holocaust survivor family AI avatar consent",
      "Nachkommen Überlebende digitale Erinnerung Rechte",
      "civil society Holocaust digital memory"
    ]
  }
];
```

### Sektion C: Vorreiter-Gruppen

```typescript
const PIONEER_GROUPS = [
  {
    id: "international",
    title: "Vorreiter International",
    color: "blue",
    searchQueries: [
      "Holocaust AI education project international 2026",
      "USC Shoah Foundation technology 2026",
      "Holocaust memory VR gaming project"
    ]
  },
  {
    id: "national",
    title: "Vorreiter Deutschland",
    color: "teal",
    searchQueries: [
      "KI Gedenkstätten Projekt Deutschland 2026",
      "digitale Erinnerungskultur Projekt Deutschland",
      "Arolsen Archives LMU München KI Projekt"
    ]
  }
];
```

---

## 7. Crawl-Logik (Kern)

```typescript
import Anthropic from "@anthropic-ai/sdk";
const client = new Anthropic();

async function crawlSection(
  parentId: string,
  parentSection: string,
  queries: string[]
): Promise<Article[]> {
  const results: Article[] = [];

  for (const query of queries) {
    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2000,
      tools: [{ type: "web_search_20250305", name: "web_search" }],
      messages: [{
        role: "user",
        content: `Suche nach aktuellen Artikeln (letzte 7 Tage) zu: "${query}".
        
Gib nur JSON zurück (kein Markdown, keine Erklärung):
[{
  "title": "...",
  "source": "...",
  "url": "...",
  "date": "YYYY-MM-DD",
  "abstract": "2-3 Sätze Zusammenfassung auf Deutsch",
  "type": "news|wissenschaft|institutionell|projekt|policy|podcast|essay",
  "language": "de|en"
}]

Max. 5 Ergebnisse. Nur seriöse Quellen.`
      }]
    });

    const text = response.content
      .filter(b => b.type === "text")
      .map(b => b.text)
      .join("");

    try {
      const articles = JSON.parse(text);
      results.push(...articles.map((a: any) => ({
        ...a,
        id: crypto.randomUUID(),
        parentId,
        parentSection,
        isSeeded: false,
        addedAt: new Date().toISOString()
      })));
    } catch (e) {
      console.error(`Parse error for "${query}":`, e);
    }

    await new Promise(r => setTimeout(r, 2000)); // Rate limiting
  }

  return results;
}

export async function runWeeklyCrawl() {
  // Alle drei Sektionen crawlen
  for (const topic of TOPICS) {
    const articles = await crawlSection(topic.id, "themenfeld", topic.searchQueries);
    await upsertArticles(articles);
  }
  for (const group of STAKEHOLDER_GROUPS) {
    const articles = await crawlSection(group.id, "stakeholder", group.searchQueries);
    await upsertArticles(articles);
  }
  for (const pioneer of PIONEER_GROUPS) {
    const articles = await crawlSection(pioneer.id, "vorreiter", pioneer.searchQueries);
    await upsertArticles(articles);
  }
  console.log("✓ Wöchentlicher Crawl abgeschlossen");
}
```

---

## 8. Seed-Daten einlesen

Die mitgelieferte Datei `ki_erinnerungskultur_research_data.md` ist in drei Sektionen gegliedert (A, B, C). Implementiere einen Parser, der:

- **Sektion A** → befüllt `articles`-Tabelle mit `parentSection = "themenfeld"`
- **Sektion B** → befüllt `stakeholder_entries`-Tabelle (Personen/Orgs) und `articles`-Tabelle mit `parentSection = "stakeholder"`
- **Sektion C** → befüllt `pioneer_projects`-Tabelle mit Projektdaten

```typescript
// scripts/seed.ts
async function seedAll() {
  await seedThemenfelder();       // Sektion A: Artikel
  await seedStakeholder();        // Sektion B: Einträge + Artikel
  await seedVorreiter();          // Sektion C: Projekteinträge
  console.log("✓ Seed abgeschlossen");
}
```

Seeded-Daten bekommen `isSeeded: true` und werden bei Crawl-Updates **nicht** überschrieben (ON CONFLICT DO NOTHING auf URL-Basis).

---

## 9. UI-Komponenten

### ArticleCard
```
┌─────────────────────────────────────┐
│ [TYPE-Badge]  [Sprache-Flag]  [📌/🔄]│
│                                      │
│ Titel (fett, max. 2 Zeilen)         │
│                                      │
│ Abstract (grau, max. 3 Zeilen)      │
│                                      │
│ Quelle · Datum          [→ Öffnen] │
└─────────────────────────────────────┘
```

### StakeholderCard (Sektion B)
```
┌─────────────────────────────────────┐
│ [POSITIONS-Badge]                    │
│                                      │
│ Name der Organisation/Person (fett) │
│                                      │
│ Rolle / Position (2 Sätze, grau)    │
│                                      │
│                          [→ Website]│
└─────────────────────────────────────┘
```

### ProjectCard (Sektion C)
```
┌─────────────────────────────────────┐
│ [Land-Flag]  [KATEGORIE-Badge]       │
│                                      │
│ Projektname (fett, groß)            │
│ Träger (grau, klein)                │
│                                      │
│ Beschreibung (2-3 Sätze)           │
│                                      │
│                          [→ Projekt]│
└─────────────────────────────────────┘
```

---

## 10. Farbschema

| Sektion / Element | Farbe |
|-------------------|-------|
| A: Desinformation | Rot #EF4444 |
| A: Avatar-Ethik | Amber #F59E0B |
| A: Digital Resurrection | Lila #8B5CF6 |
| A: Vermittlung | Teal #14B8A6 |
| A: Regulierung | Blau #3B82F6 |
| B: Gedenkstätten | Rot |
| B: Wissenschaft | Teal |
| B: Internat. Institutionen | Blau |
| B: Tech-Anbieter | Amber |
| B: Politik | Lila |
| B: Überlebende | Coral #F97316 |
| C: International | Blau |
| C: Deutschland | Teal |

---

## 11. Datenbank-Schema

```sql
-- articles (für alle drei Sektionen)
CREATE TABLE articles (
  id TEXT PRIMARY KEY,
  parent_id TEXT NOT NULL,
  parent_section TEXT NOT NULL CHECK(parent_section IN ('themenfeld','stakeholder','vorreiter')),
  title TEXT NOT NULL,
  source TEXT NOT NULL,
  url TEXT UNIQUE NOT NULL,
  date TEXT,
  abstract TEXT,
  type TEXT,
  language TEXT DEFAULT 'de',
  is_seeded INTEGER DEFAULT 0,
  added_at TEXT NOT NULL
);

-- stakeholder_entries (Sektion B: Personen/Orgs)
CREATE TABLE stakeholder_entries (
  id TEXT PRIMARY KEY,
  group_id TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT,
  url TEXT,
  country TEXT
);

-- pioneer_projects (Sektion C: Projekteinträge)
CREATE TABLE pioneer_projects (
  id TEXT PRIMARY KEY,
  group_id TEXT NOT NULL CHECK(group_id IN ('international','national')),
  name TEXT NOT NULL,
  carrier TEXT,
  description TEXT,
  url TEXT,
  country TEXT,
  category TEXT,
  is_seeded INTEGER DEFAULT 1
);

-- crawl_log
CREATE TABLE crawl_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ran_at TEXT NOT NULL,
  articles_added INTEGER DEFAULT 0,
  errors INTEGER DEFAULT 0
);

CREATE INDEX idx_articles_parent ON articles(parent_id, parent_section);
CREATE INDEX idx_articles_date ON articles(date DESC);
```

---

## 12. GitHub Actions Cron

```yaml
name: Weekly News Crawl
on:
  schedule:
    - cron: "0 6 * * 1"     # Jeden Montag 06:00 UTC
  workflow_dispatch:
jobs:
  crawl:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: "20" }
      - run: npm ci
      - run: npm run crawl
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
```

---

## 13. .env.example

```
ANTHROPIC_API_KEY=sk-ant-...
DATABASE_URL=./db/intelligence.sqlite
CRAWL_SECRET=dein-geheimes-passwort-fuer-manuellen-update
NEXT_PUBLIC_APP_TITLE=KI & Erinnerungskultur — Intelligence Dashboard
```

---

## 14. Deliverables von Codex

1. ✅ React/Next.js Quellcode mit drei Hauptsektionen (A, B, C)
2. ✅ SQLite-Schema (articles + stakeholder_entries + pioneer_projects + crawl_log)
3. ✅ Seed-Skript, das `ki_erinnerungskultur_research_data.md` einliest
4. ✅ Crawl-Job für alle drei Sektionen (Anthropic API)
5. ✅ GitHub Actions Workflow (wöchentlich)
6. ✅ `.env.example`
7. ✅ `README.md` mit Setup, Seed, Deploy
8. ✅ `vercel.json`

---

## 15. Mitgelieferte Dateien

| Datei | Inhalt |
|-------|--------|
| `ki_erinnerungskultur_research_data.md` | Seed-Daten: Sektion A (5 Themenfelder, ~25 Artikel), Sektion B (6 Stakeholder-Gruppen mit Profilen + Quellen), Sektion C (Vorreiter international und national mit Projektdaten) |
| `codex_briefing_ki_erinnerungskultur_v2.md` | Diese Datei |

---

*Erstellt Juni 2026 | Conny — KI & Kulturpolitik Consulting*
