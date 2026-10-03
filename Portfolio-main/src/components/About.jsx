import { useRef, useEffect, useState, useCallback } from 'react';
import aboutPhoto from '../assets/about/yusuf-avatar.png';
import salesforceLogo from '../assets/logos/salesforce.svg';
import { aboutContent, personalInfo } from '../data/portfolioData';

/* ─── ICONS FOR SKILL PILLS ─────────────────────────────────── */
const SalesforcePillIcon = () => (
  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 p-0.5 shadow-[0_0_8px_rgba(56,189,248,0.3)]">
    <img src={salesforceLogo} alt="" className="h-3.5 w-3.5 object-contain" />
  </span>
);

const ServiceCloudPillIcon = () => (
  <svg className="h-4 w-4 text-[#38bdf8] drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const FlowAutomationPillIcon = () => (
  <svg className="h-4 w-4 text-[#38bdf8] drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const AgentforcePillIcon = () => (
  <svg className="h-4 w-4 text-[#38bdf8] drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CrmSolutionsPillIcon = () => (
  <svg className="h-4 w-4 text-[#38bdf8] drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const CloudDataPillIcon = () => (
  <svg className="h-4 w-4 text-[#38bdf8] drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
  </svg>
);

const getPillIcon = (name) => {
  switch (name) {
    case 'Salesforce Administration':
      return <SalesforcePillIcon />;
    case 'Service Cloud':
      return <ServiceCloudPillIcon />;
    case 'Flow Automation':
      return <FlowAutomationPillIcon />;
    case 'Agentforce':
      return <AgentforcePillIcon />;
    case 'CRM Solutions':
      return <CrmSolutionsPillIcon />;
    case 'Cloud & Data':
      return <CloudDataPillIcon />;
    default:
      return <CloudDataPillIcon />;
  }
};

/* ─── 3D PROFILE BADGE WITH PEDESTAL & ORBITING GLASS BADGES ─── */
const ProfileCard3D = () => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef(null);

  const MAX_TILT = 5; // degrees for professional subtlety

  const handleMouseMove = useCallback((e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return; // skip touch devices
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setTilt({ x: -dy * MAX_TILT, y: dx * MAX_TILT });
    });
  }, []);

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const cardTransform = hovered
    ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
    : `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1)`;

  return (
    <div className="about-3d-scene" data-aos="fade-right">
      {/* Background ambient lighting */}
      <div className="about-pedestal-glow" aria-hidden="true" />

      {/* Orbiting Glass Icons & Rings */}
      <div className="about-orbit-container" aria-hidden="true">
        {/* Orbital Track Ring 1 */}
        <div className="about-orbit-ring about-orbit-ring--1" />
        {/* Orbital Track Ring 2 */}
        <div className="about-orbit-ring about-orbit-ring--2" />

        {/* Orbiting Icon 1: Salesforce Cloud (Left) */}
        <div className="about-orbit-node about-orbit-node--sf">
          <div className="about-orbit-glass-orb">
            <img src={salesforceLogo} alt="" className="h-5 w-5 object-contain" />
          </div>
        </div>

        {/* Orbiting Icon 2: Code Bracket (Lower Left) */}
        <div className="about-orbit-node about-orbit-node--code">
          <div className="about-orbit-glass-orb text-[#38bdf8] font-bold text-xs">
            &lt;/&gt;
          </div>
        </div>

        {/* Orbiting Icon 3: Cloud Badge (Top Right) */}
        <div className="about-orbit-node about-orbit-node--cloud">
          <div className="about-orbit-glass-orb">
            <svg className="h-4 w-4 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
          </div>
        </div>

        {/* Floating Mini Glowing Cube */}
        <div className="about-mini-cube" />
      </div>

      {/* Badge Frame Holder */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top Clip / Hanging Mechanism */}
        <div className="about-badge-clip">
          <div className="about-badge-clip-bar" />
        </div>

        {/* The 3D Acrylic ID Card */}
        <div
          ref={cardRef}
          className="about-id-card"
          style={{ transform: cardTransform, willChange: 'transform' }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Glass edge neon glow */}
          <div className="about-id-card-glow" aria-hidden="true" />
          
          {/* Subtle light sheen sweep */}
          <div className="about-id-card-sheen" aria-hidden="true" />

          {/* Photo Container */}
          <div className="about-photo-wrapper">
            <img
              src={aboutPhoto}
              alt={personalInfo.name}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>

          {/* Badge Footer: Name & Details */}
          <div className="about-badge-footer">
            <div>
              <p className="about-badge-name">{personalInfo.firstName}</p>
              <p className="about-badge-subtitle">Computer Science</p>
            </div>
            {/* Glowing cyan status orb */}
            <div className="about-status-dot-glow" aria-label="Status: Active" />
          </div>
        </div>

        {/* 3D Pedestal / Base Platform */}
        <div className="about-pedestal-base" aria-hidden="true">
          <div className="about-pedestal-ring about-pedestal-ring--top" />
          <div className="about-pedestal-ring about-pedestal-ring--mid" />
          <div className="about-pedestal-cylinder" />
          <div className="about-pedestal-floor-glow" />
        </div>
      </div>
    </div>
  );
};

