import { useEffect, useRef, useState, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import introVideo from '../assets/sinega-intro.mp4';
import heroPoster from '../assets/about/hero-image.png';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

/* ═══════════════════════ SVG ICONS ══════════════════════════════ */
const GitHubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
const MailIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

/* ═══════════════════════ SF CLOUD LOGO ══════════════════════════ */
const SfCloudSvg = ({ white = false, className = 'h-6 w-6' }) => (
  <svg className={className} viewBox="0 0 60 44" fill={white ? 'white' : '#1769D1'} aria-hidden="true">
    <path d="M27.5 6.5c-3.2 0-6 1.5-7.9 3.8A11.5 11.5 0 0 0 9 17c-3.8.8-6.6 4.1-6.6 8.1 0 4.6 3.7 8.3 8.3 8.3h37.2c4.2 0 7.6-3.4 7.6-7.6 0-4-3.1-7.3-7-7.6-.8-5-5.1-8.8-10.2-8.8-1.8 0-3.5.5-5 1.3-1.7-2.4-4.4-4-7.8-4z"/>
  </svg>
);

/* ═══════════════════════ FEATURE ICONS ══════════════════════════ */
const featureIconPaths = {
  cloud:     <path d="M7 18h10a4 4 0 0 0 .4-8A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7Z"/>,
  flow:      <path d="M7 5h10v5H7zM7 14h10v5H7zM12 10v4M5 7.5h2M17 16.5h2"/>,
  model:     <><rect x="3.5" y="4" width="7" height="6" rx="1"/><rect x="13.5" y="14" width="7" height="6" rx="1"/><path d="M10.5 7h3v10h-3M7 10v3a4 4 0 0 0 4 4h2"/></>,
  security:  <><path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></>,
  reporting: <><path d="M4 19V5M4 19h17"/><path d="m7 15 4-4 3 2 5-6"/><circle cx="7" cy="15" r="1"/><circle cx="11" cy="11" r="1"/><circle cx="14" cy="13" r="1"/><circle cx="19" cy="7" r="1"/></>,
  lightning: <path d="M13 2 5 13h6l-1 9 9-12h-6l1-8Z"/>,
  gear:      <><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
  menu:      <><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></>,
  chart:     <><path d="M4 19V5M4 19h17"/><rect x="7" y="10" width="3" height="9" rx="1"/><rect x="12" y="6" width="3" height="13" rx="1"/><rect x="17" y="13" width="3" height="6" rx="1"/></>,
};
const FeatureIcon = ({ kind, className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {featureIconPaths[kind]}
  </svg>
);

/* ═══════════════════════ FEATURE STRIP DATA ════════════════════ */
const featureItems = [
  { label: 'Service Cloud', icon: 'cloud' },
  { label: 'Flow Automation', icon: 'flow' },
  { label: 'Data Modeling', icon: 'model' },
  { label: 'Security', icon: 'security' },
  { label: 'Reporting', icon: 'reporting' },
];

/* ═══════════════════════ VOLUMETRIC CLOUD BLOBS ═════════════════ */
const VolCloud = ({ className, style }) => (
  <div className={`vol-cloud pointer-events-none absolute ${className}`} style={style} aria-hidden="true" />
);

/* ═══════════════════════ BLUE GLASS SPHERES ════════════════════ */
const sphereData = [
  { s: 92,  t: '6%',  l: '3.5%', d: '0s',    dur: '9s'  },
  { s: 56,  t: '21%', l: '0.8%', d: '-2.4s',  dur: '11s' },
  { s: 70,  t: '63%', l: '2%',   d: '-1.1s',  dur: '8s'  },
  { s: 44,  t: '79%', l: '13%',  d: '-3.6s',  dur: '12s' },
  { s: 64,  t: '3%',  r: '8%',   d: '-1.8s',  dur: '10s' },
  { s: 38,  t: '17%', r: '1.5%', d: '-0.7s',  dur: '13s' },
  { s: 52,  t: '68%', r: '4%',   d: '-4.3s',  dur: '9s'  },
  { s: 36,  t: '46%', r: '0.8%', d: '-2.9s',  dur: '11s' },
  { s: 28,  t: '36%', l: '7%',   d: '-4.0s',  dur: '10s' },
  { s: 22,  t: '12%', l: '38%',  d: '-1.6s',  dur: '8s'  },
  { s: 18,  t: '53%', l: '46%',  d: '-3.2s',  dur: '12s' },
];

/* ═══════════════════════ PLATFORM WITH CURVED TEXT ═════════════ */
const ScenePlatform = () => (
  <div className="sf-platform pointer-events-none" aria-hidden="true">
    <div className="sfp-ring sfp-ring--outer" />
    <div className="sfp-ring sfp-ring--mid" />
    <div className="sfp-ring sfp-ring--inner" />
    <div className="sfp-glow-core" />
    <svg viewBox="0 0 900 90" className="sfp-curve-text">
      <defs>
        <path id="sfpCurve" d="M 20,58 A 430,58 0 0,1 880,58"/>
      </defs>
      <text fill="rgba(10,60,130,0.62)" fontSize="9" fontWeight="700" letterSpacing="9">
        <textPath href="#sfpCurve" startOffset="50%" textAnchor="middle">
          IDEAS · AUTOMATION · IMPACT · SALESFORCE · GROWTH
        </textPath>
      </text>
    </svg>
  </div>
);

/* ═══════════════════════ SALESFORCE UI CARDS ═══════════════════ */
const SalesforceUiCards = () => (
  <>
    {/* ① Blue cloud icon card – top-left of frame */}
    <div className="sfc sfc--cloud-icon" aria-hidden="true">
      <div className="sfc-cloud-bg">
        <SfCloudSvg white className="h-8 w-8" />
      </div>
    </div>

    {/* ② Salesforce logo card – upper right of frame */}
    <div className="sfc sfc--logo-top" aria-hidden="true">
      <SfCloudSvg className="h-5 w-5 shrink-0" />
      <span className="sfc-sf-text">salesforce</span>
    </div>

    {/* ③ Salesforce logo card – mid right */}
    <div className="sfc sfc--logo-mid" aria-hidden="true">
      <SfCloudSvg className="h-5 w-5 shrink-0" />
      <span className="sfc-sf-text">salesforce</span>
    </div>

    {/* ④ Analytics card – lower center */}
    <div className="sfc sfc--analytics" aria-hidden="true">
      <FeatureIcon kind="chart" className="h-8 w-14 text-[#1769D1]" />
      <div className="sfc-analytics-label">Analytics</div>
    </div>
  </>
);

/* ═══════════════════════ VERTICAL ICON PANEL ═══════════════════ */
const IconPanel = () => (
  <div className="sf-icon-panel" aria-hidden="true">
    <div className="sfip-btn sfip-btn--lit">
      <FeatureIcon kind="lightning" className="h-4 w-4 text-white" />
    </div>
    <div className="sfip-btn">
      <FeatureIcon kind="gear" className="h-4 w-4 text-white" />
    </div>
    <div className="sfip-btn">
      <FeatureIcon kind="menu" className="h-4 w-4 text-white" />
    </div>
  </div>
);

/* ═══════════════════════ ORBIT RINGS ═══════════════════════════ */
const OrbitRings = ({ px, py }) => (
  <div
    className="pointer-events-none absolute inset-0 z-0"
    style={{ transform: `translate3d(${px(4)},${py(3)},0)`, transition: 'transform 800ms cubic-bezier(0.2,0.8,0.2,1)' }}
    aria-hidden="true"
  >
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 520" fill="none">
      <ellipse cx="320" cy="260" rx="295" ry="240" stroke="rgba(23,105,209,0.16)" strokeWidth="1.2" strokeDasharray="600 180"/>
      <ellipse cx="320" cy="260" rx="238" ry="190" stroke="rgba(23,105,209,0.12)" strokeWidth="1" strokeDasharray="450 150"/>
      <ellipse cx="320" cy="260" rx="175" ry="138" stroke="rgba(23,105,209,0.08)" strokeWidth="1" strokeDasharray="300 100"/>
    </svg>
  </div>
);

/* ═══════════════════════ SCENE ATMOSPHERE ══════════════════════ */
const SceneAtmosphere = () => (
  <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
    <div className="scene-halo" />
    <div className="scene-ring scene-ring--1" />
    <div className="scene-ring scene-ring--2" />
    <div className="scene-orb scene-orb--1" />
    <div className="scene-orb scene-orb--2" />
    <div className="scene-orb scene-orb--3" />
  </div>
);

/* ═══════════════════════ MAIN HERO ═════════════════════════════ */
const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const reduceMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  useEffect(() => {
    AOS.init({ duration: reduceMotion ? 1 : 780, once: true, easing: 'ease-out', offset: reduceMotion ? 0 : 80 });
  }, [reduceMotion]);

  const onMouseMove = useCallback((e) => {
    if (reduceMotion || !window.matchMedia('(min-width:1024px) and (pointer:fine)').matches) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 });
    });
  }, [reduceMotion]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => { window.removeEventListener('mousemove', onMouseMove); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [onMouseMove]);

  const stopReel = () => { const v = videoRef.current; if (!v) return; v.pause(); v.currentTime = 0; setIsPlaying(false); };
  const toggleVideo = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.muted = false; v.volume = 1; v.currentTime = 0; v.play(); setIsPlaying(true); }
    else { stopReel(); }
  };

  const px = (m) => reduceMotion ? '0px' : `${mouse.x * m}px`;
  const py = (m) => reduceMotion ? '0px' : `${mouse.y * m}px`;
  const emailHref = `mailto:${personalInfo.emails.primary}`;

  return (
    <section id="home" className="hero-root relative min-h-[100svh] w-full overflow-hidden text-[#0B2345]">

      {/* ═══ BACKGROUND LAYERS ═══ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Base gradient */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(168deg,#FFFFFF 0%,#EAF5FF 22%,#CDEAFF 50%,#B8E1FF 75%,#A5D7FA 100%)' }} />
        {/* Atmosphere blue radial */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 100% 75% at 68% 38%, rgba(23,105,209,0.17) 0%, transparent 58%)' }} />

        {/* Volumetric cloud blobs */}
        <VolCloud className="vol-cloud--ur" />
        <VolCloud className="vol-cloud--ul" />
        <VolCloud className="vol-cloud--bl" />
        <VolCloud className="vol-cloud--br" />
        <VolCloud className="vol-cloud--cr" />
        <VolCloud className="vol-cloud--ct" />

        {/* Background arc rings */}
        <div className="bg-arc bg-arc--1" />
        <div className="bg-arc bg-arc--2" />

        {/* Floating light particles */}
        <div className="hero-pts" aria-hidden="true">
          <span/><span/><span/><span/><span/><span/><span/><span/>
        </div>
      </div>

      {/* ═══ BLUE GLASS SPHERES ═══ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {sphereData.map((sp, i) => (
          <div key={i} className="glass-sphere"
            style={{ width: sp.s, height: sp.s, top: sp.t, left: sp.l, right: sp.r, '--sp-d': sp.d, '--sp-dur': sp.dur }}
          />
        ))}
      </div>

      {/* ═══ MAIN LAYOUT ═══ */}
      <div className="hero-layout relative z-30 mx-auto grid min-h-[100svh] w-full max-w-[1560px] px-5 sm:px-8 md:px-10 xl:px-14 pt-24 pb-16 md:pt-28 md:pb-20">

        {/* — Social column (desktop) — */}
        <div className="hero-social-col hidden lg:flex flex-col items-center justify-center gap-4" data-aos="fade-right">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-orb" aria-label="GitHub"><GitHubIcon /></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-orb" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href={emailHref} className="social-orb" aria-label="Email"><MailIcon /></a>
          <div className="w-px h-14 bg-gradient-to-b from-[#1769D1]/30 to-transparent" aria-hidden="true" />
        </div>

        {/* — Text column — */}
        <div className="hero-text-col flex flex-col justify-center" data-aos="fade-up">
          {/* Eyebrow */}
          <div className="hero-eyebrow mb-3 md:mb-4">
            <span className="eyebrow-line" aria-hidden="true" />
            HELLO THERE
          </div>

          {/* H1 */}
          <h1 className="hero-h1 mb-3 md:mb-4">
            <span className="h1-dark">Hi, I'm </span><span className="h1-name">SINEGA</span>
          </h1>

          {/* H2 role */}
          <h2 className="hero-h2 mb-3 md:mb-4">{heroContent.title}</h2>

          {/* Credential */}
          <p className="hero-cred mb-4 md:mb-5">{heroContent.credential}</p>

          {/* Subtitle */}
          <p className="hero-sub mb-6 md:mb-8">{heroContent.subtitle}</p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4" data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
            <a href={heroContent.ctaPrimary.href} className="cta-primary">
              {heroContent.ctaPrimary.text}
              <svg className="cta-arrow ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </a>
            <a href={heroContent.ctaSecondary.href} className="cta-secondary">
              {heroContent.ctaSecondary.text}
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Mobile social row */}
          <div className="mt-6 flex items-center gap-3 lg:hidden">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-orb" aria-label="GitHub"><GitHubIcon /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-orb" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={emailHref} className="social-orb" aria-label="Email"><MailIcon /></a>
          </div>

          {/* Feature strip */}
          <div className="hero-feat-strip mt-8 md:mt-10" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
            {featureItems.map((item) => (
              <div key={item.label} className="feat-item">
                <FeatureIcon kind={item.icon} className="h-4 w-4 shrink-0 text-[#1769D1]" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* — Profile scene column — */}
        <div
          className="hero-scene-col relative flex items-center justify-center"
          data-aos="fade-up" data-aos-delay="200"
        >
          {/* Scene wrapper – controls overall size */}
          <div className="scene-wrap relative w-full" style={{ maxWidth: '680px' }}>

            {/* Atmosphere + orbit rings */}
            <SceneAtmosphere />
            <OrbitRings px={px} py={py} />

            {/* ── Main glass frame (profile) ── */}
            <div
              className="sf-frame-wrap relative z-10"
              style={{ transform: `translate3d(${px(7)},${py(5)},0)`, transition: 'transform 700ms cubic-bezier(0.2,0.8,0.2,1)' }}
            >
              {/* Outer glow ring */}
              <div className="sffw-glow" aria-hidden="true" />

              {/* Glass panel */}
              <div className="sffw-glass">
                {/* Image / video crop */}
                <div className="sffw-media">
                  <img
                    src={heroPoster}
                    alt={personalInfo.name}
                    className={`absolute inset-0 h-full w-full object-cover object-[center_30%] transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <video
                    ref={videoRef}
                    src={introVideo}
                    poster={heroPoster}
                    playsInline preload="auto" muted={false}
                    onEnded={stopReel}
                    onLoadedMetadata={(e) => { e.currentTarget.volume = 1; e.currentTarget.muted = false; }}
                    className={`absolute inset-0 h-full w-full object-cover object-[center_30%] transition-opacity duration-500 ${isPlaying ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  />
                  {isPlaying && (
                    <button type="button" aria-label="Close reel" onClick={stopReel}
                      className="absolute right-3 top-3 z-50 grid h-8 w-8 place-items-center rounded-full bg-white/85 text-lg font-bold text-[#0B2345] shadow-lg hover:scale-105 transition-transform"
                    >×</button>
                  )}
                </div>
                {/* Glass sheen */}
                <div className="sffw-sheen" aria-hidden="true" />
              </div>

              {/* ── Floating Salesforce UI cards ── */}
              <div
                className="pointer-events-none absolute inset-0 z-20"
                style={{ transform: `translate3d(${px(12)},${py(9)},0)`, transition: 'transform 950ms cubic-bezier(0.2,0.8,0.2,1)' }}
                aria-hidden="true"
              >
                <SalesforceUiCards />
              </div>
            </div>

            {/* ── Vertical icon panel ── */}
            <IconPanel />

            {/* ── Platform / pedestal ── */}
            <ScenePlatform />

            {/* ── Play Reel button ── */}
            <button
              type="button"
              onClick={toggleVideo}
              className="play-reel-btn absolute z-30 flex flex-col items-center"
              aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
            >
              <div className="play-orb">
                {isPlaying ? (
                  <svg className="h-8 w-8 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                ) : (
                  <svg className="ml-1 h-8 w-8 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </div>
              <span className="play-label mt-2">PLAY REEL</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about"
        className="absolute bottom-24 right-5 z-25 hidden h-11 w-11 place-items-center rounded-full border border-[#0B2345]/18 text-[#0B2345]/45 transition-all duration-300 hover:-translate-y-1 hover:border-[#1769D1] hover:text-[#1769D1] xl:grid"
        aria-label="Scroll to About"
      >
        <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m0 0l7-7m-7 7l-7-7"/>
        </svg>
      </a>

      {/* Bottom wave */}
      <svg className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-[140px] w-full md:h-[180px]" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 64 C180 114 302 10 507 56 C716 102 827 154 1045 88 C1218 38 1325 44 1440 80 L1440 180 L0 180 Z" fill="#061B3A" opacity="0.24"/>
        <path d="M0 100 C186 52 312 112 496 92 C694 68 820 18 1039 68 C1200 106 1324 130 1440 88 L1440 180 L0 180 Z" fill="#061B3A" opacity="0.54"/>
        <path d="M0 130 C165 88 312 124 484 106 C676 86 819 45 1028 88 C1190 120 1305 146 1440 106 L1440 180 L0 180 Z" fill="#061B3A"/>
      </svg>
    </section>
  );
};

export default Hero;
