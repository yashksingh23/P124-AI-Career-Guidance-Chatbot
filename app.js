/**
 * CAREERPULSE — CLIENT LOGIC & STATE ENGINE
 * Matches the reference mobile app UI exactly
 */

// =============================================================================
// INITIAL DATASET: JOBS & POSTINGS (Matching Reference UI)
// =============================================================================
const INITIAL_HOT_JOBS = [
  {
    id: "hot-1",
    company: "Figma / Stripe Ecosystem",
    companyShort: "Figma",
    verified: true,
    title: "Product Design Intern",
    location: "San Francisco, CA (Hybrid)",
    salaryPill: "$45 - $55/hr",
    durationPill: "Internship • 12 wks",
    matchScore: 98,
    category: "Design & UX",
    type: "Internship",
    skills: ["Figma", "Prototyping", "Design Systems", "UI/UX Design"],
    footerMetaIcon: "🕒",
    footerMetaText: "3 days left to apply",
    actionLabel: "Easy Apply",
    actionIcon: "✈",
    isHot: true,
    iconType: "palette",
    iconBg: "#eef4ff",
    iconColor: "#0052ff"
  },
  {
    id: "hot-2",
    company: "Linear Labs",
    companyShort: "Linear",
    verified: true,
    title: "Junior Software Engineer",
    location: "Remote (US/EU)",
    salaryPill: "$95k - $120k/yr",
    durationPill: "Full-time • Entry",
    matchScore: 94,
    category: "Engineering",
    type: "Full-time",
    skills: ["React", "TypeScript", "Node.js", "Git"],
    footerMetaIcon: "👥",
    footerMetaText: "24 applicants",
    actionLabel: "Quick Apply",
    actionIcon: "→",
    isHot: true,
    iconType: "code",
    iconBg: "#edf4ff",
    iconColor: "#0052ff"
  },
  {
    id: "hot-3",
    company: "Databricks AI",
    companyShort: "Databricks",
    verified: true,
    title: "Machine Learning Fellow",
    location: "San Francisco / Remote",
    salaryPill: "$60 - $70/hr",
    durationPill: "Internship • 16 wks",
    matchScore: 92,
    category: "Data & AI",
    type: "Internship",
    skills: ["Python", "PyTorch", "Machine Learning", "FastAPI"],
    footerMetaIcon: "🕒",
    footerMetaText: "5 days left to apply",
    actionLabel: "Easy Apply",
    actionIcon: "✈",
    isHot: true,
    iconType: "sparkle",
    iconBg: "#eef2ff",
    iconColor: "#4f46e5"
  },
  {
    id: "hot-4",
    company: "Canva Design Co.",
    companyShort: "Canva",
    verified: true,
    title: "Frontend Engineer Intern",
    location: "Remote (Global)",
    salaryPill: "$48/hr",
    durationPill: "Internship • 12 wks",
    matchScore: 91,
    category: "Engineering",
    type: "Internship",
    skills: ["React", "JavaScript", "TypeScript", "CSS"],
    footerMetaIcon: "👥",
    footerMetaText: "52 applicants",
    actionLabel: "Easy Apply",
    actionIcon: "✈",
    isHot: true,
    iconType: "palette",
    iconBg: "#e0f7fa",
    iconColor: "#00838f"
  }
];

const INITIAL_FRESH_POSTINGS = [
  {
    id: "fresh-1",
    title: "AI Research Intern",
    company: "Anthropic Ecosystem",
    location: "Remote",
    ratePill: "$60/hr",
    postedTime: "2h ago",
    applicantsCount: "12 applicants",
    category: "Data & AI",
    type: "Internship",
    skills: ["Python", "PyTorch", "NLP", "Machine Learning"],
    iconType: "globe",
    iconBg: "#eff6ff",
    iconColor: "#0052ff"
  },
  {
    id: "fresh-2",
    title: "UX Research Fellow",
    company: "Spotify",
    location: "New York, NY",
    ratePill: "$52/hr",
    postedTime: "5h ago",
    applicantsCount: "38 applicants",
    category: "Design & UX",
    type: "Internship",
    skills: ["Figma", "User Research", "Wireframing"],
    iconType: "headphones",
    iconBg: "#ecfdf5",
    iconColor: "#059669"
  },
  {
    id: "fresh-3",
    title: "Growth Marketing Associate",
    company: "Notion",
    location: "San Francisco, CA",
    ratePill: "$85k/yr",
    postedTime: "1d ago",
    applicantsCount: "45 applicants",
    category: "Product & Mktg",
    type: "Full-time",
    skills: ["Analytics", "SQL", "Product Strategy"],
    iconType: "rocket",
    iconBg: "#f5f3ff",
    iconColor: "#7c3aed"
  },
  {
    id: "fresh-4",
    title: "Cloud Infrastructure Intern",
    company: "Google Cloud",
    location: "Remote",
    ratePill: "$55/hr",
    postedTime: "3h ago",
    applicantsCount: "19 applicants",
    category: "Engineering",
    type: "Internship",
    skills: ["Docker", "Kubernetes", "Linux", "Python"],
    iconType: "code",
    iconBg: "#eef4ff",
    iconColor: "#2563eb"
  }
];

