# Jyothy Institute of Technology — Official Website

A full multi-page, deployment-ready website for **Jyothy Institute of Technology (JIT), Bengaluru** built with Next.js 14, TypeScript, Tailwind CSS, GSAP animations, Framer Motion, and an AI-powered chatbot powered by Fireworks AI (Qwen3-8B).

## Tech Stack

- **Next.js 14.2.35** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS v3** with custom JIT gold/black/white palette
- **GSAP + ScrollTrigger** — scroll animations, counters, marquee, parallax
- **Framer Motion** — page transitions, hover effects, modal animations
- **Lucide React** — icons
- **React Hook Form + Zod** — form validation
- **Fireworks AI (Qwen3-8B)** — streaming AI chatbot with JIT knowledge base
- **react-markdown** — formatted chatbot responses
- **react-hot-toast** — notifications

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — animated hero mosaic, live search, stats, departments, placements, news, CTA |
| `/about` | About — history, timeline, vision/mission, leadership, facilities |
| `/admissions` | Admissions — programs, process, eligibility, fees, inquiry form |
| `/academics` | Academics — departments grid, library, academic calendar |
| `/academics/[dept]` | Department pages — faculty, achievements, labs, events, careers (CSE, ECE, ME, Civil, ISE, MBA) |
| `/campus-life` | Campus Life — clubs, events, hostel, facilities, support |
| `/placements` | Placements — stats dashboard, recruiters, process, success stories |
| `/research` | Research — centres, faculty, collaborations, conferences |
| `/gallery` | Gallery — GSAP parallax scroll gallery with 10 campus photo stories |
| `/contact` | Contact — form, map, dept contacts, directions |

## Features

### Animated Home Page
- **Dual marquee hero** — two rows of campus images scrolling in opposite directions
- **Staggered entrance** — tiles fade and slide in on load
- **Hover effects** — zoom, gold overlay, and label slide-up on each image tile
- **Word-by-word 3D title flip** — each word reveals with a `rotateX` perspective animation
- **Animated gold divider** — grows from 0 to 80px on scroll into view
- **Live search dropdown** — 22-entry index with real-time filtering and keyword-based routing
- **Typewriter placeholder** — cycles through sample queries

### Gallery Page
- GSAP ScrollTrigger parallax — images move at a different speed to the page scroll
- 10 campus stories with alternating left/right layout
- Staggered reveal for titles, descriptions, and category badges
- Animated scroll arrows in hero section

### Department Pages (`/academics/[dept]`)
- Individual pages for all 6 departments: CSE, ECE, ME, Civil, ISE, MBA
- Faculty grid with photos and specialisations
- Student achievements timeline
- Labs & facilities grid
- Upcoming events list
- Career pathways tags

### AI Chatbot
- Powered by **Fireworks AI — Qwen3-8B** (OpenAI-compatible streaming API)
- Strips `<think>...</think>` reasoning tokens from Qwen3 output before displaying
- Responses rendered with **react-markdown** — headings, bold, lists, dividers all styled in gold/black
- **Persistent chat history** — messages saved to `sessionStorage` and restored when reopening
- Quick-reply chips for common questions
- Typing indicator while streaming

### Navbar
- Always solid black from page load (no transparent-to-black scroll transition)
- Academics mega-dropdown with solid background and department links
- Search bar with live keyword routing — type and press Enter to navigate
- Hamburger menu for mobile

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/ishaaanfarooq/jit_college_web.git
cd jit_college_web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root:

```env
NEXT_EXPERIMENTAL_DISABLE_SWC=1
FIREWORKS_API_KEY=your-fireworks-api-key-here
```

> Get your Fireworks AI API key at [fireworks.ai](https://fireworks.ai)
> This project uses the **Qwen3-8B** model: `accounts/fireworks/models/qwen3-8b`

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

Set this environment variable in the Vercel Dashboard under **Settings → Environment Variables**:

| Name | Value |
|------|-------|
| `FIREWORKS_API_KEY` | your Fireworks AI key |

## Project Structure

```
├── app/
│   ├── layout.tsx                  — Root layout with fonts, SEO metadata
│   ├── ClientLayout.tsx            — Client-side layout (Navbar, Footer, Chatbot)
│   ├── page.tsx                    — Home page (animated mosaic, live search)
│   ├── about/page.tsx
│   ├── admissions/page.tsx
│   ├── academics/page.tsx
│   ├── academics/[dept]/page.tsx   — Dynamic department pages
│   ├── campus-life/page.tsx
│   ├── gallery/page.tsx            — GSAP parallax gallery
│   ├── placements/page.tsx
│   ├── research/page.tsx
│   ├── contact/page.tsx
│   └── api/chat/route.ts           — Fireworks AI streaming chatbot API
├── components/
│   ├── layout/                     — Navbar, Footer, MobileMenu, PageTransition
│   ├── chatbot/                    — ChatWidget, ChatPanel, MessageBubble
│   ├── ui/                         — Button, SectionHeading, Accordion
│   ├── CustomCursor.tsx
│   └── ScrollToTop.tsx
└── lib/
    ├── departments-data.ts         — Faculty, labs, events data for all 6 departments
    ├── chatbot-data.ts             — JIT knowledge base for the AI chatbot
    ├── gsap.ts                     — GSAP plugin registration
    └── animations.ts               — Reusable animation presets
```

## License

© 2026 Jyothy Institute of Technology. All Rights Reserved.
