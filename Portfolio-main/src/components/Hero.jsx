import { useEffect, useRef, useState, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import introVideo from '../assets/sinega-intro.mp4';
import heroPoster from '../assets/about/hero-image.png';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

/* ─── Icon Components ─────────────────────────────────────────────────────── */
const GitHubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MailIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="social-glass-btn group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300"
    aria-label={label}
  >
    {children}
  </a>
);

/* ─── Feature Icons ───────────────────────────────────────────────────────── */
const featureIconPaths = {
  cloud:     <path d="M7 18h10a4 4 0 0 0 .4-8A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7Z" />,
  flow:      <path d="M7 5h10v5H7zM7 14h10v5H7zM12 10v4M5 7.5h2M17 16.5h2" />,
  model:     <><rect x="3.5" y="4" width="7" height="6" rx="1" /><rect x="13.5" y="14" width="7" height="6" rx="1" /><path d="M10.5 7h3v10h-3M7 10v3a4 4 0 0 0 4 4h2" /></>,
  security:  <><path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  reporting: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 5-6" /><circle cx="7" cy="15" r="1" /><circle cx="11" cy="11" r="1" /><circle cx="14" cy="13" r="1" /><circle cx="19" cy="7" r="1" /></>,
  lightning: <path d="M13 2 5 13h6l-1 9 9-12h-6l1-8Z" />,
};

const FeatureIcon = ({ kind, className = 'h-5 w-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {featureIconPaths[kind]}
  </svg>
);

/* ─── Data ────────────────────────────────────────────────────────────────── */
const featureItems = [
  { label: 'Service Cloud', icon: 'cloud' },
  { label: 'Flow Automation', icon: 'flow' },
  { label: 'Data Modeling', icon: 'model' },
  { label: 'Security', icon: 'security' },
  { label: 'Reporting', icon: 'reporting' },
];

const floatingCards = [
  {
    label: 'Service Cloud',
    icon: 'cloud',
    cls: 'hfc--cloud',
    delay: '0s',
    metric: '99%',
    metricLabel: 'Uptime',
  },
  {
    label: 'Flow Automation',
    icon: 'lightning',
    cls: 'hfc--flow',
    delay: '-1.5s',
    metric: '3×',
    metricLabel: 'Efficiency',
  },
  {
    label: 'Reporting',
    icon: 'reporting',
    cls: 'hfc--insights',
    delay: '-3s',
    metric: '150+',
    metricLabel: 'Reports',
  },
  {
    label: 'Security',
    icon: 'security',
    cls: 'hfc--trust',
    delay: '-4.5s',
    metric: 'A+',
    metricLabel: 'Grade',
  },
  {
    label: 'Data Modeling',
    icon: 'model',
    cls: 'hfc--model',
    delay: '-2.2s',
    metric: '50+',
    metricLabel: 'Objects',
  },
];

const platformLabels = ['AUTOMATION', 'SERVICE CLOUD', 'SECURITY', 'DATA', 'GROWTH'];

/* ─── Background Layers ───────────────────────────────────────────────────── */
const HeroBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {/* Layer 1 – base gradient */}
    <div className="absolute inset-0 bg-[linear-gradient(170deg,#FFFFFF_0%,#EDF6FF_30%,#D8EEFF_62%,#C4E4FF_100%)]" />

    {/* Layer 2 – large soft cloud blobs */}
    <div className="hero-bg-blob hero-bg-blob--a" />
    <div className="hero-bg-blob hero-bg-blob--b" />
    <div className="hero-bg-blob hero-bg-blob--c" />

    {/* Layer 3 – translucent elliptical rings */}
    <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="1100" cy="320" rx="460" ry="340" fill="none" stroke="rgba(23,105,209,0.18)" strokeWidth="1.2" />
      <ellipse cx="1100" cy="320" rx="370" ry="265" fill="none" stroke="rgba(23,105,209,0.12)" strokeWidth="1" />
      <ellipse cx="320" cy="680" rx="390" ry="280" fill="none" stroke="rgba(23,105,209,0.14)" strokeWidth="1" />
      <ellipse cx="720" cy="120" rx="260" ry="160" fill="none" stroke="rgba(55,145,231,0.10)" strokeWidth="1" />
    </svg>

    {/* Layer 4 – blurred spheres */}
    <div className="hero-depth-sphere hero-depth-sphere--tl" />
    <div className="hero-depth-sphere hero-depth-sphere--br" />
    <div className="hero-depth-sphere hero-depth-sphere--mid" />

    {/* Layer 5 – glow streaks */}
    <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 1440 900" preserveAspectRatio="none">
      <path d="M-60 610 C160 520 320 580 520 510 C720 440 840 470 1010 390 C1180 310 1320 350 1500 250" fill="none" stroke="url(#streakGrad1)" strokeWidth="2" />
      <path d="M-80 690 C150 615 310 660 500 590 C750 500 900 560 1090 475 C1250 404 1350 430 1510 360" fill="none" stroke="url(#streakGrad2)" strokeWidth="2.5" />
      <path d="M100 820 C300 760 480 800 680 730 C890 655 1060 700 1260 620 C1380 570 1440 560 1520 520" fill="none" stroke="rgba(23,105,209,0.08)" strokeWidth="1.5" />
      <defs>
        <linearGradient id="streakGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(23,105,209,0.04)" />
          <stop offset="40%" stopColor="rgba(55,145,231,0.18)" />
          <stop offset="100%" stopColor="rgba(23,105,209,0.04)" />
        </linearGradient>
        <linearGradient id="streakGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.22)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
        </linearGradient>
      </defs>
    </svg>

    {/* Particles */}
    <div className="hero-particles" aria-hidden="true">
      <span /><span /><span /><span /><span /><span /><span /><span />
    </div>
  </div>
);

