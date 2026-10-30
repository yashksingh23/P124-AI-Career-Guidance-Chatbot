"""
Root WSGI bridge for Gunicorn deployments.
"""

import sys
from pathlib import Path

root_dir = Path(__file__).resolve().parent
if str(root_dir) not in sys.path:
    sys.path.insert(0, str(root_dir))

from a2wsgi import ASGIMiddleware
from main import app as asgi_app

application = ASGIMiddleware(asgi_app)
app = application
