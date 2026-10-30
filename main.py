"""
CareerHub — Unified Server for Render & Production
Serves both the Single Page Frontend (HTML/CSS/JS) and FastAPI REST API.
"""

import os
from pathlib import Path
from fastapi import FastAPI
from fastapi.responses import FileResponse
from backend.main import app

# Root directory path
BASE_DIR = Path(__file__).resolve().parent

# Serve index.html at root for web browsers
@app.get("/", include_in_schema=False)
async def serve_index():
    index_file = BASE_DIR / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return {"message": "CareerHub Backend is running. Please add index.html to view frontend."}

@app.get("/style.css", include_in_schema=False)
async def serve_css():
    css_file = BASE_DIR / "style.css"
    if css_file.exists():
        return FileResponse(css_file, media_type="text/css")

@app.get("/app.js", include_in_schema=False)
async def serve_js():
    js_file = BASE_DIR / "app.js"
    if js_file.exists():
        return FileResponse(js_file, media_type="application/javascript")

@app.get("/script.js", include_in_schema=False)
async def serve_script_js():
    s_file = BASE_DIR / "script.js"
    if s_file.exists():
        return FileResponse(s_file, media_type="application/javascript")

# Health check endpoint for Render monitoring
@app.get("/healthz", include_in_schema=False)
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)
