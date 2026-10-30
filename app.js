/**
 * CAREERHUB — DISCOVER JOBS & INTERNSHIPS
 * Core Application Engine & State Management
 */

// =============================================================================
// INITIAL DATASET: JOBS & INTERNSHIPS
// =============================================================================
const DEFAULT_JOBS = [
  {
    id: "job-1",
    title: "Frontend Engineer Intern",
    company: "Canva",
    logoText: "Ca",
    logoBg: "linear-gradient(135deg, #00c4cc, #7d2ae8)",
    location: "Bengaluru (Hybrid)",
    type: "Internship",
    experience: "Student / Intern",
    category: "Web & Full Stack",
    salary: "₹45,000 / month",
    salaryNumeric: 45000,
    posted: "1 day ago",
    postedDate: "2026-10-29",
    featured: true,
    applicantsCount: 52,
    skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "Git"],
    description: "Join Canva's dynamic product engineering team to build intuitive, lightning-fast design tools utilized by over 150 million users worldwide.",
    responsibilities: [
      "Collaborate with senior software engineers and designers to build delightful user interface components in React and TypeScript.",
      "Optimize frontend performance, accessibility (a11y), and responsive web standards across desktop and tablet screens.",
      "Write unit and integration tests using Jest and React Testing Library.",
      "Participate in daily agile stand-ups, code reviews, and product demo sessions."
    ],
    requirements: [
      "Currently pursuing B.Tech/B.E./MCA in Computer Science, IT, or related fields (graduating 2026 or 2027).",
      "Solid foundation in JavaScript (ES6+), React.js, and CSS/HTML.",
      "Familiarity with version control (Git) and web APIs.",
      "Strong problem-solving abilities and passion for user experience."
    ],
    perks: ["MacBook Pro provided", "Structured mentorship program", "Monthly wellness stipend", "High PPO conversion opportunity"]
  },
  {
    id: "job-2",
    title: "AI / Machine Learning Engineer",
    company: "Databricks",
    logoText: "Db",
    logoBg: "linear-gradient(135deg, #ff3621, #b51700)",
    location: "Bengaluru, India",
    type: "Full-Time",
    experience: "Fresher",
    category: "Data & AI",
    salary: "₹18,00,000 - ₹24,00,000 / yr",
    salaryNumeric: 2000000,
    posted: "2 days ago",
    postedDate: "2026-10-28",
    featured: true,
    applicantsCount: 88,
    skills: ["Python", "Machine Learning", "PyTorch", "SQL", "Docker", "FastAPI"],
    description: "Build cutting-edge enterprise AI infrastructure and generative AI model pipelines on the unified Databricks Lakehouse platform.",
    responsibilities: [
      "Design, fine-tune, and deploy transformer and deep learning models for customer NLP and predictive analytics workloads.",
      "Develop high-throughput REST inference endpoints using FastAPI, Docker, and Kubernetes.",
      "Work closely with data engineers to streamline ML feature stores and model evaluation benchmarks."
    ],
    requirements: [
      "Degree in Computer Science, Data Science, AI/ML, or equivalent practical experience.",
      "Proficiency in Python and deep learning frameworks (PyTorch or TensorFlow).",
      "Understanding of model deployment, REST APIs, and containerization.",
      "Strong understanding of data structures, algorithms, and statistics."
    ],
    perks: ["Stock options (RSUs)", "Comprehensive healthcare for family", "Annual learning & conference budget", "Hybrid flexible work policy"]
  },
  {
    id: "job-3",
    title: "Software Development Engineer (SDE-1)",
    company: "Microsoft",
    logoText: "MS",
    logoBg: "linear-gradient(135deg, #00a4ef, #7fba00)",
    location: "Hyderabad, India",
    type: "Full-Time",
    experience: "Fresher",
    category: "Software Engineering",
    salary: "₹16,00,000 - ₹22,00,000 / yr",
    salaryNumeric: 1800000,
    posted: "Just now",
    postedDate: "2026-10-30",
    featured: true,
    applicantsCount: 140,
    skills: ["DSA", "Java", "C++", "Python", "SQL", "Cloud Architecture"],
    description: "Shape the future of developer tools and cloud services. We are looking for ambitious new graduates to solve distributed computing challenges.",
    responsibilities: [
      "Develop resilient, scalable backend microservices powering Microsoft Azure and 365 platforms.",
      "Implement robust algorithms and maintain high availability (>99.99%) distributed databases.",
      "Participate in sprint planning, automated testing, and CI/CD pipelines."
    ],
    requirements: [
      "B.Tech/M.Tech in CSE or related discipline graduating 2025 or 2026.",
      "Excellent grasp of Data Structures, Algorithms, and Object-Oriented Design.",
      "Experience coding in Java, C++, or Python.",
      "Strong communication and collaborative problem-solving skills."
    ],
    perks: ["World-class campus facilities", "Relocation assistance", "Gym & wellness membership", "Generous parental leave"]
  },
  {
    id: "job-4",
    title: "Data Science & Analytics Intern",
    company: "Swiggy",
    logoText: "Sw",
    logoBg: "linear-gradient(135deg, #fc8019, #e05c00)",
    location: "Bengaluru, India",
    type: "Internship",
    experience: "Student / Intern",
    category: "Data & AI",
    salary: "₹40,000 / month",
    salaryNumeric: 40000,
    posted: "3 days ago",
    postedDate: "2026-10-27",
    featured: false,
    applicantsCount: 64,
    skills: ["Python", "SQL", "Pandas", "Machine Learning", "Data Visualization", "Statistics"],
    description: "Analyze hyper-local consumer delivery data and develop algorithmic models to improve delivery time predictions and restaurant recommendations.",
    responsibilities: [
      "Extract and clean large-scale transactional datasets with SQL and Pandas.",
      "Formulate statistical hypotheses, run A/B testing analysis, and visualize business KPIs.",
      "Collaborate with product managers to provide data-driven insights."
    ],
    requirements: [
      "Pre-final or final year undergraduate student in Computer Science, Statistics, Mathematics, or Economics.",
      "Hands-on command of SQL queries and Python for data analysis.",
      "Familiarity with basic predictive modeling techniques (regression, classification)."
    ],
    perks: ["Monthly Swiggy food allowance", "Direct mentorship with Principal Data Scientists", "Certificate & PPO potential"]
  },
  {
    id: "job-5",
    title: "Full Stack Developer",
    company: "Razorpay",
    logoText: "Rz",
    logoBg: "linear-gradient(135deg, #0c2340, #3395ff)",
    location: "Bengaluru (Hybrid)",
    type: "Full-Time",
    experience: "1-3 yrs",
    category: "Web & Full Stack",
    salary: "₹14,00,000 - ₹19,00,000 / yr",
    salaryNumeric: 1600000,
    posted: "4 days ago",
    postedDate: "2026-10-26",
    featured: false,
    applicantsCount: 39,
    skills: ["React", "Node.js", "JavaScript", "SQL", "Docker", "REST APIs"],
    description: "Join India's leading fintech payment gateway to craft merchant dashboards and real-time transaction processing systems.",
    responsibilities: [
      "Build modular React frontend dashboards and maintain scalable Node.js microservices.",
      "Integrate banking APIs and ensure PCI-DSS security compliance.",
      "Optimize SQL database queries and cache layers using Redis."
    ],
    requirements: [
      "1-3 years of full-stack engineering experience, or exceptional portfolio projects.",
      "Strong hands-on experience in React, Node.js, and relational databases (PostgreSQL/MySQL).",
      "Familiarity with containerization (Docker) and REST architecture."
    ],
    perks: ["Unlimited leave policy", "Comprehensive health insurance", "Work-from-home setup reimbursement"]
  },
  {
    id: "job-6",
    title: "UI/UX & Product Design Intern",
    company: "CRED",
    logoText: "Cr",
    logoBg: "linear-gradient(135deg, #171717, #3b3b3b)",
    location: "Bengaluru, India",
    type: "Internship",
    experience: "Student / Intern",
    category: "Design & Product",
    salary: "₹50,000 / month",
    salaryNumeric: 50000,
    posted: "1 day ago",
    postedDate: "2026-10-29",
    featured: true,
    applicantsCount: 95,
    skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems"],
    description: "Design award-winning visual experiences, micro-interactions, and frictionless financial workflows for millions of CRED members.",
    responsibilities: [
      "Craft high-fidelity prototypes and interface specs in Figma.",
      "Conduct user research and usability testing to iterate on feature navigation.",
      "Partner with mobile and web engineers to ensure design fidelity."
    ],
    requirements: [
      "Strong design portfolio showcasing mobile app or web case studies.",
      "Deep understanding of typography, color theory, layout grids, and Figma components.",
      "Keen eye for micro-interactions and aesthetics."
    ],
    perks: ["Gourmet in-house meals", "Top tier Apple hardware", "Design mentorship from industry leaders"]
  },
  {
    id: "job-7",
    title: "Cloud & DevOps Engineer",
    company: "Google Cloud",
    logoText: "GC",
    logoBg: "linear-gradient(135deg, #4285f4, #34a853)",
    location: "Hyderabad / Remote",
    type: "Full-Time",
    experience: "1-3 yrs",
    category: "Cloud & DevOps",
    salary: "₹18,00,000 - ₹25,00,000 / yr",
    salaryNumeric: 2100000,
    posted: "5 days ago",
    postedDate: "2026-10-25",
    featured: false,
    applicantsCount: 47,
    skills: ["Docker", "Kubernetes", "AWS", "Python", "CI/CD", "Linux"],
    description: "Automate, monitor, and scale mission-critical cloud infrastructure running across global data centers.",
    responsibilities: [
      "Build automated CI/CD deployment pipelines using GitHub Actions and ArgoCD.",
      "Manage Kubernetes clusters and implement infrastructure as code (Terraform).",
      "Monitor system health, alerts, and conduct post-mortem incident analyses."
    ],
    requirements: [
      "Hands-on experience with Linux administration, Docker, and Kubernetes.",
      "Scripting proficiency in Python or Bash.",
      "Familiarity with public cloud services (GCP, AWS, or Azure)."
    ],
    perks: ["Free gourmet meals", "401k/PF matching", "Annual education reimbursement", "Relocation assistance"]
  },
  {
    id: "job-8",
    title: "Cybersecurity Analyst",
    company: "Cisco",
    logoText: "Ci",
    logoBg: "linear-gradient(135deg, #1ba0d7, #0d5f8a)",
    location: "Bengaluru, India",
    type: "Full-Time",
    experience: "Fresher",
    category: "Security & QA",
    salary: "₹11,00,000 - ₹15,00,000 / yr",
    salaryNumeric: 1300000,
    posted: "2 days ago",
    postedDate: "2026-10-28",
    featured: false,
    applicantsCount: 31,
    skills: ["Cyber Security", "Networking", "Python", "Linux", "Ethical Hacking"],
    description: "Protect global network infrastructure from evolving vulnerabilities, malware, and sophisticated cyber intrusions.",
    responsibilities: [
      "Analyze network traffic anomalies and investigate potential security alerts.",
      "Conduct vulnerability assessments and penetration testing on internal services.",
      "Automate security audit scripts using Python and Bash."
    ],
    requirements: [
      "Degree in Computer Science, Cyber Security, or Information Technology.",
      "Solid knowledge of TCP/IP networking, firewalls, and operating systems.",
      "Certifications such as CEH, CompTIA Security+, or CCNA are a plus."
    ],
    perks: ["Cisco certifications sponsored", "Flexible work schedule", "Tuition reimbursement"]
  },
  {
    id: "job-9",
    title: "Backend Engineer (Python / Go)",
    company: "Stripe",
    logoText: "St",
    logoBg: "linear-gradient(135deg, #635bff, #0a2540)",
    location: "Remote",
    type: "Full-Time",
    experience: "1-3 yrs",
    category: "Software Engineering",
    salary: "₹22,00,000 - ₹30,00,000 / yr",
    salaryNumeric: 2600000,
    posted: "3 days ago",
    postedDate: "2026-10-27",
    featured: true,
    applicantsCount: 73,
    skills: ["Python", "FastAPI", "SQL", "Docker", "REST APIs", "DSA"],
    description: "Build robust, idempotent APIs that move hundreds of billions of dollars each year for millions of global internet businesses.",
    responsibilities: [
      "Architect clean, reliable RESTful API endpoints handling high-concurrency requests.",
      "Design transactional database schemas and zero-downtime database migrations.",
      "Write comprehensive automated tests and maintain impeccable API documentation."
    ],
    requirements: [
      "Proficient in Python or Go with strong OOP and design principles.",
      "Sound understanding of relational databases (PostgreSQL) and ACID properties.",
      "Passion for building developer-friendly tooling and robust APIs."
    ],
    perks: ["100% Remote flexibility", "Home office stipend ($1,500)", "Generous stock compensation"]
  },
  {
    id: "job-10",
    title: "Mobile App Developer (React Native)",
    company: "Zomato",
    logoText: "Zo",
    logoBg: "linear-gradient(135deg, #cb202d, #8f0e18)",
    location: "Delhi-NCR / Gurugram",
    type: "Full-Time",
    experience: "1-3 yrs",
    category: "Web & Full Stack",
    salary: "₹13,00,000 - ₹18,00,000 / yr",
    salaryNumeric: 1500000,
    posted: "4 days ago",
    postedDate: "2026-10-26",
    featured: false,
    applicantsCount: 42,
    skills: ["React Native", "JavaScript", "TypeScript", "React", "Mobile Development"],
    description: "Develop seamless ordering, live GPS tracking, and payment experiences used by tens of millions of food lovers every day.",
    responsibilities: [
      "Build fluid iOS and Android mobile features using React Native and TypeScript.",
      "Optimize native bridge performance, startup latency, and memory footprint.",
      "Implement real-time location mapping and socket push notification integrations."
    ],
    requirements: [
      "Prior experience building and shipping React Native or Flutter mobile apps.",
      "Solid knowledge of JavaScript/TypeScript, Redux/Zustand state management.",
      "Understanding of app store deployment cycles (Google Play & Apple App Store)."
    ],
    perks: ["Free meals and Zomato Gold", "Performance bonuses", "Fast-track career advancement"]
  },
  {
    id: "job-11",
    title: "Generative AI Research Intern",
    company: "Anthropic / OpenTech Lab",
    logoText: "An",
    logoBg: "linear-gradient(135deg, #d97706, #78350f)",
    location: "Remote",
    type: "Internship",
    experience: "Student / Intern",
    category: "Data & AI",
    salary: "₹60,000 / month",
    salaryNumeric: 60000,
    posted: "Just now",
    postedDate: "2026-10-30",
    featured: true,
    applicantsCount: 110,
    skills: ["Python", "PyTorch", "Machine Learning", "NLP", "FastAPI"],
    description: "Conduct fundamental and applied research on LLM alignment, prompt engineering frameworks, and retrieval-augmented generation (RAG).",
    responsibilities: [
      "Benchmark model outputs on code generation and logical reasoning evaluations.",
      "Develop data synthesis and fine-tuning pipelines using PyTorch and HuggingFace.",
      "Co-author technical reports and open-source demonstration tools."
    ],
    requirements: [
      "Current student in Master's or Bachelor's with proven AI/ML coursework or projects.",
      "Strong Python coding skills and experience with modern NLP concepts (Transformers, Embeddings).",
      "Familiarity with Git and reproducible experimentation."
    ],
    perks: ["GPU compute quota access (A100s)", "Work alongside world-class AI researchers", "Publish research papers"]
  },
  {
    id: "job-12",
    title: "Associate Data Analyst",
    company: "Flipkart",
    logoText: "Fk",
    logoBg: "linear-gradient(135deg, #2874f0, #ffe11b)",
    location: "Bengaluru, India",
    type: "Full-Time",
    experience: "Fresher",
    category: "Data & AI",
    salary: "₹10,00,000 - ₹14,00,000 / yr",
    salaryNumeric: 1200000,
    posted: "3 days ago",
    postedDate: "2026-10-27",
    featured: false,
    applicantsCount: 56,
    skills: ["SQL", "Python", "Pandas", "Statistics", "Data Visualization"],
    description: "Analyze e-commerce marketplace behaviors, pricing elasticity, and inventory turns to drive tactical commercial decisions.",
    responsibilities: [
      "Author complex analytical SQL queries to aggregate warehouse and checkout metrics.",
      "Create interactive visual dashboards in Tableau and PowerBI for category leaders.",
      "Identify churn patterns and growth opportunities through exploratory data analysis."
    ],
    requirements: [
      "Graduate in Engineering, Mathematics, Statistics, or related quantitative field.",
      "High proficiency in SQL and spreadsheet modeling.",
      "Good working knowledge of Python (Pandas/NumPy) for automated reporting."
    ],
    perks: ["Discount on Flipkart purchases", "Comprehensive medical insurance", "Transport cab facility"]
  },
  {
    id: "job-13",
    title: "Junior DevOps & SRE Intern",
    company: "Zerodha",
    logoText: "Ze",
    logoBg: "linear-gradient(135deg, #387ed1, #1e4b85)",
    location: "Bengaluru, India",
    type: "Internship",
    experience: "Student / Intern",
    category: "Cloud & DevOps",
    salary: "₹35,000 / month",
    salaryNumeric: 35000,
    posted: "6 days ago",
    postedDate: "2026-10-24",
    featured: false,
    applicantsCount: 48,
    skills: ["Linux", "Python", "Docker", "Git", "Networking"],
    description: "Learn how India's largest discount retail broker maintains lightning-fast execution and 100% uptime during market opening surges.",
    responsibilities: [
      "Assist in writing bash and python scripts for automated system diagnostics.",
      "Learn and monitor Prometheus and Grafana metrics dashboards.",
      "Collaborate with backend teams to test deployment rollback scripts."
    ],
    requirements: [
      "Passionate student with strong affinity for Free and Open Source Software (FOSS).",
      "Comfortable navigating the Linux command line and writing shell scripts.",
      "Basic understanding of TCP/IP, DNS, and server hardware."
    ],
    perks: ["Zero-bureaucracy engineering culture", "Generous hardware stipend", "Direct mentoring"]
  },
  {
    id: "job-14",
    title: "Software QA Automation Engineer",
    company: "Atlassian",
    logoText: "At",
    logoBg: "linear-gradient(135deg, #0052cc, #2684ff)",
    location: "Bengaluru (Hybrid)",
    type: "Full-Time",
    experience: "Fresher",
    category: "Security & QA",
    salary: "₹12,00,000 - ₹16,00,000 / yr",
    salaryNumeric: 1400000,
    posted: "5 days ago",
    postedDate: "2026-10-25",
    featured: false,
    applicantsCount: 29,
    skills: ["JavaScript", "Python", "Selenium", "Git", "REST APIs", "DSA"],
    description: "Ensure the reliability and flawless performance of Jira and Confluence by authoring automated end-to-end test suites.",
    responsibilities: [
      "Develop automated UI and API regression test scripts using Cypress and Playwright.",
      "Integrate automated test runs into CI/CD deployment pipelines.",
      "Perform exploratory testing on new features and document bug reports with reproduction steps."
    ],
    requirements: [
      "B.Tech/MCA graduate with strong coding fundamentals in JavaScript or Python.",
      "Understanding of software test life cycle (STLC) and web application debugging.",
      "Passionate about software quality and test automation."
    ],
    perks: ["Flexible working arrangements", "Wellbeing allowance", "Generous annual leave"]
  },
  {
    id: "job-15",
    title: "Product Management Intern",
    company: "Zepto",
    logoText: "Zp",
    logoBg: "linear-gradient(135deg, #9b51e0, #ff007a)",
    location: "Mumbai, India",
    type: "Internship",
    experience: "Student / Intern",
    category: "Design & Product",
    salary: "₹40,000 / month",
    salaryNumeric: 40000,
    posted: "1 day ago",
    postedDate: "2026-10-29",
    featured: false,
    applicantsCount: 68,
    skills: ["Product Management", "Data Analytics", "SQL", "Wireframing", "Communication"],
    description: "Work with engineering, design, and operations teams to solve 10-minute delivery dispatch, inventory accuracy, and checkout conversions.",
    responsibilities: [
      "Write detailed Product Requirement Documents (PRDs) and user stories.",
      "Analyze funnel drop-offs and conduct customer feedback discovery calls.",
      "Coordinate feature sprints and launch testing with QA and dev teams."
    ],
    requirements: [
      "Final year student with an entrepreneurial mindset and strong analytical rigor.",
      "Ability to communicate complex ideas clearly and influence without authority.",
      "Basic understanding of tech stacks, APIs, and product metrics."
    ],
    perks: ["High ownership on live product launches", "Fast-paced startup atmosphere", "PPO conversion potential"]
  },
  {
    id: "job-16",
    title: "Web3 / Blockchain Developer",
    company: "Polygon Labs",
    logoText: "Pl",
    logoBg: "linear-gradient(135deg, #8247e5, #5f27cd)",
    location: "Remote",
    type: "Full-Time",
    experience: "1-3 yrs",
    category: "Software Engineering",
    salary: "₹18,00,000 - ₹28,00,000 / yr",
    salaryNumeric: 2200000,
    posted: "4 days ago",
    postedDate: "2026-10-26",
    featured: false,
    applicantsCount: 35,
    skills: ["JavaScript", "TypeScript", "Solidity", "Node.js", "Git", "REST APIs"],
    description: "Scale Ethereum with zero-knowledge technology. Build decentralized developer tools, smart contract libraries, and bridging infrastructure.",
    responsibilities: [
      "Write and test secure smart contracts and SDKs for Polygon zkEVM.",
      "Build developer documentation, tutorials, and starter kits.",
      "Contribute to open-source cryptographic and blockchain client repositories."
    ],
    requirements: [
      "Experience with JavaScript/TypeScript, Node.js, and basic knowledge of EVM/Solidity.",
      "Familiarity with cryptography basics and public blockchain protocols.",
      "Passionate about decentralized systems and open-source contribution."
    ],
    perks: ["100% remote work globally", "Token incentive grants", "Flexible vacation"]
  }
];

