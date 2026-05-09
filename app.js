// =============================================
//  NEB Class 10 Science Question Bank
//  app.js  —  UI logic and rendering
// =============================================

let activeUnit  = "physics";
let activeLesson = "force";
let activeMarks  = "1mark";
let openItems    = new Set();

const marksLabels = {
  "1mark":   "1 Mark",
  "2mark":   "2 Marks",
  "34mark":  "3/4 Marks",
  "longmark": "Long Questions"
};

// ---- Render unit navigation buttons ----
function renderUnits() {
  const nav = document.getElementById("unitsNav");
  nav.innerHTML = Object.entries(data).map(([key, u]) => {
    const isActive  = activeUnit === key;
    const isLocked  = !!u.locked;
    const onclick   = isLocked
      ? `alert('This unit will be added soon. Upload the PDF to continue!')`
      : `setUnit('${key}')`;
    return `<button
      class="unit-btn${isActive ? " active" : ""}${isLocked ? " locked" : ""}"
      onclick="${onclick}">
      ${u.label}${isLocked ? " 🔒" : ""}
    </button>`;
  }).join("");
}

// ---- Render lesson navigation buttons ----
function renderLessons() {
  const wrap   = document.getElementById("lessonsNav");
  const lessons = Object.entries(data[activeUnit].lessons || {});
  if (!lessons.length) { wrap.innerHTML = ""; return; }
  wrap.innerHTML = `<div class="lessons-nav">
    ${lessons.map(([key, l]) =>
      `<button
        class="lesson-btn${activeLesson === key ? " active" : ""}"
        onclick="setLesson('${key}')">
        ${l.label}
      </button>`
    ).join("")}
  </div>`;
}

// ---- Render marks (1/2/3-4) tab buttons ----
function renderMarksTabs() {
  const wrap   = document.getElementById("marksTabsWrap");
  const lesson = data[activeUnit]?.lessons[activeLesson];
  if (!lesson) { wrap.innerHTML = ""; return; }
  wrap.innerHTML = `<div class="marks-tabs">
    ${Object.entries(marksLabels).map(([key, label]) =>
      `<button
        class="marks-tab${activeMarks === key ? " active" : ""}"
        onclick="setMarks('${key}')">
        ${label}
      </button>`
    ).join("")}
  </div>`;
}

// ---- Render stats cards ----
function renderStats(lesson) {
  const t1   = lesson["1mark"]?.length    || 0;
  const t2   = lesson["2mark"]?.length    || 0;
  const t34  = lesson["34mark"]?.length   || 0;
  const tLng = lesson["longmark"]?.length || 0;
  return `<div class="stats-row">
    <div class="stat-card">
      <div class="label">1 mark questions</div>
      <div class="value">${t1}</div>
    </div>
    <div class="stat-card">
      <div class="label">2 mark questions</div>
      <div class="value">${t2}</div>
    </div>
    <div class="stat-card">
      <div class="label">3/4 mark questions</div>
      <div class="value">${t34}</div>
    </div>
    <div class="stat-card">
      <div class="label">Long questions</div>
      <div class="value">${tLng}</div>
    </div>
  </div>`;
}

// ---- Build formatted answer HTML from array of strings ----
function buildAnswer(ansArr) {
  return ansArr.map(line => {
    // Lines starting with → are bullet points
    if (line.startsWith("→")) {
      return `<div class="ans-point">${line.slice(1).trim()}</div>`;
    }
    // Lines that are bolded labels (e.g. <strong>Part A — ...</strong>)
    const stripped = line.replace(/<\/?strong>/g, "").trim();
    if (line.startsWith("<strong>") && stripped.endsWith(":")) {
      return `<div class="ans-label">${stripped}</div>`;
    }
    // Regular lines — treat as bullet point
    return `<div class="ans-point">${line}</div>`;
  }).join("");
}

// ---- Render main content (question list) ----
function renderContent() {
  const content = document.getElementById("content");
  const lesson  = data[activeUnit]?.lessons[activeLesson];

  if (!lesson) {
    content.innerHTML = `<div class="coming-soon">
      Questions for this unit/lesson will be added soon.<br>
      Upload the PDF and I'll fill it in!
    </div>`;
    return;
  }

  const qs = lesson[activeMarks] || [];

  if (!qs.length) {
    content.innerHTML = renderStats(lesson) + `<div class="coming-soon">
      No questions available for this mark category yet.
    </div>`;
    return;
  }

  const listHTML = qs.map((q, i) => {
    const id   = `${activeUnit}_${activeLesson}_${activeMarks}_${i}`;
    const open = openItems.has(id);
    const yearTags = (q.years || [])
      .map(y => `<span class="q-year-tag">${y}</span>`)
      .join("");
    const answerHTML = open
      ? `<div class="q-answer">${buildAnswer(q.a)}</div>`
      : "";

    return `<div class="q-item" onclick="toggleQ('${id}')">
      <div class="q-header">
        <span class="q-num">${i + 1}.</span>
        <span class="q-text">${q.q}</span>
        <span class="q-toggle">${open ? "Hide ans" : "Show ans"}</span>
      </div>
      <div class="q-year-tags">${yearTags}</div>
      ${answerHTML}
    </div>`;
  }).join("");

  content.innerHTML = renderStats(lesson) + `<div class="q-list">${listHTML}</div>`;
}

// ---- Toggle a single question open/closed ----
function toggleQ(id) {
  if (openItems.has(id)) {
    openItems.delete(id);
  } else {
    openItems.add(id);
  }
  renderContent();
}

// ---- State setters ----
function setUnit(key) {
  activeUnit   = key;
  activeLesson = Object.keys(data[key].lessons || {})[0] || "";
  activeMarks  = "1mark";
  openItems.clear();
  render();
}

function setLesson(key) {
  activeLesson = key;
  activeMarks  = "1mark";
  openItems.clear();
  render();
}

function setMarks(key) {
  activeMarks = key;
  openItems.clear();
  renderMarksTabs();
  renderContent();
}

// ---- Full render ----
function render() {
  renderUnits();
  renderLessons();
  renderMarksTabs();
  renderContent();
}

// ---- Init ----
render();
