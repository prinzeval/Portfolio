import { useState, useEffect, useRef, createContext, useContext } from "react";
import { ArrowUpRight, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Button } from "@heroui/react/button";
import { Card, CardContent, CardFooter } from "@heroui/react/card";
import { Chip } from "@heroui/react/chip";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import portrait from "./assets/portrait.jpg";
import project1 from "./assets/project-1.jpg";
import project2 from "./assets/project-2.jpg";
import project3 from "./assets/project-3.jpg";
import project4 from "./assets/project-4.jpg";
import blog1 from "./assets/blog-1.jpg";
import blog2 from "./assets/blog-2.jpg";
import meme from "./assets/meme.png";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { title: "Fullstack Websites", items: ["Web Apps", "React & Node.js", "API Integrations"] },
  { title: "Mobile Applications", items: ["React Native & Expo", "iOS & Android Apps", "Mobile UI/UX"] },
  { title: "AI Solutions & SaaS", items: ["LLM Integrations", "AI SaaS Products", "Custom Workflows"] },
  { title: "Web Automations", items: ["High-Speed Scraping", "Data Harvesting", "ETL Automation"] },
];

const PROJECTS = [
  { name: "KORASTAKE", tag: "Decentralized Staking Protocol", img: project1 },
  { name: "BLINXS", tag: "Web3 Linking & Messaging System", img: project2 },
  { name: "VIBE TRADING", tag: "Automated Algorithmic Trading Platform", img: project3 },
  { name: "SABI VENDOR", tag: "Local Vendor & Inventory SaaS", img: project4 },
  { name: "AIRLINE SCRAPER", tag: "High-Speed Flight Data Extraction Engine", img: project1 },
  { name: "MOVIE WEBSITE", tag: "On-Demand Streaming & Search Interface", img: project2 },
  { name: "WHATSAPP CHATBOT", tag: "AI-Powered Conversational CRM Agent", img: project3 },
];

const POSTS = [
  {
    date: "Jan 14, 2026",
    title: "Scaling High-Speed Data Scrapers",
    desc: "How I built automated extraction engines to harvest airline and retail inventory at scale without getting blocked.",
    img: blog1,
  },
  {
    date: "Mar 2, 2026",
    title: "Building Valendata: Script to SaaS",
    desc: "Turning custom Python automation scripts into a robust subscription intelligence platform for real-time market data.",
    img: blog2,
  },
];

// ---------------------------------------------------------------------------
const CardCtx = createContext(null);

function CardProvider({ children }) {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const [bounds, setBounds] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const measure = () => {
      const hr = heroRef.current?.getBoundingClientRect();
      const ar = aboutRef.current?.getBoundingClientRect();
      if (!hr || !ar || hr.width === 0 || ar.width === 0) return;

      const ap = ar.top + window.scrollY;
      const t = ap - (window.innerHeight - ar.height) / 2;

      const next = {
        left: hr.left + window.scrollX,
        top: hr.top + window.scrollY,
        width: hr.width,
        height: hr.height,
        dx: ar.left - hr.left,
        dy: ar.top - hr.top,
        scale: ar.width / hr.width,
        maxScroll: t > 0 ? t : window.innerHeight,
      };

      setBounds((prev) => {
        if (prev &&
          prev.left === next.left && prev.top === next.top &&
          prev.width === next.width && prev.height === next.height &&
          prev.dx === next.dx && prev.dy === next.dy && prev.scale === next.scale
        ) return prev;
        return next;
      });
    };

    [50, 200, 600, 1200].forEach((d) => setTimeout(measure, d));
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <CardCtx.Provider value={{ heroRef, aboutRef, bounds, isMobile, theme, toggleTheme }}>
      {children}
      {bounds && !isMobile && <AnimatedCard bounds={bounds} />}
    </CardCtx.Provider>
  );
}

