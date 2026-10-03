import { useEffect, useRef, useState, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import introVideo from '../assets/sinega-intro.mp4';
import heroPoster from '../assets/about/hero-image.png';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

/* ─── SVG ICONS ────────────────────────────────────────────────── */
const GitHubIcon = () => (
  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
const MailIcon = () => (
  <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

/* ─── SALESFORCE CLOUD LOGO SVG ─────────────────────────────────── */
const SfCloud = ({ white = false, size = 24 }) => (
  <svg width={size} height={Math.round(size * 0.73)} viewBox="0 0 60 44" fill={white ? '#fff' : '#1769D1'} aria-hidden="true">
    <path d="M27.5 6.5c-3.2 0-6 1.5-7.9 3.8A11.5 11.5 0 0 0 9 17c-3.8.8-6.6 4.1-6.6 8.1 0 4.6 3.7 8.3 8.3 8.3h37.2c4.2 0 7.6-3.4 7.6-7.6 0-4-3.1-7.3-7-7.6-.8-5-5.1-8.8-10.2-8.8-1.8 0-3.5.5-5 1.3-1.7-2.4-4.4-4-7.8-4z"/>
  </svg>
);

/* ─── FEATURE STRIP ─────────────────────────────────────────────── */
const featureItems = [
  { label: 'Service Cloud',  icon: 'M7 18h10a4 4 0 0 0 .4-8A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7Z' },
  { label: 'Flow Automation',icon: 'M7 5h10v5H7zM7 14h10v5H7zM12 10v4M5 7.5h2M17 16.5h2' },
  { label: 'Data Modeling',  icon: 'M4 4h6v6H4zM14 14h6v6h-6zM10 7h3v10h-3M7 10h3a4 4 0 0 1 4 4v2' },
  { label: 'Security',       icon: 'M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Zm-3 9 2 2 4-4' },
  { label: 'Reporting',      icon: 'M4 19V5M4 19h17m-14-4 4-4 3 2 5-6' },
];

/* ─── GLASS SPHERES DATA ────────────────────────────────────────── */
const SPHERES = [
  /* large left cluster */
  { s: 96,  top: '5%',  left: '2%',   dur: '9s',  d: '0s',    factor: -12 },
  { s: 58,  top: '20%', left: '0.5%', dur: '11s', d: '-2.4s', factor: -8  },
  { s: 74,  top: '64%', left: '1.5%', dur: '8s',  d: '-1.2s', factor: -14 },
  { s: 46,  top: '80%', left: '11%',  dur: '12s', d: '-3.7s', factor: -6  },
  /* right edge */
  { s: 68,  top: '2%',  right: '7%',  dur: '10s', d: '-1.9s', factor: 10  },
  { s: 40,  top: '16%', right: '1%',  dur: '13s', d: '-0.7s', factor: 7   },
  { s: 54,  top: '69%', right: '3%',  dur: '9s',  d: '-4.4s', factor: 12  },
  { s: 38,  top: '46%', right: '0.5%',dur: '11s', d: '-2.9s', factor: 5   },
  /* scattered mid */
  { s: 30,  top: '36%', left: '6%',   dur: '10s', d: '-4.1s', factor: -5  },
  { s: 24,  top: '11%', left: '37%',  dur: '8s',  d: '-1.6s', factor: -4  },
  { s: 20,  top: '54%', left: '45%',  dur: '12s', d: '-3.3s', factor: 4   },
];

/* ─── BACKGROUND CLOUDS ─────────────────────────────────────────── */
const CLOUDS = ['vol-cloud--ur','vol-cloud--ul','vol-cloud--bl','vol-cloud--br','vol-cloud--cr','vol-cloud--ct'];

/* ─── PLATFORM ──────────────────────────────────────────────────── */
const Platform = () => (
  <div className="hero-platform" aria-hidden="true">
    <div className="plat-ring plat-ring--outer">
      <div className="plat-ring-inner1"/>
      <div className="plat-ring-inner2"/>
    </div>
    <div className="plat-ring plat-ring--mid"/>
    <div className="plat-ring plat-ring--inner"/>
    <div className="plat-glow"/>
    <svg className="plat-text-svg" viewBox="0 0 900 80" aria-hidden="true">
      <defs>
        <path id="pc" d="M 30,55 A 420,55 0 0,1 870,55"/>
      </defs>
      <text fill="rgba(8,50,120,0.55)" fontSize="10" fontWeight="800" letterSpacing="10">
        <textPath href="#pc" startOffset="50%" textAnchor="middle">
          IDEAS · AUTOMATION · IMPACT · SALESFORCE · GROWTH
        </textPath>
      </text>
    </svg>
  </div>
);

/* ─── FLOATING UI CARDS ─────────────────────────────────────────── */
const UiCards = ({ px, py }) => (
  <>
    {/* ① Blue cloud card – upper-left */}
    <div
      className="ui-card card-cloud"
      aria-hidden="true"
      style={{ transform: `translate3d(${px(16)},${py(14)},0)` }}
    >
      <div className="card-cloud-icon">
        <SfCloud white size={32}/>
      </div>
      <div className="card-glass-sheen" />
    </div>

    {/* ② Salesforce logo – upper-right (OUTSIDE / above frame) */}
    <div
      className="ui-card card-sf-top"
      aria-hidden="true"
      style={{ transform: `translate3d(${px(12)},${py(10)},0)` }}
    >
      <SfCloud size={20}/>
      <span className="card-sf-label">salesforce</span>
      <div className="card-glass-sheen" />
    </div>

    {/* ③ Salesforce logo – mid-right */}
    <div
      className="ui-card card-sf-mid"
      aria-hidden="true"
      style={{ transform: `translate3d(${px(14)},${py(11)},0) translateY(-50%)` }}
    >
      <SfCloud size={20}/>
      <span className="card-sf-label">salesforce</span>
      <div className="card-glass-sheen" />
    </div>

    {/* ④ Analytics bar card – lower-left */}
    <div
      className="ui-card card-analytics"
      aria-hidden="true"
      style={{ transform: `translate3d(${px(18)},${py(15)},0)` }}
    >
      <svg width="36" height="28" viewBox="0 0 24 20" fill="none" stroke="#1769D1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18V6M4 18h17"/>
        <rect x="7" y="9" width="2.5" height="9" rx="0.5" fill="#1769D1" stroke="none" className="analytics-bar-1" />
        <rect x="11.5" y="5" width="2.5" height="13" rx="0.5" fill="#1769D1" stroke="none" className="analytics-bar-2" />
        <rect x="16" y="11" width="2.5" height="7" rx="0.5" fill="#1769D1" stroke="none" className="analytics-bar-3" />
      </svg>
      <span className="card-analytics-label">Analytics</span>
      <div className="card-glass-sheen" />
    </div>

    {/* ⑤ Vertical icon panel – far right */}
    <div
      className="ui-icon-panel"
      aria-hidden="true"
      style={{ transform: `translate3d(${px(8)},${py(7)},0)` }}
    >
      <div className="uip-btn uip-btn--active">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0">
          <path d="M13 2 5 13h6l-1 9 9-12h-6l1-8Z"/>
        </svg>
      </div>
      <div className="uip-btn">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1769D1" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </div>
      <div className="uip-btn">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1769D1" strokeWidth="1.8" strokeLinecap="round">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </div>
    </div>
  </>
);

/* ═══════════════════════════════════════════════════════════════ */
/*  MAIN HERO COMPONENT                                           */
/* ═══════════════════════════════════════════════════════════════ */
const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const reduceMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  useEffect(() => {
    AOS.init({ duration: reduceMotion ? 1 : 780, once: true, easing: 'ease-out', offset: reduceMotion ? 0 : 80 });
  }, [reduceMotion]);

  const onMouseMove = useCallback((e) => {
    if (reduceMotion || !window.matchMedia('(min-width:1024px) and (pointer:fine)').matches) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    });
  }, [reduceMotion]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onMouseMove]);

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

  const px = (m) => reduceMotion ? '0px' : `${mouse.x * m}px`;
  const py = (m) => reduceMotion ? '0px' : `${mouse.y * m}px`;
  const tiltX = reduceMotion ? 0 : -mouse.y * 6; // max 6 deg
  const tiltY = reduceMotion ? 0 : mouse.x * 7;  // max 7 deg

  const emailHref = `mailto:${personalInfo.emails.primary}`;

  return (
    <section id="home" className="hero-root" onMouseMove={onMouseMove}>

      {/* ═══ BACKGROUND ═══ */}
      <div className="hero-bg" aria-hidden="true">
        {/* base gradient */}
        <div className="hero-bg-base"/>
        {/* atmosphere blue glow */}
        <div className="hero-bg-atmo"/>
        {/* mesh auroras */}
        <div className="hero-bg-mesh"/>
        {/* clouds */}
        {CLOUDS.map(c => <div key={c} className={`vol-cloud ${c}`}/>)}
        {/* arc rings */}
        <div className="bg-arc bg-arc--1"/>
        <div className="bg-arc bg-arc--2"/>
        {/* light streak */}
        <div className="bg-streak bg-streak--1"/>
        <div className="bg-streak bg-streak--2"/>
        {/* particles */}
        <div className="hero-pts" aria-hidden="true">
          <span/><span/><span/><span/><span/><span/><span/><span/>
        </div>
      </div>

      {/* ═══ 3D SPHERES WITH PARALLAX ═══ */}
      <div className="hero-spheres" aria-hidden="true">
        {SPHERES.map((sp, i) => (
          <div
            key={i}
            className="glass-sphere"
            style={{
              width: sp.s, height: sp.s,
              top: sp.top, left: sp.left, right: sp.right,
              '--sp-d': sp.d, '--sp-dur': sp.dur,
              transform: `translate3d(${px(sp.factor)},${py(sp.factor)},0)`,
              transition: 'transform 800ms cubic-bezier(0.2,0.8,0.2,1)',
            }}
          >
            <div className="sphere-specular" />
          </div>
        ))}
      </div>

      {/* ═══ MAIN GRID ═══ */}
      <div className="hero-grid">

        {/* ── Social column ── */}
        <div className="hero-social" data-aos="fade-right">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="soc-orb" aria-label="GitHub"><GitHubIcon/></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="soc-orb" aria-label="LinkedIn"><LinkedInIcon/></a>
          <a href={emailHref} className="soc-orb" aria-label="Email"><MailIcon/></a>
          <div className="soc-line" aria-hidden="true"/>
        </div>

        {/* ── Text column ── */}
        <div className="hero-text" data-aos="fade-up">

          {/* Eyebrow */}
          <div className="eyebrow">
            <span className="eyebrow-dash" aria-hidden="true"/>
            HELLO THERE
          </div>

          {/* H1 */}
          <h1 className="h1">
            <span className="h1-hi">Hi, I'm </span><span className="h1-name">SINEGA</span>
          </h1>

          {/* H2 */}
          <h2 className="h2">{heroContent.title}</h2>

          {/* Credential */}
          <p className="cred">{heroContent.credential}</p>

          {/* Subtitle */}
          <p className="sub">{heroContent.subtitle}</p>

          {/* CTAs */}
          <div className="cta-row">
            <a href="#projects" className="btn-primary group">
              <span>Explore My Salesforce Work</span>
              <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
              <div className="btn-glow-shimmer" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">
              <span>Contact Me</span>
              <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Feature strip */}
          <div className="feat-strip" data-aos="fade-up" data-aos-delay="150">
            {featureItems.map(item => (
              <div key={item.label} className="feat-chip">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1769D1" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={item.icon}/>
                </svg>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right scene column ── */}
        <div className="hero-scene" data-aos="fade-up" data-aos-delay="100">
          <div
            className="scene-wrap"
            style={{
              transform: `translate3d(${px(6)},${py(5)},0)`,
              transition: 'transform 700ms cubic-bezier(0.2,0.8,0.2,1)',
            }}
          >
            {/* Atmospheric orbit lines */}
            <div className="scene-orbits" aria-hidden="true">
              <svg className="orbit-svg" viewBox="0 0 580 520" fill="none">
                <ellipse cx="290" cy="260" rx="274" ry="226" stroke="rgba(23,105,209,0.18)" strokeWidth="1.5" strokeDasharray="520 140"/>
                <ellipse cx="290" cy="260" rx="218" ry="174" stroke="rgba(23,105,209,0.14)" strokeWidth="1.2" strokeDasharray="380 120"/>
              </svg>
            </div>

            {/* ── Glass profile frame with 3D Perspective Tilt ── */}
            <div
              className="glass-frame"
              style={{
                transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${px(8)},${py(6)},0)`,
                transition: 'transform 600ms cubic-bezier(0.2,0.8,0.2,1)',
              }}
            >
              {/* outer glow border */}
              <div className="gf-glow" aria-hidden="true"/>
              {/* glass panel */}
              <div className="gf-panel">
                {/* image/video */}
                <div className="gf-media">
                  <img
                    src={heroPoster}
                    alt={personalInfo.name}
                    className={`gf-img${isPlaying ? ' opacity-0' : ' opacity-100'}`}
                  />
                  <video
                    ref={videoRef}
                    src={introVideo}
                    poster={heroPoster}
                    playsInline preload="auto" muted={false}
                    onEnded={stopReel}
                    onLoadedMetadata={e => { e.currentTarget.volume = 1; e.currentTarget.muted = false; }}
                    className={`gf-video${isPlaying ? ' opacity-100 pointer-events-auto' : ' opacity-0 pointer-events-none'}`}
                  />
                  {isPlaying && (
                    <button type="button" aria-label="Close reel" onClick={stopReel}
                      className="absolute right-2 top-2 z-50 grid h-7 w-7 place-items-center rounded-full bg-white/80 text-base font-black text-[#0B2345] shadow hover:scale-105 transition-transform">
                      ×
                    </button>
                  )}
                </div>
                {/* glass sheen */}
                <div className="gf-sheen" aria-hidden="true"/>
              </div>

              {/* ── Floating UI Cards – positioned with multi-layer depth ── */}
              <div className="frame-cards" aria-hidden="true">
                <UiCards px={px} py={py} />
              </div>
            </div>

            {/* ── Platform / Pedestal ── */}
            <Platform/>

            {/* ── Play Reel button with 3D Parallax ── */}
            <button
              type="button"
              onClick={toggleVideo}
              className="play-btn"
              aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
              style={{
                transform: `translate3d(${px(18)},${py(15)},0)`,
                transition: 'transform 800ms cubic-bezier(0.2,0.8,0.2,1)',
              }}
            >
              <span className="play-orb">
                <span className="play-ring play-ring--1" aria-hidden="true"/>
                <span className="play-ring play-ring--2" aria-hidden="true"/>
                <span className="play-ring play-ring--3" aria-hidden="true"/>
                {isPlaying ? (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                ) : (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 4 }} aria-hidden="true">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </span>
              <span className="play-label">PLAY REEL</span>
            </button>

          </div>{/* /scene-wrap */}
        </div>{/* /hero-scene */}

      </div>{/* /hero-grid */}
    </section>
  );
};

export default Hero;