// =============================================================================
// INITIAL DEFAULT USER PROFILE
// =============================================================================
const DEFAULT_PROFILE = {
  name: "Yash Kumar",
  email: "yash.kumar@example.com",
  phone: "+91 98765 43210",
  location: "Bengaluru, India",
  headline: "Aspiring Software Engineer & AI Enthusiast | Final Year B.Tech CSE",
  bio: "Passionate student looking for Software Development Engineer (SDE) roles and AI/ML internships. Experienced in building full-stack web applications, REST APIs, and machine learning models.",
  college: "National Institute of Technology (NIT)",
  degree: "B.Tech in Computer Science & AI",
  gradYear: "2026",
  cgpa: "8.7 / 10.0",
  availability: "1 Month",
  resumeName: "Yash_Kumar_Resume_2026.pdf",
  resumeSize: "245 KB",
  github: "https://github.com/yash",
  linkedin: "https://linkedin.com/in/yash",
  portfolio: "https://yashportfolio.dev",
  skills: [
    "Python",
    "JavaScript",
    "React",
    "SQL",
    "Machine Learning",
    "Git",
    "Node.js",
    "DSA",
    "FastAPI",
    "Tailwind CSS"
  ]
};

// =============================================================================
// APPLICATION STATE
// =============================================================================
let state = {
  jobs: [],
  profile: {},
  savedJobIds: new Set(),
  applications: [],
  activeTab: "explore",
  filters: {
    keyword: "",
    location: "",
    type: "",
    category: "",
    experience: [],
    skills: [],
    minMatch: 0,
    sortBy: "relevant"
  },
  activeDetailJobId: null
};

