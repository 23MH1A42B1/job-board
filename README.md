# Job Board Application

A modern **Job Board web application** built using **React** with advanced filtering, searching, sorting, pagination, bookmarking, and full **Docker support**.

---

## 🚀 Features

- View **25+ job listings**
- Search jobs by **title or company**
- Filter jobs by:
  - Job Type (Remote / Hybrid / Onsite)
  - Skills (multi-select)
  - Salary Range (single-line range slider)
- Sort jobs by **salary (high to low)**
- Grid / List view toggle
- Client-side pagination
- Bookmark jobs (saved in localStorage)
- Application Tracker page to view bookmarked jobs
- Responsive UI (mobile, tablet, desktop)
- Fully containerized using Docker

---

## 🧰 Tech Stack

- React (Vite)
- Zustand (State Management)
- React Router
- CSS (Responsive Design)
- Docker & Docker Compose
- Nginx (Production server)

---

## 📦 Project Setup

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd job-board

2️⃣ Install Dependencies
npm install
3️⃣ Run Application (Development Mode)
npm run dev
Open in browser:

http://localhost:5173
🐳 Run Application Using Docker (Recommended)
1️⃣ Build and Start Docker Container
docker-compose up --build
2️⃣ Access Application
http://localhost:3000
Docker healthcheck ensures the application is running correctly.

3️⃣ Stop Docker Container
docker-compose down
📁 Project Structure
job-board/
│
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .env.example
├── package.json
├── README.md
│
├── public/
│
└── src/
    ├── components/
    │   ├── JobCard.jsx
    │   ├── JobList.jsx
    │   ├── FiltersPanel.jsx
    │   ├── Toolbar.jsx
    │   └── Pagination.jsx
    │
    ├── pages/
    │   ├── JobsPage.jsx
    │   └── TrackerPage.jsx
    │
    ├── store/
    │   └── useJobStore.js
    │
    ├── data/
    │   └── mock-data.json
    │
    ├── App.jsx
    └── main.jsx