// Combine all jobs for catalog
const ALL_JOBS = [...INITIAL_HOT_JOBS, ...INITIAL_FRESH_POSTINGS];

// =============================================================================
// DEFAULT PROFILE (Alex Rivera)
// =============================================================================
const DEFAULT_PROFILE = {
  name: "Alex Rivera",
  headline: "Product Design & Frontend Enthusiast",
  college: "Stanford University",
  degree: "B.S. in CS & Interaction Design",
  email: "alex.rivera@example.com",
  skills: [
    "Figma",
    "Design Systems",
    "Prototyping",
    "React",
    "TypeScript",
    "Node.js",
    "UI/UX Design",
    "Tailwind CSS",
    "JavaScript"
  ]
};

// =============================================================================
// APP STATE
// =============================================================================
let state = {
  profile: { ...DEFAULT_PROFILE },
  savedIds: new Set(["hot-1"]), // Default 1 saved job to match badge '1' in reference image!
  appliedList: [],
  activeTab: "home",
  quickFilter: "trending",
  searchKeyword: "",
  categoryFilter: "",
  locationFilter: "",
  typeFilter: "",
  activeApplyJob: null
};

// =============================================================================
// LOCAL STORAGE PERSISTENCE
// =============================================================================
function initStorage() {
  const savedProf = localStorage.getItem("careerpulse_profile");
  if (savedProf) {
    try { state.profile = JSON.parse(savedProf); } catch (e) {}
  } else {
    localStorage.setItem("careerpulse_profile", JSON.stringify(state.profile));
  }

  const savedBookmarks = localStorage.getItem("careerpulse_saved");
  if (savedBookmarks) {
    try { state.savedIds = new Set(JSON.parse(savedBookmarks)); } catch (e) {}
  } else {
    localStorage.setItem("careerpulse_saved", JSON.stringify(Array.from(state.savedIds)));
  }

  const savedApps = localStorage.getItem("careerpulse_applied");
  if (savedApps) {
    try { state.appliedList = JSON.parse(savedApps); } catch (e) {}
  }
}

function persist(key) {
  if (key === "profile") localStorage.setItem("careerpulse_profile", JSON.stringify(state.profile));
  if (key === "saved") localStorage.setItem("careerpulse_saved", JSON.stringify(Array.from(state.savedIds)));
  if (key === "applied") localStorage.setItem("careerpulse_applied", JSON.stringify(state.appliedList));
}

// =============================================================================
// RENDER HELPERS
// =============================================================================
function renderAll() {
  renderProfileDisplays();
  renderHotJobs();
  renderFreshPostings();
  renderExploreList();
  renderSavedList();
  renderAppliedList();
  renderNavBadges();
}

function renderProfileDisplays() {
  const firstName = state.profile.name.split(" ")[0] || "Alex";
  const greetEl = document.getElementById("display-greeting-name");
  if (greetEl) greetEl.textContent = firstName;

  const profNameText = document.getElementById("prof-name-text");
  const profHeadText = document.getElementById("prof-headline-text");
  if (profNameText) profNameText.textContent = state.profile.name;
  if (profHeadText) profHeadText.textContent = `${state.profile.headline} • Class of 2026`;

  // Profile Form Inputs
  const editName = document.getElementById("edit-name");
  const editHead = document.getElementById("edit-headline");
  const editCollege = document.getElementById("edit-college");
  const editDegree = document.getElementById("edit-degree");
  if (editName) editName.value = state.profile.name;
  if (editHead) editHead.value = state.profile.headline;
  if (editCollege) editCollege.value = state.profile.college;
  if (editDegree) editDegree.value = state.profile.degree;

  renderSkillsTags();
}