// =============================================================================
// LOCAL STORAGE PERSISTENCE
// =============================================================================
function loadState() {
  // Load Jobs
  const savedJobs = localStorage.getItem("careerhub_jobs");
  if (savedJobs) {
    try {
      state.jobs = JSON.parse(savedJobs);
    } catch (e) {
      state.jobs = [...DEFAULT_JOBS];
    }
  } else {
    state.jobs = [...DEFAULT_JOBS];
    localStorage.setItem("careerhub_jobs", JSON.stringify(state.jobs));
  }

  // Load Profile
  const savedProfile = localStorage.getItem("careerhub_profile");
  if (savedProfile) {
    try {
      state.profile = JSON.parse(savedProfile);
    } catch (e) {
      state.profile = { ...DEFAULT_PROFILE };
    }
  } else {
    state.profile = { ...DEFAULT_PROFILE };
    localStorage.setItem("careerhub_profile", JSON.stringify(state.profile));
  }

  // Load Bookmarks / Saved Jobs
  const savedBookmarks = localStorage.getItem("careerhub_saved_ids");
  if (savedBookmarks) {
    try {
      state.savedJobIds = new Set(JSON.parse(savedBookmarks));
    } catch (e) {
      state.savedJobIds = new Set(["job-1", "job-2"]);
    }
  } else {
    // Default 2 saved jobs for great initial demo experience
    state.savedJobIds = new Set(["job-1", "job-2"]);
    localStorage.setItem("careerhub_saved_ids", JSON.stringify(Array.from(state.savedJobIds)));
  }

  // Load Applications
  const savedApps = localStorage.getItem("careerhub_applications");
  if (savedApps) {
    try {
      state.applications = JSON.parse(savedApps);
    } catch (e) {
      state.applications = [];
    }
  } else {
    // Seed 1 realistic initial application for demo
    state.applications = [
      {
        id: "app-demo-1",
        jobId: "job-1",
        jobTitle: "Frontend Engineer Intern",
        company: "Canva",
        appliedDate: "2026-10-29",
        jobType: "Internship",
        status: "Under Review",
        resumeName: "Yash_Kumar_Resume_2026.pdf",
        pitch: "Built several full-stack React projects including a responsive career portal and AI chatbot."
      }
    ];
    localStorage.setItem("careerhub_applications", JSON.stringify(state.applications));
  }
}