/* ─── Cloud decorative clusters ──────────────────────────────────────────── */
const CloudCluster = ({ className }) => (
  <div className={`hero-cloud-cluster pointer-events-none absolute ${className}`} aria-hidden="true">
    <span className="absolute bottom-0 left-8 h-16 w-32 rounded-full bg-white/70 blur-sm" />
    <span className="absolute bottom-4 left-0 h-12 w-18 rounded-full bg-white/65 blur-sm" />
    <span className="absolute bottom-6 left-20 h-20 w-24 rounded-full bg-white/75 blur-[2px]" />
    <span className="absolute bottom-2 left-36 h-14 w-24 rounded-full bg-[#EAF4FF]/80 blur-sm" />
  </div>
);

/* ─── Floating Card ───────────────────────────────────────────────────────── */
const FloatingCard = ({ label, icon, cls, delay, metric, metricLabel }) => (
  <div
    className={`hero-float-card ${cls} pointer-events-none`}
    style={{ '--float-delay': delay }}
    aria-hidden="true"
  >
    <div className="hero-float-card-icon">
      <FeatureIcon kind={icon} className="h-4 w-4" />
    </div>
    <div className="hero-float-card-body">
      <span className="hero-float-card-label">{label}</span>
      <span className="hero-float-card-metric">
        <strong>{metric}</strong> {metricLabel}
      </span>
    </div>
  </div>
);

/* ─── 3D Platform ─────────────────────────────────────────────────────────── */
const Platform = () => (
  <div className="hero-platform pointer-events-none absolute inset-x-[2%] bottom-0 z-[1]" aria-hidden="true">
    {/* Outer ring */}
    <div className="hero-plat-ring hero-plat-ring--outer" />
    {/* Mid ring – rotating */}
    <div className="hero-plat-ring hero-plat-ring--mid" />
    {/* Inner surface */}
    <div className="hero-plat-surface" />
    {/* Lip */}
    <div className="hero-plat-lip" />
    {/* Labels */}
    <span className="hero-plat-label hero-plat-label--l">SERVICE CLOUD · AUTOMATION</span>
    <span className="hero-plat-label hero-plat-label--r">SECURITY · DATA</span>
    {/* Glow spot */}
    <div className="hero-plat-glow" />
  </div>
);

/* ─── Orbit rings ─────────────────────────────────────────────────────────── */
const OrbitRings = () => (
  <svg
    className="hero-orbit pointer-events-none absolute bottom-8 right-1/2 text-[#1769D1]"
    viewBox="0 0 640 640"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="320" cy="320" r="280" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="600 220" />
    <circle cx="320" cy="320" r="225" stroke="currentColor" strokeOpacity="0.20" strokeWidth="1.5" strokeDasharray="420 190" />
    <circle cx="320" cy="320" r="160" stroke="currentColor" strokeOpacity="0.13" strokeWidth="1" strokeDasharray="280 130" />
    <circle cx="320" cy="320" r="100" stroke="currentColor" strokeOpacity="0.10" strokeWidth="1" strokeDasharray="160 90" />
  </svg>
);