function renderSkillsTags() {
  const container = document.getElementById("profile-skills-tags");
  const tuneContainer = document.getElementById("tune-skills-cloud");
  if (!container) return;

  const html = (state.profile.skills || []).map(skill => `
    <span class="skill-edit-chip" onclick="removeSkill('${escapeHTML(skill)}')">
      <span>${escapeHTML(skill)}</span>
      <span style="font-size:10px; color:#94a3b8;">✕</span>
    </span>
  `).join("");

  container.innerHTML = html;
  if (tuneContainer) tuneContainer.innerHTML = html;
}

function renderNavBadges() {
  const savedBadge = document.getElementById("nav-saved-badge");
  const appliedBadge = document.getElementById("nav-applied-badge");

  if (savedBadge) {
    savedBadge.textContent = state.savedIds.size;
    savedBadge.style.display = state.savedIds.size > 0 ? "flex" : "none";
  }

  if (appliedBadge) {
    appliedBadge.textContent = state.appliedList.length;
    appliedBadge.style.display = state.appliedList.length > 0 ? "flex" : "none";
  }
}

// =============================================================================
// ICONS GENERATOR (Exact SVGs matching UI)
// =============================================================================
function getSVGIcon(type) {
  if (type === "palette") {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`;
  }
  if (type === "code") {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
  }
  if (type === "sparkle") {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`;
  }
  if (type === "headphones") {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`;
  }
  if (type === "rocket") {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`;
  }
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
}

// =============================================================================
// RENDER HOT JOBS (Exact Cards 1 & 2 in Reference UI)
// =============================================================================
function renderHotJobs() {
  const container = document.getElementById("hot-jobs-list");
  if (!container) return;

  container.innerHTML = INITIAL_HOT_JOBS.map(job => {
    const isBookmarked = state.savedIds.has(job.id);
    const hasApplied = state.appliedList.some(a => a.jobId === job.id);

    return `
      <div class="hot-job-card" id="card-${job.id}">
        
        <!-- Top Row -->
        <div class="card-top-row">
          <div class="company-brand-meta">
            <div class="brand-icon-box" style="background:${job.iconBg}; color:${job.iconColor};">
              ${getSVGIcon(job.iconType)}
            </div>
            <div class="company-title-wrap">
              <div class="company-verified-row">
                <span>${escapeHTML(job.company)}</span>
                ${job.verified ? `<span class="verified-blue-check" title="Verified Ecosystem">✓</span>` : ''}
              </div>
              <h3 class="role-title-text">${escapeHTML(job.title)}</h3>
              <div class="location-text">
                <span>📍</span>
                <span>${escapeHTML(job.location)}</span>
              </div>
            </div>
          </div>

          <button class="card-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleSaveJob('${job.id}')" title="Save Job">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${isBookmarked ? '#0052ff' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
            </svg>
          </button>
        </div>

        <!-- Badges Row: Pay / Duration / Match Score -->
        <div class="card-badges-row">
          <span class="pill-pay">${escapeHTML(job.salaryPill)}</span>
          <span class="pill-duration">${escapeHTML(job.durationPill)}</span>
          <span class="pill-match-score">
            <span class="dot"></span>
            <span>${job.matchScore}% Match</span>
          </span>
        </div>

        <!-- Skills Tags -->
        <div class="card-skills-row">
          ${job.skills.map(skill => `<span class="skill-outline-pill">${escapeHTML(skill)}</span>`).join("")}
        </div>

        <!-- Bottom Row: Meta & Action Button -->
        <div class="card-footer-row">
          <div class="footer-meta-info">
            <span>${job.footerMetaIcon}</span>
            <span>${escapeHTML(job.footerMetaText)}</span>
          </div>

          ${hasApplied ? `
            <button class="btn-easy-apply applied" disabled>
              <span>✓ Applied</span>
            </button>
          ` : `
            <button class="btn-easy-apply" onclick="openApplyModal('${job.id}')">
              <span>${escapeHTML(job.actionLabel)}</span>
              <span>${job.actionIcon}</span>
            </button>
          `}
        </div>

      </div>
    `;
  }).join("");
}

