import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import introVideo from '../assets/sinega-intro.mp4';
import heroPoster from '../assets/about/hero-image.png';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MailIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="grid h-11 w-11 place-items-center rounded-full border border-[#0B2345]/15 bg-white/40 text-[#0B2345] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1769D1] hover:bg-white hover:text-[#1769D1] hover:shadow-[0_12px_30px_rgba(23,105,209,0.16)]"
    aria-label={label}
  >
    {children}
  </a>
);

const CloudCluster = ({ className }) => (
  <div className={`hero-cloud absolute pointer-events-none ${className}`} aria-hidden="true">
    <span className="absolute bottom-0 left-6 h-14 w-28 rounded-full bg-white/80 blur-[1px]" />
    <span className="absolute bottom-3 left-0 h-12 w-16 rounded-full bg-white/75 blur-[1px]" />
    <span className="absolute bottom-5 left-16 h-20 w-20 rounded-full bg-white/85 blur-[1px]" />
    <span className="absolute bottom-2 left-[7.5rem] h-12 w-20 rounded-full bg-[#EAF4FF]/90 blur-[1px]" />
  </div>
);

const featureIconPaths = {
  cloud: <path d="M7 18h10a4 4 0 0 0 .4-8A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7Z" />,
  flow: <path d="M7 5h10v5H7zM7 14h10v5H7zM12 10v4M5 7.5h2M17 16.5h2" />,
  model: <><rect x="3.5" y="4" width="7" height="6" rx="1" /><rect x="13.5" y="14" width="7" height="6" rx="1" /><path d="M10.5 7h3v10h-3M7 10v3a4 4 0 0 0 4 4h2" /></>,
  security: <><path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  reporting: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 5-6" /><circle cx="7" cy="15" r="1" /><circle cx="11" cy="11" r="1" /><circle cx="14" cy="13" r="1" /><circle cx="19" cy="7" r="1" /></>,
  lightning: <path d="M13 2 5 13h6l-1 9 9-12h-6l1-8Z" />,
};