/* ─── Atmosphere (halo, rings, orbs) ─────────────────────────────────────── */
const Atmosphere = () => (
  <div className="hero-atmosphere pointer-events-none absolute inset-0" aria-hidden="true">
    <span className="hero-halo" />
    <span className="hero-ring hero-ring--one" />
    <span className="hero-ring hero-ring--two" />
    <span className="hero-ring hero-ring--three" />
    <span className="hero-orb hero-orb--one" />
    <span className="hero-orb hero-orb--two" />
    <span className="hero-orb hero-orb--three" />
    <span className="hero-orb hero-orb--four" />
  </div>
);

/* ─── Main Hero Component ─────────────────────────────────────────────────── */
const Hero = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const reduceMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  /* Init AOS */
  useEffect(() => {
    AOS.init({
      duration: reduceMotion ? 1 : 780,
      once: true,
      easing: 'ease-out',
      offset: reduceMotion ? 0 : 80,
    });
  }, [reduceMotion]);

  /* Global parallax on desktop */
  const handleMouseMove = useCallback((e) => {
    if (reduceMotion) return;
    if (!window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const x = ((e.clientX / vw) - 0.5) * 2; // -1 … 1
      const y = ((e.clientY / vh) - 0.5) * 2;
      setMousePos({ x, y });
    });
  }, [reduceMotion]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  /* Profile frame tilt */
  const handleProfilePointerMove = (event) => {
    if (event.pointerType !== 'mouse'
      || !window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches
      || reduceMotion) return;

    const el = event.currentTarget;
    const bounds = el.getBoundingClientRect();
    const nx = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const ny = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    const frame = el.querySelector('.hpf');
    frame?.style.setProperty('--tilt-x', `${ny * -3}deg`);
    frame?.style.setProperty('--tilt-y', `${nx * 3}deg`);
  };

  const resetProfilePointer = (event) => {
    const frame = event.currentTarget.querySelector('.hpf');
    frame?.style.setProperty('--tilt-x', '0deg');
    frame?.style.setProperty('--tilt-y', '0deg');
  };

  /* Video reel */
  const stopReel = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setIsPlaying(false);
  };

  const toggleVideo = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.volume = 1;
      v.currentTime = 0;
      v.play();
      setIsPlaying(true);
    } else {
      stopReel();
    }
  };

  const emailHref = `mailto:${personalInfo.emails.primary}`;

  // parallax style helpers
  const px = (mult) => reduceMotion ? '0px' : `${mousePos.x * mult}px`;
  const py = (mult) => reduceMotion ? '0px' : `${mousePos.y * mult}px`;

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-shell relative min-h-[100svh] w-full overflow-hidden text-[#0B2345]"
    >
      {/* ── Background ── */}
      <HeroBackground />
      <CloudCluster className="left-[3%] top-[16%] h-28 w-64 opacity-75" />
      <CloudCluster className="right-[7%] top-[12%] h-28 w-72 scale-110 opacity-65" />
      <CloudCluster className="left-[42%] top-[7%] h-20 w-52 scale-75 opacity-55" />
      <CloudCluster className="right-[30%] bottom-[24%] h-20 w-48 scale-90 opacity-45" />

      {/* ── Main grid layout ── */}
      <div className="hero-layout relative z-30 mx-auto grid min-h-[100svh] w-full max-w-[1540px] grid-cols-1 items-start gap-4 px-5 pb-20 pt-24 sm:px-8 md:items-center md:gap-6 md:px-10 md:pb-24 md:pt-28 lg:grid-cols-[52px_minmax(0,1fr)_minmax(420px,48%)] lg:gap-8 xl:px-14 xl:pt-32">

        {/* ── Social column (desktop left) ── */}
        <div
          className="hidden h-full items-center justify-center lg:flex"
          data-aos="fade-right"
        >
          <div className="flex flex-col items-center gap-4">
            <SocialLink href={socialLinks.github} label="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href={socialLinks.linkedin} label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href={emailHref} label="Email">
              <MailIcon />
            </SocialLink>
            {/* Vertical line */}
            <div className="h-14 w-px bg-gradient-to-b from-[#1769D1]/30 to-transparent" aria-hidden="true" />
          </div>
        </div>

        {/* ── Text column ── */}
        <div
          className="hero-copy relative z-20 min-w-0 max-w-xl"
          data-aos="fade-up"
        >
          {/* Eyebrow */}
          <div className="hero-eyebrow mb-4" aria-hidden="true">
            <span>HELLO THERE</span>
          </div>

          {/* Main heading */}
          <h1 className="mb-3 text-[clamp(2rem,8vw,4.75rem)] font-black leading-[0.92] md:mb-4 md:text-[clamp(2.75rem,4.5vw,4.75rem)]">
            <span className="text-[#0B2345]">Hi, I'm </span>
            <span className="hero-name-gradient">SINEGA</span>
          </h1>

          {/* Role */}
          <h2 className="hero-title-gradient mb-3 max-w-[600px] break-words text-[clamp(1.25rem,5.5vw,2.5rem)] font-black leading-[1.05] md:mb-4 md:text-[clamp(1.5rem,2.8vw,2.5rem)] md:leading-[1.08]">
            {heroContent.title}
          </h2>

          {/* Credential badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1769D1]/20 bg-[#1769D1]/8 px-4 py-1.5 md:mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1769D1]" aria-hidden="true" />
            <p className="text-xs font-bold text-[#0B2345]/80 md:text-sm">
              {heroContent.credential}
            </p>
          </div>

          {/* Subtitle */}
          <p className="mb-7 max-w-[540px] text-[clamp(0.875rem,3.5vw,1.0625rem)] font-medium leading-[1.6] text-[#0B2345]/75 md:mb-9 md:text-[clamp(0.9375rem,1.4vw,1.0625rem)] md:leading-[1.72]">
            {heroContent.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center gap-3 md:gap-4"
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-offset="0"
          >
            <a
              href={heroContent.ctaPrimary.href}
              className="hero-btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 md:px-8 md:text-[0.9375rem]"
            >
              {heroContent.ctaPrimary.text}
              <svg className="hero-arrow h-4 w-4 transition-transform duration-250" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
            <a
              href={heroContent.ctaSecondary.href}
              className="hero-btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-[#1769D1] transition-all duration-300 hover:-translate-y-1 md:px-8 md:text-[0.9375rem]"
            >
              {heroContent.ctaSecondary.text}
            </a>
            <a
              href={heroContent.ctaResume.href}
              download
              className="hero-btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold text-[#0B2345]/70 transition-all duration-300 hover:-translate-y-1 hover:text-[#1769D1]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>

          {/* Social icons row (mobile / tablet) */}
          <div
            className="mt-8 flex items-center gap-3 lg:hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <SocialLink href={socialLinks.github} label="GitHub"><GitHubIcon /></SocialLink>
            <SocialLink href={socialLinks.linkedin} label="LinkedIn"><LinkedInIcon /></SocialLink>
            <SocialLink href={emailHref} label="Email"><MailIcon /></SocialLink>
          </div>
        </div>

        {/* ── Profile / Visual column ── */}
        <div
          className="hero-media relative z-10 flex w-full items-center justify-center self-center lg:justify-end"
          data-aos="fade-up"
          data-aos-delay="220"
          onPointerMove={handleProfilePointerMove}
          onPointerLeave={resetProfilePointer}
        >
          <div
            className="hero-scene relative mx-auto w-full"
            style={{ maxWidth: 'min(660px, 95vw)' }}
          >
            {/* Orbit rings (parallax) */}
            <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                transform: `translate3d(${px(4)}, ${py(3)}, 0)`,
                transition: 'transform 800ms cubic-bezier(0.2,0.8,0.2,1)',
              }}
            >
              <OrbitRings />
            </div>

            {/* Atmosphere */}
            <Atmosphere />

            {/* Platform */}
            <Platform />

            {/* Profile frame wrapper (parallax + tilt) */}
            <div
              className="hpf-wrap relative z-10"
              style={{
                transform: `translate3d(${px(8)}, ${py(6)}, 0)`,
                transition: 'transform 700ms cubic-bezier(0.2,0.8,0.2,1)',
              }}
            >
              <div
                className="hpf relative overflow-visible"
                style={{
                  transform: `perspective(1200px) rotateX(calc(1deg + var(--tilt-x,0deg))) rotateY(calc(-2deg + var(--tilt-y,0deg)))`,
                  transition: 'transform 600ms cubic-bezier(0.2,0.8,0.2,1)',
                }}
              >
                {/* Outer glow ring */}
                <div className="hpf-glow-ring" aria-hidden="true" />

                {/* Glass frame */}
                <div className="hpf-glass-frame">
                  {/* Inner clip area */}
                  <div className="hpf-clip">
                    {/* Profile image */}
                    <img
                      src={heroPoster}
                      alt={personalInfo.name}
                      className={`hpf-image absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
                      style={{
                        WebkitMaskImage: 'radial-gradient(ellipse 78% 94% at 52% 52%, #000 65%, rgba(0,0,0,0.84) 80%, transparent 100%)',
                        maskImage: 'radial-gradient(ellipse 78% 94% at 52% 52%, #000 65%, rgba(0,0,0,0.84) 80%, transparent 100%)',
                      }}
                    />

                    {/* Video */}
                    <video
                      ref={videoRef}
                      src={introVideo}
                      poster={heroPoster}
                      playsInline
                      preload="auto"
                      muted={false}
                      onEnded={stopReel}
                      onLoadedMetadata={(e) => {
                        e.currentTarget.volume = 1;
                        e.currentTarget.muted = false;
                      }}
                      className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${isPlaying ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                      style={{
                        WebkitMaskImage: 'radial-gradient(ellipse 78% 94% at 52% 52%, #000 65%, rgba(0,0,0,0.84) 80%, transparent 100%)',
                        maskImage: 'radial-gradient(ellipse 78% 94% at 52% 52%, #000 65%, rgba(0,0,0,0.84) 80%, transparent 100%)',
                      }}
                    />

                    {/* Close button when playing */}
                    {isPlaying && (
                      <button
                        type="button"
                        aria-label="Close reel"
                        onClick={stopReel}
                        className="absolute right-3 top-3 z-50 grid h-8 w-8 place-items-center rounded-full bg-white/85 text-base font-bold text-[#0B2345] shadow-lg transition-transform hover:scale-105"
                      >
                        ×
                      </button>
                    )}
                  </div>

                  {/* Frame sheen overlay */}
                  <div className="hpf-sheen" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* ── Floating cards (parallax) ── */}
            <div
              className="pointer-events-none absolute inset-0 z-[12]"
              aria-hidden="true"
              style={{
                transform: `translate3d(${px(10)}, ${py(8)}, 0)`,
                transition: 'transform 900ms cubic-bezier(0.2,0.8,0.2,1)',
              }}
            >
              {floatingCards.map((c) => (
                <FloatingCard key={c.label} {...c} />
              ))}
            </div>

            {/* ── Play Reel button ── */}
            <button
              type="button"
              onClick={toggleVideo}
              className="hero-play-wrap absolute z-30 transition-all duration-300 hover:-translate-y-1"
              aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
            >
              <span className="hero-play-orb grid place-items-center rounded-full">
                {isPlaying ? (
                  <svg className="h-8 w-8 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="ml-1 h-8 w-8 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </span>
              <span className="hero-play-label mt-2 block text-center text-[0.6rem] font-black uppercase tracking-[0.26em] text-[#1769D1] md:text-[0.68rem]">
                PLAY REEL
              </span>
            </button>
          </div>
        </div>

        {/* ── Feature strip ── */}
        <div
          className="hero-strip col-span-1 lg:col-span-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {featureItems.map((item) => (
            <div className="hero-strip-item" key={item.label}>
              <FeatureIcon kind={item.icon} className="h-4 w-4 shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-28 right-5 z-25 hidden h-12 w-12 place-items-center rounded-full border border-[#0B2345]/20 text-[#0B2345]/50 transition-all duration-300 hover:-translate-y-1 hover:border-[#1769D1] hover:text-[#1769D1] xl:grid"
        aria-label="Scroll to About"
      >
        <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m0 0l7-7m-7 7l-7-7" />
        </svg>
      </a>

      {/* Bottom wave */}
      <svg
        className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-[160px] w-full md:h-[200px]"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 72 C180 128 302 12 507 62 C716 114 827 172 1045 98 C1218 42 1325 50 1440 90 L1440 200 L0 200 Z" fill="#061B3A" opacity="0.28" />
        <path d="M0 112 C186 58 312 126 496 102 C694 76 820 20 1039 76 C1200 118 1324 144 1440 98 L1440 200 L0 200 Z" fill="#061B3A" opacity="0.58" />
        <path d="M0 144 C165 98 312 138 484 118 C676 96 819 50 1028 97 C1190 134 1305 162 1440 118 L1440 200 L0 200 Z" fill="#061B3A" />
      </svg>
    </section>
  );
};

export default Hero;