// =============================================================================
// RENDER FRESH POSTINGS (Compact Cards)
// =============================================================================
function renderFreshPostings() {
  const container = document.getElementById("fresh-postings-list");
  if (!container) return;

  container.innerHTML = INITIAL_FRESH_POSTINGS.map(item => {
    const isBookmarked = state.savedIds.has(item.id);

    return `
      <div class="fresh-posting-item" id="fresh-${item.id}">
        <div class="fresh-left-block">
          <div class="fresh-icon-box" style="background:${item.iconBg}; color:${item.iconColor};">
            ${getSVGIcon(item.iconType)}
          </div>
          <div class="fresh-details-wrap">
            <strong class="fresh-role-title">${escapeHTML(item.title)}</strong>
            <span class="fresh-company-loc">${escapeHTML(item.company)} • ${escapeHTML(item.location)}</span>
            <div class="fresh-meta-row">
              <span class="fresh-rate-tag">${escapeHTML(item.ratePill)}</span>
              <span>• ${escapeHTML(item.postedTime)} • ${escapeHTML(item.applicantsCount)}</span>
            </div>
          </div>
        </div>

        <button class="card-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleSaveJob('${item.id}')" title="Save Job">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? '#0052ff' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
          </svg>
        </button>
      </div>
    `;
  }).join("");
}

