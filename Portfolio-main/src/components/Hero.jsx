import React, { useEffect, useRef, useState } from 'react';
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
  <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
    <span className="absolute bottom-0 left-6 h-14 w-28 rounded-full bg-white/80 blur-[1px]" />
    <span className="absolute bottom-3 left-0 h-12 w-16 rounded-full bg-white/75 blur-[1px]" />
    <span className="absolute bottom-5 left-16 h-20 w-20 rounded-full bg-white/85 blur-[1px]" />
    <span className="absolute bottom-2 left-[7.5rem] h-12 w-20 rounded-full bg-[#EAF4FF]/90 blur-[1px]" />
  </div>
);

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

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
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-[#F3F8FF] text-[#0B2345]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F8FF_42%,#DCEEFF_100%)]" />
        <CloudCluster className="left-[4%] top-[18%] h-28 w-60 opacity-80" />
        <CloudCluster className="right-[9%] top-[14%] h-28 w-64 scale-125 opacity-70" />
        <CloudCluster className="left-[38%] top-[9%] h-24 w-52 scale-75 opacity-60" />
        <CloudCluster className="right-[28%] bottom-[27%] h-24 w-52 scale-90 opacity-55" />
        <svg className="absolute left-0 top-0 h-full w-full opacity-70" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path d="M-60 610 C160 520 320 580 520 510 C720 440 840 470 1010 390 C1180 310 1320 350 1500 250" fill="none" stroke="#DCEEFF" strokeWidth="2" />
          <path d="M-80 690 C150 615 310 660 500 590 C750 500 900 560 1090 475 C1250 404 1350 430 1510 360" fill="none" stroke="#FFFFFF" strokeWidth="3" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[1500px] grid-cols-1 items-center gap-8 px-6 pb-40 pt-28 sm:px-8 md:px-12 md:pt-32 lg:grid-cols-[72px_minmax(0,540px)_minmax(520px,1fr)] lg:gap-10 lg:pb-28 xl:px-16">
        <div className="hidden h-full items-center justify-center lg:flex">
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

        <div className="relative z-20 max-w-xl lg:pb-12" data-aos="fade-up">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#1769D1]">Cloud-ready portfolio</p>
          <h1 className="mb-5 text-[clamp(2.75rem,6vw,5.75rem)] font-black leading-[0.95] text-[#0B2345]">
            {heroContent.greeting},
          </h1>
          <h2 className="mb-7 text-[clamp(2.1rem,4vw,4.5rem)] font-black leading-[1.02] text-[#1769D1]">
            <span className="block">Salesforce Administrator and Developer |</span>
            <span className="block">Data Analyst |</span>
            <span className="block">Frontend developer</span>
          </h2>
          <p className="mb-9 max-w-[540px] text-base font-medium leading-[1.7] text-[#0B2345]/85 md:text-lg">
            {heroContent.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4" data-aos="fade-up" data-aos-delay="150">
            <a
              href={heroContent.ctaPrimary.href}
              className="rounded-full bg-[#1769D1] px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_35px_rgba(23,105,209,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B2345]"
            >
              {heroContent.ctaPrimary.text}
            </a>
            <a
              href={heroContent.ctaSecondary.href}
              className="rounded-full border-2 border-[#1769D1] bg-white/75 px-7 py-3.5 text-sm font-bold text-[#1769D1] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
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

          <div className="mt-8 flex items-center gap-4 lg:hidden" data-aos="fade-up" data-aos-delay="250">
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

        <div className="relative z-10 flex min-h-[440px] items-end justify-center self-end md:min-h-[560px] lg:min-h-[680px] lg:justify-end" data-aos="fade-left" data-aos-delay="250">
          <svg className="absolute bottom-10 right-1/2 h-[420px] w-[420px] translate-x-1/2 text-[#1769D1] opacity-80 md:h-[560px] md:w-[560px] lg:bottom-14 lg:right-[43%] lg:h-[680px] lg:w-[680px]" viewBox="0 0 600 600" fill="none" aria-hidden="true">
            <circle cx="300" cy="300" r="248" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="520 210" />
            <circle cx="300" cy="300" r="198" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2" strokeDasharray="360 180" />
            <circle cx="300" cy="300" r="138" stroke="currentColor" strokeOpacity="0.13" strokeWidth="1.5" strokeDasharray="220 120" />
          </svg>

          <div className="relative h-[440px] w-full max-w-[620px] sm:h-[520px] md:h-[610px] lg:h-[700px] lg:max-w-[690px]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={heroPoster}
                alt={personalInfo.name}
                className={`absolute inset-0 h-full w-full object-cover object-[52%_100%] drop-shadow-[0_34px_48px_rgba(11,35,69,0.24)] transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'} lg:bottom-[-18px]`}
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
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'} ${isPlaying ? 'pointer-events-auto' : 'pointer-events-none'}`}
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

            <button
              type="button"
              onClick={toggleVideo}
              className="absolute right-0 top-8 z-20 flex flex-col items-center gap-3 text-[#1769D1] transition-transform duration-300 hover:-translate-y-1 sm:right-6 md:right-2 lg:-right-6 lg:top-24"
              aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
            >
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#1769D1] text-white shadow-[0_22px_45px_rgba(23,105,209,0.35)] transition-all duration-300 hover:scale-110 md:h-28 md:w-28">
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
      </div>

      <a
        href="#about"
        className="absolute bottom-32 left-1/2 z-30 hidden h-14 w-14 -translate-x-1/2 place-items-center rounded-full border-2 border-[#0B2345] text-[#0B2345] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769D1] hover:text-[#1769D1] md:grid"
        aria-label="Scroll to About"
      >
        <svg className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m0 0l7-7m-7 7l-7-7" />
        </svg>
      </a>

      <svg
        className="absolute bottom-[-1px] left-0 z-20 h-[190px] w-full md:h-[240px]"
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
