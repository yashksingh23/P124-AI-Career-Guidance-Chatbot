/**
 * CAREERPULSE — DESKTOP DASHBOARD ENGINE
 * Powers real-time search, filters, pipeline, bookmarking, and modals
 */

// =============================================================================
// APP STATE
// =============================================================================
let state = {
  savedCount: 4,
  savedJobIds: new Set(["hot-1"]), // Figma job bookmarked by default to match screenshot
  searchRole: "Product Design Intern",
  searchLocation: "San Francisco, Remote, Hybrid",
  searchType: "Internship",
  searchRate: "40",
  activePopularPill: "trending",
  activeTrack: "Design & UX",
  rsvpDone: false,
  appliedCount: 2
};

// =============================================================================
// SEARCH & FILTERS
// =============================================================================
function handleNavSearch(val) {
  const roleInput = document.getElementById("filter-role-input");
  if (roleInput) roleInput.value = val;
  executeSearch();
}

function handleFilterChange() {
  executeSearch();
}

function executeSearch() {
  const roleQuery = (document.getElementById("filter-role-input")?.value || "").toLowerCase().trim();
  const locQuery = (document.getElementById("filter-location-select")?.value || "").toLowerCase();
  const typeQuery = (document.getElementById("filter-type-select")?.value || "").toLowerCase();

  const cards = document.querySelectorAll(".desktop-job-card");
  let matchedCount = 0;

  cards.forEach(card => {
    const cardText = card.textContent.toLowerCase();
    let matches = true;

    if (roleQuery && !cardText.includes(roleQuery)) {
      // Split into keywords
      const words = roleQuery.split(" ").filter(w => w.length > 2);
      const hasWord = words.some(w => cardText.includes(w));
      if (!hasWord) matches = false;
    }

    if (locQuery && locQuery !== "san francisco, remote, hybrid" && !cardText.includes(locQuery)) {
      matches = false;
    }

    if (typeQuery && typeQuery !== "all" && !cardText.includes(typeQuery)) {
      matches = false;
    }

    if (matches) {
      card.style.display = "block";
      matchedCount++;
    } else {
      card.style.display = "none";
    }
  });

  showNotificationToast(`Showing ${matchedCount} matching opportunities`);
}

function togglePopularPill(pillName) {
  state.activePopularPill = pillName;
  document.querySelectorAll(".pop-chip").forEach(c => c.classList.remove("active"));
  const target = document.getElementById(`chip-${pillName}`);
  if (target) target.classList.add("active");

  const roleInput = document.getElementById("filter-role-input");

  if (pillName === "trending") {
    if (roleInput) roleInput.value = "Product Design Intern";
  } else if (pillName === "summer") {
    if (roleInput) roleInput.value = "Summer Intern";
  } else if (pillName === "remote") {
    if (roleInput) roleInput.value = "Remote";
  } else if (pillName === "quick") {
    if (roleInput) roleInput.value = "Engineer";
  } else if (pillName === "ai") {
    if (roleInput) roleInput.value = "AI Research";
  }

  executeSearch();
  showNotificationToast(`Filtered by: ${pillName.toUpperCase()}`);
}

function openAllFiltersModal() {
  showNotificationToast("Opening advanced filter drawer (6 filters active)");
}

// =============================================================================
// CAREER TRACKS TOGGLE
// =============================================================================
function selectCareerTrack(trackName) {
  state.activeTrack = trackName;

  document.querySelectorAll(".track-row-item").forEach(item => {
    item.classList.remove("active");
  });

  // Find clicked or matching item
  const allItems = document.querySelectorAll(".track-row-item");
  allItems.forEach(item => {
    if (item.textContent.includes(trackName)) {
      item.classList.add("active");
    }
  });

  const roleInput = document.getElementById("filter-role-input");
  if (roleInput) {
    if (trackName.includes("Design")) roleInput.value = "Product Design";
    else if (trackName.includes("Engineering")) roleInput.value = "Software Engineer";
    else if (trackName.includes("Data")) roleInput.value = "AI Research";
    else if (trackName.includes("Product")) roleInput.value = "Marketing";
  }

  executeSearch();
  showNotificationToast(`Switched to track: ${trackName}`);
}

