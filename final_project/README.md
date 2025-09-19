##  Getting Started (Development)

### Prerequisites
Required software
You will need following software:
- Docker 

### Clone the repo
git clone <repo-url>
cd <project-folder>

##Start the app
in terminal:
docker compose up --build (-d)

#Open in browser
Development server runs on: http://localhost:1235

#Stop the app
in terminal:
docker compose down

#Notes
No need to install Node.js locally, everything runs inside Docker.
Thanks to volumes, local code changes trigger hot reload in the container (via Parcel).