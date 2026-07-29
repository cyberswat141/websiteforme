/* Renders content from js/data.js into the page.
   You shouldn't need to edit this file to add content. */

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);

  /* ---- hero ---- */
  $("#hero-name").textContent = SITE.name;
  $("#hero-blurb").textContent = SITE.blurb;

  $("#hero-stats").innerHTML = [
    { value: WRITEUPS.length, label: "ctf writeups" },
    { value: BOUNTIES.length, label: "bounty reports" },
    { value: PROJECTS.length, label: "projects" },
  ]
    .map(
      (s) => `<div class="stat">
        <div class="stat-value">${esc(s.value)}</div>
        <div class="stat-label">${esc(s.label)}</div>
      </div>`
    )
    .join("");

  /* ---- about: skills ---- */
  $("#skills-list").innerHTML = SITE.skills
    .map((s) => `<li>${esc(s)}</li>`)
    .join("");

  /* ---- ctf writeups + filters ---- */
  const ctfGrid = $("#ctf-grid");
  const filterBar = $("#ctf-filters");

  function writeupCard(w) {
    return `<article class="card" data-category="${esc(w.category)}">
      <div class="card-top">
        <span>${esc(w.event)}</span>
        <span>${esc(w.points)} pts</span>
      </div>
      <h3><a href="${esc(w.link)}">${esc(w.title)}</a></h3>
      <p>${esc(w.description)}</p>
      <div class="card-tags"><span class="tag cat-${esc(w.category)}">${esc(w.category)}</span></div>
      <a class="card-link" href="${esc(w.link)}">read writeup</a>
    </article>`;
  }

  function renderWriteups(filter) {
    const list = filter === "all" ? WRITEUPS : WRITEUPS.filter((w) => w.category === filter);
    ctfGrid.innerHTML = list.length
      ? list.map(writeupCard).join("")
      : `<p class="section-sub">Nothing in this category yet.</p>`;
  }

  const categories = ["all", ...new Set(WRITEUPS.map((w) => w.category))];
  filterBar.innerHTML = categories
    .map(
      (c, i) =>
        `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${esc(c)}">${esc(c)}</button>`
    )
    .join("");

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderWriteups(btn.dataset.filter);
  });

  renderWriteups("all");

  /* ---- bounties ---- */
  $("#bounty-list").innerHTML = BOUNTIES.map((b) => {
    const title = b.link
      ? `<a href="${esc(b.link)}">${esc(b.title)}</a>`
      : esc(b.title);
    return `<article class="bounty sev-${esc(b.severity)}">
      <span class="sev-badge sev-${esc(b.severity)}">${esc(b.severity)}</span>
      <div class="bounty-info">
        <h3>${title}</h3>
        <p>${esc(b.program)} — ${esc(b.description)}</p>
      </div>
      <div class="bounty-meta">
        <span class="bounty-amount">${esc(b.bounty)}</span>
        ${esc(b.date)}
      </div>
    </article>`;
  }).join("");

  /* ---- projects ---- */
  $("#projects-grid").innerHTML = PROJECTS.map(
    (p) => `<article class="card">
      <h3><a href="${esc(p.link)}">${esc(p.title)}</a></h3>
      <p>${esc(p.description)}</p>
      <div class="card-tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      <a class="card-link" href="${esc(p.link)}">view project</a>
    </article>`
  ).join("");

  /* ---- contact ---- */
  $("#contact-links").innerHTML = SITE.contacts
    .map((c) => `<a class="btn" href="${esc(c.url)}">${esc(c.label)}</a>`)
    .join("");

  /* ---- footer ---- */
  $("#footer-copy").textContent =
    `© ${new Date().getFullYear()} ${SITE.handle} — flags captured responsibly`;

  /* ---- mobile nav ---- */
  const toggle = $(".nav-toggle");
  const links = $(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
