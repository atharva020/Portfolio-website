# Handoff — Atharva Chirde's LLM Workflow Context

This file gives a new session full context on how Atharva uses the LLM. Read this before doing any work for him.

## Who the user is

- **Name:** Atharva Chirde
- **Role:** Software Engineer at Shastack (remote), 2+ years experience
- **Contact:** +91 84850 82997 | atharva.chirde@gmail.com | linkedin.com/in/atharva-chirde | github.com/atharva020 | atharvachirde.com
- **Location:** India (Aurangabad), open to remote and relocation (e.g. Hyderabad)
- **Education:** B.E. Computer Engineering, MGM — Jawaharlal Nehru Engineering College, CGPA 8.0/10, 2021-2025

## What he uses the LLM for

1. **Resume** — editing `atharva_chirde_resume.tex` (LaTeX, sb2nov style, ATS-friendly)
2. **Cover letters** — for job applications (Upwork, LinkedIn, direct)
3. **Job applications** — tailoring resume/cover letter to specific JDs
4. **LinkedIn profile** — bio, experience descriptions
5. **Portfolio website** — Next.js site at atharvachirde.com, content updates
6. **Interview prep** — analyzing JDs and advising what to prepare

## Key files

- **Resume source:** `/Users/atharvachirde/Desktop/Atharva/Portfolio-website/atharva_chirde_resume.tex`
- **Resume PDF:** `/Users/atharvachirde/Desktop/Atharva/Portfolio-website/atharva_chirde.pdf` (NOTE: this PDF is STALE — it's an older version. The .tex is the current source. Regenerate the PDF after editing the .tex.)
- **Portfolio main component:** `/Users/atharvachirde/Desktop/Atharva/Portfolio-website/components/ui/glassmorphism-trust-hero.tsx`
- **Portfolio layout/meta:** `/Users/atharvachirde/Desktop/Atharva/Portfolio-website/app/layout.tsx`
- **Verify:** `npm run build` (and `npm run lint`)

## Writing style rules (CRITICAL — he is picky about these)

1. **NEVER say "full stack"** — position him as a **"Software Engineer"**. "Full stack" reads as common/AI-slop. This applies to resume, LinkedIn, portfolio, cover letters.
2. **No AI-slop language** — avoid "passionate," "driven," "leveraging," buzzword-heavy phrasing. Write like a real person.
3. **No em dashes** — he explicitly asked to avoid them. Use commas, periods, or parentheses instead.
4. **Don't brag** — understated, factual, professional. State what he did, no superlatives.
5. **ATS-friendly** — action verbs, concrete nouns, quantified impact where possible.
6. **Don't blindly list tech stacks** in bios/summaries — they belong in the Technical Skills section. In a bio, describe what he does/can do, not a stack dump.
7. **Impact-focused** — lead with what was achieved, not just what was done.
8. **Cover letters: short and scannable** — Upwork clients prefer tight letters. A few short paragraphs or bullets. No em dashes, no bragging.

## His actual work (for accurate claims)

### Shastack — Software Engineer (Jun 2025 - Present, Remote)
- Shipped **Emploire** end to end: multi-organization workforce SaaS (leave tracking, work logs, milestones, team calendars, role-based access control, billing). Replaced scattered spreadsheets with a single source of truth for HR teams.
- Contributed to **Staffcoder** (company's flagship coding assessment platform): assessment engine, execution infrastructure, enhanced UI/UX.
- Built AI-assisted development workflows with Cursor, Claude Code, MCP agents — cut assessment creation time by 40%.
- Improved SEO and page performance via ISR, metadata optimization, Core Web Vitals fixes.

### Shastack — Software Engineering Intern (Jan 2025 - Jun 2025, Remote)
- Built and reviewed custom coding assessments for hiring platforms (frontend, backend, full-stack problem statements), including assessments for HackerRank.
- Curated assessments across React, Angular, Laravel, Node.js, TypeScript, Cypress, Playwright, React Native, Swift.
- Designed feature-based coding challenges modeled after real-world products (Airbnb, Swiggy, Zomato).
- Owned end-to-end REST API integration and deployment workflows.

### Client names (use with care)
- Amazon, Capgemini, Dell Technologies — he REMOVED these from LinkedIn but KEPT them on the resume and portfolio. Ask before adding/removing them in any given context.

### Projects
- **Emploire** — multi-org HR SaaS (Next.js, TypeScript, Supabase, Tailwind)
- **Staffcoder** — coding assessment platform (Next.js, FastAPI, PostgreSQL, AWS, Kubernetes)
- **Swiggy Lens** — AI agent connecting to Swiggy via MCP tools, cross-vertical spend/ordering insights (Next.js, TypeScript, MCP)
- **DevTape** — npm debugging toolkit, causal error timeline for frontend failures (TypeScript, React, npm; package: devtape-react)
- **VOLTA** — fictional EV brand, scroll-driven 3D landing page (React Three Fiber, GSAP)
- **CodeIt** — real-time collaborative code editor (React, Node.js, WebSockets)
- **Conversation Analysis** — call recording → transcription, diarisation, sentiment (AI/ML, Python)

### Technical skills
- **Languages:** JavaScript (ES6+), TypeScript, Python, SQL, Swift (familiar)
- **Frontend:** React.js, Next.js, Tailwind CSS, Shadcn UI, Radix UI, React Native, Angular
- **Backend:** Node.js, Express.js, FastAPI, Django, Laravel, REST APIs, WebSockets, Webhooks
- **Databases:** PostgreSQL, MongoDB, SQLite, Supabase, Redis
- **Cloud/DevOps:** AWS (Lambda, S3, EKS, SQS, SES, CloudFront), Docker, Kubernetes, GitHub Actions, Vercel
- **AI/Tools:** Cursor, Claude Code, MCP, Ollama, OpenAI SDK, Langchain, LLM pipelines, Git, Postman, Jest, Playwright

## Current resume state (as of last edit)

The `.tex` is a single page (he was fighting to keep it one page — the Technical Skills section was the overflow culprit). Structure:
1. Heading (name + contact)
2. Professional Summary — "Software Engineer with 2+ years of experience designing and building scalable, AI-driven products across multiple stacks. Strong in system design, API design, and database design..."
3. Education
4. Experience (Shastack full-time + intern)
5. Projects (Staffcoder, Emploire, Swiggy Lens, DevTape)
6. Technical Skills

## Portfolio site state (as of last edit)

- Repositioned from "Full Stack" to "Software Engineer" everywhere (hero, experience, objective, meta).
- Experience section combines internship + full-time, mentions HackerRank, balanced 5 highlights / 5 achievements.
- Fixed a hydration error from `new Date().getFullYear()` in the footer (added `suppressHydrationWarning`).
- Build passes.

## Environment notes

- **No LaTeX toolchain installed** on this machine (no pdflatex/xelatex/tectonic). brew install of tectonic was blocked by outdated Command Line Tools. So the resume PDF cannot be compiled here — the user compiles it himself, or a TeX install is needed.
- The resume PDF on disk is stale relative to the .tex.

## Known preferences / gotchas

- He iterates a lot on resume bullets — expect multiple rounds of "this point is vague," "this sounds like AI," "this contradicts that." Be ready to rewrite specific bullets on request.
- He wants bullets to convey system-level work (system design, API design, DB design), not just UI/dashboards.
- For LinkedIn: full-time role as bullet points, internship as a paragraph.
- He asked to keep project links OFF the resume (removed the DevTape npm link for consistency).
- When he says "make it sound human," strip AI-isms and em dashes, shorten sentences.
