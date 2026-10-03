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
        if (el && el.offsetTop <= scrollY) { setActiveSection(sections[i]); break; }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const hireMeMailto = `mailto:sinegas1652@gmail.com?subject=Portfolio Inquiry&body=Hello Sinega,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;

  return (
    <nav className={`nav-pill${isScrolled ? ' nav-pill--scrolled' : ''}`} aria-label="Main navigation">
      <div className="nav-inner">

        {/* Logo */}
        <a href="#home" className="nav-logo">
          <span className="nav-logo-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="url(#nlg)"/>
              <path d="M8 10h12M8 14h8M8 18h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="nlg" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3BAEFF"/>
                  <stop offset="1" stopColor="#1355C0"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          {personalInfo.brandName}<span className="nav-logo-dot">.</span>
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {navLinks.map(link => {
            const id = link.toLowerCase();
            const active = activeSection === id;
            return (
              <a key={link} href={`#${id}`} className={`nav-link${active ? ' nav-link--active' : ''}`}>
                {active && <span className="nav-active-bg" aria-hidden="true"/>}
                <span style={{ position: 'relative', zIndex: 1 }}>{link}</span>
                {active && <span className="nav-active-bar" aria-hidden="true"/>}
              </a>
            );
          })}
        </div>

        {/* Hire Me */}
        <a href={hireMeMailto} className="nav-hire">
          Hire Me
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-hamburger"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className="nav-mobile" style={{ maxHeight: isOpen ? '400px' : '0', opacity: isOpen ? 1 : 0 }}>
        <div className="nav-mobile-inner">
          {navLinks.map(link => {
            const id = link.toLowerCase();
            const active = activeSection === id;
            return (
              <a
                key={link} href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`nav-mobile-link${active ? ' nav-mobile-link--active' : ''}`}
              >
                {link}
              </a>
            );
          })}
          <a href={hireMeMailto} onClick={() => setIsOpen(false)} className="nav-mobile-hire">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
