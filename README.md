# Jyothy Institute of Technology — Official Website

A complete, production-ready multi-page college website for **Jyothy Institute of Technology (JIT), Bengaluru**. Built from scratch using modern web technologies with a premium black-and-gold design language, smooth scroll-driven animations, dynamic department pages, and an AI-powered chatbot.

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
- **Custom fonts:**
  - `Oswald` — display headings (font-display)
  - `DM Sans` — body text (font-body)
  - `Space Mono` — labels, monospace accents (font-mono)
- **Custom shadows:** `shadow-gold`, `shadow-gold-lg`, `shadow-dark`
- **Custom keyframe animations:** `marquee-left`, `marquee-right`, `pulse-glow`, `bounce-gentle`, `fade-up`

### Animation Libraries
- **GSAP 3.12** — ScrollTrigger parallax, counter animations, staggered entrance, marquee
- **Framer Motion 11** — page transitions, hover effects, modal animations, AnimatePresence
- Combined usage: GSAP handles scroll-driven and timeline animations; Framer Motion handles component-level interactions

### AI Chatbot
- **Fireworks AI** — Qwen3-8B model via OpenAI-compatible API
- **openai** npm package — used with custom `baseURL` pointing to Fireworks
- **react-markdown** — renders formatted bot responses (headings, lists, bold text)

### Forms & Validation
- **React Hook Form** — performant form state management
- **Zod** — schema validation for contact and inquiry forms

### Other Libraries
- **Lucide React** — consistent icon set throughout the UI
- **react-hot-toast** — success/error notifications on form submissions
- **Embla Carousel** — testimonials carousel on home page
- **clsx + tailwind-merge** — conditional class merging utilities

---

## Pages

### `/` — Home Page
The main landing page with multiple sections:

- **Hero Mosaic** — Two horizontal rows of campus images running as an infinite marquee. Row 1 scrolls left, Row 2 scrolls right. Each tile has a staggered fade-in entrance animation on load, zoom on hover, a gold color overlay, and a label that slides up from the bottom on hover.
- **Tagline Section** — "Shaping Tomorrow's Engineers and Leaders Today" revealed word-by-word with a 3D `rotateX` flip animation using Framer Motion and CSS `perspective`. An animated gold line grows from 0 to 80px wide. CTA buttons stagger in one by one.
- **Live Search** — A full-text search bar with a typewriter placeholder that cycles through sample queries. As you type, a dropdown shows matching results from a 22-entry index covering all pages and topics. Clicking a result navigates directly to the relevant page.
- **Stats Section** — Four animated counters (25+ years, 95% placements, 50+ partners, 6000+ alumni) that count up from zero when scrolled into view, powered by GSAP.
- **Departments Grid** — Six department cards with images, each with a hover lift effect using Framer Motion.
- **Explore Campus Life** — Full-viewport parallax section with a real JIT campus photo as background. Four clickable hotspot pins with pulsing ring animations open info cards with images and descriptions.
- **Placements Marquee** — Infinite scrolling strip of recruiter company names.
- **Events Section** — Upcoming college events with GSAP stagger entrance animations.
- **Testimonials** — Carousel of alumni quotes using Embla Carousel.
- **News Section** — Latest college news cards with images.
- **CTA Banner** — Final call-to-action for admissions.

### `/about` — About JIT
- College history and founding story
- Vision & Mission statements
- Timeline of milestones
- Leadership section (Principal, Deans, Department Heads)
- Facilities overview
- NAAC accreditation and VTU affiliation details

### `/admissions` — Admissions
- Available programmes (B.E. branches + MBA)
- Eligibility criteria and Karnataka CET cutoff information
- Step-by-step admission process
- Fee structure table
- Inquiry form with React Hook Form + Zod validation and react-hot-toast feedback

### `/academics` — Academics Overview
- Department cards grid with images
- Curriculum highlights per department
- Central library section
- Academic calendar
- Links to individual department pages

### `/academics/[dept]` — Individual Department Pages
Dynamic route generating separate pages for all 6 departments: **CSE, ECE, ME, Civil, ISE, MBA**

Each department page includes:
- Hero banner with department-specific image and metadata badges
- Faculty grid with photos, names, and specialisations
- Student achievements timeline
- Labs & facilities cards with descriptions
- Upcoming departmental events list
- Career pathways and job role tags
- Back to Academics and Apply Now CTAs

Data for all departments lives in `lib/departments-data.ts`.

### `/campus-life` — Campus Life
- Student clubs and societies
- Cultural and sports events
- Hostel facilities (boys & girls)
- Canteen, gym, and recreation facilities
- Student support services

