"""
CareerHub — Backend REST API
FastAPI backend providing endpoints for job search, filtering, applications, bookmarks, and user profiles.
"""

from fastapi import FastAPI, HTTPException, Query, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import date
import uuid

app = FastAPI(
    title="CareerHub API",
    description="Backend API for CareerHub — Job & Internship Discovery Platform for Students and Job Seekers",
    version="2.0.0"
)

# Enable CORS for local frontend development and browsers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==============================================================================
# DATA MODELS
# ==============================================================================
class Job(BaseModel):
    id: str
    title: str
    company: str
    logoText: str
    logoBg: str
    location: str
    type: str  # Full-Time, Internship, Part-Time, Contract
    experience: str  # Student / Intern, Fresher, 1-3 yrs, 3-5+ yrs
    category: str
    salary: str
    salaryNumeric: Optional[int] = 0
    posted: str
    postedDate: str
    featured: bool = False
    applicantsCount: int = 0
    skills: List[str]
    description: str
    responsibilities: List[str]
    requirements: List[str]
    perks: List[str]

class JobCreate(BaseModel):
    title: str
    company: str
    location: str
    type: str
    experience: Optional[str] = "Fresher"
    category: str
    salary: str
    skills: List[str]
    description: str

class UserProfile(BaseModel):
    name: str
    email: str
    phone: str
    location: str
    headline: str
    bio: str
    college: str
    degree: str
    gradYear: str
    cgpa: str
    availability: str
    resumeName: str
    github: str
    linkedin: str
    portfolio: str
    skills: List[str]

class Application(BaseModel):
    id: str
    jobId: str
    jobTitle: str
    company: str
    appliedDate: str
    jobType: str
    status: str
    resumeName: str
    candidateName: str
    candidateEmail: str
    pitch: str
    startDate: str

class ApplicationCreate(BaseModel):
    jobId: str
    candidateName: str
    candidateEmail: str
    candidatePhone: str
    candidateDegree: str
    resumeType: str
    pitch: str
    startDate: str

# ==============================================================================
# IN-MEMORY DATA STORE
# ==============================================================================
JOBS_DB: List[dict] = [
    {
        "id": "job-1",
        "title": "Frontend Engineer Intern",
        "company": "Canva",
        "logoText": "Ca",
        "logoBg": "linear-gradient(135deg, #00c4cc, #7d2ae8)",
        "location": "Bengaluru (Hybrid)",
        "type": "Internship",
        "experience": "Student / Intern",
        "category": "Web & Full Stack",
        "salary": "₹45,000 / month",
        "salaryNumeric": 45000,
        "posted": "1 day ago",
        "postedDate": "2026-10-29",
        "featured": True,
        "applicantsCount": 52,
        "skills": ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "Git"],
        "description": "Join Canva's dynamic product engineering team to build intuitive, lightning-fast design tools.",
        "responsibilities": [
            "Build UI components in React and TypeScript",
            "Optimize web performance and accessibility",
            "Write tests with Jest and RTL"
        ],
        "requirements": [
            "Pursuing B.Tech/B.E./MCA graduating 2026 or 2027",
            "Strong command of React, JavaScript ES6+, and CSS",
            "Familiarity with Git and REST APIs"
        ],
        "perks": ["MacBook Pro provided", "Structured mentorship", "PPO conversion opportunity"]
    },
    {
        "id": "job-2",
        "title": "AI / Machine Learning Engineer",
        "company": "Databricks",
        "logoText": "Db",
        "logoBg": "linear-gradient(135deg, #ff3621, #b51700)",
        "location": "Bengaluru, India",
        "type": "Full-Time",
        "experience": "Fresher",
        "category": "Data & AI",
        "salary": "₹18,00,000 - ₹24,00,000 / yr",
        "salaryNumeric": 2000000,
        "posted": "2 days ago",
        "postedDate": "2026-10-28",
        "featured": True,
        "applicantsCount": 88,
        "skills": ["Python", "Machine Learning", "PyTorch", "SQL", "Docker", "FastAPI"],
        "description": "Build cutting-edge enterprise AI infrastructure and generative AI model pipelines.",
        "responsibilities": [
            "Design, fine-tune, and deploy transformer models",
            "Develop high-throughput REST inference endpoints with FastAPI",
            "Build ML feature stores and evaluation benchmarks"
        ],
        "requirements": [
            "Degree in Computer Science, Data Science, or AI/ML",
            "Proficiency in Python and PyTorch",
            "Understanding of model deployment and containerization"
        ],
        "perks": ["Stock options (RSUs)", "Comprehensive healthcare", "Flexible work"]
    },
    {
        "id": "job-3",
        "title": "Software Development Engineer (SDE-1)",
        "company": "Microsoft",
        "logoText": "MS",
        "logoBg": "linear-gradient(135deg, #00a4ef, #7fba00)",
        "location": "Hyderabad, India",
        "type": "Full-Time",
        "experience": "Fresher",
        "category": "Software Engineering",
        "salary": "₹16,00,000 - ₹22,00,000 / yr",
        "salaryNumeric": 1800000,
        "posted": "Just now",
        "postedDate": "2026-10-30",
        "featured": True,
        "applicantsCount": 140,
        "skills": ["DSA", "Java", "C++", "Python", "SQL", "Cloud Architecture"],
        "description": "Shape the future of developer tools and cloud services on Azure and Microsoft 365.",
        "responsibilities": [
            "Develop resilient backend microservices",
            "Implement high-performance algorithms and distributed systems",
            "Participate in CI/CD automation"
        ],
        "requirements": [
            "B.Tech/M.Tech graduating 2025 or 2026",
            "Strong grasp of DSA and Object-Oriented Design",
            "Java, C++, or Python proficiency"
        ],
        "perks": ["World-class campus", "Relocation support", "Health & wellness allowance"]
    }
]