function persistState(key) {
  if (key === "profile") {
    localStorage.setItem("careerhub_profile", JSON.stringify(state.profile));
  } else if (key === "saved") {
    localStorage.setItem("careerhub_saved_ids", JSON.stringify(Array.from(state.savedJobIds)));
  } else if (key === "applications") {
    localStorage.setItem("careerhub_applications", JSON.stringify(state.applications));
  } else if (key === "jobs") {
    localStorage.setItem("careerhub_jobs", JSON.stringify(state.jobs));
  }
}

// =============================================================================
// AI COMPATIBILITY & MATCH ENGINE
// =============================================================================
function computeJobMatch(job, userSkills = state.profile.skills || []) {
  if (!job.skills || job.skills.length === 0) {
    return { score: 70, matchedSkills: [], missingSkills: [] };
  }

  const normalizedUserSkills = new Set(userSkills.map(s => s.toLowerCase().trim()));
  const matched = [];
  const missing = [];

  job.skills.forEach(skill => {
    const sLower = skill.toLowerCase().trim();
    if (normalizedUserSkills.has(sLower)) {
      matched.push(skill);
    } else {
      missing.push(skill);
    }
  });

  // Calculate percentage
  let matchPercentage = Math.round((matched.length / job.skills.length) * 100);

  // Bonus 5% if experience is Student/Intern or Fresher for student profile
  if (job.experience.toLowerCase().includes("intern") || job.experience.toLowerCase().includes("fresher")) {
    matchPercentage = Math.min(100, matchPercentage + 5);
  }

  return {
    score: matchPercentage,
    matchedSkills: matched,
    missingSkills: missing
  };
}

// =============================================================================
// DOM RENDERING & CATALOG
// =============================================================================
function renderApp() {
  updateNavUser();
  renderRibbonStats();
  renderSkillFilters();
  applyFilters();
  renderSavedJobs();
  renderApplications();
  renderProfileUI();
  renderInsights();
}

function updateNavUser() {
  const avatar = document.getElementById("nav-avatar");
  const nameEl = document.getElementById("nav-user-name");
  const roleEl = document.getElementById("nav-user-role");
  const savedBadge = document.getElementById("saved-count-badge");
  const appsBadge = document.getElementById("applications-count-badge");

  if (state.profile.name) {
    nameEl.textContent = state.profile.name;
    const initials = state.profile.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
    avatar.textContent = initials || "YK";
  }
  if (state.profile.degree) {
    roleEl.textContent = state.profile.degree.includes("B.Tech") ? "Student / SDE" : state.profile.degree;
  }

  savedBadge.textContent = state.savedJobIds.size;
  appsBadge.textContent = state.applications.length;
}

function renderRibbonStats() {
  const totalJobsEl = document.getElementById("stat-total-jobs");
  const internshipsEl = document.getElementById("stat-internships");
  const highMatchesEl = document.getElementById("stat-high-matches");
  const companiesEl = document.getElementById("stat-companies");

  const total = state.jobs.length;
  const interns = state.jobs.filter(j => j.type === "Internship" || j.experience.includes("Intern")).length;
  const companies = new Set(state.jobs.map(j => j.company)).size;

  let highMatches = 0;
  state.jobs.forEach(j => {
    const match = computeJobMatch(j, state.profile.skills);
    if (match.score >= 70) highMatches++;
  });

  if (totalJobsEl) totalJobsEl.textContent = total;
  if (internshipsEl) internshipsEl.textContent = interns;
  if (highMatchesEl) highMatchesEl.textContent = highMatches;
  if (companiesEl) companiesEl.textContent = companies;
}

// Render dynamic skill cloud in sidebar
function renderSkillFilters() {
  const container = document.getElementById("skill-filter-cloud");
  if (!container) return;

  const searchVal = (document.getElementById("filter-skill-input")?.value || "").toLowerCase().trim();

  // Aggregate all unique skills from jobs
  const skillCountMap = {};
  state.jobs.forEach(j => {
    j.skills.forEach(s => {
      skillCountMap[s] = (skillCountMap[s] || 0) + 1;
    });
  });

  const allSkills = Object.keys(skillCountMap).sort((a, b) => skillCountMap[b] - skillCountMap[a]);
  const filteredSkills = searchVal ? allSkills.filter(s => s.toLowerCase().includes(searchVal)) : allSkills;

  container.innerHTML = filteredSkills.map(skill => {
    const isSelected = state.filters.skills.includes(skill);
    return `
      <button type="button" class="skill-pill-item ${isSelected ? 'active' : ''}" onclick="toggleSkillFilter('${skill}')">
        ${skill} (${skillCountMap[skill]})
      </button>
    `;
  }).join("");
}

function toggleSkillFilter(skill) {
  const idx = state.filters.skills.indexOf(skill);
  if (idx > -1) {
    state.filters.skills.splice(idx, 1);
  } else {
    state.filters.skills.push(skill);
  }
  renderSkillFilters();
  applyFilters();
}

// =============================================================================
// FILTER & SEARCH LOGIC
// =============================================================================
function handleSearchInput() {
  const kw = document.getElementById("search-keyword").value;
  const clearBtn = document.getElementById("clear-search-btn");
  if (clearBtn) {
    clearBtn.style.display = kw.trim() ? "inline-block" : "none";
  }
  state.filters.keyword = kw.trim().toLowerCase();
  applyFilters();
}

function clearSearchInput() {
  const input = document.getElementById("search-keyword");
  input.value = "";
  document.getElementById("clear-search-btn").style.display = "none";
  state.filters.keyword = "";
  applyFilters();
}

function setQuickKeyword(kw) {
  const input = document.getElementById("search-keyword");
  input.value = kw;
  document.getElementById("clear-search-btn").style.display = "inline-block";
  state.filters.keyword = kw.toLowerCase();
  applyFilters();
}

function updateMatchSlider(val) {
  document.getElementById("match-range-val").textContent = val + "%";
  state.filters.minMatch = parseInt(val, 10);
  applyFilters();
}

function resetAllFilters() {
  state.filters.keyword = "";
  state.filters.location = "";
  state.filters.type = "";
  state.filters.category = "";
  state.filters.experience = [];
  state.filters.skills = [];
  state.filters.minMatch = 0;
  state.filters.sortBy = "relevant";

  document.getElementById("search-keyword").value = "";
  document.getElementById("clear-search-btn").style.display = "none";
  document.getElementById("search-location").value = "";
  document.getElementById("search-type").value = "";
  document.getElementById("sort-by").value = "relevant";
  document.getElementById("filter-min-match").value = 0;
  document.getElementById("match-range-val").textContent = "0%";

  // Reset category radios
  const catRadios = document.querySelectorAll('input[name="filter-category"]');
  catRadios.forEach(r => r.checked = (r.value === ""));

  // Reset exp checkboxes
  const expChecks = document.querySelectorAll('.filter-exp');
  expChecks.forEach(c => c.checked = false);

  renderSkillFilters();
  applyFilters();
  showToast("All filters have been reset", "info");
}