// =============================================================================
// EXPLORE SCREEN LIST
// =============================================================================
function renderExploreList() {
  const container = document.getElementById("explore-jobs-list");
  const tagsContainer = document.getElementById("explore-active-tags");
  if (!container) return;

  // Filter jobs based on searchKeyword, categoryFilter, locationFilter, typeFilter
  let results = ALL_JOBS.filter(job => {
    if (state.searchKeyword) {
      const kw = state.searchKeyword.toLowerCase();
      const titleMatch = job.title.toLowerCase().includes(kw);
      const compMatch = job.company.toLowerCase().includes(kw);
      const skillMatch = (job.skills || []).some(s => s.toLowerCase().includes(kw));
      if (!titleMatch && !compMatch && !skillMatch) return false;
    }

    if (state.categoryFilter && job.category !== state.categoryFilter) {
      return false;
    }

    if (state.locationFilter && !job.location.toLowerCase().includes(state.locationFilter.toLowerCase())) {
      return false;
    }

    if (state.typeFilter && job.type.toLowerCase() !== state.typeFilter.toLowerCase()) {
      return false;
    }

    return true;
  });

  // Render active tags
  if (tagsContainer) {
    const tags = [];
    if (state.searchKeyword) tags.push(`"${state.searchKeyword}"`);
    if (state.categoryFilter) tags.push(state.categoryFilter);
    if (state.locationFilter) tags.push(state.locationFilter);
    if (state.typeFilter) tags.push(state.typeFilter);

    if (tags.length > 0) {
      tagsContainer.innerHTML = tags.map(t => `
        <span class="filter-badge-tag">
          <span>${escapeHTML(t)}</span>
          <button onclick="clearAllFilters()">✕</button>
        </span>
      `).join("") + `<button class="text-xs text-muted" onclick="clearAllFilters()" style="background:none;border:none;cursor:pointer;margin-left:4px;">Reset All</button>`;
    } else {
      tagsContainer.innerHTML = "";
    }
  }

  if (results.length === 0) {
    container.innerHTML = `
      <div class="empty-tab-state">
        <div class="empty-tab-icon">🔍</div>
        <h3>No matching opportunities</h3>
        <p>Try clearing filters or search by a different keyword.</p>
        <button class="btn-sheet-apply" onclick="clearAllFilters()">Clear Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = results.map(job => {
    const isBookmarked = state.savedIds.has(job.id);
    const hasApplied = state.appliedList.some(a => a.jobId === job.id);

    return `
      <div class="hot-job-card" style="margin-bottom:12px;">
        <div class="card-top-row">
          <div class="company-brand-meta">
            <div class="brand-icon-box" style="background:${job.iconBg}; color:${job.iconColor};">
              ${getSVGIcon(job.iconType)}
            </div>
            <div class="company-title-wrap">
              <div class="company-verified-row">
                <span>${escapeHTML(job.company)}</span>
                <span class="verified-blue-check">✓</span>
              </div>
              <h3 class="role-title-text">${escapeHTML(job.title)}</h3>
              <div class="location-text"><span>📍</span> ${escapeHTML(job.location)}</div>
            </div>
          </div>
          <button class="card-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleSaveJob('${job.id}')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${isBookmarked ? '#0052ff' : 'none'}" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
          </button>
        </div>
        <div class="card-badges-row">
          <span class="pill-pay">${escapeHTML(job.salaryPill || job.ratePill || '$50/hr')}</span>
          <span class="pill-duration">${escapeHTML(job.type || 'Internship')}</span>
          <span class="pill-match-score"><span class="dot"></span> ${job.matchScore || 92}% Match</span>
        </div>
        <div class="card-footer-row">
          <span class="footer-meta-info">👥 ${job.footerMetaText || job.applicantsCount || '20 applicants'}</span>
          ${hasApplied ? `
            <button class="btn-easy-apply applied" disabled>✓ Applied</button>
          ` : `
            <button class="btn-easy-apply" onclick="openApplyModal('${job.id}')">Apply Now →</button>
          `}
        </div>
      </div>
    `;
  }).join("");
}

// =============================================================================
// SAVED LIST
// =============================================================================
function renderSavedList() {
  const container = document.getElementById("saved-list-container");
  if (!container) return;

  const savedJobs = ALL_JOBS.filter(j => state.savedIds.has(j.id));

  if (savedJobs.length === 0) {
    container.innerHTML = `
      <div class="empty-tab-state">
        <div class="empty-tab-icon">🔖</div>
        <h3>No saved jobs yet</h3>
        <p>Tap the bookmark ribbon on any role to save it here for later.</p>
        <button class="btn-sheet-apply" onclick="switchTab('home')">Browse Feed</button>
      </div>
    `;
    return;
  }

  container.innerHTML = savedJobs.map(job => `
    <div class="hot-job-card" style="margin-bottom:12px;">
      <div class="card-top-row">
        <div class="company-brand-meta">
          <div class="brand-icon-box" style="background:${job.iconBg}; color:${job.iconColor};">
            ${getSVGIcon(job.iconType)}
          </div>
          <div class="company-title-wrap">
            <span class="company-verified-row">${escapeHTML(job.company)}</span>
            <h3 class="role-title-text">${escapeHTML(job.title)}</h3>
            <span class="location-text">📍 ${escapeHTML(job.location)}</span>
          </div>
        </div>
        <button class="card-bookmark-btn bookmarked" onclick="toggleSaveJob('${job.id}')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#0052ff" stroke="#0052ff" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
        </button>
      </div>
      <div class="card-footer-row" style="margin-top:10px;">
        <span class="pill-pay">${escapeHTML(job.salaryPill || job.ratePill || '$50/hr')}</span>
        <button class="btn-easy-apply" onclick="openApplyModal('${job.id}')">Easy Apply ✈</button>
      </div>
    </div>
  `).join("");
}

// =============================================================================
// APPLIED LIST
// =============================================================================
function renderAppliedList() {
  const container = document.getElementById("applied-list-container");
  if (!container) return;

  const totalEl = document.getElementById("stat-applied-total");
  const revEl = document.getElementById("stat-applied-review");
  const intEl = document.getElementById("stat-applied-interview");
  const offEl = document.getElementById("stat-applied-offer");

  const apps = state.appliedList;
  if (totalEl) totalEl.textContent = apps.length;
  if (revEl) revEl.textContent = apps.filter(a => a.status === "Under Review").length;
  if (intEl) intEl.textContent = apps.filter(a => a.status === "Interview").length;
  if (offEl) offEl.textContent = apps.filter(a => a.status === "Offer").length;

  if (apps.length === 0) {
    container.innerHTML = `
      <div class="empty-tab-state">
        <div class="empty-tab-icon">📋</div>
        <h3>No applications yet</h3>
        <p>Apply to hot opportunities with 1-click Easy Apply to track your recruitment status here.</p>
        <button class="btn-sheet-apply" onclick="switchTab('home')">Find Roles</button>
      </div>
    `;
    return;
  }

  container.innerHTML = apps.map(app => `
    <div class="applied-job-item">
      <div class="applied-top-line">
        <strong style="font-size:0.95rem; color:#0f172a;">${escapeHTML(app.jobTitle)}</strong>
        <span class="applied-status-badge status-under-review">● ${escapeHTML(app.status)}</span>
      </div>
      <span style="font-size:0.76rem; color:#64748b;">${escapeHTML(app.company)} • Applied on ${app.date}</span>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
        <span style="font-size:0.72rem; color:#0052ff; font-weight:700;">📄 ${escapeHTML(app.resume)}</span>
        <button onclick="withdrawApp('${app.id}')" style="background:none;border:none;color:#ef4444;font-size:0.75rem;cursor:pointer;font-weight:600;">Withdraw</button>
      </div>
    </div>
  `).join("");
}

function withdrawApp(id) {
  state.appliedList = state.appliedList.filter(a => a.id !== id);
  persist("applied");
  renderAppliedList();
  renderHotJobs();
  renderExploreList();
  renderNavBadges();
  showToast("Application withdrawn", "info");
}

// =============================================================================
// BOOKMARK / SAVE LOGIC
// =============================================================================
function toggleSaveJob(id) {
  if (state.savedIds.has(id)) {
    state.savedIds.delete(id);
    showToast("Removed from saved bookmarks", "info");
  } else {
    state.savedIds.add(id);
    showToast("Opportunity bookmarked!", "success");
  }

  persist("saved");
  renderHotJobs();
  renderFreshPostings();
  renderExploreList();
  renderSavedList();
  renderNavBadges();
}

// =============================================================================
// EASY APPLY MODAL LOGIC
// =============================================================================
function openApplyModal(jobId) {
  const job = ALL_JOBS.find(j => j.id === jobId);
  if (!job) return;

  state.activeApplyJob = job;

  document.getElementById("modal-apply-badge").textContent = job.actionLabel || "Easy Apply";
  document.getElementById("modal-apply-role").textContent = job.title;
  document.getElementById("modal-apply-company").textContent = `${job.company} • ${job.location}`;

  document.getElementById("apply-name").value = state.profile.name;
  document.getElementById("apply-email").value = state.profile.email;

  document.getElementById("apply-modal").classList.add("open");
}

function closeApplyModal() {
  document.getElementById("apply-modal").classList.remove("open");
  state.activeApplyJob = null;
}

function submitApplication(e) {
  e.preventDefault();
  if (!state.activeApplyJob) return;

  const job = state.activeApplyJob;

  if (state.appliedList.some(a => a.jobId === job.id)) {
    showToast("Already applied to this position!", "info");
    closeApplyModal();
    return;
  }

  const newApp = {
    id: "app-" + Date.now(),
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    date: "Just now",
    status: "Under Review",
    resume: "Alex_Rivera_Portfolio_Resume.pdf"
  };

  state.appliedList.unshift(newApp);
  persist("applied");

  renderHotJobs();
  renderExploreList();
  renderAppliedList();
  renderNavBadges();
  closeApplyModal();

  showToast(`🎉 Easy Apply submitted to ${job.companyShort || job.company}!`, "success");
}

// =============================================================================
// SEARCH & FILTER ACTIONS
// =============================================================================
function handleSearch(val) {
  state.searchKeyword = val.trim();
  const clearBtn = document.getElementById("search-clear-btn");
  if (clearBtn) clearBtn.style.display = state.searchKeyword ? "inline-block" : "none";

  renderExploreList();
  if (state.searchKeyword && state.activeTab !== "explore") {
    switchTab("explore");
  }
}

function clearSearch() {
  const input = document.getElementById("main-search-input");
  if (input) input.value = "";
  document.getElementById("search-clear-btn").style.display = "none";
  state.searchKeyword = "";
  renderExploreList();
}

function toggleQuickFilter(filter) {
  state.quickFilter = filter;
  document.querySelectorAll(".quick-filter-chip").forEach(c => c.classList.remove("active"));
  const activeBtn = document.getElementById(`chip-${filter}`);
  if (activeBtn) activeBtn.classList.add("active");

  if (filter === "summer") {
    state.typeFilter = "Internship";
    state.categoryFilter = "";
    state.locationFilter = "";
  } else if (filter === "remote") {
    state.locationFilter = "Remote";
    state.categoryFilter = "";
    state.typeFilter = "";
  } else if (filter === "fresher") {
    state.typeFilter = "Full-time";
    state.categoryFilter = "";
    state.locationFilter = "";
  } else {
    // Trending
    state.typeFilter = "";
    state.categoryFilter = "";
    state.locationFilter = "";
  }

  renderExploreList();
  showToast(`Feed updated: ${filter.toUpperCase()}`, "info");
}

function filterByTrack(trackName) {
  state.categoryFilter = trackName;
  switchTab("explore");
  renderExploreList();
  showToast(`Viewing track: ${trackName}`, "info");
}

// Filter Sheet Modal
function openFiltersModal() {
  document.getElementById("filter-modal").classList.add("open");
}

function closeFiltersModal() {
  document.getElementById("filter-modal").classList.remove("open");
  renderExploreList();
}

function setCategoryFilter(cat) {
  state.categoryFilter = cat;
  document.querySelectorAll("#modal-category-pills .f-pill").forEach(p => {
    p.classList.toggle("active", p.textContent.includes(cat) || (!cat && p.textContent.includes("All")));
  });
}

function setLocationFilter(loc) {
  state.locationFilter = loc;
  document.getElementById("pill-loc-all").classList.toggle("active", !loc);
  document.getElementById("pill-loc-remote").classList.toggle("active", loc === "Remote");
  document.getElementById("pill-loc-sf").classList.toggle("active", loc.includes("San Francisco"));
  document.getElementById("pill-loc-ny").classList.toggle("active", loc.includes("New York"));
}

function setTypeFilter(t) {
  state.typeFilter = t;
  document.getElementById("pill-type-all").classList.toggle("active", !t);
  document.getElementById("pill-type-intern").classList.toggle("active", t === "Internship");
  document.getElementById("pill-type-full").classList.toggle("active", t === "Full-time");
}

function resetFiltersModal() {
  state.categoryFilter = "";
  state.locationFilter = "";
  state.typeFilter = "";
  state.searchKeyword = "";
  document.querySelectorAll(".f-pill").forEach(p => p.classList.remove("active"));
  document.getElementById("pill-loc-all").classList.add("active");
  document.getElementById("pill-type-all").classList.add("active");
  renderExploreList();
  showToast("Filters reset", "info");
}

function clearAllFilters() {
  resetFiltersModal();
  clearSearch();
}

// =============================================================================
// TUNE AI ALIGNMENT MODAL
// =============================================================================
function openTuneSkillsModal() {
  renderSkillsTags();
  document.getElementById("tune-modal").classList.add("open");
}

function closeTuneModal() {
  document.getElementById("tune-modal").classList.remove("open");
  showToast("AI Smart Alignment updated!", "success");
}

function addSkillFromInput() {
  const input = document.getElementById("add-skill-input");
  const val = input.value.trim();
  if (!val) return;

  if (state.profile.skills.some(s => s.toLowerCase() === val.toLowerCase())) {
    showToast("Skill already in profile", "info");
    return;
  }

  state.profile.skills.push(val);
  persist("profile");
  input.value = "";
  renderSkillsTags();
  showToast(`Added ${val} to skills`, "success");
}

function removeSkill(skill) {
  state.profile.skills = state.profile.skills.filter(s => s.toLowerCase() !== skill.toLowerCase());
  persist("profile");
  renderSkillsTags();
  showToast(`Removed ${skill}`, "info");
}

function saveUserProfile() {
  state.profile.name = document.getElementById("edit-name").value.trim() || state.profile.name;
  state.profile.headline = document.getElementById("edit-headline").value.trim() || state.profile.headline;
  state.profile.college = document.getElementById("edit-college").value.trim() || state.profile.college;
  state.profile.degree = document.getElementById("edit-degree").value.trim() || state.profile.degree;

  persist("profile");
  renderProfileDisplays();
  showToast("Profile changes saved!", "success");
}

// =============================================================================
// TAB NAVIGATION ROUTER
// =============================================================================
function switchTab(tabId) {
  state.activeTab = tabId;

  // Toggle Tab content
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === `tab-${tabId}`);
  });

  // Toggle Bottom Nav button
  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });

  if (tabId === "explore") renderExploreList();
  if (tabId === "saved") renderSavedList();
  if (tabId === "applied") renderAppliedList();
  if (tabId === "profile") renderProfileDisplays();

  // Scroll app viewport to top
  const scrollContainer = document.querySelector(".app-scroll-content");
  if (scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
}

// Notifications toggle
function toggleNotificationsModal() {
  showToast("🔔 3 new matches found for your profile today!", "info");
}

// =============================================================================
// TOAST NOTIFICATIONS
// =============================================================================
function showToast(msg, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✨</span><span>${escapeHTML(msg)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-8px)";
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

// =============================================================================
// INITIALIZE
// =============================================================================
window.addEventListener("DOMContentLoaded", () => {
  initStorage();
  renderAll();
});