// =============================================================================
// BOOKMARKING / SAVING ROLES
// =============================================================================
function toggleBookmark(jobId, btnElement) {
  const badge = document.getElementById("nav-saved-count");

  if (state.savedJobIds.has(jobId)) {
    state.savedJobIds.delete(jobId);
    state.savedCount = Math.max(0, state.savedCount - 1);
    if (btnElement) {
      btnElement.classList.remove("bookmarked");
      if (btnElement.tagName === "BUTTON" && btnElement.textContent.includes("Save")) {
        btnElement.textContent = "Save";
      }
    }
    showNotificationToast("Opportunity removed from saved bookmarks");
  } else {
    state.savedJobIds.add(jobId);
    state.savedCount++;
    if (btnElement) {
      btnElement.classList.add("bookmarked");
      if (btnElement.tagName === "BUTTON" && btnElement.textContent.includes("Save")) {
        btnElement.textContent = "Saved ✓";
      }
    }
    showNotificationToast("Opportunity saved to bookmarks! (Saved: " + state.savedCount + ")");
  }

  if (badge) badge.textContent = state.savedCount;
}

// =============================================================================
// EASY APPLY MODAL LOGIC
// =============================================================================
let currentApplyData = null;

function openApplyModal(title, company, pay) {
  currentApplyData = { title, company, pay };

  document.getElementById("modal-apply-title").textContent = title;
  document.getElementById("modal-apply-sub").textContent = `${company} • ${pay}`;
  document.getElementById("apply-modal").classList.add("open");
}

function closeApplyModal() {
  document.getElementById("apply-modal").classList.remove("open");
  currentApplyData = null;
}

function handleApplySubmit(e) {
  e.preventDefault();
  if (!currentApplyData) return;

  const title = currentApplyData.title;
  const company = currentApplyData.company.split("/")[0].trim();

  // Add item to Application Pipeline widget on the left
  const pipelineList = document.getElementById("pipeline-items-list");
  if (pipelineList) {
    const newItem = document.createElement("div");
    newItem.className = "pipeline-item";
    newItem.innerHTML = `
      <div class="pipeline-left">
        <strong>${escapeHTML(company)} • ${escapeHTML(title)}</strong>
        <span>Submitted just now</span>
      </div>
      <span class="pipe-status-pill pill-purple">In Review</span>
    `;
    pipelineList.insertBefore(newItem, pipelineList.firstChild);
  }

  closeApplyModal();
  showNotificationToast(`🎉 Application successfully sent to ${company}! Added to Pipeline.`);
}

// =============================================================================
// VIRTUAL FAIRS RSVP TOGGLE
// =============================================================================
function handleRSVP(btn) {
  state.rsvpDone = !state.rsvpDone;
  if (state.rsvpDone) {
    btn.textContent = "✓ RSVP'd";
    btn.style.background = "#059669";
    showNotificationToast("🎉 Spot confirmed for 'Breaking into Design Systems'! Calendar invite sent.");
  } else {
    btn.textContent = "RSVP Free";
    btn.style.background = "#0f172a";
    showNotificationToast("RSVP cancelled.");
  }
}