function renderActiveFilterChips() {
  const container = document.getElementById("active-filter-chips");
  if (!container) return;

  const chips = [];

  if (state.filters.keyword) {
    chips.push({ label: `"${state.filters.keyword}"`, clear: () => clearSearchInput() });
  }
  if (state.filters.location) {
    chips.push({ label: `📍 ${state.filters.location}`, clear: () => {
      document.getElementById("search-location").value = "";
      state.filters.location = "";
      applyFilters();
    }});
  }
  if (state.filters.type) {
    chips.push({ label: `💼 ${state.filters.type}`, clear: () => {
      document.getElementById("search-type").value = "";
      state.filters.type = "";
      applyFilters();
    }});
  }
  if (state.filters.category) {
    chips.push({ label: `📂 ${state.filters.category}`, clear: () => {
      document.querySelector('input[name="filter-category"][value=""]').checked = true;
      state.filters.category = "";
      applyFilters();
    }});
  }
  state.filters.experience.forEach(exp => {
    chips.push({ label: `Exp: ${exp}`, clear: () => {
      const cb = document.querySelector(`.filter-exp[value="${exp}"]`);
      if (cb) cb.checked = false;
      applyFilters();
    }});
  });
  state.filters.skills.forEach(skill => {
    chips.push({ label: `Skill: ${skill}`, clear: () => toggleSkillFilter(skill) });
  });
  if (state.filters.minMatch > 0) {
    chips.push({ label: `Match ≥ ${state.filters.minMatch}%`, clear: () => {
      document.getElementById("filter-min-match").value = 0;
      updateMatchSlider(0);
    }});
  }

  container.innerHTML = chips.map((c, i) => `
    <span class="active-chip">
      <span>${c.label}</span>
      <button type="button" onclick="window._clearChip(${i})" title="Remove">✕</button>
    </span>
  `).join("");

  window._chipClearers = chips.map(c => c.clear);
}

window._clearChip = function(index) {
  if (window._chipClearers && window._chipClearers[index]) {
    window._chipClearers[index]();
  }
};

function applyFilters() {
  // Sync filter controls into state
  const locEl = document.getElementById("search-location");
  if (locEl) state.filters.location = locEl.value;

  const typeEl = document.getElementById("search-type");
  if (typeEl) state.filters.type = typeEl.value;

  const catSelected = document.querySelector('input[name="filter-category"]:checked');
  state.filters.category = catSelected ? catSelected.value : "";

  const checkedExps = Array.from(document.querySelectorAll('.filter-exp:checked')).map(el => el.value);
  state.filters.experience = checkedExps;

  const sortEl = document.getElementById("sort-by");
  if (sortEl) state.filters.sortBy = sortEl.value;

  renderActiveFilterChips();

  // Filter Jobs
  let filtered = state.jobs.filter(job => {
    // Keyword matching
    if (state.filters.keyword) {
      const kw = state.filters.keyword;
      const titleMatch = job.title.toLowerCase().includes(kw);
      const companyMatch = job.company.toLowerCase().includes(kw);
      const descMatch = job.description.toLowerCase().includes(kw);
      const skillMatch = job.skills.some(s => s.toLowerCase().includes(kw));
      if (!titleMatch && !companyMatch && !descMatch && !skillMatch) {
        return false;
      }
    }

    // Location matching
    if (state.filters.location) {
      if (state.filters.location === "Remote") {
        if (!job.location.toLowerCase().includes("remote")) return false;
      } else if (state.filters.location === "Hybrid") {
        if (!job.location.toLowerCase().includes("hybrid")) return false;
      } else {
        if (!job.location.toLowerCase().includes(state.filters.location.toLowerCase())) {
          return false;
        }
      }
    }

    // Job Type matching
    if (state.filters.type) {
      if (job.type.toLowerCase() !== state.filters.type.toLowerCase()) {
        return false;
      }
    }

    // Category matching
    if (state.filters.category) {
      if (job.category !== state.filters.category) {
        return false;
      }
    }

    // Experience matching
    if (state.filters.experience.length > 0) {
      const matchesExp = state.filters.experience.some(exp => job.experience.includes(exp));
      if (!matchesExp) return false;
    }

    // Skills matching (must match at least one selected skill if selected)
    if (state.filters.skills.length > 0) {
      const hasSkill = state.filters.skills.some(sk => 
        job.skills.map(s => s.toLowerCase()).includes(sk.toLowerCase())
      );
      if (!hasSkill) return false;
    }

    // Minimum Profile Match score matching
    const match = computeJobMatch(job, state.profile.skills);
    if (state.filters.minMatch > 0 && match.score < state.filters.minMatch) {
      return false;
    }

    return true;
  });

  // Sorting
  const sortBy = state.filters.sortBy;
  filtered.sort((a, b) => {
    if (sortBy === "match-high") {
      const matchA = computeJobMatch(a, state.profile.skills).score;
      const matchB = computeJobMatch(b, state.profile.skills).score;
      return matchB - matchA;
    } else if (sortBy === "newest") {
      return new Date(b.postedDate) - new Date(a.postedDate);
    } else if (sortBy === "salary-high") {
      return (b.salaryNumeric || 0) - (a.salaryNumeric || 0);
    } else {
      // "relevant" - featured first, then match score
      if (a.featured !== b.featured) return b.featured ? 1 : -1;
      const matchA = computeJobMatch(a, state.profile.skills).score;
      const matchB = computeJobMatch(b, state.profile.skills).score;
      return matchB - matchA;
    }
  });

  renderJobsList(filtered);
}

