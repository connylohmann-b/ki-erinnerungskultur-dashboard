const state = {
  section: "topics",
  topicId: DASHBOARD_DATA.topics[0].id,
  type: "all",
  language: "all",
  projectGroup: "international"
};

const colorMap = {
  red: "#ef4444",
  amber: "#f59e0b",
  purple: "#8b5cf6",
  teal: "#14b8a6",
  blue: "#3b82f6",
  coral: "#f97316"
};

const typeLabels = {
  news: "News",
  wissenschaft: "Wissenschaft",
  institutionell: "Institutionell",
  projekt: "Projekt",
  policy: "Policy",
  podcast: "Podcast",
  essay: "Essay",
  rechtsanalyse: "Rechtsanalyse",
  übersicht: "Übersicht",
  feature: "Feature",
  netzwerk: "Netzwerk",
  fachartikel: "Fachartikel"
};

document.addEventListener("DOMContentLoaded", () => {
  bindNavigation();
  bindFilters();
  renderTopicFilters();
  renderTopicTypeOptions();
  renderTopics();
  renderStakeholders();
  renderProjects();
});

function bindNavigation() {
  document.querySelectorAll(".section-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.section = button.dataset.section;
      document.querySelectorAll(".section-tab").forEach((tab) => tab.classList.toggle("is-active", tab === button));
      document.querySelectorAll(".section-panel").forEach((panel) => panel.classList.toggle("is-active", panel.id === `section-${state.section}`));
    });
  });

  document.getElementById("refreshButton").addEventListener("click", () => {
    showToast("Aktuell sind kuratierte Seed-Daten geladen. Automatische Updates können in der nächsten Ausbaustufe ergänzt werden.");
  });
}

function bindFilters() {
  document.getElementById("topicTypeFilter").addEventListener("change", (event) => {
    state.type = event.target.value;
    renderTopics();
  });

  document.getElementById("topicLanguageFilter").addEventListener("change", (event) => {
    state.language = event.target.value;
    renderTopics();
  });

  document.querySelectorAll("[data-project-group]").forEach((button) => {
    button.addEventListener("click", () => {
      state.projectGroup = button.dataset.projectGroup;
      document.querySelectorAll("[data-project-group]").forEach((segment) => segment.classList.toggle("is-active", segment === button));
      renderProjects();
    });
  });
}

function renderTopicFilters() {
  const container = document.getElementById("topicPills");
  container.innerHTML = DASHBOARD_DATA.topics.map((topic) => `
    <button class="pill ${topic.id === state.topicId ? "is-active" : ""}" type="button" data-topic-id="${topic.id}" style="--accent: ${colorMap[topic.color]}">
      ${escapeHtml(topic.title)}
      <span>${escapeHtml(topic.subtitle)}</span>
    </button>
  `).join("");

  container.querySelectorAll("[data-topic-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.topicId = button.dataset.topicId;
      renderTopicFilters();
      renderTopics();
    });
  });
}

function renderTopicTypeOptions() {
  const select = document.getElementById("topicTypeFilter");
  const types = [...new Set(DASHBOARD_DATA.topics.flatMap((topic) => topic.articles.map((article) => article.type)))].sort();
  select.innerHTML = `<option value="all">Alle Typen</option>${types.map((type) => `<option value="${escapeAttr(type)}">${typeLabels[type] || type}</option>`).join("")}`;
}

function renderTopics() {
  const topic = DASHBOARD_DATA.topics.find((item) => item.id === state.topicId);
  const articles = topic.articles.filter((article) => {
    const typeMatches = state.type === "all" || article.type === state.type;
    const languageMatches = state.language === "all" || article.language === state.language;
    return typeMatches && languageMatches;
  });

  document.getElementById("topicsSummary").innerHTML = `
    <p><strong>${escapeHtml(topic.title)}</strong>: ${escapeHtml(topic.discussion)}</p>
    <span class="metric">${articles.length} Quellen</span>
  `;

  document.getElementById("topicArticles").innerHTML = articles.map((article) => renderArticleCard(article, topic.color)).join("") || emptyState("Keine Quellen für diese Filterkombination.");
}