/* ─── 3D CLOUD & SERVER INFRASTRUCTURE SCENE ─────────────────── */
const CloudServerInfrastructure3D = () => {
  return (
    <div className="about-infra-scene" data-aos="fade-left">
      {/* Ambient background glow */}
      <div className="about-infra-glow" aria-hidden="true" />

      {/* ── 3D Floating Volumetric Cloud ── */}
      <div className="about-3d-cloud-wrap">
        <div className="about-3d-cloud">
          {/* SVG Layered Cloud with volumetric shading */}
          <svg viewBox="0 0 280 170" fill="none" className="w-full h-full drop-shadow-[0_15px_30px_rgba(1,118,211,0.5)]">
            <defs>
              <linearGradient id="cloudGrad" x1="140" y1="10" x2="140" y2="160" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7ad3ff" />
                <stop offset="35%" stopColor="#2596f3" />
                <stop offset="75%" stopColor="#0d61d0" />
                <stop offset="100%" stopColor="#07398b" />
              </linearGradient>
              <linearGradient id="cloudHighlight" x1="70" y1="15" x2="210" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Cloud Main Body */}
            <path
              d="M70 145c-28 0-50-20-50-45 0-21 16-39 39-44 5-26 30-46 61-46 22 0 42 10 53 27 7-4 16-7 25-7 27 0 49 20 51 46 20 4 35 21 35 41 0 24-22 43-50 43H70z"
              fill="url(#cloudGrad)"
            />
            {/* Glossy top highlight */}
            <path
              d="M72 140c-24 0-43-16-43-37 0-18 14-33 34-37 5-24 27-41 55-41 20 0 38 9 48 24 7-4 15-6 23-6 24 0 43 17 45 39 17 4 30 18 30 35 0 20-19 36-43 36H72z"
              fill="url(#cloudHighlight)"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* ── Data Laser Beams from Cloud to Server ── */}
        <div className="about-data-beams">
          <div className="about-beam-line about-beam-line--1"><span className="about-beam-particle" /></div>
          <div className="about-beam-line about-beam-line--2"><span className="about-beam-particle" /></div>
          <div className="about-beam-line about-beam-line--3"><span className="about-beam-particle" /></div>
          <div className="about-beam-line about-beam-line--4"><span className="about-beam-particle" /></div>
          <div className="about-beam-line about-beam-line--5"><span className="about-beam-particle" /></div>
        </div>
      </div>

      {/* ── 3D Server Blade Units ── */}
      <div className="about-server-cluster">
        {/* Top Server Unit */}
        <div className="about-server-unit about-server-unit--top">
          <div className="about-server-face">
            <div className="about-server-leds">
              <span className="about-led about-led--cyan" />
              <span className="about-led about-led--blue" />
            </div>
            <div className="about-server-vents">
              <span /><span /><span />
            </div>
          </div>
        </div>

        {/* Mid-Left Server Unit */}
        <div className="about-server-unit about-server-unit--mid-left">
          <div className="about-server-face">
            <div className="about-server-leds">
              <span className="about-led about-led--cyan" />
              <span className="about-led about-led--blue" />
            </div>
            <div className="about-server-vents">
              <span /><span /><span />
            </div>
          </div>
        </div>

        {/* Mid-Right Server Unit */}
        <div className="about-server-unit about-server-unit--mid-right">
          <div className="about-server-face">
            <div className="about-server-leds">
              <span className="about-led about-led--cyan" />
              <span className="about-led about-led--blue" />
            </div>
            <div className="about-server-vents">
              <span /><span /><span />
            </div>
          </div>
        </div>

        {/* Base Server Unit Stack */}
        <div className="about-server-unit about-server-unit--base">
          <div className="about-server-face">
            <div className="about-server-leds">
              <span className="about-led about-led--cyan" />
              <span className="about-led about-led--cyan" />
            </div>
            <div className="about-server-vents">
              <span /><span /><span /><span />
            </div>
          </div>
        </div>

        {/* Server Base Holographic Ring Platform */}
        <div className="about-server-platform">
          <div className="about-server-holo-ring about-server-holo-ring--outer" />
          <div className="about-server-holo-ring about-server-holo-ring--inner" />
          <div className="about-server-floor-glow" />
        </div>
      </div>

      {/* ── Floating Glass UI Cards ── */}
      {/* Left Analytics Card */}
      <div className="about-floating-card about-floating-card--left">
        <div className="about-floating-card-inner">
          <div className="flex items-end gap-1.5 h-7">
            <div className="w-2.5 h-3.5 rounded-sm bg-[#38bdf8]/40" />
            <div className="w-2.5 h-5 rounded-sm bg-[#38bdf8]/70" />
            <div className="w-2.5 h-7 rounded-sm bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
          </div>
        </div>
      </div>

      {/* Right Task List Card */}
      <div className="about-floating-card about-floating-card--right">
        <div className="about-floating-card-inner">
          <div className="space-y-1.5 w-10">
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
              <div className="h-1 w-7 rounded bg-[#38bdf8]/50" />
            </div>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
              <div className="h-1 w-6 rounded bg-[#38bdf8]/30" />
            </div>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
              <div className="h-1 w-5 rounded bg-[#38bdf8]/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Micro Cubes */}
      <div className="about-floating-cube about-floating-cube--1" />
      <div className="about-floating-cube about-floating-cube--2" />
    </div>
  );
};

