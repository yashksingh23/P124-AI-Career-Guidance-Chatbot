"""
WSGI bridge for Render if running default 'gunicorn your_application.wsgi'.
Converts FastAPI ASGI app to WSGI callable using a2wsgi.
"""

import sys
from pathlib import Path

# Add project root to sys.path so main can be imported
root_dir = Path(__file__).resolve().parent.parent
if str(root_dir) not in sys.path:
    sys.path.insert(0, str(root_dir))

try:
    from a2wsgi import ASGIMiddleware
    from main import app as asgi_app
    application = ASGIMiddleware(asgi_app)
    app = application
except Exception as e:
    # Fallback minimal WSGI app if any import issue
    def application(environ, start_response):
        status = '200 OK'
        headers = [('Content-type', 'text/html; charset=utf-8')]
        start_response(status, headers)
        return [b"<h1>CareerHub is starting...</h1>"]
    app = application
