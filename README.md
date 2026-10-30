# CareerHub — Job & Internship Discovery Platform

**CareerHub** is a web application designed to help students, recent graduates, and job seekers discover relevant career opportunities, internships, and entry-level positions.

The platform provides live job listings, rich job details, multi-criteria filtering, dynamic profile compatibility matching, online job applications, saved bookmarks, and personalized student profiles.

---

## 🚀 Deploying to Render (Step-by-Step)

CareerHub is pre-configured for **Render** (both as a Full-Stack Web Service and as a Static Site).

### Prerequisites: Push Changes to Your GitHub Repository
Run these commands in PowerShell/terminal inside your project folder:

```bash
git add .
git commit -m "Deploy CareerHub: full-stack web application with Render configuration"
git push origin main
```

---

### Method 1: Deploy as a Full-Stack Web Service (Recommended)
This runs the Python FastAPI backend and serves the interactive frontend together on Render.

1. Go to **[dashboard.render.com](https://dashboard.render.com/)** and log in (or sign up with GitHub).
2. Click **New +** → select **Web Service**.
3. Select your GitHub repository: **`P124-AI-Career-Guidance-Chatbot`** (or your repo name).
4. Fill in the following settings:
   - **Name**: `careerhub` (or any name you like)
   - **Region**: Any close to you (e.g., `Oregon (US West)` or `Frankfurt`)
   - **Branch**: `main`
   - **Root Directory**: *(leave blank)*
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Instance Type**: `Free`
5. Click **Create Web Service**.
6. Render will install dependencies, launch Uvicorn, and provide your live public URL (e.g. `https://careerhub-xxxx.onrender.com`).

---

### Method 2: 1-Click Deploy with Render Blueprint (`render.yaml`)
CareerHub includes a `render.yaml` blueprint file that automatically configures everything on Render:

1. In the Render Dashboard, click **New +** → select **Blueprint**.
2. Connect your GitHub repository.
3. Render reads `render.yaml` and auto-configures the build command, start command, and health check.
4. Click **Apply** to deploy!

---

### Method 3: Deploy as a Free Render Static Site (Instant & Never Sleeps)
If you only need the frontend client with localStorage persistence:

1. In the Render Dashboard, click **New +** → select **Static Site**.
2. Connect your GitHub repository.
3. Settings:
   - **Build Command**: *(leave completely blank)*
   - **Publish Directory**: `.`
4. Click **Create Static Site**.
5. Your frontend is live in seconds with 100% uptime and free SSL!

---

## 🌟 Key Features

### 1. 🔍 Comprehensive Job & Internship Search
- **Keyword Search**: Instant search across job titles, company names, descriptions, and required technical skills.
- **Smart Filter Sidebar**:
  - **Career Field / Role Domain**: Software Engineering, Data Science & AI/ML, Web & Full Stack, Cloud & DevOps, Product & Design, Cybersecurity & QA.
  - **Experience Level**: Student / Internships (0 yrs), Fresher / Entry (0-1 yrs), Early Career (1-3 yrs), Mid-Senior (3+ yrs).
  - **Location**: Remote, Hybrid, Bengaluru, Hyderabad, Mumbai, Delhi-NCR, Pune.
  - **Job Type**: Internships, Full-Time, Part-Time, Contract.
  - **Skills Tag Cloud**: Real-time multi-select skill filters (Python, React, SQL, PyTorch, Docker, Figma, etc.).
  - **Profile Match Threshold**: Minimum compatibility percentage slider (0% to 90%).
- **Sorting Options**: Most Relevant, Highest Match Score ⚡, Newest First, Highest Pay / Stipend.

### 2. 🤖 AI-Powered Profile Compatibility Match Engine
- Evaluates the candidate's active profile skills against each opening's required competencies.
- Color-coded badges:
  - 🟢 **High Match (≥ 75%)**
  - 🔵 **Good Match (50% – 74%)**
  - ⚪ **Fair Match (< 50%)**
- Detailed skill overlap breakdown in the Job Details drawer showing matched competencies vs. missing skills to acquire.

### 3. 📄 Detailed Job Breakdown Modal
- Company logo badge, headquarters, compensation/stipend, applicant count.
- In-depth role responsibilities and requirements checklist.
- Benefits & perks (MacBook provided, flexible hours, health insurance, mentorship, PPO potential).
- 1-click **Apply Now** and **Save to Bookmarks**.

### 4. 🔖 Saved Jobs & Wishlist
- Bookmark jobs directly from listing cards or the details modal.
- Live badge counter in the navigation bar.
- Dedicated **Saved Jobs** management tab with quick apply or remove options.
- State automatically preserved in browser `localStorage`.

### 5. 🚀 Online Job Application & Application Tracker
- **Streamlined Application Modal**:
  - Auto-fills candidate information directly from the user's profile.
  - Choice of using active profile resume or uploading a custom role-specific resume.
  - Candidate pitch & screening questions (start date availability, work authorization).
- **Application Dashboard ("My Applications")**:
  - Live status tracking: `Under Review`, `Interview Scheduled`, `Offer Received`, `Applied`.
  - Application metrics summary (Total applied, in review, interviews, offers).
  - Ability to withdraw applications.

### 6. 👤 Personalized Student & Job Seeker Profile
- Profile avatar, target headline, bio, academic background, degree, CGPA, and graduation year.
- **Interactive Skills Inventory**:
  - Add new skills with instant re-calculation of all job matches across the catalog.
  - Remove skills or click one-tap suggested high-demand skills (Docker, TypeScript, PyTorch, AWS, Figma).
- Resume file manager with PDF upload simulation and size tracking.
- Verified links to GitHub, LinkedIn, and personal portfolio website.

### 7. 📊 Career Match Insights & Skill Gap Analyzer
- Evaluates your profile across major career domains and identifies highest compatibility paths.
- **High-ROI Skills to Learn Next**: Calculates which skills would unlock the largest number of current active openings.
- Student & Fresher job search guide and advice.

### 8. 🏢 Employer "Post a Job" Feature
- Employers can publish new job and internship opportunities via an intuitive modal form.
- Listings immediately show up in the live directory and update all platform metrics.

---

## 💻 Local Development

### Run with Python HTTP Server:
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000)

### Run with FastAPI Server:
```bash
pip install -r requirements.txt
python main.py
```
Open [http://localhost:8000](http://localhost:8000) and Swagger docs at [http://localhost:8000/docs](http://localhost:8000/docs).

---

## 📁 Project Architecture

```
HCL/
├── index.html            # Main semantic HTML5 single-page application interface
├── style.css             # Modern, responsive CSS3 design system & animations
├── app.js                # Core JS logic: state management, match engine, filters, storage
├── main.py               # Production server for Render (serves UI + REST API)
├── requirements.txt      # Python dependencies for Render (fastapi, uvicorn, pydantic)
├── render.yaml           # Infrastructure-as-Code Blueprint for Render deployment
├── .gitignore            # Git ignore rules (venv, __pycache__, logs)
├── README.md             # Project & Render deployment documentation
└── backend/
    ├── main.py           # FastAPI REST API endpoints
    └── requirements.txt  # Backend dependencies
```
