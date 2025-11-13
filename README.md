# MUSEUMORE — Augmented Reality Web App for Museums & Galleries

<p align="center">
  <img src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/mmR.png" alt="Museumore logo" />
</p>

A university final-project: a web application that combines a Django backend, a React frontend and WebAR (MindAR) to let galleries/museums register and publish items (paintings, artifacts) with AR-enabled detection and rich media (audio/video/text).

Status: Active

Table of contents
- Project Overview
- Key Features
- Tech Stack
- Data Models
- Pages / UX
- Quick start (Windows)
  - Backend (Django)
  - Frontend (React)
- WebAR reference
- Contributing & support
- License & credits

Project overview
- Purpose: Provide a dynamic system for galleries and museums to add items and expose AR-enabled info to visitors. Any gallery can register, manage items and let visitors scan physical artworks to see details, audio, and videos via WebAR.
- Scope: Multi-tenant (each gallery has its items), admin panel for galleries, visitor-facing AR scan experience.

Key features
- Gallery / museum signup & login
- Dashboard for gallery owners
- Add / edit items with image, audio and extra video
- Library to manage items
- WebAR scan page to detect target images and display item info
- Responsive UI designed for mobile-first AR experiences

Tech stack
- Backend: Python, Django (Django REST API endpoints)
- Frontend: React
- WebAR: MindAR (mind-ar-js)
- Storage: local file uploads (images/audio/video) — adapt to cloud storage if needed

Data models (high level)
- Gallery (owner / museum)
  - name, description, contact, credentials, profile image, settings
- Item
  - gallery (FK), title, description, target image (for AR), display image, audio, extra video, metadata

Pages / Screens (high level)
- Home — landing with scan CTA and links for galleries
- Scan — WebAR experience powered by MindAR
- Item Information — image, title, description, optional audio/video, link to gallery info
- Gallery Signup / Login
- Dashboard — profile, add item, edit gallery info, library
- Library — list of items (cards) with edit/delete
- Add Item / Edit Item — upload media and AR target images

Quick start (Windows)
Backend (Django)
1. Open terminal in the project root.
2. Create and activate a virtual env:
   - python -m venv venv
   - venv\Scripts\activate
3. Install dependencies:
   - pip install -r requirements.txt
4. Apply migrations and create superuser:
   - python manage.py migrate
   - python manage.py createsuperuser
5. Run development server:
   - python manage.py runserver
6. Backend API is available at: http://127.0.0.1:8000 (adjust per settings)

Frontend (React)
1. Open a new terminal and navigate to the React app folder (e.g. ./frontend or ./client):
   - cd frontend
2. Install dependencies:
   - npm install
3. Start dev server:
   - npm start
4. The React app will usually run at: http://localhost:3000 (or as configured)

Notes
- If frontend expects the API at a specific base URL, set an environment variable (e.g. REACT_APP_API_URL) or update the config in the frontend project.
- For AR to work reliably on mobile, serve the app over HTTPS or use device-local hosts that allow camera access.

WebAR reference
- MindAR documentation: https://hiukim.github.io/mind-ar-js-doc

Troubleshooting
- Camera/AR requires HTTPS and camera permissions on mobile browsers.
- If uploads fail, check MEDIA_ROOT / MEDIA_URL configuration in Django and file permissions.
- Check browser console / Django logs for API errors and CORS issues. Add django-cors-headers if needed.

Contributing
- File issues or pull requests to the repository.
- Follow the existing code style in both Django and React parts.
- Add tests for backend endpoints and frontend components where possible.

License & credits
- See repository LICENSE (if present). If no license is included, assume all rights reserved by contributors.
- Project assets / screenshots in README reference the original project images in readme assets.

Author / Contact
- Original project contributors (see repository history).
