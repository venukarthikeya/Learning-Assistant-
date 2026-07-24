# Learning Assistant - AI Exam Preparation Platform

Learning Assistant is a full-stack study companion that turns an exam goal into structured plans, targeted practice, revision resources, and clear performance insights. It uses React, Express, Supabase, and server-side Google Gemini integration.

## What it includes

- Supabase email authentication and protected routes
- Exam plans with dates, target scores, study-time targets, and archiving
- AI Coach for explanations, revision plans, flashcards, formula sheets, practice questions, and readiness reports
- Practice formats for MCQ, short, long, and coding questions
- Mock-test records, revision flashcards, and a personalised dashboard
- Analytics for accuracy, study time, readiness, confidence, and mock-test progress
- Light/dark mode, responsive layout, dialogs, empty states, loading states, and API error feedback
- Row Level Security for all user-owned exam data

## Tech stack

- Client: React, TypeScript, Vite, React Router, Supabase JS
- Server: Node.js, Express, Zod, Helmet, rate limiting, Google GenAI SDK
- Data/auth: Supabase Auth, PostgreSQL, Realtime-ready RLS policies

## Run locally

1. Install Node.js 20+.
2. Run `npm install` in the repository root.
3. Copy `client/.env.example` to `client/.env` and `server/.env.example` to `server/.env`.
4. Fill in your Supabase URL/keys and Gemini API key. Gemini stays in `server/.env` only.
5. In the Supabase SQL Editor, apply `supabase/migrations/001_initial.sql`, followed by `supabase/migrations/002_exam_preparation_platform.sql`. The second migration creates `public.exam_plans` and all related exam-preparation tables, enables RLS, and reloads the PostgREST schema cache.
6. Add `http://localhost:5173` to Supabase Auth redirect URLs.
7. Run `npm run dev` and open `http://localhost:5173`.

## Environment variables

Client:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_API_URL=http://localhost:5000/api
```

Server:

```env
PORT=5000
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
GEMINI_API_KEY=
CLIENT_URL=http://localhost:5173
```

## Project structure

```text
client/src/        React application, routes, responsive UI
server/src/        Express API, authentication, Gemini integration
supabase/migrations/  PostgreSQL schema and RLS policies
```

## Database naming and migration recovery

`exam_plans` is the canonical table for the Exam Planner. The older `study_plans` table belongs to the preserved interview-preparation module and is not used by any exam-planner route. If Supabase reports `PGRST205` for `exam_plans`, the exam-platform migration has not been applied to that Supabase project (or its PostgREST schema cache has not refreshed). Apply migration `002` once; its final `notify pgrst, 'reload schema'` command refreshes the cache.

## Gemini and rate limits

All Gemini requests run only on the server. Each generated resource is stored in `ai_responses`; flashcard requests also populate `flashcards`. The API validates inputs, retries malformed model JSON only, and returns a clear 429 response when Gemini quota is exhausted.

## Deployment

Deploy `client` to Vercel or Netlify and `server` to Render, Railway, or Fly. Set `VITE_API_URL` to the deployed API URL and update the server `CLIENT_URL` and Supabase Auth redirect URL to the deployed frontend.
