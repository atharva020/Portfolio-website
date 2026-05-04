"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Code2,
  Cpu,
  Globe,
  GitBranch,
  Brain,
  Users,
  Send,
  ChevronRight,
  Terminal,
  Layers,
  Star,
  Play,
  Hexagon,
  Triangle,
  Command,
  Ghost,
  Gem,
  MoveUpRight,
} from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.243 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

// ── DATA ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Home", "Skills", "Work", "Contact"];

const SKILLS = [
  {
    icon: GitBranch,
    title: "Git Version Control",
    desc: "Experience using Git for version control, collaborating with team members, and maintaining project history.",
    tags: ["Git", "GitHub", "Collaboration"],
  },
  {
    icon: Code2,
    title: "Programming & Scripting",
    desc: "Solid experience with Python, Java, JavaScript, and TypeScript — developing applications and solving complex problems.",
    tags: ["Python", "Java", "TypeScript", "JavaScript"],
  },
  {
    icon: Layers,
    title: "Tools & Frameworks",
    desc: "TensorFlow, Langchain, Gemini API for AI/ML. React, Next.js, Node.js, Express, and MongoDB for scalable apps.",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "MERN stack and Next.js for dynamic, full-stack applications with secure authentication and modern architecture.",
    tags: ["MERN", "Next.js", "REST APIs"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Building and deploying ML models with TensorFlow and NLP tools. LLM integrations and AI-powered applications.",
    tags: ["TensorFlow", "NLP", "LLMs", "Langchain"],
  },
  {
    icon: Users,
    title: "Project Management",
    desc: "Cross-functional team coordination. Co-Executive Producer for TEDxMGMU, overseeing multiple teams end-to-end.",
    tags: ["Leadership", "TEDx", "Agile"],
  },
];

/** Infinite marquee row — tech / stack labels (icon + name) */
const HERO_TICKER = [
  { name: "React", icon: Hexagon },
  { name: "Next.js", icon: Triangle },
  { name: "Node.js", icon: Command },
  { name: "MongoDB", icon: Gem },
  { name: "TypeScript", icon: Cpu },
  { name: "Python", icon: Ghost },
] as const;

const PROJECTS = [
  {
    title: "CodeIt",
    desc: "Web-based platform for developers to write and compile code in multiple languages with real-time collaboration.",
    tags: ["React", "Node.js", "WebSockets"],
    href: "https://github.com/atharva020/CodeIt",
    icon: Terminal,
  },
  {
    title: "Conversation Analysis",
    desc: "AI-powered tool that processes call recordings to analyze sentiment, emotion, transcription, and speaker interactions.",
    tags: ["AI/ML", "NLP", "Python"],
    href: "https://conversation-analysis.onrender.com",
    icon: Brain,
  },
  {
    title: "E-Com WebApp",
    desc: "Feature-rich shopping system with secure payment integration, user authentication, cart management, and order tracking.",
    tags: ["React", "Node.js", "MongoDB"],
    href: "https://github.com/atharva020/E-Com-ReactApp.git",
    icon: Globe,
  },
  {
    title: "Zomato Clone",
    desc: "React-based Zomato UI clone with restaurant listings, menu displays, and food ordering flow. Responsive design with styled-components.",
    tags: ["React", "Styled-Components", "REST API"],
    href: "https://zomato-ui-clone.onrender.com",
    icon: Layers,
  },
];

// ── COMPONENTS ────────────────────────────────────────────────────────────────

const Pill = ({ label }: { label: string }) => (
  <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 border-b border-zinc-700 pb-px">
    {label}
  </span>
);

const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
    {children}
  </p>
);

// ── HERO ──────────────────────────────────────────────────────────────────────