// =============================================================================
// TUNE MODAL & RESUME ASSISTANT
// =============================================================================
function openTuneModal() {
  const container = document.getElementById("tune-skills-container");
  if (container) {
    const skills = [
      { name: "Figma & Prototyping", match: 98 },
      { name: "Design Systems & Tokens", match: 96 },
      { name: "React & UI Architecture", match: 92 },
      { name: "TypeScript & Next.js", match: 88 },
      { name: "User Research & Usability", match: 85 }
    ];

    container.innerHTML = skills.map(s => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid #f1f5f9;">
        <span style="font-size:0.86rem; font-weight:700;">${s.name}</span>
        <span style="font-size:0.84rem; font-weight:800; color:#059669;">${s.match}%</span>
      </div>
    `).join("");
  }

  document.getElementById("tune-modal").classList.add("open");
}

function closeTuneModal() {
  document.getElementById("tune-modal").classList.remove("open");
  showNotificationToast("AI Alignment preferences recalculated!");
}

function openOptimizeResumeModal() {
  showNotificationToast("⚡ AI Resume Assistant: Analyzing your bullet points for ATS optimization...");
}

// =============================================================================
// LOAD MORE POSITIONS
// =============================================================================
function loadMorePositions() {
  const list = document.getElementById("jobs-feed-list");
  if (!list) return;

  const newCard = document.createElement("article");
  newCard.className = "desktop-job-card";
  newCard.innerHTML = `
    <div class="job-card-main-header">
      <div class="card-identity-group">
        <div class="company-logo-avatar" style="background:#e0f2fe; color:#0369a1;">
          <span>S</span>
        </div>
        <div class="company-role-titles">
          <div class="comp-verified-line">
            <span class="comp-name">Stripe Platform</span>
            <span class="verified-check-circle" title="Verified Employer">✓</span>
          </div>
          <h3 class="job-role-headline">Frontend Infrastructure Intern</h3>
        </div>
      </div>
      <button class="btn-card-bookmark" onclick="toggleBookmark('hot-4', this)" title="Bookmark Role">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
      </button>
    </div>
    <div class="job-meta-chips-row">
      <span class="meta-item-loc">📍 San Francisco / Remote</span>
      <span class="bullet-dot">•</span>
      <span class="meta-item-text">Internship (12 wks)</span>
      <span class="bullet-dot">•</span>
      <span class="meta-pill-pay">$55 - $65/hr</span>
    </div>
    <div class="job-skills-pills-row">
      <span class="skill-outline-tag">React</span>
      <span class="skill-outline-tag">TypeScript</span>
      <span class="skill-outline-tag">Design Systems</span>
    </div>
    <div class="card-inner-divider"></div>
    <div class="card-bottom-actions-row">
      <div class="card-bottom-left">
        <span class="badge-match-pill"><span class="star-icon">⭐</span> 97% Match</span>
        <span class="applicants-text">👥 18 applicants</span>
      </div>
      <div class="card-bottom-right">
        <button class="btn-action-save" onclick="toggleBookmark('hot-4', this)">Save</button>
        <button class="btn-action-primary" onclick="openApplyModal('Frontend Infrastructure Intern', 'Stripe Platform', '$55 - $65/hr')">
          <span>Easy Apply</span> <span class="arrow-up-right">↗</span>
        </button>
      </div>
    </div>
  `;

  list.appendChild(newCard);
  showNotificationToast("Loaded 1 additional verified position!");
}

// =============================================================================
// NAVBAR TABS & NOTIFICATIONS
// =============================================================================
function switchMainTab(tabName, event) {
  if (event) event.preventDefault();
  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
  const clicked = event?.target?.closest(".nav-link");
  if (clicked) clicked.classList.add("active");

  showNotificationToast(`Active Tab: ${tabName.toUpperCase()}`);
}

function openProfileModal() {
  showNotificationToast("Alex Vance • Stanford University • Pro Member");
}

function resetFeed(event) {
  if (event) event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
  showNotificationToast("Refreshed CareerPulse Feed");
}

function previewJob(jobId) {
  showNotificationToast("Opening in-depth role overview...");
}

// Toast helper
function showNotificationToast(msg) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✨</span><span>${escapeHTML(msg)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    toast.style.transition = "all 0.2s ease";
    setTimeout(() => toast.remove(), 200);
  }, 2600);
}

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Initial binding
window.addEventListener("DOMContentLoaded", () => {
  executeSearch();
});
