## Getting Started (Development)


### Prerequisites
You will need the following software installed:
- Docker (includes Docker Compose)

### Clone the repo
```bash
git clone (repo-url)
cd (project-folder)

###Start the app
docker compose up --build (-d)

###Open in browser
Development server runs on: http://localhost:1235

###Stop the app
in terminal:
docker compose down

###Notes
No need to install Node.js locally, everything runs inside Docker.
Thanks to volumes, local code changes trigger hot reload in the container (via Parcel).