function AnimatedCard({ bounds }) {
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, bounds.maxScroll], [0, 1], { clamp: true });

  const shiftX = (bounds.width * (bounds.scale - 1)) / 2;
  const shiftY = (bounds.height * (bounds.scale - 1)) / 2;
  const x = useTransform(progress, (p) => bounds.dx * p + shiftX * p);
  const y = useTransform(progress, (p) => bounds.dy * p + shiftY * p);
  const scale = useTransform(progress, [0, 1], [1, bounds.scale]);
  const rotateY = useTransform(progress, [0, 1], [0, 180]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: bounds.left, top: bounds.top,
        width: bounds.width, height: bounds.height,
        x, y, scale, rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
        pointerEvents: "none",
        zIndex: 40,
      }}
    >
      <div style={{ backfaceVisibility: "hidden" }} className="absolute inset-0 overflow-hidden rounded-2xl border border-default-200 bg-background shadow-sm">
        <img src={portrait} alt="Portrait of Valentine" className="h-full w-full object-cover" />
      </div>
      <div style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }} className="absolute inset-0 overflow-hidden rounded-2xl border border-default-200 bg-background shadow-sm">
        <img src={portrait} alt="Portrait of Valentine back" className="h-full w-full object-cover" />
      </div>
    </motion.div>
  );
}