function renderJobsList(jobsToRender) {
  const container = document.getElementById("jobs-grid");
  const emptyState = document.getElementById("empty-state");
  const countText = document.getElementById("results-count-text");

  if (countText) {
    countText.textContent = `Showing ${jobsToRender.length} of ${state.jobs.length} opportunities`;
  }

  if (jobsToRender.length === 0) {
    container.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  container.innerHTML = jobsToRender.map(job => {
    const isSaved = state.savedJobIds.has(job.id);
    const hasApplied = state.applications.some(a => a.jobId === job.id);
    const match = computeJobMatch(job, state.profile.skills);
    
    // Match badge class
    let matchClass = "match-low";
    let matchIcon = "⚡";
    if (match.score >= 75) {
      matchClass = "match-high";
      matchIcon = "✨";
    } else if (match.score >= 50) {
      matchClass = "match-medium";
    }

    // Type Pill
    const isIntern = job.type === "Internship";
    const typePillClass = isIntern ? "pill-internship" : "pill-fulltime";
    const typeEmoji = isIntern ? "🎓" : "💼";

    // User skills set for highlighting matched tags
    const userSkillsSet = new Set((state.profile.skills || []).map(s => s.toLowerCase()));

    return `
      <div class="job-card ${job.featured ? 'featured' : ''}" id="card-${job.id}">
        <div class="job-main-info">
          <div class="company-logo" style="background: ${job.logoBg};">
            ${job.logoText}
          </div>
          
          <div style="flex: 1;">
            <div class="job-header-row">
              <span class="company-name">${escapeHTML(job.company)}</span>
              <span class="verified-badge" title="Verified Employer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Verified
              </span>
              <span class="match-score-badge ${matchClass}" title="${match.matchedSkills.length} of ${job.skills.length} skills matched">
                ${matchIcon} ${match.score}% Match
              </span>
            </div>

            <h3 class="job-title" onclick="openJobDetailsModal('${job.id}')">${escapeHTML(job.title)}</h3>

            <div class="job-meta-badges">
              <span class="meta-pill ${typePillClass}">${typeEmoji} ${job.type}</span>
              <span class="meta-pill">📍 ${escapeHTML(job.location)}</span>
              <span class="meta-pill">🎯 ${escapeHTML(job.experience)}</span>
              <span class="meta-pill pill-salary">💰 ${escapeHTML(job.salary)}</span>
            </div>

            <div class="job-skills-list">
              ${job.skills.slice(0, 5).map(skill => {
                const isMatched = userSkillsSet.has(skill.toLowerCase());
                return `<span class="skill-tag ${isMatched ? 'matched' : ''}" title="${isMatched ? 'Matches your profile skill!' : 'Skill required'}">${isMatched ? '✓ ' : ''}${escapeHTML(skill)}</span>`;
              }).join("")}
              ${job.skills.length > 5 ? `<span class="skill-tag">+${job.skills.length - 5} more</span>` : ''}
            </div>
          </div>
        </div>

        <div class="job-card-actions">
          <button class="btn-bookmark ${isSaved ? 'bookmarked' : ''}" onclick="toggleSaveJob('${job.id}')" title="${isSaved ? 'Remove from saved' : 'Save job'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
          </button>

          <div class="card-action-btns">
            <button class="btn secondary" onclick="openJobDetailsModal('${job.id}')">Details</button>
            ${hasApplied 
              ? `<button class="btn applied" disabled>✓ Applied</button>`
              : `<button class="btn primary" onclick="openApplyModal('${job.id}')">Apply Now</button>`
            }
          </div>

          <div class="post-time-meta">Posted ${job.posted} • ${job.applicantsCount} applicants</div>
        </div>
      </div>
    `;
  }).join("");
}

// =============================================================================
// SAVED JOBS (BOOKMARKS)
// =============================================================================
function toggleSaveJob(jobId) {
  if (state.savedJobIds.has(jobId)) {
    state.savedJobIds.delete(jobId);
    showToast("Job removed from saved bookmarks", "info");
  } else {
    state.savedJobIds.add(jobId);
    showToast("Job saved to your bookmarks!", "success");
  }

  persistState("saved");
  updateNavUser();
  applyFilters(); // Re-render bookmarks state in card
  renderSavedJobs();
}

function renderSavedJobs() {
  const container = document.getElementById("saved-jobs-container");
  if (!container) return;

  const savedJobs = state.jobs.filter(j => state.savedJobIds.has(j.id));

  if (savedJobs.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔖</div>
        <h3>No saved jobs yet</h3>
        <p>Click the bookmark icon on any job card to save opportunities here for quick access.</p>
        <button class="btn primary" onclick="switchTab('explore')">Browse Jobs</button>
      </div>
    `;
    return;
  }

  container.innerHTML = savedJobs.map(job => {
    const hasApplied = state.applications.some(a => a.jobId === job.id);
    const match = computeJobMatch(job, state.profile.skills);

    return `
      <div class="job-card" id="saved-${job.id}">
        <div class="job-main-info">
          <div class="company-logo" style="background: ${job.logoBg};">
            ${job.logoText}
          </div>
          <div style="flex:1;">
            <div class="job-header-row">
              <span class="company-name">${escapeHTML(job.company)}</span>
              <span class="match-score-badge ${match.score >= 70 ? 'match-high' : 'match-medium'}">
                ✨ ${match.score}% Match
              </span>
            </div>
            <h3 class="job-title" onclick="openJobDetailsModal('${job.id}')">${escapeHTML(job.title)}</h3>
            <div class="job-meta-badges">
              <span class="meta-pill pill-internship">${job.type}</span>
              <span class="meta-pill">📍 ${escapeHTML(job.location)}</span>
              <span class="meta-pill pill-salary">💰 ${escapeHTML(job.salary)}</span>
            </div>
          </div>
        </div>

        <div class="job-card-actions">
          <button class="btn-bookmark bookmarked" onclick="toggleSaveJob('${job.id}')" title="Remove from saved">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
          </button>
          <div class="card-action-btns">
            <button class="btn secondary" onclick="openJobDetailsModal('${job.id}')">View</button>
            ${hasApplied 
              ? `<button class="btn applied" disabled>✓ Applied</button>`
              : `<button class="btn primary" onclick="openApplyModal('${job.id}')">Apply Now</button>`
            }
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// =============================================================================
// APPLICATIONS TRACKER
// =============================================================================
function renderApplications() {
  const tbody = document.getElementById("applications-table-body");
  const emptyState = document.getElementById("empty-applications");
  const table = document.getElementById("applications-table");

  const metricTotal = document.getElementById("app-metric-total");
  const metricReview = document.getElementById("app-metric-review");
  const metricInterview = document.getElementById("app-metric-interview");
  const metricOffers = document.getElementById("app-metric-offers");

  const apps = state.applications;

  // Update counts
  if (metricTotal) metricTotal.textContent = apps.length;
  if (metricReview) metricReview.textContent = apps.filter(a => a.status === "Under Review").length;
  if (metricInterview) metricInterview.textContent = apps.filter(a => a.status === "Interview Scheduled").length;
  if (metricOffers) metricOffers.textContent = apps.filter(a => a.status === "Offer Received").length;

  if (apps.length === 0) {
    if (table) table.style.display = "none";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (table) table.style.display = "table";
  if (emptyState) emptyState.classList.add("hidden");

  tbody.innerHTML = apps.map(app => {
    let statusClass = "status-applied";
    if (app.status === "Under Review") statusClass = "status-under-review";
    if (app.status === "Interview Scheduled") statusClass = "status-interview";
    if (app.status === "Offer Received") statusClass = "status-offer";

    return `
      <tr>
        <td>
          <div class="table-role-title">${escapeHTML(app.jobTitle)}</div>
          <div class="table-company-sub">${escapeHTML(app.company)}</div>
        </td>
        <td>${app.appliedDate}</td>
        <td><span class="meta-pill">${escapeHTML(app.jobType || "Full-Time")}</span></td>
        <td>
          <span class="status-badge ${statusClass}">
            <span class="status-indicator"></span>
            ${escapeHTML(app.status)}
          </span>
        </td>
        <td>
          <span style="font-size:0.8rem; font-weight:600; color:var(--text-secondary);">
            📄 ${escapeHTML(app.resumeName || "Profile_Resume.pdf")}
          </span>
        </td>
        <td>
          <button class="btn-withdraw" onclick="withdrawApplication('${app.id}')" title="Withdraw application">Withdraw</button>
        </td>
      </tr>
    `;
  }).join("");
}

function withdrawApplication(appId) {
  if (confirm("Are you sure you want to withdraw this application?")) {
    state.applications = state.applications.filter(a => a.id !== appId);
    persistState("applications");
    updateNavUser();
    renderApplications();
    applyFilters();
    showToast("Application withdrawn successfully", "info");
  }
}

// =============================================================================
// MODAL: JOB DETAILS VIEW
// =============================================================================
function openJobDetailsModal(jobId) {
  const job = state.jobs.find(j => j.id === jobId);
  if (!job) return;

  state.activeDetailJobId = jobId;
  const modal = document.getElementById("job-details-modal");
  const content = document.getElementById("job-modal-content");

  const match = computeJobMatch(job, state.profile.skills);
  const isSaved = state.savedJobIds.has(job.id);
  const hasApplied = state.applications.some(a => a.jobId === job.id);

  let matchClass = "low";
  if (match.score >= 75) matchClass = "high";
  else if (match.score >= 50) matchClass = "medium";

  content.innerHTML = `
    <div class="detail-header-block">
      <div class="detail-logo" style="background: ${job.logoBg};">
        ${job.logoText}
      </div>
      <div class="detail-title-group">
        <h2>${escapeHTML(job.title)}</h2>
        <div class="detail-company-line">
          <strong>${escapeHTML(job.company)}</strong> • ${escapeHTML(job.location)} • Posted ${job.posted}
        </div>
      </div>
    </div>

    <!-- Match banner -->
    <div class="detail-match-banner ${matchClass}">
      <div>
        <div class="match-banner-title">
          Profile Compatibility Score: <strong>${match.score}%</strong>
        </div>
        <div class="match-banner-sub">
          You match ${match.matchedSkills.length} of ${job.skills.length} required competencies for this position.
        </div>
      </div>
      <span class="match-score-badge ${matchClass === 'high' ? 'match-high' : 'match-medium'}">
        ✨ ${match.score}% Match
      </span>
    </div>

    <!-- Quick Badges -->
    <div class="detail-badges-bar">
      <span class="meta-pill pill-fulltime">💼 ${job.type}</span>
      <span class="meta-pill">🎯 ${job.experience}</span>
      <span class="meta-pill pill-salary">💰 ${job.salary}</span>
      <span class="meta-pill">👥 ${job.applicantsCount} Applicants</span>
      <span class="meta-pill">📅 Deadline: ${job.postedDate ? "Rolling Admission" : "Active"}</span>
    </div>

    <!-- Job Description -->
    <div class="detail-section-block">
      <h4>About the Role</h4>
      <p>${escapeHTML(job.description)}</p>
    </div>

    <!-- Key Responsibilities -->
    <div class="detail-section-block">
      <h4>Key Responsibilities</h4>
      <ul class="detail-check-list">
        ${job.responsibilities.map(r => `<li>${escapeHTML(r)}</li>`).join("")}
      </ul>
    </div>

    <!-- Qualifications & Skill Breakdown -->
    <div class="detail-section-block">
      <h4>Required Qualifications & Skills</h4>
      <ul class="detail-check-list" style="margin-bottom:14px;">
        ${job.requirements.map(req => `<li>${escapeHTML(req)}</li>`).join("")}
      </ul>

      <div style="font-size:0.85rem; font-weight:700; margin-bottom:8px;">Target Competencies:</div>
      <div class="job-skills-list">
        ${job.skills.map(s => {
          const isUserHave = match.matchedSkills.includes(s);
          return `<span class="skill-tag ${isUserHave ? 'matched' : ''}">${isUserHave ? '✓ ' : '+ '}${escapeHTML(s)}</span>`;
        }).join("")}
      </div>
    </div>

    <!-- Perks & Benefits -->
    <div class="detail-section-block">
      <h4>Benefits & Perks</h4>
      <div class="perks-cloud">
        ${job.perks.map(p => `<span class="perk-pill">🎁 ${escapeHTML(p)}</span>`).join("")}
      </div>
    </div>

    <!-- Action Bar -->
    <div class="detail-footer-actions">
      <button class="btn secondary" onclick="toggleSaveJob('${job.id}')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? '#ec4899' : 'none'}" stroke="${isSaved ? '#ec4899' : 'currentColor'}" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
        <span>${isSaved ? 'Bookmarked' : 'Save for Later'}</span>
      </button>

      <div style="display:flex; gap:10px;">
        <button class="btn secondary" onclick="closeJobDetailsModal()">Close</button>
        ${hasApplied 
          ? `<button class="btn applied" disabled>✓ Application Submitted</button>`
          : `<button class="btn primary" onclick="closeJobDetailsModal(); openApplyModal('${job.id}')">Apply for this Position</button>`
        }
      </div>
    </div>
  `;

  modal.classList.add("open");
}

function closeJobDetailsModal() {
  document.getElementById("job-details-modal").classList.remove("open");
  state.activeDetailJobId = null;
}

// =============================================================================
// MODAL: ONLINE APPLICATION FLOW
// =============================================================================
let currentApplyJobId = null;

function openApplyModal(jobId) {
  const job = state.jobs.find(j => j.id === jobId);
  if (!job) return;

  currentApplyJobId = jobId;

  document.getElementById("apply-modal-title").textContent = `Apply for ${job.title}`;
  document.getElementById("apply-modal-company").textContent = `${job.company} • ${job.location} • ${job.salary}`;
  
  // Pre-populate candidate info from user profile
  document.getElementById("app-form-name").value = state.profile.name || "";
  document.getElementById("app-form-email").value = state.profile.email || "";
  document.getElementById("app-form-phone").value = state.profile.phone || "";
  document.getElementById("app-form-degree").value = `${state.profile.degree || ''} (${state.profile.college || ''})`;
  document.getElementById("app-resume-label").textContent = `Use Profile Resume (${state.profile.resumeName || 'Resume.pdf'})`;

  document.getElementById("apply-modal").classList.add("open");
}

function closeApplyModal() {
  document.getElementById("apply-modal").classList.remove("open");
  currentApplyJobId = null;
}

function submitJobApplication(event) {
  event.preventDefault();
  if (!currentApplyJobId) return;

  const job = state.jobs.find(j => j.id === currentApplyJobId);
  if (!job) return;

  // Check if already applied
  if (state.applications.some(a => a.jobId === job.id)) {
    showToast("You have already applied for this role!", "warning");
    closeApplyModal();
    return;
  }

  const name = document.getElementById("app-form-name").value;
  const email = document.getElementById("app-form-email").value;
  const pitch = document.getElementById("app-form-pitch").value;
  const startDate = document.getElementById("app-form-start").value;
  
  const resumeType = document.querySelector('input[name="app-resume-type"]:checked').value;
  const resumeName = resumeType === "profile" 
    ? (state.profile.resumeName || "Yash_Kumar_Resume_2026.pdf") 
    : "Custom_Uploaded_Resume.pdf";

  const newApp = {
    id: "app-" + Date.now(),
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    appliedDate: new Date().toISOString().split("T")[0],
    jobType: job.type,
    status: "Under Review",
    resumeName: resumeName,
    candidateName: name,
    candidateEmail: email,
    pitch: pitch,
    startDate: startDate
  };

  state.applications.unshift(newApp);
  persistState("applications");

  // Increment applicant count on job
  job.applicantsCount = (job.applicantsCount || 0) + 1;
  persistState("jobs");

  updateNavUser();
  renderApplications();
  applyFilters();
  closeApplyModal();

  showToast(`🎉 Application successfully submitted to ${job.company}!`, "success");
}

// Toggle custom resume upload input visibility
document.addEventListener("change", (e) => {
  if (e.target.name === "app-resume-type") {
    const wrap = document.getElementById("custom-resume-upload-wrap");
    if (wrap) {
      wrap.style.display = e.target.value === "upload" ? "block" : "none";
    }
  }
});

// =============================================================================
// PROFILE MANAGEMENT
// =============================================================================
function renderProfileUI() {
  const p = state.profile;

  // Display side
  const nameDisp = document.getElementById("profile-name-display");
  const headlineDisp = document.getElementById("profile-headline-display");
  const avatarDisp = document.getElementById("profile-avatar-display");
  const resumeNameDisp = document.getElementById("profile-resume-name");
  const ghDisp = document.getElementById("profile-github-display");
  const inDisp = document.getElementById("profile-linkedin-display");
  const portDisp = document.getElementById("profile-portfolio-display");
  const skillsCount = document.getElementById("profile-skills-count");
  const appsCount = document.getElementById("profile-apps-count");
  const savedCount = document.getElementById("profile-saved-count");

  if (nameDisp) nameDisp.textContent = p.name;
  if (headlineDisp) headlineDisp.textContent = p.headline;
  if (avatarDisp) {
    const initials = p.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
    avatarDisp.textContent = initials || "YK";
  }
  if (resumeNameDisp) resumeNameDisp.textContent = p.resumeName || "Resume.pdf";
  if (ghDisp) {
    ghDisp.href = p.github;
    ghDisp.textContent = p.github.replace("https://", "");
  }
  if (inDisp) {
    inDisp.href = p.linkedin;
    inDisp.textContent = p.linkedin.replace("https://", "");
  }
  if (portDisp) {
    portDisp.href = p.portfolio;
    portDisp.textContent = p.portfolio.replace("https://", "");
  }

  if (skillsCount) skillsCount.textContent = (p.skills || []).length;
  if (appsCount) appsCount.textContent = state.applications.length;
  if (savedCount) savedCount.textContent = state.savedJobIds.size;

  // Form Inputs
  setInputValue("prof-input-name", p.name);
  setInputValue("prof-input-email", p.email);
  setInputValue("prof-input-phone", p.phone);
  setInputValue("prof-input-location", p.location);
  setInputValue("prof-input-headline", p.headline);
  setInputValue("prof-input-bio", p.bio);
  setInputValue("prof-input-college", p.college);
  setInputValue("prof-input-degree", p.degree);
  setInputValue("prof-input-gradyear", p.gradYear);
  setInputValue("prof-input-cgpa", p.cgpa);
  setInputValue("prof-input-availability", p.availability);
  setInputValue("prof-input-github", p.github);
  setInputValue("prof-input-linkedin", p.linkedin);
  setInputValue("prof-input-portfolio", p.portfolio);

  renderProfileSkillsList();
}

function setInputValue(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.value = val;
}

function renderProfileSkillsList() {
  const container = document.getElementById("profile-skills-container");
  if (!container) return;

  const skills = state.profile.skills || [];

  if (skills.length === 0) {
    container.innerHTML = `<span style="font-size:0.8rem; color:var(--text-muted); padding:4px;">No skills added yet. Add your skills above to get accurate job matches!</span>`;
    return;
  }

  container.innerHTML = skills.map(skill => `
    <span class="user-skill-pill">
      <span>${escapeHTML(skill)}</span>
      <button type="button" class="remove-skill-btn" onclick="removeProfileSkill('${skill}')" title="Remove skill">✕</button>
    </span>
  `).join("");
}

function addNewSkillFromInput() {
  const input = document.getElementById("new-skill-input");
  const val = input.value.trim();
  if (!val) return;

  quickAddProfileSkill(val);
  input.value = "";
}

function quickAddProfileSkill(skillName) {
  if (!state.profile.skills) state.profile.skills = [];

  const exists = state.profile.skills.some(s => s.toLowerCase() === skillName.toLowerCase());
  if (exists) {
    showToast(`"${skillName}" is already in your skills!`, "info");
    return;
  }

  state.profile.skills.push(skillName);
  renderProfileSkillsList();
  renderRibbonStats();
  applyFilters(); // Recalculate matches across active jobs!
  renderInsights();
  showToast(`Added "${skillName}" to profile skills`, "success");
}

function removeProfileSkill(skillName) {
  state.profile.skills = state.profile.skills.filter(s => s.toLowerCase() !== skillName.toLowerCase());
  renderProfileSkillsList();
  renderRibbonStats();
  applyFilters(); // Recalculate matches across active jobs!
  renderInsights();
  showToast(`Removed "${skillName}" from profile`, "info");
}

function handleResumeUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const sizeKb = Math.round(file.size / 1024);
  state.profile.resumeName = file.name;
  state.profile.resumeSize = `${sizeKb} KB`;

  persistState("profile");
  renderProfileUI();
  showToast(`Resume uploaded: ${file.name}`, "success");
}

function previewResumeMock() {
  showToast(`Previewing: ${state.profile.resumeName || 'Resume.pdf'} (Verified)`, "info");
}

function saveProfileChanges() {
  state.profile.name = document.getElementById("prof-input-name").value.trim() || state.profile.name;
  state.profile.email = document.getElementById("prof-input-email").value.trim() || state.profile.email;
  state.profile.phone = document.getElementById("prof-input-phone").value.trim() || state.profile.phone;
  state.profile.location = document.getElementById("prof-input-location").value.trim() || state.profile.location;
  state.profile.headline = document.getElementById("prof-input-headline").value.trim() || state.profile.headline;
  state.profile.bio = document.getElementById("prof-input-bio").value.trim() || state.profile.bio;
  state.profile.college = document.getElementById("prof-input-college").value.trim() || state.profile.college;
  state.profile.degree = document.getElementById("prof-input-degree").value.trim() || state.profile.degree;
  state.profile.gradYear = document.getElementById("prof-input-gradyear").value || state.profile.gradYear;
  state.profile.cgpa = document.getElementById("prof-input-cgpa").value.trim() || state.profile.cgpa;
  state.profile.availability = document.getElementById("prof-input-availability").value || state.profile.availability;
  state.profile.github = document.getElementById("prof-input-github").value.trim() || state.profile.github;
  state.profile.linkedin = document.getElementById("prof-input-linkedin").value.trim() || state.profile.linkedin;
  state.profile.portfolio = document.getElementById("prof-input-portfolio").value.trim() || state.profile.portfolio;

  persistState("profile");
  updateNavUser();
  renderProfileUI();
  applyFilters();
  renderInsights();

  showToast("Profile updated! All job compatibility scores re-calculated.", "success");
}

// =============================================================================
// CAREER INSIGHTS & SKILL GAPS
// =============================================================================
function renderInsights() {
  const pathsContainer = document.getElementById("recommended-paths-list");
  const gapBarsContainer = document.getElementById("skill-gap-bars");
  if (!pathsContainer || !gapBarsContainer) return;

  // 1. Calculate average match per category
  const categories = ["Web & Full Stack", "Data & AI", "Software Engineering", "Cloud & DevOps", "Design & Product"];
  const catMatches = categories.map(cat => {
    const jobsInCat = state.jobs.filter(j => j.category === cat);
    if (jobsInCat.length === 0) return { category: cat, avgScore: 50 };
    const totalScore = jobsInCat.reduce((acc, job) => acc + computeJobMatch(job, state.profile.skills).score, 0);
    return {
      category: cat,
      avgScore: Math.round(totalScore / jobsInCat.length),
      jobCount: jobsInCat.length
    };
  }).sort((a, b) => b.avgScore - a.avgScore);

  pathsContainer.innerHTML = catMatches.slice(0, 4).map(item => `
    <div class="path-card">
      <div class="path-info">
        <strong>${escapeHTML(item.category)}</strong>
        <span>${item.jobCount} active openings available</span>
      </div>
      <div class="path-match-score">${item.avgScore}%</div>
    </div>
  `).join("");

  // 2. Identify top missing high-ROI skills across all active jobs
  const userSkillsSet = new Set((state.profile.skills || []).map(s => s.toLowerCase()));
  const missingCountMap = {};

  state.jobs.forEach(job => {
    job.skills.forEach(skill => {
      if (!userSkillsSet.has(skill.toLowerCase())) {
        missingCountMap[skill] = (missingCountMap[skill] || 0) + 1;
      }
    });
  });

  const topMissing = Object.keys(missingCountMap)
    .sort((a, b) => missingCountMap[b] - missingCountMap[a])
    .slice(0, 4);

  gapBarsContainer.innerHTML = topMissing.map(skill => {
    const count = missingCountMap[skill];
    const pct = Math.min(100, Math.round((count / state.jobs.length) * 100));
    return `
      <div class="gap-bar-item">
        <div class="gap-bar-label">
          <span>${escapeHTML(skill)}</span>
          <span style="color:var(--primary);">Unlocks in ${count} job listings</span>
        </div>
        <div class="gap-bar-track">
          <div class="gap-bar-fill" style="width: ${pct}%;"></div>
        </div>
      </div>
    `;
  }).join("");
}

// =============================================================================
// MODAL: POST A JOB (EMPLOYER FORM)
// =============================================================================
function openPostJobModal() {
  document.getElementById("post-job-modal").classList.add("open");
}

function closePostJobModal() {
  document.getElementById("post-job-modal").classList.remove("open");
}

function handlePostJobSubmit(event) {
  event.preventDefault();

  const title = document.getElementById("post-title").value.trim();
  const company = document.getElementById("post-company").value.trim();
  const category = document.getElementById("post-category").value;
  const type = document.getElementById("post-type").value;
  const location = document.getElementById("post-location").value.trim();
  const salary = document.getElementById("post-salary").value.trim();
  const skillsInput = document.getElementById("post-skills").value.trim();
  const desc = document.getElementById("post-desc").value.trim();

  const skills = skillsInput.split(",").map(s => s.trim()).filter(Boolean);
  const initials = company.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase() || "JB";

  const newJob = {
    id: "job-" + Date.now(),
    title: title,
    company: company,
    logoText: initials,
    logoBg: "linear-gradient(135deg, #4f46e5, #06b6d4)",
    location: location,
    type: type,
    experience: type === "Internship" ? "Student / Intern" : "Fresher",
    category: category,
    salary: salary,
    salaryNumeric: 1000000,
    posted: "Just now",
    postedDate: new Date().toISOString().split("T")[0],
    featured: true,
    applicantsCount: 1,
    skills: skills,
    description: desc,
    responsibilities: [
      "Work with the team to deliver reliable features and services.",
      "Write clean, testable, and maintainable code.",
      "Collaborate across departments in an agile environment."
    ],
    requirements: [
      "Hands-on competency in " + skills.join(", "),
      "Good team communication and dedication to quality."
    ],
    perks: ["Competitive pay", "Flexible hours", "Growth opportunities"]
  };

  state.jobs.unshift(newJob);
  persistState("jobs");

  renderRibbonStats();
  renderSkillFilters();
  applyFilters();
  closePostJobModal();

  showToast(`🎉 New opportunity "${title}" posted successfully!`, "success");
  event.target.reset();
}

// =============================================================================
// TAB NAVIGATION ROUTER
// =============================================================================
function switchTab(tabName) {
  state.activeTab = tabName;

  // Update nav buttons
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });

  // Update tab panes
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === `tab-${tabName}`);
  });

  // Re-trigger specific tab renders
  if (tabName === "saved") renderSavedJobs();
  if (tabName === "applications") renderApplications();
  if (tabName === "profile") renderProfileUI();
  if (tabName === "insights") renderInsights();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =============================================================================
// TOAST NOTIFICATIONS
// =============================================================================
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "warning") icon = "⚠️";

  toast.innerHTML = `
    <span>${icon}</span>
    <span>${escapeHTML(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

// Helper: Escape HTML
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
// INITIALIZE ON LOAD
// =============================================================================
window.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderApp();
});
