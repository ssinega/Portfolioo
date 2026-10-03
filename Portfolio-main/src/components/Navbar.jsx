import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const hireMeMailto = `mailto:sinegas1652@gmail.com?subject=Portfolio Inquiry&body=Hello Sinega,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;

  return (
    <nav
      className={`nav-glass-wrap fixed left-1/2 top-4 z-[999] -translate-x-1/2 transition-all duration-500 ${
        isScrolled
          ? 'nav-glass-wrap--scrolled'
          : ''
      }`}
      aria-label="Main navigation"
    >
      <div className="nav-glass-inner flex items-center justify-between px-5 py-2.5 md:px-7">

        {/* Logo */}
        <a href="#home" className="nav-logo group flex items-center gap-2 whitespace-nowrap">
          <span className="nav-logo-mark" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect width="28" height="28" rx="8" fill="url(#navLogoGrad)" />
              <path d="M8 10h12M8 14h8M8 18h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <defs>
                <linearGradient id="navLogoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3BAEFF" />
                  <stop offset="1" stopColor="#1355C0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="text-xl font-black tracking-tight text-[#0B2345]">
            {personalInfo.brandName}<span className="text-[#1769D1]">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link}
                href={`#${sectionId}`}
                className={`nav-link relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'nav-link--active text-[#1769D1]'
                    : 'text-[#0B2345]/75 hover:text-[#1769D1]'
                }`}
              >
                {isActive && (
                  <span className="nav-active-chip absolute inset-0 rounded-lg bg-[#1769D1]/10 backdrop-blur-sm" aria-hidden="true" />
                )}
                <span className="relative z-10">{link}</span>
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#1769D1]" aria-hidden="true" />
                )}
              </a>
            );
          })}
        </div>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <a
            href={hireMeMailto}
            className="nav-hire-btn inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-white transition-all duration-300"
          >
            Hire Me
            {/* Paper plane / send icon — matches Screenshot 2 */}
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-[#0B2345] transition-colors hover:bg-[#1769D1]/10 md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`nav-mobile-menu overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 pb-4 pt-2">
          {navLinks.map((link) => {
            const sectionId = link.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link}
                href={`#${sectionId}`}
                onClick={() => setIsOpen(false)}
                className={`flex min-h-11 items-center rounded-xl px-4 font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1769D1]/12 text-[#1769D1]'
                    : 'text-[#0B2345]/80 hover:bg-[#1769D1]/8 hover:text-[#1769D1]'
                }`}
              >
                {link}
              </a>
            );
          })}
          <a
            href={hireMeMailto}
            onClick={() => setIsOpen(false)}
            className="nav-hire-btn mt-2 flex min-h-11 items-center justify-center rounded-full text-sm font-bold text-white"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