USER_PROFILE_DB: dict = {
    "name": "Yash Kumar",
    "email": "yash.kumar@example.com",
    "phone": "+91 98765 43210",
    "location": "Bengaluru, India",
    "headline": "Aspiring Software Engineer & AI Enthusiast | Final Year B.Tech CSE",
    "bio": "Passionate student looking for Software Development Engineer (SDE) roles and AI/ML internships.",
    "college": "National Institute of Technology (NIT)",
    "degree": "B.Tech in Computer Science & AI",
    "gradYear": "2026",
    "cgpa": "8.7 / 10.0",
    "availability": "1 Month",
    "resumeName": "Yash_Kumar_Resume_2026.pdf",
    "github": "https://github.com/yash",
    "linkedin": "https://linkedin.com/in/yash",
    "portfolio": "https://yashportfolio.dev",
    "skills": [
        "Python", "JavaScript", "React", "SQL", "Machine Learning", 
        "Git", "Node.js", "DSA", "FastAPI", "Tailwind CSS"
    ]
}

SAVED_JOB_IDS: set = {"job-1", "job-2"}

APPLICATIONS_DB: List[dict] = [
    {
        "id": "app-101",
        "jobId": "job-1",
        "jobTitle": "Frontend Engineer Intern",
        "company": "Canva",
        "appliedDate": "2026-10-29",
        "jobType": "Internship",
        "status": "Under Review",
        "resumeName": "Yash_Kumar_Resume_2026.pdf",
        "candidateName": "Yash Kumar",
        "candidateEmail": "yash.kumar@example.com",
        "pitch": "Built multiple full-stack React applications and AI web tools.",
        "startDate": "In 2 Weeks"
    }
]

# ==============================================================================
# API ROUTES
# ==============================================================================
@app.get("/api")
def api_info():
    return {
        "status": "online",
        "service": "CareerHub API",
        "version": "2.0.0",
        "documentation": "/docs",
        "endpoints": {
            "jobs": "/api/jobs",
            "profile": "/api/profile",
            "saved": "/api/saved",
            "applications": "/api/applications",
            "stats": "/api/stats"
        }
    }

# --- Jobs Endpoints ---
@app.get("/api/jobs")
def get_jobs(
    keyword: Optional[str] = None,
    location: Optional[str] = None,
    job_type: Optional[str] = Query(None, alias="type"),
    category: Optional[str] = None,
    experience: Optional[str] = None,
    skill: Optional[str] = None
):
    results = JOBS_DB
    if keyword:
        kw = keyword.lower()
        results = [
            j for j in results if (
                kw in j["title"].lower() or 
                kw in j["company"].lower() or 
                kw in j["description"].lower() or
                any(kw in s.lower() for s in j["skills"])
            )
        ]
    if location:
        loc = location.lower()
        results = [j for j in results if loc in j["location"].lower()]
    if job_type:
        results = [j for j in results if j["type"].lower() == job_type.lower()]
    if category:
        results = [j for j in results if j["category"].lower() == category.lower()]
    if experience:
        results = [j for j in results if experience.lower() in j["experience"].lower()]
    if skill:
        results = [j for j in results if any(skill.lower() == s.lower() for s in j["skills"])]

    return {"total": len(results), "jobs": results}

@app.get("/api/jobs/{job_id}")
def get_job_by_id(job_id: str):
    for job in JOBS_DB:
        if job["id"] == job_id:
            return job
    raise HTTPException(status_code=404, detail="Job not found")