### `/placements` — Placements
- Live stats dashboard (placement rate, highest package, average package, companies visited)
- GSAP counter animations triggered on scroll
- Top recruiting companies grid (Infosys, Wipro, TCS, Cognizant, Accenture, HCL, etc.)
- Placement process walkthrough (aptitude → technical → HR)
- Student success stories

### `/research` — Research
- Active research centres (AI/ML, IoT, VLSI, Robotics)
- Faculty research publications count
- Industry collaborations (ISRO, DRDO)
- Ongoing funded projects
- Upcoming conferences and workshops

### `/gallery` — Campus Gallery
- Hero section with animated vertical line accents and scroll arrow indicators
- 10 campus photo stories with alternating left/right layout
- **GSAP ScrollTrigger parallax** — each image has an inner div sized at 130% height with `-15%` top offset. As you scroll, GSAP moves it from `yPercent: -15` to `yPercent: 15`, creating a smooth parallax depth effect
- Category badge slides in from the left on scroll
- Title flips up with a `power3.out` ease on scroll
- Description fades up slightly behind the title
- Number watermarks (01–10) on each image
- Bottom CTA section to plan a campus visit

### `/contact` — Contact
- Contact form with full validation
- Department-wise phone and email contacts
- Campus address and directions
- Embedded map section

---

## AI Chatbot

### How it works
A floating chat button sits in the bottom-right corner of every page. Clicking it opens a slide-up panel.

**Backend** (`app/api/chat/route.ts`):
- Uses the **OpenAI npm package** pointed at Fireworks AI's endpoint (`https://api.fireworks.ai/inference/v1`)
- Model: `accounts/fireworks/models/qwen3-8b`
- The route receives the conversation history as an array of messages, sends it to Fireworks with a JIT-specific system prompt, and **streams** the response back using Server-Sent Events (SSE)
- Qwen3 outputs `<think>...</think>` internal reasoning tokens — the route strips these in real time using a streaming buffer that tracks `insideThink` state
- Each text token is sent as: `data: {"content": "token"}\n\n`

**Frontend** (`components/chatbot/`):
- `ChatWidget.tsx` — the floating button with GSAP bounce animation every 10 seconds, tooltip on hover, pulsing green dot indicator. Holds the messages state so chat history survives the panel being closed and reopened. Persists messages to `sessionStorage`.
- `ChatPanel.tsx` — the chat UI panel. Reads the SSE stream chunk by chunk, assembles tokens into the bot message in real time. Shows a typing indicator (three animated gold dots) while waiting for the first token.
- `MessageBubble.tsx` — renders user messages as plain text bubbles and bot messages through `react-markdown` with custom styled components: gold uppercase headings, gold bullet points, gold bold text, divider lines.

**Quick replies:** Admissions Process, Fee Structure, Placements, Hostel Info, Departments

---

## Navbar

- Always solid `#0A0A0A` black from the very first render (no transparent phase)
- Gold accent line appears at the bottom when the page is scrolled past 20px
- **Academics mega-dropdown** — hovering Academics reveals a dropdown with all 6 department links plus a "View All Programs" link. Solid black background. Opens/closes with a 150ms hover delay to prevent accidental closes.
- **Search bar** — clicking the search icon expands an input field. Typing a query and pressing Enter (or clicking the search icon) runs keyword matching and navigates to the most relevant page
- **Mobile hamburger** — triggers a full-screen `MobileMenu` overlay on screens below `lg` breakpoint
- GSAP entrance animation: navbar slides down from `y: -80` on first load; nav links stagger in with 0.1s delay between each

---

## Custom Components

### `components/ui/`
- **`Button.tsx`** — reusable button with gold/black/outline variants
- **`SectionHeading.tsx`** — consistent section title component with gold accent line, supports `light` and `dark` themes
- **`Accordion.tsx`** — animated expand/collapse for FAQ sections

### `components/layout/`
- **`Navbar.tsx`** — full navbar as documented above
- **`Footer.tsx`** — site footer with links, contact info, social icons
- **`MobileMenu.tsx`** — full-screen overlay mobile navigation with staggered link animations
- **`PageTransition.tsx`** — wraps page content for smooth route-change fade transitions

### `components/`
- **`CustomCursor.tsx`** — replaces the default cursor with a custom gold dot that follows the mouse with a slight lag effect
- **`ScrollToTop.tsx`** — floating button that appears after scrolling down and smoothly returns to top

---

## Custom Design System