function renderStakeholders() {
  const container = document.getElementById("stakeholderGroups");
  container.innerHTML = DASHBOARD_DATA.stakeholderGroups.map((group, index) => `
    <article class="group-panel ${index === 0 ? "is-open" : ""}" style="--accent: ${colorMap[group.color]}">
      <button class="group-toggle" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
        <div class="group-header">
          <div>
            <div class="group-title">
              <h3>${escapeHtml(group.title)}</h3>
              <span class="badge">${escapeHtml(group.positionTag)}</span>
            </div>
            <p class="group-position">${escapeHtml(group.position)}</p>
          </div>
          <span class="metric">${group.entries.length}</span>
        </div>
      </button>
      <div class="group-body">
        <div class="stakeholder-grid">
          ${group.entries.map((entry) => renderStakeholderCard(entry, group.color, group.positionTag)).join("")}
        </div>
        ${group.sources.length ? `<div class="source-list">${group.sources.map((item) => renderSourceLink(item)).join("")}</div>` : ""}
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".group-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.closest(".group-panel");
      const isOpen = panel.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function renderProjects() {
  const projects = DASHBOARD_DATA.projects.filter((projectItem) => projectItem.groupId === state.projectGroup);
  const title = state.projectGroup === "international" ? "Internationale Referenzprojekte" : "Deutsche Vorreiter-Projekte";
  const description = state.projectGroup === "international"
    ? "Beispiele für interaktive Zeugenschaft, digitale Zugänge, VR-Forschung und Governance-Initiativen."
    : "Projekte aus Gedenkstätten, Archiven, Forschung und öffentlich-rechtlicher Vermittlung.";

  document.getElementById("projectSummary").innerHTML = `
    <p><strong>${title}</strong>: ${description}</p>
    <span class="metric">${projects.length} Projekte</span>
  `;
  document.getElementById("projectsGrid").innerHTML = projects.map(renderProjectCard).join("");
}

function renderArticleCard(article, color) {
  return `
    <article class="card" style="--accent: ${colorMap[color]}">
      <div>
        <div class="card-top">
          <div class="badge-row">
            <span class="badge">${escapeHtml(typeLabels[article.type] || article.type)}</span>
            <span class="badge">${article.language === "de" ? "DE" : "EN"}</span>
          </div>
          <span class="seed">Seed</span>
        </div>
        <h3 class="card-title">${escapeHtml(article.title)}</h3>
        <p class="card-text">${escapeHtml(article.abstract)}</p>
      </div>
      <div class="card-footer">
        <span class="meta">${escapeHtml(article.source)}</span>
        <a class="open-link" href="${escapeAttr(article.url)}" target="_blank" rel="noreferrer">Öffnen</a>
      </div>
    </article>
  `;
}

function renderStakeholderCard(entry, color, positionTag) {
  const link = entry.url ? `<a class="open-link" href="${escapeAttr(entry.url)}" target="_blank" rel="noreferrer">Website</a>` : `<span class="meta">Kein Link</span>`;
  return `
    <article class="stakeholder-card" style="--accent: ${colorMap[color]}">
      <div class="badge-row">
        <span class="badge">${escapeHtml(positionTag)}</span>
        <span class="badge">${escapeHtml(entry.country)}</span>
      </div>
      <h3 class="card-title">${escapeHtml(entry.name)}</h3>
      <p class="card-text">${escapeHtml(entry.role)}</p>
      <div class="card-footer">${link}</div>
    </article>
  `;
}

function renderProjectCard(projectItem) {
  const accent = projectItem.groupId === "international" ? colorMap.blue : colorMap.teal;
  const link = projectItem.url ? `<a class="open-link" href="${escapeAttr(projectItem.url)}" target="_blank" rel="noreferrer">Projekt</a>` : `<span class="meta">Recherche offen</span>`;
  return `
    <article class="card project-card" style="--accent: ${accent}">
      <div>
        <div class="badge-row">
          <span class="badge">${escapeHtml(projectItem.country)}</span>
          <span class="badge">${escapeHtml(projectItem.category)}</span>
        </div>
        <h3 class="card-title">${escapeHtml(projectItem.name)}</h3>
        <p class="meta">${escapeHtml(projectItem.carrier)}</p>
        <p class="card-text">${escapeHtml(projectItem.description)}</p>
      </div>
      <div class="card-footer">${link}</div>
    </article>
  `;
}

function renderSourceLink(item) {
  return `<a class="source-link" href="${escapeAttr(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a>`;
}

function emptyState(message) {
  return `<div class="summary-strip"><p>${escapeHtml(message)}</p></div>`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value || "#");
}