const FeatureIcon = ({ kind, className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {featureIconPaths[kind]}
  </svg>
);

const featureItems = [
  { label: 'Service Cloud', icon: 'cloud' },
  { label: 'Flow Automation', icon: 'flow' },
  { label: 'Data Modeling', icon: 'model' },
  { label: 'Security', icon: 'security' },
  { label: 'Reporting', icon: 'reporting' },
];

const floatingItems = [
  { label: 'Service Cloud', icon: 'cloud', position: 'hero-float-card--cloud', delay: '0s' },
  { label: 'Flow Automation', icon: 'lightning', position: 'hero-float-card--flow', delay: '-1.2s' },
  { label: 'Reporting', icon: 'reporting', position: 'hero-float-card--insights', delay: '-2.4s' },
  { label: 'Security', icon: 'security', position: 'hero-float-card--trust', delay: '-3.6s' },
  { label: 'Data Modeling', icon: 'model', position: 'hero-float-card--model', delay: '-4.8s' },
];

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({ duration: reduceMotion ? 1 : 760, once: true, easing: 'ease-out', offset: reduceMotion ? 0 : 80 });
  }, []);

  const handleProfilePointerMove = (event) => {
    if (event.pointerType !== 'mouse'
      || !window.matchMedia('(min-width: 1280px) and (pointer: fine)').matches
      || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const media = event.currentTarget;
    const bounds = media.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    const frame = media.querySelector('.hero-profile-frame');

    media.style.setProperty('--parallax-x', `${x * 8}px`);
    media.style.setProperty('--parallax-y', `${y * 6}px`);
    frame?.style.setProperty('--tilt-x', `${y * -2.5}deg`);
    frame?.style.setProperty('--tilt-y', `${x * 2.5}deg`);
  };

  const resetProfilePointer = (event) => {
    const media = event.currentTarget;
    media.style.setProperty('--parallax-x', '0px');
    media.style.setProperty('--parallax-y', '0px');
    media.querySelector('.hero-profile-frame')?.style.setProperty('--tilt-x', '0deg');
    media.querySelector('.hero-profile-frame')?.style.setProperty('--tilt-y', '0deg');
  };

  const stopReel = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  };

  const toggleVideo = (event) => {
    event.stopPropagation();

    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      return;
    }

    stopReel();
  };

  const emailHref = `mailto:${personalInfo.emails.primary}`;

  return (
    <section id="home" className="hero-shell relative min-h-[100svh] w-full overflow-hidden bg-[#F3F8FF] text-[#0B2345]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F8FF_42%,#DCEEFF_100%)]" />
        <div className="hero-depth-sphere hero-depth-sphere--left" />
        <div className="hero-depth-sphere hero-depth-sphere--right" />
        <div className="hero-particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <CloudCluster className="left-[4%] top-[18%] h-28 w-60 opacity-80" />
        <CloudCluster className="right-[9%] top-[14%] h-28 w-64 scale-125 opacity-70" />
        <CloudCluster className="left-[38%] top-[9%] h-24 w-52 scale-75 opacity-60" />
        <CloudCluster className="right-[28%] bottom-[27%] h-24 w-52 scale-90 opacity-55" />
        <svg className="absolute left-0 top-0 h-full w-full opacity-70" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path d="M-60 610 C160 520 320 580 520 510 C720 440 840 470 1010 390 C1180 310 1320 350 1500 250" fill="none" stroke="#DCEEFF" strokeWidth="2" />
          <path d="M-80 690 C150 615 310 660 500 590 C750 500 900 560 1090 475 C1250 404 1350 430 1510 360" fill="none" stroke="#FFFFFF" strokeWidth="3" />
        </svg>
      </div>

      <div className="hero-layout relative z-30 mx-auto grid min-h-[100svh] w-full max-w-[1500px] grid-cols-1 items-start gap-5 px-6 pb-20 pt-20 sm:px-8 md:items-center md:gap-8 md:px-12 md:pb-28 md:pt-32 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[56px_minmax(0,540px)_minmax(460px,1fr)] xl:px-16">
        <div className="hidden h-full items-center justify-center xl:flex">
          <div data-aos="fade-right" className="flex flex-col items-center gap-5">
            <SocialLink href={socialLinks.github} label="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href={socialLinks.linkedin} label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href={emailHref} label="Email">
              <MailIcon />
            </SocialLink>
          </div>
        </div>

        <div className="hero-copy relative z-20 min-w-0 max-w-xl xl:pb-12" data-aos="fade-up">
          <div className="hero-eyebrow" aria-hidden="true"><span>HELLO THERE</span></div>
          <h1 className="mb-3 text-[clamp(1.75rem,8vw,4.5rem)] font-black leading-[0.95] text-[#0B2345] md:mb-5 md:text-[clamp(2.75rem,4.5vw,4.5rem)]">
            {heroContent.greeting}
          </h1>
          <h2 className="hero-title-gradient mb-3 max-w-[600px] break-words text-[clamp(1.5rem,7.5vw,3rem)] font-black leading-[1] md:mb-4 md:text-[clamp(2rem,3vw,3rem)] md:leading-[1.02]">
            {heroContent.title}
          </h2>
          <p className="mb-3 text-sm font-bold leading-relaxed text-[#0B2345]/75 md:mb-5 md:text-base">
            {heroContent.credential}
          </p>
          <p className="mb-6 max-w-[540px] text-[clamp(0.8125rem,4vw,1rem)] font-medium leading-[1.45] text-[#0B2345]/85 md:mb-9 md:text-lg md:leading-[1.7]">
            {heroContent.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4" data-aos="fade-up" data-aos-delay="150" data-aos-offset="0">
            <a
              href={heroContent.ctaPrimary.href}
              className="hero-primary-cta rounded-full bg-[#1769D1] px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_35px_rgba(23,105,209,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B2345]"
            >
              {heroContent.ctaPrimary.text}
              <svg className="hero-cta-arrow ml-2 inline-block h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
            <a
              href={heroContent.ctaSecondary.href}
              className="hero-secondary-cta rounded-full border-2 border-[#1769D1] bg-white/75 px-7 py-3.5 text-sm font-bold text-[#1769D1] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              {heroContent.ctaSecondary.text}
            </a>
            <a
              href={heroContent.ctaResume.href}
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#1769D1] bg-white/75 px-7 py-3.5 text-sm font-bold text-[#1769D1] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 xl:hidden" data-aos="fade-up" data-aos-delay="250">
            <SocialLink href={socialLinks.github} label="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href={socialLinks.linkedin} label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href={emailHref} label="Email">
              <MailIcon />
            </SocialLink>
          </div>
        </div>

        <div
          className="hero-media relative z-10 flex w-full min-w-0 items-center justify-center self-center xl:justify-end"
          data-aos="fade-up"
          data-aos-delay="250"
          onPointerMove={handleProfilePointerMove}
          onPointerLeave={resetProfilePointer}
        >
          <div className="hero-scene relative mx-auto w-full max-w-[690px]">
            <svg className="hero-orbit absolute bottom-10 right-1/2 h-[420px] w-[420px] text-[#1769D1] opacity-80 md:h-[560px] md:w-[560px] lg:bottom-14 lg:h-[680px] lg:w-[680px]" viewBox="0 0 600 600" fill="none" aria-hidden="true">
              <circle cx="300" cy="300" r="248" stroke="currentColor" strokeOpacity="0.19" strokeWidth="2" strokeDasharray="520 210" />
              <circle cx="300" cy="300" r="198" stroke="currentColor" strokeOpacity="0.22" strokeWidth="2" strokeDasharray="360 180" />
              <circle cx="300" cy="300" r="138" stroke="currentColor" strokeOpacity="0.16" strokeWidth="1.5" strokeDasharray="220 120" />
            </svg>

            <div className="hero-scene-atmosphere pointer-events-none absolute inset-0" aria-hidden="true">
              <span className="hero-scene-halo" />
              <span className="hero-scene-orb hero-scene-orb--one" />
              <span className="hero-scene-orb hero-scene-orb--two" />
              <span className="hero-scene-orb hero-scene-orb--three" />
              <span className="hero-scene-ring hero-scene-ring--one" />
              <span className="hero-scene-ring hero-scene-ring--two" />
            </div>

            <div className="hero-platform pointer-events-none absolute inset-x-[4%] bottom-0 z-[1]" aria-hidden="true">
              <div className="hero-platform-surface" />
              <div className="hero-platform-lip" />
              <span className="hero-platform-label hero-platform-label--left">SERVICE CLOUD</span>
              <span className="hero-platform-label hero-platform-label--right">FLOW · SECURITY</span>
            </div>

            <div className="hero-profile-frame absolute left-[5%] top-[4%] z-[5] aspect-video w-[90%] max-w-none">
              <div className="absolute inset-[5px] overflow-hidden rounded-[24px]">
                <img
                  src={heroPoster}
                  alt={personalInfo.name}
                  className={`absolute inset-0 h-full w-full object-contain drop-shadow-[0_34px_48px_rgba(11,35,69,0.24)] transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
                  style={{
                    WebkitMaskImage: 'radial-gradient(ellipse 76% 92% at 53% 52%, #000 66%, rgba(0,0,0,0.88) 78%, transparent 100%)',
                    maskImage: 'radial-gradient(ellipse 76% 92% at 53% 52%, #000 66%, rgba(0,0,0,0.88) 78%, transparent 100%)',
                  }}
                />

                <video
                  ref={videoRef}
                  src={introVideo}
                  poster={heroPoster}
                  playsInline
                  preload="auto"
                  muted={false}
                  onEnded={stopReel}
                  onLoadedMetadata={(event) => {
                    event.currentTarget.volume = 1;
                    event.currentTarget.muted = false;
                  }}
                  className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'} ${isPlaying ? 'pointer-events-auto' : 'pointer-events-none'}`}
                  style={{
                    WebkitMaskImage: 'radial-gradient(ellipse 76% 92% at 53% 52%, #000 66%, rgba(0,0,0,0.88) 78%, transparent 100%)',
                    maskImage: 'radial-gradient(ellipse 76% 92% at 53% 52%, #000 66%, rgba(0,0,0,0.88) 78%, transparent 100%)',
                  }}
                />

                {isPlaying && (
                  <button
                    type="button"
                    aria-label="Close reel"
                    onClick={stopReel}
                    className="absolute right-4 top-4 z-40 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-lg font-bold text-[#0B2345] shadow-lg transition-transform duration-200 hover:scale-105"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            <div className="hero-float-layer pointer-events-none absolute inset-0" aria-hidden="true">
              {floatingItems.map((item) => (
                <div key={item.label} className={`hero-float-card ${item.position}`} style={{ '--float-delay': item.delay }}>
                  <FeatureIcon kind={item.icon} className="h-5 w-5" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleVideo}
              className="hero-play-control absolute right-0 top-[34%] z-30 flex flex-col items-center gap-2 text-[#1769D1] transition-transform duration-300 hover:-translate-y-1 xl:-right-[10%] xl:top-[36%]"
              aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
            >
              <span className="hero-play-orb grid h-20 w-20 place-items-center rounded-full bg-[#1769D1] text-white shadow-[0_22px_45px_rgba(23,105,209,0.35)] transition-all duration-300 md:h-28 md:w-28">
                {isPlaying ? (
                  <svg className="h-9 w-9 md:h-11 md:w-11" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="ml-1 h-9 w-9 md:h-11 md:w-11" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </span>
              <span className="text-xs font-black uppercase tracking-[0.28em] md:text-sm">Play Reel</span>
            </button>
          </div>
        </div>

        <div className="hero-feature-strip col-span-1 grid grid-cols-2 gap-2 sm:grid-cols-3 md:col-span-1 lg:col-span-2 xl:col-span-3 xl:grid-cols-5" data-aos="fade-up" data-aos-delay="300">
          {featureItems.map((item) => (
            <div className="hero-feature-item" key={item.label}>
              <FeatureIcon kind={item.icon} className="h-4 w-4 shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-32 right-4 z-[25] hidden h-14 w-14 place-items-center rounded-full border-2 border-[#0B2345] text-[#0B2345] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769D1] hover:text-[#1769D1] xl:grid"
        aria-label="Scroll to About"
      >
        <svg className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m0 0l7-7m-7 7l-7-7" />
        </svg>
      </a>

      <svg
        className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-[190px] w-full md:h-[240px]"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 82 C180 142 302 14 507 70 C716 127 827 193 1045 112 C1218 47 1325 57 1440 102 L1440 240 L0 240 Z" fill="#061B3A" opacity="0.32" />
        <path d="M0 128 C186 66 312 142 496 116 C694 88 820 24 1039 86 C1200 132 1324 162 1440 111 L1440 240 L0 240 Z" fill="#061B3A" opacity="0.62" />
        <path d="M0 160 C165 110 312 153 484 132 C676 108 819 57 1028 109 C1190 149 1305 181 1440 133 L1440 240 L0 240 Z" fill="#061B3A" />
      </svg>

    </section>
  );
};

export default Hero;