/* ─── MAIN ABOUT SECTION ─────────────────────────────────────── */
const About = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#051026] px-6 pb-28 pt-28 text-white md:px-12 md:pb-36 md:pt-32"
    >
      {/* ── Ambient Background Atmosphere ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Top-Left Volumetric Cloud Glow */}
        <div className="about-vol-cloud about-vol-cloud--tl" />
        {/* Top-Right Volumetric Cloud Glow */}
        <div className="about-vol-cloud about-vol-cloud--tr" />
        {/* Bottom-Left Volumetric Cloud Glow */}
        <div className="about-vol-cloud about-vol-cloud--bl" />
        {/* Bottom-Right Volumetric Cloud Glow */}
        <div className="about-vol-cloud about-vol-cloud--br" />

        {/* Center-Left Radial Glow */}
        <div className="about-bg-glow about-bg-glow--left" />
        {/* Center-Right Radial Glow */}
        <div className="about-bg-glow about-bg-glow--right" />

        {/* Floating Particles */}
        <div className="about-particles">
          <span /><span /><span /><span /><span /><span />
        </div>
      </div>

      {/* ── Main Container ── */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:grid-cols-[300px_minmax(0,1fr)_320px] xl:gap-8">
          
          {/* Left: 3D ID Badge Card Scene */}
          <div className="flex justify-center">
            <ProfileCard3D />
          </div>

          {/* Center: About Content & Skill Badges */}
          <div data-aos="fade-up" data-aos-delay="150" className="text-center lg:text-left">
            {/* Eyebrow */}
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">
              ABOUT ME
            </p>

            {/* Title: "About me" */}
            <h2 className="about-main-title mb-6 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              About <span className="about-title-highlight">me</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm leading-[1.8] text-[#d1e5ff] md:text-base md:leading-[1.85]">
              {aboutContent.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Skill Badges (Pills) */}
            <div className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {aboutContent.techStack.map((item, i) => (
                <div
                  key={item}
                  className="about-skill-pill group"
                  style={{ transitionDelay: `${i * 35}ms` }}
                >
                  <span className="about-pill-icon">{getPillIcon(item)}</span>
                  <span className="about-pill-text">{item}</span>
                  {/* Subtle inner glass shimmer */}
                  <div className="about-pill-shimmer" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Cloud & Server Infrastructure Scene */}
          <div className="flex justify-center lg:col-span-2 xl:col-span-1">
            <CloudServerInfrastructure3D />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