function HeroPlaceholder() {
  const { heroRef, bounds, isMobile } = useContext(CardCtx);
  const hideImages = bounds && !isMobile;
  return (
    <div
      ref={heroRef}
      className={`mt-10 w-40 aspect-[3/4] overflow-hidden rounded-2xl border sm:w-60 md:w-72 relative transition-colors duration-150 ${
        hideImages ? "border-transparent bg-transparent" : "border-default-200 bg-default-100"
      }`}
    >
      <img src={meme} alt="" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-150 ${hideImages ? "opacity-0" : "opacity-60"}`} />
      <img src={portrait} alt="Portrait" className={`relative z-10 h-full w-full object-cover transition-opacity duration-150 ${hideImages ? "opacity-0" : "opacity-100"}`} />
    </div>
  );
}

function AboutPlaceholder() {
  const { aboutRef, bounds, isMobile } = useContext(CardCtx);
  const hideImages = bounds && !isMobile;
  return (
    <div
      ref={aboutRef}
      className={`w-full max-w-[240px] sm:max-w-xs aspect-[3/4] overflow-hidden rounded-2xl border relative transition-colors duration-150 ${
        hideImages ? "border-transparent bg-transparent" : "border-default-200 bg-default-100"
      }`}
    >
      <img src={meme} alt="" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-150 ${hideImages ? "opacity-0" : "opacity-60"}`} />
      <img src={portrait} alt="Portrait" className={`relative z-10 h-full w-full object-cover transition-opacity duration-150 ${hideImages ? "opacity-0" : "opacity-100"}`} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Nav — custom fixed pill nav with HeroUI Button
// ---------------------------------------------------------------------------
function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(CardCtx);
  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-foreground px-5 py-2.5 text-background shadow-lg">
        <a href="#top" className="font-display text-xl font-bold tracking-tight">
          Valentine
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="text-sm font-medium text-background/70 transition-colors hover:text-background">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            onPress={toggleTheme}
            variant="solid"
            className="flex items-center justify-center p-2 rounded-full text-sm bg-background text-foreground w-9 h-9 border border-divider hover:opacity-85 transition-opacity"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            href="/resume.pdf"
            download="Valentine_Onuoha_Resume.pdf"
            variant="solid"
            className="hidden sm:flex font-semibold border border-background/20 text-background hover:bg-background/10 px-4 py-2 rounded-full text-sm bg-transparent"
          >
            Download CV
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground sm:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-lg font-bold leading-none">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="mt-2 flex flex-col gap-1 rounded-2xl bg-foreground p-3 text-background sm:hidden"
          >
            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-background/80 hover:bg-background/10">
                {n.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
const HERO_WORDS = ["FULL", "STACK", "DEVELOPER"];

function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center pt-24 pb-8 px-4 sm:px-6">
      <span className="absolute left-4 bottom-6 font-display text-3xl font-extrabold sm:left-6 sm:bottom-8 sm:text-5xl">©2026</span>
      <span className="absolute right-4 bottom-6 font-display text-sm font-bold tracking-wider text-foreground sm:right-6 sm:bottom-8 sm:text-base bg-default-100/60 backdrop-blur-md px-4 py-2 rounded-full border border-divider">
        Current Time: <span className="text-primary font-mono ml-1">{time}</span>
      </span>

      <div className="text-center font-display text-[13vw] sm:text-[12vw] lg:text-[10vw] font-extrabold leading-[0.85] tracking-tighter">
        <div className="flex flex-wrap justify-center gap-x-[0.2em]">
          {HERO_WORDS.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>
      </div>

      <HeroPlaceholder />
    </section>
  );
}

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
function About() {
  return (
    <section id="about" className="border-t border-divider px-4 py-16 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-8 lg:gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col justify-start lg:justify-between gap-6 lg:gap-8">
          <AboutPlaceholder />
          <h2 className="font-display text-5xl font-extrabold tracking-tight sm:text-7xl">Hey!</h2>
        </div>
        <div className="space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80 sm:space-y-6 sm:text-xl">
          <p>
            I'm Valentine, a developer and data specialist based in Cyprus, currently building
            scalable web applications and automated data extraction systems.
          </p>
          <p>
            I'm a software engineer with a strong focus on building modern, scalable, and
            conversion-driven web experiences.
          </p>
          <p>
            Over the years, I've created and shipped multiple SaaS products and web templates used by
            global customers.
          </p>
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <Button
              href="#contact"
              variant="solid"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all duration-150"
            >
              Get Started <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              href="/resume.pdf"
              download="Valentine_Onuoha_Resume.pdf"
              variant="bordered"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-divider px-6 py-3 text-sm font-semibold text-foreground hover:bg-default-100 transition-all duration-150"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Marquee
// ---------------------------------------------------------------------------
function Marquee() {
  const phrase = "From idea to launch. Clean, scalable fullstack websites, mobile apps, AI SaaS, and automated data engines built to run fast, stay simple, and perform in the real world.";
  return (
    <section className="overflow-hidden border-t border-divider py-10">
      <div className="flex w-max marquee-track gap-8 whitespace-nowrap">
        {[0, 1].map((k) => (
          <span key={k} className="font-display text-2xl font-bold tracking-tight text-foreground/40 sm:text-3xl">
            {phrase}
          </span>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Services — HeroUI Card grid
// ---------------------------------------------------------------------------
function Services() {
  return (
    <section id="services" className="border-t border-divider px-4 py-16 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 sm:mb-16 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Services</h2>
        <div className="flex flex-col">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="py-8 border-b border-divider last:border-b-0 flex flex-col gap-2"
            >
              <h3 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                {s.title}
              </h3>
              <p className="text-base text-foreground/50 leading-relaxed">
                {s.items.join("  •  ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Work — HeroUI Card with pressable hover
// ---------------------------------------------------------------------------
function Work() {
  return (
    <section id="work" className="border-t border-divider px-4 py-16 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Featured Projects</h2>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline text-foreground/70">
            View All Work <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <Card
              key={p.name}
              className="border border-divider shadow-none bg-content1 rounded-2xl hover:bg-content2 transition-colors cursor-pointer"
            >
              <CardContent className="p-0 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1160}
                  height={800}
                  loading="lazy"
                  className="aspect-[29/20] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </CardContent>
              <CardFooter className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="font-display text-lg font-bold">{p.name}</p>
                  <p className="text-sm text-foreground/50">{p.tag}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-foreground/40" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Thoughts
// ---------------------------------------------------------------------------
function Thoughts() {
  return (
    <section className="border-t border-divider px-4 py-16 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 sm:mb-12 font-display text-4xl font-extrabold tracking-tight sm:text-7xl">Thoughts</h2>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {POSTS.map((p) => (
            <Card
              key={p.title}
              className="relative aspect-[3/4] border border-divider shadow-none overflow-hidden rounded-2xl hover:bg-content2 transition-colors cursor-pointer"
            >
              <CardContent className="p-0">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-sm text-white/60">{p.date}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{p.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="relative aspect-[3/4] bg-foreground border-none shadow-none overflow-hidden rounded-2xl">
            <CardContent className="flex flex-col justify-between p-8">
              <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-background sm:text-4xl">
                AGI isn't magic. It's just an LLM with agentic loops, custom skills, and API access to rewrite itself.
              </h3>
              <Button
                href="#work"
                variant="bordered"
                className="w-fit border-background/30 text-background/80 hover:text-background px-5 py-2.5 rounded-full text-sm font-semibold bg-transparent"
              >
                View All Work <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Contact — HeroUI Input & Textarea
// ---------------------------------------------------------------------------
function Contact() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/prinzeval",
      icon: <FaGithub className="h-6 w-6 text-foreground" />,
      handle: "@prinzeval",
      desc: "Source code for scraper bots, SaaS templates, and algorithmic tools.",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/onuoha-valentine-b62447224/",
      icon: <FaLinkedin className="h-6 w-6 text-foreground" />,
      handle: "onuoha-valentine",
      desc: "Connect for professional collaborations, consulting, and system architecture.",
    },
    {
      name: "Twitter",
      href: "https://x.com/prinzeval",
      icon: <FaXTwitter className="h-6 w-6 text-foreground" />,
      handle: "@prinzeval",
      desc: "Sharing insights on automated web scrapers, data pipelines, and AGI thoughts.",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/prinzeval",
      icon: <FaInstagram className="h-6 w-6 text-foreground" />,
      handle: "@prinzeval",
      desc: "Sneak peeks at current builds, setups, and developer lifestyle updates.",
    },
  ];

  return (
    <section id="contact" className="border-t border-divider px-4 py-16 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
        <div>
          <h2 className="font-display text-4xl font-extrabold tracking-tighter sm:text-7xl">Let's talk.</h2>
          <p className="mt-6 max-w-md text-lg text-foreground/60 leading-relaxed">
            I'm always open to discussing new projects, high-speed automated scrapers, SaaS integrations, or consulting opportunities. Skip the forms—reach out directly where I'm active.
          </p>
          <a
            href="mailto:valentineallpowers@gmail.com"
            className="mt-8 inline-block font-display text-lg font-bold underline underline-offset-4 hover:text-primary transition-colors"
          >
            valentineallpowers@gmail.com
          </a>
        </div>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          {socials.map((s) => (
            <Card
              key={s.name}
              className="group border border-divider shadow-none bg-content1 rounded-2xl p-4 sm:p-6 flex flex-col justify-between min-h-[140px] sm:min-h-[180px] hover:bg-content2 transition-all duration-200 cursor-pointer"
              as="a"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent className="p-0 flex flex-col justify-between h-full w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="p-2 sm:p-3 bg-default-100 rounded-xl group-hover:bg-background transition-colors duration-200">
                    {s.icon}
                  </div>
                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/30 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                </div>
                <div className="mt-4 sm:mt-6">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="font-display text-base sm:text-xl font-bold">{s.name}</h3>
                    <span className="text-[10px] sm:text-xs text-foreground/50 font-mono">{s.handle}</span>
                  </div>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Footer — parallax name via Framer
// ---------------------------------------------------------------------------
function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-8%", "2%"]);

  return (
    <footer ref={ref} className="border-t border-divider px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-10 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <span className="font-display text-3xl font-extrabold tracking-tight">Valentine</span>
            <p className="mt-4 text-foreground/50">
              Full stack developer and data specialist building modern web applications and automated data pipelines.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground/40">Menu</p>
              <ul className="space-y-3 text-sm">
                {NAV.map((n) => (
                  <li key={n.label}>
                    <a href={n.href} className="text-foreground/70 transition-colors hover:text-foreground">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground/40">Social</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://github.com/prinzeval"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/onuoha-valentine-b62447224/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 transition-colors hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground/40">Contact</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:valentineallpowers@gmail.com" className="text-foreground/70 hover:text-foreground transition-colors">
                    valentineallpowers@gmail.com
                  </a>
                </li>
                <li className="text-foreground/40">Based in Cyprus</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <motion.div style={{ x }} className="footer-giant-name whitespace-nowrap">VALENTINE</motion.div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-divider pt-6 text-sm text-foreground/40 sm:flex-row">
          <p>© 2026 Valentine. All rights reserved.</p>
          <p>Designed &amp; built with intention.</p>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------
export default function Root() {
  return (
    <CardProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <Hero />
        <About />
        <Marquee />
        <Services />
        <Work />
        <Thoughts />
        <Contact />
        <Footer />
      </div>
    </CardProvider>
  );
}
