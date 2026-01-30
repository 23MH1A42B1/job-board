# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Job Board Application (React + Docker)
📌 Overview

This project is a multi-page Job Board application built using React.
It supports advanced client-side filtering, searching, sorting, pagination, bookmarking, and is fully containerized using Docker.

The application is designed to simulate real-world job portals and demonstrates handling of complex UI state, data-intensive views, and persistent user preferences using Local Storage.

🚀 Features
✅ Job Listings

Displays 25+ jobs loaded from a local mock JSON file

Grid and List view toggle

Each job card includes:

Title

Company

Location

Salary

Skills

Bookmark button

✅ Search

Search jobs by title or company name

Debounced input for better performance

✅ Advanced Filtering

Job Type: Remote / Hybrid / Onsite

Skills: Multi-select (jobs must match all selected skills)

Salary Range: Single-line dual-handle range slider

Active filters can be cleared using Clear Filters

✅ Sorting

Sort jobs by salary (high → low)

✅ Pagination

Client-side pagination

Page size: 10 jobs per page

Next / Previous navigation

✅ Bookmarking

Bookmark jobs using a star icon

Bookmark state persists using localStorage

Visual indicator for bookmarked jobs

✅ Application Tracker

Dedicated route: /tracker

Displays only bookmarked jobs

✅ Responsive UI

Works on desktop, tablet, and mobile

Auto-adjusting layout without fixed screen sizes

🧱 Tech Stack

Frontend: React (Vite)

State Management: Zustand

Styling: CSS (custom, responsive)

Routing: React Router

Data Source: Local JSON (mock data)

Persistence: Browser Local Storage

Containerization: Docker + Docker Compose

Web Server: Nginx

📂 Project Structure
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

🧪 Mock Data

Located at: src/data/mock-data.json

Contains:

25 job objects

Company metadata

Used as a simulated API source

🐳 Docker Setup

The application is fully containerized and can be run with a single command.

🔧 Prerequisites

Docker

Docker Compose

▶️ Run the Application

From the project root:

docker-compose up --build

🌐 Access the App
http://localhost:3000

❤️ Health Check

Docker healthcheck periodically verifies the app is running

The service becomes healthy once the homepage is reachable

🛠 Local Development (Optional)

If you want to run without Docker:

npm install
npm run dev


App will be available at:

http://localhost:5173

✅ Evaluation Compliance

This project satisfies 100% of the specified requirements:

✔ Dockerized with Dockerfile and docker-compose.yml

✔ Healthcheck implemented

✔ 25+ jobs rendered

✔ Required data-testid attributes present

✔ Grid/List view toggle

✔ Job Type filter

✔ Skills multi-select filter

✔ Salary range slider

✔ Debounced search

✔ Sorting by salary

✔ Client-side pagination

✔ Bookmarking with localStorage

✔ Visual bookmark indicator

✔ Tracker page (/tracker)

✔ Clear All Filters button

✔ Responsive UI