function Hero() {
  /* Duplicate once so translateX(-50%) loops the marquee seamlessly */
  const tickerTrack = [...HERO_TICKER, ...HERO_TICKER];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-zinc-950"
    >
      {/* Layered CSS background — grid + radial glow + grain */}
      <div className="absolute inset-0 z-0 hero-bg" aria-hidden>
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 hero-aurora" />
        <div className="absolute inset-0 hero-grain" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-zinc-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-32 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7 space-y-8">
            <div
              className="animate-fade-in delay-100"
              style={{ animationFillMode: "both" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  Full Stack Portfolio
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                </span>
              </div>
            </div>

            <h1
              className="animate-fade-in delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-medium tracking-tighter leading-[0.92]"
              style={{ animationFillMode: "both" }}
            >
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-br from-white via-zinc-200 to-amber-300/80 bg-clip-text text-transparent">
                Atharva Chirde
              </span>
              <br />
              <span className="text-white">Full Stack Developer</span>
            </h1>

            <p
              className="animate-fade-in delay-300 max-w-lg text-lg text-zinc-300 leading-relaxed"
              style={{ animationFillMode: "both" }}
            >
              Fond of creating web application designs and bringing them to life
              with code — scalable apps, secure auth, and AI-powered tools when
              it fits.
            </p>

            <div
              className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4"
              style={{ animationFillMode: "both" }}
            >
              <a
                href="/files/atharva_resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-100 active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
              >
                <Play className="w-4 h-4 fill-current" />
                View portfolio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Social links */}
            <div
              className="animate-fade-in delay-500 flex flex-wrap items-center gap-5"
              style={{ animationFillMode: "both" }}
            >
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                Find me on
              </span>
              <div className="h-px flex-1 max-w-[40px] bg-white/10" />
              {[
                {
                  href: "https://github.com/atharva020",
                  Icon: GithubIcon,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/atharva-chirde",
                  Icon: LinkedinIcon,
                  label: "LinkedIn",
                },
                {
                  href: "https://x.com/atharva_chirde",
                  Icon: TwitterIcon,
                  label: "Twitter",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all hover:bg-white/10 hover:text-white hover:border-white/20"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — glassmorphism stats card + marquee ticker card */}
          <div
            className="animate-fade-in delay-500 lg:col-span-5 space-y-6"
            style={{ animationFillMode: "both" }}
          >
            {/* Stats card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
              <div className="pointer-events-none absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Currently</div>
                      <div className="text-sm font-medium text-white">Building things end-to-end</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600">v26.05</span>
                </div>

                <div className="h-px w-full bg-white/[0.08]" />

                <div className="grid grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
                  {[
                    { val: "4+",    lbl: "Shipped" },
                    { val: "MERN",  lbl: "Stack" },
                    { val: "AI/ML", lbl: "Focus" },
                  ].map(({ val, lbl }) => (
                    <div
                      key={lbl}
                      className="bg-zinc-950/40 px-3 py-3 flex flex-col items-center justify-center gap-0.5"
                    >
                      <span className="text-base font-semibold text-white tracking-tight sm:text-lg">{val}</span>
                      <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">{lbl}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    ACTIVE
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    OPEN TO WORK
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee ticker card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-8 backdrop-blur-xl">
              <h3 className="mb-6 px-8 text-sm font-medium text-zinc-400">
                Stack &amp; tools I use
              </h3>
              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                  {tickerTrack.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={`${item.name}-${i}`}
                        className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                      >
                        <Icon className="h-6 w-6 text-white shrink-0" />
                        <span className="text-lg font-bold text-white tracking-tight">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── OBJECTIVE ─────────────────────────────────────────────────────────────────

const EXPERTISE_TAGS = [
  "React", "Next.js", "Node.js", "TypeScript",
  "MongoDB", "Python", "TensorFlow", "Langchain",
  "REST APIs", "Auth", "Git", "Agile",
];

const SPEC_ROWS = [
  { key: "role",      val: "Full Stack Developer"                },
  { key: "seeking",   val: "SWE roles / freelance collab"        },
  { key: "building",  val: "products with real users"            },
  { key: "learning",  val: "distributed systems, LLM fine-tuning"},
  { key: "available", val: "true"                                },
];

function Objective() {
  return (
    <section
      id="objective"
      className="relative py-24 px-6 lg:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Vertical rule accent — left edge */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.04]"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl">
        <SectionEyebrow>Career Objective</SectionEyebrow>

        {/* Main two-col layout */}
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">

          {/* LEFT — statement text, 3/5 width */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Large quote-style statement */}
            <div className="relative pl-5 border-l-2 border-white/20">
              <p className="text-2xl sm:text-3xl font-medium text-white leading-[1.35] tracking-tight">
                I build things that work on both ends —{" "}
                <span className="text-zinc-400">
                  interfaces people enjoy using
                </span>{" "}
                and servers that don&apos;t fall over at 3 AM.
              </p>
            </div>

            <div className="space-y-3 text-[15px] leading-relaxed text-zinc-400 max-w-lg">
              <p>
                Started with curiosity, stayed for the craft. I&apos;m a full-stack developer who cares equally about clean APIs and crisp UIs. I&apos;ve shipped production apps in the MERN stack, wired up AI pipelines with TensorFlow and Langchain, and co-produced TEDxMGMU — which taught me that shipping software and running live events aren&apos;t that different.
              </p>
              <p>
                Currently looking for a role or collaboration where I can own features end-to-end, work on real problems, and keep learning fast.
              </p>
            </div>

            {/* Expertise tags — styled like inline <Tag /> elements */}
            <div className="flex flex-wrap gap-2 pt-2">
              {EXPERTISE_TAGS.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-zinc-400 before:content-['<'] before:text-zinc-700 after:content-['/>'] after:text-zinc-700 hover:text-white hover:before:text-zinc-500 hover:after:text-zinc-500 transition-colors cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — monospace spec list, 2/5 width */}
          <div
            className="lg:col-span-2 self-start"
            style={{ fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace" }}
          >
            {/* Mini header */}
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.18em] mb-4">
              // atharva.config.ts
            </p>

            <div className="space-y-0">
              {/* Opening brace */}
              <div className="text-[12px] text-zinc-500 pb-1">export default {"{"}</div>

              {SPEC_ROWS.map(({ key, val }) => (
                <div
                  key={key}
                  className="obj-line group flex items-baseline gap-0 text-[12px] leading-7 pl-4"
                >
                  <span className="text-sky-400 shrink-0">{key}</span>
                  <span className="text-zinc-600 shrink-0">:&nbsp;</span>
                  <span
                    className={
                      val === "true"
                        ? "text-emerald-400"
                        : key === "role"
                        ? "text-white font-medium"
                        : "text-zinc-300"
                    }
                  >
                    {val === "true" ? val : `"${val}"`}
                  </span>
                  <span className="text-zinc-700 shrink-0">,</span>
                </div>
              ))}

              {/* Closing brace */}
              <div className="text-[12px] text-zinc-500 pt-1">{"}"}</div>
            </div>

            {/* Thin divider + status */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── ABOUT / COMMIT-LOG ───────────────────────────────────────────────────────

const COMMITS = [
  { hash: "a3f92c1", type: "feat",     msg: "launch TEDxMGMU production pipeline — co-exec 6 teams" },
  { hash: "7d8e441", type: "feat",     msg: "ship Conversation Analysis — AI sentiment + speaker diarisation" },
  { hash: "2bc154f", type: "feat",     msg: "deploy CodeIt — multi-lang compile + real-time collab" },
  { hash: "f019ab3", type: "feat",     msg: "release E-Com WebApp — auth, cart, Stripe integration" },
  { hash: "c82d77e", type: "refactor", msg: "migrate stack → MERN + Next.js, add TensorFlow pipelines" },
  { hash: "0e6a912", type: "init",     msg: "init: B.E. Computer Engineering @ MGM University" },
];

const TYPE_COLOR: Record<string, string> = {
  feat:     "text-emerald-400",
  refactor: "text-sky-400",
  fix:      "text-amber-400",
  init:     "text-zinc-500",
};

function About() {
  return (
    <section id="about" className="relative py-24 px-6 lg:px-12 border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl">

        {/* Two-col header */}
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow>About</SectionEyebrow>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white leading-none">
              git log --author=Atharva
            </h2>
          </div>
          <p className="text-sm text-zinc-500 sm:text-right max-w-xs">
            Commit history of what matters. Newest first.
          </p>
        </div>

        {/* Terminal log */}
        <div
          className="rounded-2xl border border-white/[0.07] bg-zinc-950/80 overflow-hidden"
          style={{ fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace" }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <span className="ml-4 text-[11px] text-zinc-600 cursor-blink">
              ~/atharva-chirde — zsh
            </span>
          </div>

          {/* Prompt line */}
          <div className="px-5 pt-4 pb-2 text-[12px] text-zinc-500">
            <span className="text-emerald-400">atharva</span>
            <span className="text-zinc-600">@</span>
            <span className="text-sky-400">portfolio</span>
            <span className="text-zinc-600"> % </span>
            <span className="text-white">git log --oneline --all</span>
          </div>

          {/* Commit rows */}
          <div className="px-5 pb-5 space-y-0.5">
            {COMMITS.map(({ hash, type, msg }) => (
              <div key={hash} className="commit-row flex items-baseline gap-3 py-1.5 border-b border-white/[0.03] last:border-0 group">
                <span className="shrink-0 text-[11px] text-amber-500/70 font-medium w-14">{hash}</span>
                <span className={`shrink-0 text-[10px] font-semibold uppercase tracking-wider w-14 ${TYPE_COLOR[type] ?? "text-zinc-500"}`}>
                  {type}
                </span>
                <span className="text-[13px] text-zinc-300 leading-snug group-hover:text-white transition-colors">
                  {msg}
                </span>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}

// ── SKILLS ────────────────────────────────────────────────────────────────────

function Skills() {
  const [active, setActive] = useState(0);
  const cur = SKILLS[active];
  const ActiveIcon = cur.icon;

  return (
    <section id="skills" className="relative py-28 px-6 lg:px-12">
      <div className="mx-auto max-w-5xl">

        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow>Skill-Set</SectionEyebrow>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white leading-[1]">
              What I work with
            </h2>
          </div>
          <p className="max-w-xs text-sm text-zinc-500 sm:text-right">
            Full-stack, AI/ML, and cross-functional leadership — the whole stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left rail — selectable index */}
          <ul className="lg:col-span-5 border-y border-white/[0.06] divide-y divide-white/[0.06]">
            {SKILLS.map(({ icon: Icon, title }, i) => {
              const on = i === active;
              return (
                <li key={title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`w-full flex items-center gap-4 py-4 text-left transition-colors ${
                      on ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-mono tabular-nums w-7 transition-colors ${
                        on ? "text-amber-400" : "text-zinc-700"
                      }`}
                      style={{ fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 text-sm font-medium tracking-tight">{title}</span>
                    <ChevronRight
                      className={`h-3.5 w-3.5 transition-all ${
                        on ? "opacity-100 translate-x-0 text-white" : "opacity-0 -translate-x-2"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right pane — active skill detail */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 lg:self-start">
            <div
              key={active}
              className="skill-detail relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-amber-400/[0.04] blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] ring-1 ring-white/10">
                    <ActiveIcon className="h-5 w-5 text-white" />
                  </div>
                  <span
                    className="text-[10px] uppercase tracking-[0.2em] text-zinc-600"
                    style={{ fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace" }}
                  >
                    {String(active + 1).padStart(2, "0")} / {String(SKILLS.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-medium tracking-tight text-white mb-3">
                  {cur.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 mb-7">{cur.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {cur.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── WORK ─────────────────────────────────────────────────────────────────────

function Work() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="relative py-28 px-6 lg:px-12">
      <div className="mx-auto max-w-5xl">

        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow>Selected work</SectionEyebrow>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white leading-[1]">
              Things I&apos;ve shipped
            </h2>
          </div>
          <a
            href="https://github.com/atharva020"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-white"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            All projects on GitHub
            <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Accordion — one row expanded at a time */}
        <div className="border-t border-white/[0.06]">
          {PROJECTS.map(({ title, desc, tags, href, icon: Icon }, i) => {
            const on = i === active;
            return (
              <div
                key={title}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`group relative cursor-pointer border-b border-white/[0.06] transition-all duration-300 ${
                  on ? "py-8" : "py-5"
                }`}
              >
                {/* Active accent line */}
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-amber-400 transition-opacity ${
                    on ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="flex items-center gap-5 sm:gap-6 pl-4">
                  <span
                    className={`w-8 text-[11px] font-mono tabular-nums transition-colors ${
                      on ? "text-amber-400" : "text-zinc-700"
                    }`}
                    style={{ fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className={`h-5 w-5 shrink-0 transition-colors ${
                      on ? "text-white" : "text-zinc-600 group-hover:text-zinc-400"
                    }`}
                  />
                  <h3
                    className={`flex-1 font-medium tracking-tight transition-all duration-300 ${
                      on
                        ? "text-2xl sm:text-3xl text-white"
                        : "text-base sm:text-lg text-zinc-400 group-hover:text-zinc-200"
                    }`}
                  >
                    {title}
                  </h3>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`shrink-0 inline-flex items-center gap-1.5 text-xs text-zinc-500 transition-all hover:text-white ${
                      on ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                    }`}
                  >
                    Visit
                    <MoveUpRight className="w-3 h-3" />
                  </a>
                </div>

                {on && (
                  <div className="work-detail mt-5 grid grid-cols-1 gap-5 pl-4 sm:grid-cols-3 sm:gap-8 sm:pl-[68px]">
                    <p className="sm:col-span-2 text-sm leading-relaxed text-zinc-400 max-w-xl">
                      {desc}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end content-start">
                      {tags.map((t) => (
                        <Pill key={t} label={t} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── GIT GRAPH ─────────────────────────────────────────────────────────────────

function GitGraph() {
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null);
  const [contribTotal, setContribTotal] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [chartRes, statsRes] = await Promise.all([
          fetch("/api/github-chart"),
          fetch("/api/github-contributions"),
        ]);
        if (!cancelled && chartRes.ok) {
          setSvgMarkup(await chartRes.text());
        }
        if (!cancelled && statsRes.ok) {
          const j = (await statsRes.json()) as { totalAllTime: number | null };
          if (typeof j.totalAllTime === "number") setContribTotal(j.totalAllTime);
        }
      } catch {
        /* ignore */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative py-16 px-6 lg:px-12 border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow>Activity</SectionEyebrow>
            <h2 className="text-2xl font-medium tracking-tighter text-white">
              GitHub contributions
            </h2>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            {contribTotal !== null && (
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-600">
                  Total contributions
                </div>
                <div className="text-3xl font-semibold tabular-nums text-white tracking-tight">
                  {contribTotal.toLocaleString()}
                </div>
                <div className="text-[11px] text-zinc-600 mt-0.5 max-w-[220px] sm:text-right">
                  All-time on public graph (same metric as heatmap)
                </div>
              </div>
            )}
            <a
              href="https://github.com/atharva020"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-white"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              github.com/atharva020
              <MoveUpRight className="w-3 h-3 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-white/[0.08] bg-zinc-950 overflow-hidden p-4 sm:p-6">
          {svgMarkup ? (
            <div
              className="github-contrib-chart"
              dangerouslySetInnerHTML={{ __html: svgMarkup }}
            />
          ) : (
            <div className="h-[104px] w-full animate-pulse rounded bg-white/[0.04]" />
          )}
        </div>

        {/* Pinned repos strip */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { name: "Call-Analysis",  lang: "Python",     href: "https://github.com/atharva020/Call-Analysis"  },
            { name: "CodeIt",         lang: "JavaScript",  href: "https://github.com/atharva020/CodeIt"         },
            { name: "E-com-Site",     lang: "JavaScript",  href: "https://github.com/atharva020/E-com-Site"     },
            { name: "zomato_clone",   lang: "JavaScript",  href: "https://github.com/atharva020/zomato_clone"   },
            { name: "RAG-Pipeline",   lang: "TypeScript",  href: "https://github.com/atharva020/RAG-Pipeline"   },
          ].map(({ name, lang, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-white/[0.06] rounded-lg px-4 py-3 transition-colors hover:border-white/[0.14] hover:bg-white/[0.02]"
              style={{ fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace" }}
            >
              <div>
                <div className="text-[12px] text-zinc-300 group-hover:text-white transition-colors">{name}</div>
                <div className="text-[10px] text-zinc-600 mt-0.5">{lang}</div>
              </div>
              <MoveUpRight className="w-3 h-3 text-zinc-700 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/myzylqob", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-28 px-6 lg:px-12 border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow>Contact</SectionEyebrow>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white leading-[1]">
              Let&apos;s build something
            </h2>
          </div>
          <p className="max-w-xs text-sm text-zinc-500 sm:text-right">
            Open to roles, freelance, and interesting collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">

          {/* Form — left 3 cols */}
          <form onSubmit={handleSubmit} className="lg:col-span-3">
            {/* Bordered form area */}
            <div className="border border-white/[0.08] rounded-2xl overflow-hidden divide-y divide-white/[0.08]">

              {/* Email row */}
              <div className="flex items-center gap-4 px-5 py-4 focus-within:bg-white/[0.02] transition-colors">
                <label className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600 w-16">
                  From
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent text-sm text-white placeholder-zinc-700 outline-none"
                />
              </div>

              {/* Message row */}
              <div className="flex items-start gap-4 px-5 py-4 focus-within:bg-white/[0.02] transition-colors">
                <label className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600 w-16 pt-0.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me what you're building or just say hi…"
                  className="flex-1 resize-none bg-transparent text-sm text-white placeholder-zinc-700 outline-none leading-relaxed"
                />
              </div>

              {/* Action row */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.015]">
                <span className="text-[10px] text-zinc-700 tabular-nums">
                  {status === "sent"
                    ? "✓ Sent successfully"
                    : status === "error"
                    ? "Something went wrong — try again"
                    : "Reply within 24 h"}
                </span>
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-white/10 hover:border-white/25 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    "Sending…"
                  ) : status === "sent" ? (
                    "Sent!"
                  ) : (
                    <>
                      Send message
                      <Send className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Socials — right 2 cols */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-10">
            <div className="space-y-4">
              {[
                { href: "https://github.com/atharva020",            label: "GitHub",     sub: "github.com/atharva020", Icon: GithubIcon   },
                { href: "https://linkedin.com/in/atharva-chirde",   label: "LinkedIn",   sub: "atharva-chirde",        Icon: LinkedinIcon  },
                { href: "https://x.com/atharva_chirde",             label: "X / Twitter",sub: "@atharva_chirde",       Icon: TwitterIcon   },
                { href: "https://leetcode.com/u/atharva_chirde/",   label: "LeetCode",   sub: "atharva_chirde",        Icon: Code2         },
              ].map(({ href, label, sub, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/[0.06] pb-4 transition-colors hover:border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-zinc-600 transition-colors group-hover:text-white" />
                    <div>
                      <div className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                        {label}
                      </div>
                      <div className="text-[10px] text-zinc-600">{sub}</div>
                    </div>
                  </div>
                  <MoveUpRight className="w-3.5 h-3.5 text-zinc-700 transition-all group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>

            <p className="text-xs text-zinc-700">
              © {new Date().getFullYear()} Atharva Chirde
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── NAV ───────────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-xl bg-zinc-950/70 border-b border-white/[0.06]">
      <span className="text-sm font-semibold tracking-tight text-white">
        Atharva Chirde
      </span>

      {/* Desktop nav */}
      <ul className="hidden sm:flex items-center gap-1">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider text-zinc-400 transition-colors hover:text-white hover:bg-white/[0.06]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Hire me chip */}
      <a
        href="#contact"
        className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-white/10"
      >
        Hire me
        <ChevronRight className="w-3 h-3" />
      </a>

      {/* Mobile hamburger */}
      <button
        className="sm:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`h-px w-5 bg-white transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`h-px w-5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
        <span className={`h-px w-5 bg-white transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 border-b border-white/[0.06] bg-zinc-950/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2 sm:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── ROOT ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <div className="relative w-full bg-zinc-950 text-white overflow-x-hidden font-sans">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.7s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        html { scroll-behavior: smooth; }

        /* ── Hero background layers ── */
        .hero-bg { background: radial-gradient(ellipse at 70% 20%, #16161b 0%, #09090b 65%); }
        @keyframes auroraDrift {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50%      { transform: translate3d(-3%, 2%, 0) scale(1.08); }
        }
        .hero-aurora {
          background:
            radial-gradient(40% 50% at 20% 30%, rgba(251, 191, 36, 0.07), transparent 70%),
            radial-gradient(45% 45% at 85% 70%, rgba(56, 189, 248, 0.06), transparent 70%),
            radial-gradient(35% 40% at 50% 50%, rgba(168, 85, 247, 0.05), transparent 70%);
          animation: auroraDrift 18s ease-in-out infinite;
          filter: blur(40px);
        }
        .hero-glow {
          background:
            radial-gradient(circle at 78% 28%, rgba(251, 191, 36, 0.10), transparent 45%),
            radial-gradient(circle at 18% 82%, rgba(56, 189, 248, 0.07), transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(168, 85, 247, 0.05), transparent 55%);
          filter: blur(2px);
        }
        @keyframes detailFade {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .skill-detail { animation: detailFade 0.3s ease-out; }
        .work-detail  { animation: detailFade 0.35s ease-out; }

        .hero-grain {
          opacity: 0.06;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        input:-webkit-autofill,
        textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 100px #09090b inset !important;
          -webkit-text-fill-color: #fff !important;
        }

        /* ── About / commit-log section ── */
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .cursor-blink::after {
          content: '▋';
          margin-left: 2px;
          animation: cursorBlink 1s step-start infinite;
          color: #4ade80;
        }

        @keyframes commitReveal {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .commit-row {
          opacity: 0;
          animation: commitReveal 0.4s ease-out forwards;
        }
        .commit-row:nth-child(1)  { animation-delay: 0.1s; }
        .commit-row:nth-child(2)  { animation-delay: 0.3s; }
        .commit-row:nth-child(3)  { animation-delay: 0.5s; }
        .commit-row:nth-child(4)  { animation-delay: 0.7s; }
        .commit-row:nth-child(5)  { animation-delay: 0.9s; }
        .commit-row:nth-child(6)  { animation-delay: 1.1s; }

        /* ── Objective section ── */
        @keyframes lineIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .obj-line {
          opacity: 0;
          animation: lineIn 0.35s ease-out forwards;
        }
        .obj-line:nth-child(1)  { animation-delay: 0.05s; }
        .obj-line:nth-child(2)  { animation-delay: 0.10s; }
        .obj-line:nth-child(3)  { animation-delay: 0.15s; }
        .obj-line:nth-child(4)  { animation-delay: 0.20s; }
        .obj-line:nth-child(5)  { animation-delay: 0.25s; }
        .obj-line:nth-child(6)  { animation-delay: 0.30s; }
        .obj-line:nth-child(7)  { animation-delay: 0.35s; }
        .obj-line:nth-child(8)  { animation-delay: 0.40s; }
        .obj-line:nth-child(9)  { animation-delay: 0.45s; }
        .obj-line:nth-child(10) { animation-delay: 0.50s; }
        .obj-line:nth-child(11) { animation-delay: 0.55s; }
        .obj-line:nth-child(12) { animation-delay: 0.60s; }
        .obj-line:nth-child(13) { animation-delay: 0.65s; }
        .obj-line:nth-child(14) { animation-delay: 0.70s; }
        .obj-line:nth-child(15) { animation-delay: 0.75s; }
        .obj-line:nth-child(16) { animation-delay: 0.80s; }
        .obj-line:nth-child(17) { animation-delay: 0.85s; }
        .obj-line:nth-child(18) { animation-delay: 0.90s; }
        .obj-line:nth-child(19) { animation-delay: 0.95s; }
        .obj-line:nth-child(20) { animation-delay: 1.00s; }

        /* Contribution heatmap — colours set server-side, no filter */
        .github-contrib-chart {
          width: 100%;
          overflow-x: auto;
        }
        .github-contrib-chart svg {
          display: block !important;
          width: 100% !important;
          min-width: 480px;
          height: auto !important;
        }
      `}</style>

      <Navbar />
      <Hero />
      <Objective />
      <About />
      <Skills />
      <Work />
      <GitGraph />
      <Contact />
    </div>
  );
}