### Fonts (loaded via `next/font/google`)
| Variable | Font | Used For |
|----------|------|----------|
| `--font-oswald` | Oswald | All headings, display text |
| `--font-dm-sans` | DM Sans | Body text, paragraphs |
| `--font-space-mono` | Space Mono | Labels, tags, monospace accents |

### Color Tokens
| Token | Hex | Usage |
|-------|-----|-------|
| `primary-black` | `#0A0A0A` | Navbar, footers, dark sections |
| `primary-gold` | `#CDB87C` | Accents, borders, CTAs, icons |
| `accent-gold` | `#CFB991` | Gradient endpoints |
| `dark-charcoal` | `#1B1B1B` | Cards, panels, chatbot background |
| `warm-white` | `#F5F5F0` | Light section backgrounds |
| `muted-gray` | `#6B6B6B` | Secondary text |
| `border-gray` | `#2D2D2D` | Dividers, card borders |

---

## Project Structure

```
jit_college_web/
├── app/
│   ├── layout.tsx                    Root layout — fonts, metadata, global styles
│   ├── globals.css                   Global CSS, custom cursor styles, marquee keyframes
│   ├── ClientLayout.tsx              Client-side wrapper — Navbar, Footer, ChatWidget, CustomCursor
│   ├── page.tsx                      Home page — mosaic, search, stats, events, CTA
│   ├── about/page.tsx                About page
│   ├── admissions/page.tsx           Admissions page with inquiry form
│   ├── academics/
│   │   ├── page.tsx                  Academics overview
│   │   └── [dept]/page.tsx           Dynamic department pages (CSE/ECE/ME/Civil/ISE/MBA)
│   ├── campus-life/page.tsx          Campus life page
│   ├── gallery/page.tsx              Parallax gallery page
│   ├── placements/page.tsx           Placements dashboard
│   ├── research/page.tsx             Research page
│   ├── contact/page.tsx              Contact page with form
│   └── api/
│       └── chat/route.ts             Fireworks AI streaming chatbot API route
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                Sticky navbar with mega-menu and search
│   │   ├── Footer.tsx                Site footer
│   │   ├── MobileMenu.tsx            Full-screen mobile navigation overlay
│   │   └── PageTransition.tsx        Route-change fade animation wrapper
│   ├── chatbot/
│   │   ├── ChatWidget.tsx            Floating chat button + state management
│   │   ├── ChatPanel.tsx             Chat UI with SSE streaming
│   │   └── MessageBubble.tsx         Message renderer with react-markdown
│   ├── ui/
│   │   ├── Button.tsx                Reusable button component
│   │   ├── SectionHeading.tsx        Section title with gold accent
│   │   └── Accordion.tsx             Animated accordion
│   ├── CustomCursor.tsx              Custom gold cursor
│   └── ScrollToTop.tsx               Scroll-to-top floating button
│
├── lib/
│   ├── departments-data.ts           All department data (faculty, labs, events, achievements)
│   ├── chatbot-data.ts               JIT knowledge base for the AI system prompt
│   ├── animations.ts                 Reusable GSAP and Framer Motion animation presets
│   ├── gsap.ts                       GSAP plugin registration (ScrollTrigger)
│   └── utils.ts                      clsx + tailwind-merge helper
│
├── hooks/
│   ├── useGSAP.ts                    Custom hook for GSAP context management
│   ├── useScrollProgress.ts          Tracks scroll percentage for progress indicators
│   └── useMediaQuery.ts              Responsive breakpoint detection hook
│
├── public/                           Static assets
├── tailwind.config.ts                Full custom Tailwind theme
├── next.config.js                    Next.js config (image domains, etc.)
└── .env.local                        Environment variables (not committed)
```

---

## Setup & Installation

### Prerequisites
- Node.js 18+
- npm

### 1. Clone the repository
```bash
git clone https://github.com/ishaaanfarooq/jit_college_web.git
cd jit_college_web
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory:
```env
NEXT_EXPERIMENTAL_DISABLE_SWC=1
FIREWORKS_API_KEY=your-fireworks-api-key-here
```

Get a free Fireworks AI API key at [fireworks.ai](https://fireworks.ai). The chatbot uses the **Qwen3-8B** model (`accounts/fireworks/models/qwen3-8b`).

### 4. Run the development server
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

Add the following environment variable in the Vercel Dashboard under **Settings → Environment Variables**:

| Name | Value |
|------|-------|
| `FIREWORKS_API_KEY` | Your Fireworks AI API key |

---

## License

© 2026 Jyothy Institute of Technology, Bengaluru. All Rights Reserved.
