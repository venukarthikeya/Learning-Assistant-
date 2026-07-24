# Learning Assistant – AI Exam Preparation Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

Learning Assistant is a modern, full-stack AI-powered exam preparation platform built to help students study efficiently. It utilizes **Google Gemini AI** strictly from the backend to generate highly personalized revision plans, flashcards, mock tests, and practice questions. With structured progress tracking and secure authentication, it aims to deliver a top-tier learning experience.

---

## ✨ Features

### 🔐 Authentication
- User Registration & Login
- Secure JWT Authentication
- Protected Routes
- User Profile management

### 📅 Exam Planning
- Create tailored Exam Plans
- Subject & Chapter tracking
- Track Confidence Levels & Revision Status
- Set and monitor Target Scores

### 🤖 AI Exam Coach
- AI-generated Concept Explanations
- Personalized Revision Plans
- Smart Flashcards & Formula Cards
- Memory Tricks & Readiness Reports
- Adaptive AI-generated Practice Questions

### ⏳ Mock Tests
- Timed Mock Exams with Auto & Manual Submit
- Detailed Feedback & Performance Analytics
- Review Previous Attempts

### 📊 Progress Tracking
- Comprehensive Study History & Study Streak
- Performance & Readiness Charts
- Weak Areas Analysis via Analytics Dashboard

---

## 🛠 Tech Stack

**Frontend**
- React.js, Vite, React Router, Tailwind CSS, Axios

**Backend**
- Node.js, Express.js, JWT, bcrypt, Express Validator

**Database & Auth**
- Supabase (PostgreSQL), Supabase Auth

**Generative AI**
- Google Gemini API

**Deployment**
- Frontend: Vercel
- Backend: Render

---

## 📁 Folder Structure

```text
📦 learning-assistant
 ┣ 📂 client                 # React Frontend (Vite)
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 lib              # API and Supabase utilities
 ┃ ┃ ┣ 📜 App.tsx          # Main routing & React components
 ┃ ┃ ┣ 📜 styles.css       # Core styles & Tailwind directives
 ┃ ┃ ┗ 📜 main.tsx         # Entry point
 ┃ ┣ 📜 package.json
 ┃ ┗ 📜 vite.config.ts
 ┣ 📂 server                 # Express Backend (Node.js)
 ┃ ┣ 📂 src
 ┃ ┃ ┗ 📜 server.ts        # Express app, Routes, Gemini integrations
 ┃ ┣ 📜 package.json
 ┃ ┗ 📜 tsconfig.json
 ┣ 📂 supabase               # PostgreSQL schema & migrations
 ┃ ┗ 📂 migrations
 ┗ 📜 README.md
```

---

## 🚀 Installation

### Frontend

Navigate to the `client` directory:
```bash
cd client
npm install
npm run dev
```

### Backend

Navigate to the `server` directory:
```bash
cd server
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create `.env` files in both directories based on the `.env.example` templates. **Never commit real keys!**

**Frontend (`client/.env`)**
```env
VITE_API_URL=http://localhost:5000/api
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Backend (`server/.env`)**
```env
PORT=5000
CLIENT_URL=http://localhost:5173
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
GEMINI_API_KEY=your_google_gemini_api_key
```

---

## 🖼 Screenshots

| Login & Demo Access | Dashboard |
| :---: | :---: |
| *(Add Login screenshot here)* | *(Add Dashboard screenshot here)* |

| AI Coach | Practice & Mock Tests |
| :---: | :---: |
| *(Add AI Coach screenshot here)* | *(Add Mock Test screenshot here)* |

| Analytics Hub | User Profile |
| :---: | :---: |
| *(Add Analytics screenshot here)* | *(Add Profile screenshot here)* |

---

## 📡 API Overview

The backend exposes a structured RESTful API securely wrapped with JWT verification:
- **Authentication:** Handled client-side via Supabase, with backend middleware validating bearer tokens.
- **Exam Plans:** `GET`, `POST`, `PUT`, `DELETE` endpoints for user exam goals.
- **Practice & Mocks:** Manage practice sessions and save timed mock-test results.
- **AI Generation:** `/api/ai/generate` orchestrates specialized prompts to Gemini for flashcards and explanations.
- **Analytics:** Rapid endpoints to calculate readiness algorithms over active database metrics.

---

## 🧠 Gemini Integration

The integration strictly follows security best practices:
- The **Google Gemini API** is only ever called from the secure backend environment.
- API keys are **never** exposed to the frontend or included in bundles.
- Generated AI responses are sanitized and aggressively cached/stored in the centralized database to prevent redundant billing.

---

## 🛡 Security

- **JWT Authentication:** Strict route protection validating claims via Supabase constraints.
- **Password Hashing:** Supabase handles secure hashing internally.
- **Environment Variables:** All secrets are masked and stripped from the frontend build.
- **Input Validation:** Zod parsing sanitizes all incoming requests to prevent malformed data.
- **CORS:** Cross-Origin requests are explicitly restricted to trusted/deployed domains using standard Express middleware.

---

## 🔮 Future Improvements

- [ ] **Teacher Dashboard:** Allow educators to track class progress.
- [ ] **Collaborative Study:** Real-time multiplayer flashcard games.
- [ ] **Notifications:** Daily study nudges and exam countdowns.
- [ ] **Offline Support:** PWA integration for studying in transit.
- [ ] **Leaderboards:** Local and global readiness ladders.
- [ ] **AI Voice Tutor:** Integrations utilizing Web Speech API.

---

## 🌐 Deployment

- **Frontend:** Deployed globally scaling edge infrastructure via **Vercel**.
  - Set the **Root Directory** inside the Vercel project settings to `client`.
  - The framework preset should dynamically register as **Vite**.
  - A `vercel.json` file is present in the `client/` subdirectory handling React Router exact path rewrite rules to `/index.html` preventing `404 NOT_FOUND` errors on reload.
  - Set `VITE_API_URL` environment variable properly in the Vercel project dashboard.
- **Backend:** Node runtime configured securely on **Render**.
- **Database:** Fully managed vector-ready PostgreSQL on **Supabase**.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## ✍ Author

**Venu Karthikeya**  
GitHub: [https://github.com/venukarthikeya](https://github.com/venukarthikeya)