@app.post("/api/jobs", status_code=status.HTTP_201_CREATED)
def create_job(payload: JobCreate):
    new_id = f"job-{uuid.uuid4().hex[:6]}"
    initials = "".join([w[0] for w in payload.company.split()][:2]).upper() or "JB"
    new_job = {
        "id": new_id,
        "title": payload.title,
        "company": payload.company,
        "logoText": initials,
        "logoBg": "linear-gradient(135deg, #4f46e5, #06b6d4)",
        "location": payload.location,
        "type": payload.type,
        "experience": payload.experience,
        "category": payload.category,
        "salary": payload.salary,
        "salaryNumeric": 1000000,
        "posted": "Just now",
        "postedDate": str(date.today()),
        "featured": True,
        "applicantsCount": 1,
        "skills": payload.skills,
        "description": payload.description,
        "responsibilities": ["Work on core features", "Collaborate with agile team", "Deliver quality code"],
        "requirements": ["Relevant experience with required tech stack", "Good problem solving abilities"],
        "perks": ["Flexible hours", "Mentorship", "Competitive compensation"]
    }
    JOBS_DB.insert(0, new_job)
    return {"status": "success", "message": "Job published", "job": new_job}

# --- Profile Endpoints ---
@app.get("/api/profile")
def get_user_profile():
    return USER_PROFILE_DB

@app.put("/api/profile")
def update_user_profile(payload: UserProfile):
    global USER_PROFILE_DB
    USER_PROFILE_DB = payload.model_dump()
    return {"status": "success", "message": "Profile updated successfully", "profile": USER_PROFILE_DB}

# --- Saved Jobs / Bookmarks Endpoints ---
@app.get("/api/saved")
def get_saved_jobs():
    saved_list = [j for j in JOBS_DB if j["id"] in SAVED_JOB_IDS]
    return {"savedIds": list(SAVED_JOB_IDS), "jobs": saved_list}

@app.post("/api/saved/{job_id}")
def save_job(job_id: str):
    SAVED_JOB_IDS.add(job_id)
    return {"status": "success", "message": f"Job {job_id} saved", "savedIds": list(SAVED_JOB_IDS)}

@app.delete("/api/saved/{job_id}")
def unsave_job(job_id: str):
    SAVED_JOB_IDS.discard(job_id)
    return {"status": "success", "message": f"Job {job_id} removed from saved", "savedIds": list(SAVED_JOB_IDS)}

# --- Applications Endpoints ---
@app.get("/api/applications")
def get_applications():
    return {"total": len(APPLICATIONS_DB), "applications": APPLICATIONS_DB}

@app.post("/api/applications", status_code=status.HTTP_201_CREATED)
def apply_to_job(payload: ApplicationCreate):
    # Check if job exists
    target_job = None
    for j in JOBS_DB:
        if j["id"] == payload.jobId:
            target_job = j
            break
    if not target_job:
        raise HTTPException(status_code=404, detail="Job opening does not exist")

    # Check if already applied
    for a in APPLICATIONS_DB:
        if a["jobId"] == payload.jobId:
            raise HTTPException(status_code=400, detail="You have already submitted an application for this position.")

    app_id = f"app-{uuid.uuid4().hex[:6]}"
    new_app = {
        "id": app_id,
        "jobId": target_job["id"],
        "jobTitle": target_job["title"],
        "company": target_job["company"],
        "appliedDate": str(date.today()),
        "jobType": target_job["type"],
        "status": "Under Review",
        "resumeName": USER_PROFILE_DB.get("resumeName", "Resume.pdf") if payload.resumeType == "profile" else "Uploaded_Resume.pdf",
        "candidateName": payload.candidateName,
        "candidateEmail": payload.candidateEmail,
        "pitch": payload.pitch,
        "startDate": payload.startDate
    }

    APPLICATIONS_DB.insert(0, new_app)
    target_job["applicantsCount"] += 1

    return {"status": "success", "message": "Application submitted successfully", "application": new_app}

@app.delete("/api/applications/{app_id}")
def withdraw_application(app_id: str):
    global APPLICATIONS_DB
    before_len = len(APPLICATIONS_DB)
    APPLICATIONS_DB = [a for a in APPLICATIONS_DB if a["id"] != app_id]
    if len(APPLICATIONS_DB) == before_len:
        raise HTTPException(status_code=404, detail="Application not found")
    return {"status": "success", "message": "Application withdrawn successfully"}

# --- Platform Analytics / Stats Endpoint ---
@app.get("/api/stats")
def get_stats():
    total_jobs = len(JOBS_DB)
    internships = sum(1 for j in JOBS_DB if "intern" in j["type"].lower() or "intern" in j["experience"].lower())
    companies = len(set(j["company"] for j in JOBS_DB))
    return {
        "totalJobs": total_jobs,
        "studentInternships": internships,
        "companiesHiring": companies,
        "totalApplications": len(APPLICATIONS_DB)
    }