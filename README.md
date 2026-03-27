# Jyothy Institute of Technology — Official Website

A complete, production-ready multi-page college website for **Jyothy Institute of Technology (JIT), Bengaluru**. Built from scratch using modern web technologies with a premium black-and-gold design language, smooth scroll-driven animations, dynamic department pages, an AI-powered chatbot, and 42 fully working pages.

---

## Live Demo

Deployed on Vercel: [jitcollegeweb.vercel.app](https://jitcollegeweb.vercel.app)

---

## Tech Stack

### Frontend Framework
- **Next.js 14.2.35** — App Router, server components, dynamic routes, image optimisation
- **TypeScript** — strict mode throughout, fully typed components and data
- **React 18** — client components with `'use client'` directive where needed

### Styling
- **Tailwind CSS v3** — utility-first CSS with a fully custom design system
- **Custom color palette:**
  - `primary-black` — `#0A0A0A` (near-black backgrounds)
  - `primary-gold` — `#CDB87C` (JIT brand gold)
  - `accent-gold` — `#CFB991` (lighter gold for gradients)
  - `dark-charcoal` — `#1B1B1B` (card/panel backgrounds)
  - `warm-white` — `#F5F5F0` (off-white sections)
  - `muted-gray` — `#6B6B6B` (secondary text)
  - `border-gray` — `#2D2D2D` (dividers, card borders)
- **Custom fonts:**
  - `Oswald` — display headings (`font-display`)
  - `DM Sans` — body text (`font-body`)
  - `Space Mono` — labels, monospace accents (`font-mono`)
- **Custom keyframe animations:** `marquee-left`, `marquee-right`, `pulse-glow`, `bounce-gentle`, `fade-up`
- **Custom shadows:** `shadow-gold`, `shadow-gold-lg`, `shadow-dark`

### Animation Libraries
- **GSAP 3.12 + ScrollTrigger** — scroll-driven parallax, counter animations, staggered entrance, marquee
- **Framer Motion 11** — page transitions, hover effects, modal animations, AnimatePresence

### AI Chatbot
- **Fireworks AI (Qwen3-8B)** via OpenAI-compatible streaming API
- **react-markdown** — renders formatted bot responses with gold-styled headings, lists, bold text

### Forms & Validation
- **React Hook Form** — form state management
- **Zod** — schema validation

### Other Libraries
- **Lucide React** — icon set
- **react-hot-toast** — form submission notifications
- **Embla Carousel** — testimonials carousel
- **clsx + tailwind-merge** — conditional class merging

---

## All Pages (42 Total)

### Core Pages
| Route | Description |
|-------|-------------|
| `/` | Home — animated marquee hero, live search, stats counters, departments, campus life, placements, news |
| `/about` | About JIT — history, timeline, vision/mission, leadership, NAAC/VTU |
| `/admissions` | Admissions — programmes, process, eligibility, fees, inquiry form |
| `/academics` | Academics overview — departments grid, library, academic calendar |
| `/academics/[dept]` | Dynamic department pages — CSE, ECE, ME, Civil, ISE, MBA |
| `/campus-life` | Campus life — clubs, events, hostel, facilities, support |
| `/placements` | Placements — stats dashboard, recruiters, process, success stories |
| `/research` | Research — centres, publications, collaborations, conferences |
| `/gallery` | Gallery — GSAP ScrollTrigger parallax with 10 campus photo stories |
| `/contact` | Contact — form, map, department contacts, directions |

### Explore Pages
| Route | Description |
|-------|-------------|
| `/campus-map` | CSS interactive map with animated gold pins, key locations, how-to-reach |
| `/virtual-tour` | Virtual tour with 4 campus stop cards and highlights grid |
| `/library` | Library — stats bar, services, timings, new arrivals, membership |
| `/facilities` | Labs & Facilities — 6 lab cards with specs, other facilities grid |
| `/anti-ragging` | Anti-Ragging Committee — members, definitions, penalties, helpline |
| `/grievance` | Grievance Redressal — online form, committee, response timelines |
| `/student-life` | Redirects to `/campus-life` |

### Academics Pages
| Route | Description |
|-------|-------------|
| `/faculty` | Faculty Directory — filterable by department, 19 faculty cards with avatars |
| `/academic-calendar` | Academic Calendar 2025-26 — Sem I & II event tables, deadlines |
| `/syllabus` | Syllabus & Curriculum — 6 programme cards with subjects and download buttons |
| `/examinations` | Examination Cell — 3-tab UI (Internal/End Sem/Supplementary), hall tickets |
| `/academics/be` | Redirects to `/academics` |

### Student Resources Pages
| Route | Description |
|-------|-------------|
| `/student-portal` | Student Portal — 8-feature grid, login steps, mobile app section |
| `/e-learning` | E-Learning — 5 platform cards (NPTEL, Coursera, Moodle), recommended courses |
| `/results` | Exam Results — portal info, live status, VTU result steps, revaluation |
| `/scholarships` | Scholarships & Aid — government + JIT scholarships, application process |
| `/hostel` | Hostels — boys/girls cards, amenities grid, rules, warden contacts |
| `/transport` | Transport Routes — 5 bus routes with stops, timings, registration |
| `/question-papers` | Previous Year Papers — filterable cards by dept/type, 12 downloadable papers |
| `/downloads` | Downloads — 5-tab UI with forms, circulars, syllabi, brochures, prospectus |

### Connect Pages
| Route | Description |
|-------|-------------|
| `/alumni` | Alumni Association — notable alumni, chapters, events, registration form |
| `/media` | Media & Press — press releases, media coverage, brand assets |
| `/feedback` | Feedback — star rating widget, anonymous option, stats |
| `/report` | Report an Issue — emergency contacts, report form, tracking |

### Legal & Compliance Pages
| Route | Description |
|-------|-------------|
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/aicte` | AICTE Approval — approval number, intake table, compliance |
| `/vtu` | VTU Affiliation — affiliation details, programmes, exam schedule |
| `/nirf` | NIRF Rankings & Data — metric bars, faculty & student data tables |

---

## Key Features

### Animated Hero Marquee
- Two rows of campus images running as infinite CSS marquee
- Row 1 scrolls left, Row 2 scrolls right — powered by `@keyframes` in `globals.css`
- Hover pauses the animation; hover on tiles shows gold overlay + label slide-up

### Word-by-Word Title Animation
- "Shaping Tomorrow's Engineers and Leaders Today" reveals word-by-word
- Each word uses Framer Motion `rotateX` with CSS `perspective: 800px` for a 3D flip effect

### Live Search
- 22-entry search index covering all pages and topics
- Real-time dropdown with keyword matching as you type
- Typewriter placeholder cycles through sample queries

### GSAP Scroll Animations
- Stats counters count up from zero on scroll (GSAP `ScrollTrigger`)
- Gallery page parallax — images move at different speed to page scroll (`yPercent: -15` to `yPercent: 15`)
- Department cards and event cards stagger in on scroll

### AI Chatbot
- Fireworks AI Qwen3-8B with SSE streaming
- Strips `<think>...</think>` reasoning tokens in real-time
- react-markdown formatted responses with gold styling
- Chat history persists in `sessionStorage` across open/close

### Navbar
- Always solid black from load
- Academics mega-dropdown with all 6 department links
- Search bar with keyword-to-page routing on Enter

---

## Setup & Installation

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
Create `.env.local` in the root:
```env
NEXT_EXPERIMENTAL_DISABLE_SWC=1
FIREWORKS_API_KEY=your-fireworks-api-key-here
```

> Get a free API key at [fireworks.ai](https://fireworks.ai). Model used: `accounts/fireworks/models/qwen3-8b`

### 4. Run development server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 5. Build for production
```bash
npm run build
npm start
```

---

## Deployment (Vercel)

```bash
npm install -g vercel
vercel login
vercel --prod
```

Add in Vercel Dashboard → **Settings → Environment Variables**:

| Name | Value |
|------|-------|
| `FIREWORKS_API_KEY` | Your Fireworks AI API key |

---

## Project Structure

```
jit_college_web/
├── app/
│   ├── layout.tsx                    Root layout — fonts, metadata
│   ├── globals.css                   Global CSS + marquee keyframes
│   ├── ClientLayout.tsx              Navbar, Footer, ChatWidget, CustomCursor
│   ├── page.tsx                      Home page
│   ├── about/
│   ├── admissions/
│   ├── academics/
│   │   ├── page.tsx
│   │   ├── [dept]/page.tsx           CSE, ECE, ME, Civil, ISE, MBA
│   │   └── be/page.tsx               Redirect → /academics
│   ├── campus-life/
│   ├── gallery/
│   ├── placements/
│   ├── research/
│   ├── contact/
│   ├── hostel/
│   ├── library/
│   ├── facilities/
│   ├── campus-map/
│   ├── virtual-tour/
│   ├── anti-ragging/
│   ├── grievance/
│   ├── student-life/                 Redirect → /campus-life
│   ├── departments/                  Redirect → /academics
│   ├── faculty/
│   ├── academic-calendar/
│   ├── syllabus/
│   ├── examinations/
│   ├── student-portal/
│   ├── e-learning/
│   ├── results/
│   ├── scholarships/
│   ├── transport/
│   ├── question-papers/
│   ├── downloads/
│   ├── alumni/
│   ├── media/
│   ├── feedback/
│   ├── report/
│   ├── privacy-policy/
│   ├── terms/
│   ├── aicte/
│   ├── vtu/
│   ├── nirf/
│   └── api/
│       └── chat/route.ts             Fireworks AI streaming API
├── components/
│   ├── layout/                       Navbar, Footer, MobileMenu, PageTransition
│   ├── chatbot/                      ChatWidget, ChatPanel, MessageBubble
│   ├── ui/                           Button, SectionHeading, Accordion
│   ├── CustomCursor.tsx
│   └── ScrollToTop.tsx
└── lib/
    ├── departments-data.ts           Faculty, labs, events for all 6 depts
    ├── chatbot-data.ts               JIT knowledge base for AI system prompt
    ├── animations.ts                 Reusable animation presets
    ├── gsap.ts                       GSAP plugin registration
    └── utils.ts                      clsx + tailwind-merge helper
```

---

## License

© 2026 Jyothy Institute of Technology, Bengaluru. All Rights Reserved.
