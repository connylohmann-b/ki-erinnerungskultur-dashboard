const DASHBOARD_DATA = {
  topics: [
    {
      id: "desinformation",
      title: "Desinformation & KI-Fälschungen",
      subtitle: "AI Slop, Holocaust-Fälschungen in Social Media",
      discussion: "KI-generierte Bilder aus NS-Lagern und Holocaust-Kontexten fluten Social Media. AI Slop zeigt erfundene Situationen, die als historisch wahrgenommen werden. Echte Dokumente werden zunehmend angezweifelt.",
      color: "red",
      articles: [
        article("desinformation", "Konsequentes Vorgehen gegen KI-generierte Holocaust-Verfälschungen", "Haus der Wannsee-Konferenz", "https://www.ghwk.de/de/aktuelles/ki-generierte-holocaust-verfaelschungen", "institutionell", "de", "Deutsche Gedenkstätten warnen vor KI-generierten Holocaust-Fälschungen und fordern entschiedene Plattformverantwortung."),
        article("desinformation", "Gegen KI-generierte Holocaust-Verfälschungen", "DNB Blog, Jan. 2026", "https://blog.dnb.de/gegen-ki-generierte-holocaust-verfaelschungen/", "institutionell", "de", "Der Beitrag dokumentiert den offenen Brief gegen KI-Fälschungen und bündelt die Forderungen aus der Gedenkstättenlandschaft."),
        article("desinformation", "Erinnerungskultur: Hetze und KI-Fakes belasten Arbeit in Gedenkstätten", "Tagesspiegel, Apr. 2026", "https://www.tagesspiegel.de/berlin/erinnerungskultur-hetze-und-ki-fakes-belasten-arbeit-in-gedenkstatten-15466718.html", "news", "de", "Bericht über zunehmende Belastung durch KI-Fakes, Hassrede und Desinformation in der Gedenkstättenarbeit."),
        article("desinformation", "New UNESCO report warns that Generative AI threatens Holocaust memory", "UNESCO, Juli 2024", "https://www.unesco.org/en/articles/new-unesco-report-warns-generative-ai-threatens-holocaust-memory", "policy", "en", "UNESCO beschreibt generative KI als Risiko für historische Wahrheit, Quellenvertrauen und Holocaust-Erinnerung."),
        article("desinformation", "Can AI make Hitler cry? Exploring the use of AI in Holocaust education across four generations", "Springer AI & Ethics, Aug. 2025", "https://link.springer.com/article/10.1007/s43681-025-00816-3", "wissenschaft", "en", "Die Studie untersucht Chancen und Risiken generativer KI in der Holocaust-Bildung über Generationen hinweg.")
      ]
    },
    {
      id: "avatar-ethik",
      title: "Avatar-Ethik: Zeitzeugen als KI",
      subtitle: "Simulation von Überlebenden: pädagogisch oder problematisch?",
      discussion: "Interaktive KI-Figuren sollen Zeugenschaft bewahren, werfen aber Fragen nach Einwilligung, Gamifizierung, Entmenschlichung und pädagogischer Wirkung auf.",
      color: "amber",
      articles: [
        article("avatar-ethik", "As Holocaust Survivors Die, AI Avatars Step In To Tell Their Stories", "Religion Unplugged, Feb. 2026", "https://religionunplugged.com/news/link-relcanonical-hrefhttps/holocaust-survivors-die-ai-avatars-step-in-to-tell-their-stories", "news", "en", "Porträt über KI-Avatare von Holocaust-Überlebenden und deren Einsatz in Schulen."),
        article("avatar-ethik", "As the Last Generation of Holocaust Survivors Die, Is AI the Future of Holocaust Education?", "The Jewish News, Feb. 2026", "https://www.thejewishnews.com/culture/as-the-last-generation-of-holocaust-survivors-die-is-ai-the-future-of-holocaust-education/article_5d103ba3-c4cc-46a5-a257-89ed894ad842.html", "feature", "en", "Der Artikel wägt pädagogischen Nutzen und ethische Grenzen von KI-Zeitzeugen ab."),
        article("avatar-ethik", "Dimensions in Testimony", "USC Shoah Foundation", "https://sfi.usc.edu/dit", "projekt", "en", "Pionierprojekt für interaktive Zeitzeugen-Interviews auf Basis umfangreicher Videoaufzeichnungen."),
        article("avatar-ethik", "Digital Dybbuks and Virtual Golems", "arXiv, 2025", "https://arxiv.org/pdf/2503.01369", "wissenschaft", "en", "Fachbeitrag zu ethischen Risiken digitaler Doppelgänger in Holocaust-Testimonies."),
        article("avatar-ethik", "KI und Erinnerungskultur mit Anne Lammers", "bpb Werkstatt-Gespräch", "https://www.bpb.de/lernen/digitale-bildung/werkstatt/541433/ki-und-erinnerungskultur-mit-anne-lammers/", "podcast", "de", "Podcast-Gespräch über Potenziale, Grenzen und Medienkompetenz in digitaler Erinnerungskultur."),
        article("avatar-ethik", "Digitale Erinnerungskultur", "bidt Bayern, März 2025", "https://www.bidt.digital/phaenomene/digitale-erinnerungskultur/", "übersicht", "de", "Überblick zu digitalen Formaten, darunter das LediZ-Projekt und KI-gestützte Zeitzeugenarbeit."),
        article("avatar-ethik", "Speaking for the Past", "Real Life Mag", "https://reallifemag.com/speaking-for-the-past/", "essay", "en", "Essayistische Reflexion über digitale Zeugenschaft, Repräsentation und Erinnerung.")
      ]
    },
    {
      id: "digital-resurrection",
      title: "Digital Resurrection",
      subtitle: "Deepfakes historischer Persönlichkeiten",
      discussion: "KI-Deepfakes von Verstorbenen verschieben Deutungshoheit, Persönlichkeitsrechte und das Vertrauen in historische Bilder.",
      color: "purple",
      articles: [
        article("digital-resurrection", "Deepfaking the past: Memory and perceived truth of resurrected historical figures", "ScienceDirect, Apr. 2026", "https://www.sciencedirect.com/science/article/pii/S0747563226001056", "wissenschaft", "en", "Untersuchung dazu, wie Deepfakes historischer Figuren Erinnerung und Wahrheitswahrnehmung beeinflussen."),
        article("digital-resurrection", "Deepfakes of the deceased: Ethical dilemmas and implications on legacy and reputation", "Lexology, Okt. 2025", "https://www.lexology.com/library/detail.aspx?g=962fcbe7-5b3f-450b-8d03-9cb55dfc85e6", "rechtsanalyse", "en", "Rechtsanalyse zu Nachlass, Reputation und digitaler Wiederbelebung Verstorbener."),
        article("digital-resurrection", "Synthetic Human Memories", "ACM CHI 2025", "https://dl.acm.org/doi/10.1145/3706598.3713697", "wissenschaft", "en", "Studie zu KI-editierten Bildern und Videos, die falsche Erinnerungen implantieren können."),
        article("digital-resurrection", "Ich bin Sophie Scholl", "SWR/BR", "https://www.swr.de/unternehmen/ich-bin-sophie-scholl-instagram-serie-102.html", "projekt", "de", "Social-Media-Projekt, das historische Echtzeit-Erzählung und digitale Nähe exemplarisch verbindet.")
      ]
    },
    {
      id: "vermittlung",
      title: "Innovative Vermittlung & Bildung",
      subtitle: "KI in Gedenkstätten, VR, Gamification und Archive",
      discussion: "Neue digitale Formate eröffnen Zugänge zu Quellen, Gedenkstätten und Lernräumen, verlangen aber klare pädagogische Rahmung.",
      color: "teal",
      articles: [
        article("vermittlung", "How AI, gaming and virtual worlds are reshaping Holocaust remembrance", "UN News, Feb. 2026", "https://news.un.org/en/story/2026/02/1166912", "policy", "en", "UN-Bericht über KI, Gaming und virtuelle Räume als neue Formen internationaler Holocaust-Erinnerung."),
        article("vermittlung", "How 3D holograms and AI are preserving Holocaust survivors' stories", "CBC News", "https://www.cbc.ca/news/science/holocaust-survivor-hologram-1.5436430", "feature", "en", "Einordnung von Hologrammen und KI als Technologien zur Bewahrung von Überlebendenberichten."),
        article("vermittlung", "Schreibt KI Geschichte? Tagung Juni 2026", "Haus der Wannsee-Konferenz", "https://www.ghwk.de/de/blog/schreibt-ki-geschichte", "institutionell", "de", "Tagungsprogramm zu KI in historisch-politischer Bildung und Erinnerungskultur."),
        article("vermittlung", "Lernen aus historischen Quellen: Die Nominierten 2025", "GOA-Blog, Sep. 2025", "https://www.goa-blog.de/2025/09/wissen-und-bildung/", "übersicht", "de", "Überblick über digitale Bildungsprojekte, darunter Quellenarbeit und interaktive Lernformate."),
        article("vermittlung", "Digitale Erinnerungskultur 2024", "navos create", "https://navos-create.eu/digitaler-erinnerungskultur-2024/", "übersicht", "de", "Einordnung aktueller Beispiele digitaler Erinnerungskultur."),
        article("vermittlung", "ERDI – Erinnerungskultur digital", "Sächsische Bibliotheksgesellschaft", "https://www.xn--sbig-loa.de/erdi/", "netzwerk", "de", "Netzwerk für digitale Erinnerungskultur, Archive, Citizen Science und Vermittlungsformate."),
        article("vermittlung", "Erinnerungskultur digital", "Außerschulische Bildung", "https://fachzeitschrift.adb.de/erinnerungskultur-digital/", "fachartikel", "de", "Fachartikel zu digitalen Ansätzen in außerschulischer historisch-politischer Bildung.")
      ]
    },
    {
      id: "regulierung",
      title: "Regulierung & Governance",
      subtitle: "EU AI Act, Plattformverantwortung und UNESCO-Standards",
      discussion: "Kennzeichnungspflichten, Plattformhaftung und internationale Standards greifen historische KI-Inhalte bisher nur teilweise.",
      color: "blue",
      articles: [
        article("regulierung", "New UNESCO report warns that Generative AI threatens Holocaust memory", "UNESCO, Juli 2024", "https://www.unesco.org/en/articles/new-unesco-report-warns-generative-ai-threatens-holocaust-memory", "policy", "en", "UNESCO fordert ethische KI-Standards und Zusammenarbeit mit Tech-Unternehmen zum Schutz der Holocaust-Erinnerung."),
        article("regulierung", "How AI, gaming and virtual worlds are reshaping Holocaust remembrance", "UN News, Feb. 2026", "https://news.un.org/en/story/2026/02/1166912", "policy", "en", "UN-Perspektive auf Technologie, Governance und internationale Verantwortung in der Erinnerungskultur."),
        article("regulierung", "Can AI make Hitler cry? Abschnitt Regulation", "Springer AI & Ethics, Aug. 2025", "https://link.springer.com/article/10.1007/s43681-025-00816-3", "wissenschaft", "en", "Wissenschaftliche Einordnung der regulatorischen Lücken bei KI-generierten Holocaust-Inhalten.")
      ]
    }
  ],
  stakeholderGroups: [
    stakeholderGroup("gedenkstaetten", "Gedenkstätten & Erinnerungsinstitutionen", "Kritisch-konstruktiv. Klar gegen KI-Fälschungen und Missbrauch; offen für ethisch verantwortungsvolle KI-Nutzung in Bildung.", "kritisch-wachsam", "red", [
      stakeholder("Haus der Wannsee-Konferenz", "Erstunterzeichnerin des offenen Briefs; organisiert die Fachtagung Schreibt KI Geschichte? im Juni 2026.", "https://www.ghwk.de", "Deutschland"),
      stakeholder("Arolsen Archives", "Pionierin digitaler Bildung mit #everynamecounts und arolen school; fordert Plattformverantwortung.", "https://arolsen-archives.org", "Deutschland"),
      stakeholder("Stiftung Brandenburgische Gedenkstätten", "Warnt vor KI-Flood in sozialen Medien und fordert eine eigene Gegenoffensive.", "https://www.stiftung-bg.de", "Deutschland"),
      stakeholder("Topographie des Terrors", "Unterzeichnerin des offenen Briefs und wichtige Institution der historisch-politischen Bildung.", "https://www.topographie.de", "Deutschland"),
      stakeholder("Stiftung Hamburger Gedenkstätten", "Trägerin von Mirrorial und Sprechen Sie mit einem Nazi; arbeitet an kontroversen KI-Vermittlungsformaten.", "https://www.kz-gedenkstaette-neuengamme.de", "Deutschland")
    ], [
      source("Offener Brief der Gedenkstätten", "https://blog.dnb.de/gegen-ki-generierte-holocaust-verfaelschungen/", "institutionell"),
      source("GHWK: KI-generierte Holocaust-Verfälschungen", "https://www.ghwk.de/de/aktuelles/ki-generierte-holocaust-verfaelschungen", "institutionell")
    ]),
    stakeholderGroup("wissenschaft", "Wissenschaft & Forschung", "Differenziert-analytisch. Untersuchen Potenziale und Risiken empirisch; mahnen zur Vorsicht bei Empathie-Effekten und historischer Wahrheit.", "innovationsoffen", "teal", [
      stakeholder("Prof. Tobias Ebbrecht-Hartmann", "Moderiert die GHWK-Tagung und forscht zu digitalen Erinnerungsmedien.", "https://www.ghwk.de/de/blog/schreibt-ki-geschichte", "Israel"),
      stakeholder("Prof. Victoria Grace Richardson-Walden", "Direktorin des Landecker Digital Memory Lab; beschreibt eine diverse, verteilte Erinnerungslandschaft.", "https://news.un.org/en/story/2026/02/1166912", "UK"),
      stakeholder("Dr. Alina Bothe", "Forscht zu KI und Shoah-Vermittlung sowie Bias in der Gedenkstättenarbeit.", "https://www.ghwk.de/de/blog/schreibt-ki-geschichte", "Deutschland"),
      stakeholder("Dr. Vera Schmitt", "Leitet FakeXplain zur KI-gestützten Erkennung historischer Desinformation.", "https://www.ghwk.de/de/blog/schreibt-ki-geschichte", "Deutschland"),
      stakeholder("Corey Kai Nelson Schultz", "Analysiert Grenzen von Empathie bei virtuellen Zeugen und KI-Avataren.", "https://www.thejewishnews.com/culture/as-the-last-generation-of-holocaust-survivors-die-is-ai-the-future-of-holocaust-education/article_5d103ba3-c4cc-46a5-a257-89ed894ad842.html", "USA"),
      stakeholder("Prof. Felix Stalder", "Befasst sich mit Wahrheiten der KI und kulturellen Folgen algorithmischer Systeme.", "https://www.ghwk.de/de/blog/schreibt-ki-geschichte", "Schweiz"),
      stakeholder("Dr. Anne Lammers", "Ordnet KI-Potenziale für digitale Erinnerungskultur im bpb-Kontext ein.", "https://www.bpb.de/lernen/digitale-bildung/werkstatt/541433/ki-und-erinnerungskultur-mit-anne-lammers/", "Deutschland")
    ], []),
    stakeholderGroup("internationale-institutionen", "Internationale Institutionen & NGOs", "Normgebend-fordernd. Setzen ethische Mindeststandards; fordern Tech-Kooperationen und koordinieren internationale Antworten.", "normgebend", "blue", [
      stakeholder("UNESCO", "Warnt vor Risiken generativer KI für Holocaust-Erinnerung und fordert ethische Standards von Tech-Firmen.", "https://www.unesco.org/en/articles/new-unesco-report-warns-generative-ai-threatens-holocaust-memory", "International"),
      stakeholder("UN Holocaust and UN Outreach Programme", "Organisiert internationale Panels zu Technologie, Erinnerung und Zukunft der Holocaust Education.", "https://news.un.org/en/story/2026/02/1166912", "International"),
      stakeholder("USC Shoah Foundation", "Pionierin interaktiver Zeitzeugen-Technologie mit einem Archiv von mehr als 54.000 Testimonies.", "https://sfi.usc.edu", "USA"),
      stakeholder("IHRA", "Koordiniert Mitgliedsstaaten und prägt Definitionen, Standards und Erinnerungspolitik.", "https://www.holocaustremembrance.com", "International"),
      stakeholder("World Jewish Congress", "Fordert aktiven Schutz digitaler Erinnerung und ist Mitorganisator internationaler Debatten.", "https://www.worldjewishcongress.org", "International")
    ], []),
    stakeholderGroup("tech", "Technologieanbieter & Plattformen", "Gespalten. Einzelne Anbieter engagieren sich konstruktiv; große Plattformen stehen unter Druck und reagieren häufig reaktiv.", "verantwortungspflichtig", "amber", [
      stakeholder("OpenAI", "Pausierte 2025 Darstellungen historischer Figuren in Sora nach Protest der MLK-Familie und sucht Kooperationen mit Nachlassverwaltungen.", "https://www.lexology.com/library/detail.aspx?g=962fcbe7-5b3f-450b-8d03-9cb55dfc85e6", "USA"),
      stakeholder("Meta / Facebook", "Primäre Plattform für AI-Slop-Verbreitung und Adressat von Forderungen nach schnellerer Moderation.", "https://www.ghwk.de/de/aktuelles/ki-generierte-holocaust-verfaelschungen", "USA"),
      stakeholder("StoryFile", "Entwickelt kommerzielle Zeitzeugen-Avatare und arbeitet mit Blue Card und Museen zusammen.", "https://storyfile.com", "USA"),
      stakeholder("Staatsbibliothek Berlin", "Arbeitet zu KI und kulturellem Erbe sowie Bias in Archiv- und Kulturdaten.", "https://www.ghwk.de/de/blog/schreibt-ki-geschichte", "Deutschland")
    ], []),
    stakeholderGroup("politik", "Politische Institutionen & Kulturpolitik", "Zunehmend aktiv, aber ohne kohärentes Gesamtkonzept. EU-Regeln greifen teilweise, nationale Maßnahmen bleiben lückenhaft.", "normgebend", "purple", [
      stakeholder("Europäische Kommission", "Der EU AI Act enthält Kennzeichnungspflichten für synthetische Medien; der DSA adressiert Plattformhaftung.", "https://www.europarl.europa.eu/topics/de/article/20230601STO93804/eu-ki-gesetz", "EU"),
      stakeholder("Brandenburger Kulturministerium", "Fordert aktive Gegenoffensiven der Gedenkstätten und betont gesicherte Information.", "https://www.tagesspiegel.de/berlin/erinnerungskultur-hetze-und-ki-fakes-belasten-arbeit-in-gedenkstatten-15466718.html", "Deutschland"),
      stakeholder("Bundesministerium der Justiz", "Prüft Rahmen für Plattformregulierung; spezifische Regeln für Holocaust-KI-Inhalte fehlen bislang.", "", "Deutschland"),
      stakeholder("bpb", "Produziert Bildungsmaterial und Podcasts zu KI, digitaler Bildung und Erinnerungskultur.", "https://www.bpb.de/lernen/digitale-bildung/werkstatt/541433/ki-und-erinnerungskultur-mit-anne-lammers/", "Deutschland")
    ], []),
    stakeholderGroup("ueberlebende", "Überlebende, Nachkommen & Zivilgesellschaft", "Zentrale moralische Stimme. Fordern Kontrolle über Nutzung ihrer Lebensgeschichten und diskutieren Avatare kontrovers.", "betroffene", "coral", [
      stakeholder("Blue Card", "Vermittelt Zeitzeugen-Avatare an Schulen und setzt auf kontrollierte Innovation aus der Community heraus.", "https://www.bluecard.us", "USA"),
      stakeholder("Sonia Warshawski", "Hat ihren KI-Avatar aktiv mitgestaltet und sieht darin ein Weiterwirken ihrer Stimme.", "https://religionunplugged.com/news/link-relcanonical-hrefhttps/holocaust-survivors-die-ai-avatars-step-in-to-tell-their-stories", "USA"),
      stakeholder("Estate of Martin Luther King Jr.", "Protestierte gegen unerlaubte Sora-Darstellungen und erreichte 2025 eine Pausierung durch OpenAI.", "https://www.lexology.com/library/detail.aspx?g=962fcbe7-5b3f-450b-8d03-9cb55dfc85e6", "USA"),
      stakeholder("Aaron Elster und Pinchas Gutter", "Frühe Teilnehmer von Dimensions in Testimony; befürworteten digitales Fortleben ihrer Zeugnisse.", "https://en.wikipedia.org/wiki/Dimensions_in_Testimony", "USA / Kanada")
    ], [])
  ],
  projects: [
    project("international", "Dimensions in Testimony", "USC Shoah Foundation + Illinois Holocaust Museum", "3D-interaktive Zeitzeugen-Hologramme; Besucher stellen Echtzeit-Fragen per NLP. Das Format ist weltweit in Museen und Bildungskontexten im Einsatz.", "https://sfi.usc.edu/dit", "USA", "Avatar / Interaktiv"),
    project("international", "Sonia Warshawski AI Avatar", "StoryFile / Blue Card / Inflatable Film", "Portabler Avatar für Schulen, der voraufgezeichnete Antworten zugänglich macht und persönliche Zeugenschaft in Lernräume überträgt.", "https://www.bluecard.us", "USA", "Avatar / Mobil"),
    project("international", "Landecker Digital Memory Lab", "University of Sussex", "Forschungszentrum für VR, Gaming und Holocaust-Erinnerung; prägt internationale Debatten zu digitaler Erinnerung.", "https://www.sussex.ac.uk", "UK", "Forschung / VR"),
    project("international", "Auschwitz-Birkenau Online Live-Führungen", "Gedenkstätte Auschwitz-Birkenau", "Interaktive digitale Führungen erweitern den globalen Zugang zur Gedenkstätte und verbinden Vermittlung mit ortsbezogener Expertise.", "https://www.auschwitz.org", "Polen", "Digitaler Zugang"),
    project("international", "GAMI — Global Authentic Memory Initiative", "Diverse Partner", "Internationale Initiative zur Sicherung authentischer digitaler Gedenkquellen gegen KI-Verfälschung.", "", "International", "Governance"),
    project("national", "LediZ / Chatbot Ernst Otto Krakenberger", "LMU München", "Chat-Interaktion mit einem Zeitzeugen im Audioformat; paraverbale Signale wie Intonation, Lachen und Pausen bleiben Teil der Vermittlung.", "https://www.bidt.digital/phaenomene/digitale-erinnerungskultur/", "Deutschland", "Avatar / Audio"),
    project("national", "arolen school & #everynamecounts", "Arolsen Archives", "Interaktive Lernmodule und Crowdsourcing zur Digitalisierung von NS-Opferdaten; verbindet Quellenarbeit, Beteiligung und digitale Bildung.", "https://arolsen-archives.org", "Deutschland", "Gamification / Crowdsourcing"),
    project("national", "FakeXplain", "TU Berlin", "KI-gestützte Desinformationserkennung speziell für historische Inhalte; präsentiert im Kontext der GHWK-Tagung 2026.", "https://www.ghwk.de/de/blog/schreibt-ki-geschichte", "Deutschland", "KI-Tool / Detektion"),
    project("national", "Mirrorial", "Stiftung Hamburger Gedenkstätten", "KI als Reflexionsraum für unbewusste Biases in der NS- und Shoah-Vermittlung.", "https://www.ghwk.de/de/blog/schreibt-ki-geschichte", "Deutschland", "Reflexion / Bias"),
    project("national", "Sprechen Sie mit einem Nazi", "Stiftung Hamburger Gedenkstätten", "Kontroverses KI-Format für simulierte Dialoge mit NS-Tätern auf Basis historischer Lebenserzählungen.", "https://www.ghwk.de/de/blog/schreibt-ki-geschichte", "Deutschland", "Avatar / Kontrovers"),
    project("national", "Ich bin Sophie Scholl", "SWR / BR", "Instagram-Serie mit historischer Echtzeit-Erzählung; paradigmatisch für Nähe, Identifikation und aufgelöste Zeitgrenzen.", "https://www.swr.de/unternehmen/ich-bin-sophie-scholl-instagram-serie-102.html", "Deutschland", "Social Media / Storytelling"),
    project("national", "ERDI – Erinnerungskultur digital", "Sächsische Bibliotheksgesellschaft / SLUB Dresden", "Offenes Netzwerk für digitale Erinnerungskultur mit Archiven, Citizen Science und Tagungsformaten.", "https://www.xn--sbig-loa.de/erdi/", "Deutschland", "Netzwerk / Citizen Science"),
    project("national", "Tagung Schreibt KI Geschichte?", "GHWK + Hebrew Univ. + kulturBdigital", "Fachtagung zu KI in historisch-politischer Bildung, Prompting, KI-Bildern, FakeXplain und Bias.", "https://www.ghwk.de/de/blog/schreibt-ki-geschichte", "Deutschland", "Fachtagung / Vernetzung"),
    project("national", "KI & Kultur Intelligence Board", "Staatsbibliothek zu Berlin", "Projekt zu kultur- und kontextbewussten KI-Modellen und kulturellem Erbe in KI-Systemen.", "https://www.ghwk.de/de/blog/schreibt-ki-geschichte", "Deutschland", "Archiv / KI-Bias")
  ]
};

function article(parentId, title, source, url, type, language, abstract) {
  return { id: slug(`${parentId}-${title}`), parentId, title, source, url, type, language, abstract, isSeeded: true };
}

function stakeholderGroup(id, title, position, positionTag, color, entries, sources) {
  return { id, title, position, positionTag, color, entries, sources };
}

function stakeholder(name, role, url, country) {
  return { id: slug(name), name, role, url, country };
}

function source(title, url, type) {
  return { id: slug(title), title, url, type };
}

function project(groupId, name, carrier, description, url, country, category) {
  return { id: slug(`${groupId}-${name}`), groupId, name, carrier, description, url, country, category, isSeeded: true };
}

function slug(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
