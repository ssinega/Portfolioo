import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const hireMeMailto = `mailto:sinegas1652@gmail.com?subject=Portfolio Inquiry&body=Hello Sinega,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;

  return (
    <nav 
      className={`hero-glass-nav fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-[1280px] -translate-x-1/2 rounded-2xl border transition-all duration-300 ${
        isScrolled
          ? 'border-white/80 bg-white/80 py-1.5 shadow-[0_12px_36px_rgba(23,105,209,0.12)] backdrop-blur-[18px]'
          : 'border-white/60 bg-white/60 py-1.5 shadow-[0_8px_28px_rgba(23,105,209,0.08)] backdrop-blur-[18px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex min-h-11 items-center text-[#0B2345] text-2xl font-black tracking-tight whitespace-nowrap">
          {personalInfo.brandName}<span className="text-[#1769D1]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className={`font-medium relative group transition-colors duration-300 ${
                link === 'Home' ? 'text-[#1769D1]' : 'text-[#0B2345] hover:text-[#1769D1]'
              }`}
            >
              {link}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#1769D1] transition-all duration-300 ${
                link === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </div>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <a 
            href={hireMeMailto}
            className="px-6 py-2.5 rounded-full bg-[#1769D1] text-white font-semibold hover:bg-[#0d4fa8] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden min-h-11 min-w-11 text-[#0B2345] p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-md shadow-lg ${
          isOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`flex min-h-11 items-center font-bold text-lg border-b border-gray-200 pb-2 transition-colors ${
                link === 'Home' ? 'text-[#1769D1]' : 'text-[#0B2345] hover:text-[#1769D1]'
              }`}
            >
              {link}
            </a>
          ))}
          <a 
            href={hireMeMailto}
            onClick={() => setIsOpen(false)} 
            className="mt-4 px-6 py-3 rounded-full bg-[#1769D1] text-white font-semibold text-center block hover:bg-[#0d4fa8] transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
