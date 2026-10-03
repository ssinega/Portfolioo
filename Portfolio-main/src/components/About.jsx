import aboutPhoto from '../assets/about/yusuf-avatar.png';
import salesforceLogo from '../assets/logos/salesforce.svg';
import { aboutContent, personalInfo } from '../data/portfolioData';

const CloudStackIcon = () => (
  <svg className="h-7 w-7" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M11.5 27.5H29c4.4 0 8-3.3 8-7.5 0-4-3.2-7.3-7.2-7.5C28.4 7.7 24 4 18.8 4c-5.7 0-10.5 4.3-11.1 9.9C4.4 15 2 17.9 2 21.4c0 3.4 2.8 6.1 6.2 6.1h3.3Z" fill="#DCEEFF" />
    <path d="M13 22h14M13 27h14M13 32h14" stroke="#1769D1" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const CodeStackIcon = ({ label }) => (
  <div className="grid h-10 w-10 place-items-center rounded-lg border border-[#38BDF8]/30 bg-[#DCEEFF]/10 text-sm font-black text-[#38BDF8]">
    {label}
  </div>
);

const SalesforceIcon = () => (
  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white">
    <img src={salesforceLogo} alt="" className="h-7 w-7 object-contain" />
  </span>
);

const StackCard = ({ icon, name, details }) => (
  <div className="group rounded-lg border border-[#38BDF8]/18 bg-white/[0.045] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/55 hover:bg-white/[0.075] hover:shadow-[0_18px_36px_rgba(56,189,248,0.12)]">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1769D1]/15">
      {icon}
    </div>
    <h3 className="mb-1 text-base font-black text-white">{name}</h3>
    {details && <p className="text-sm font-semibold text-[#38BDF8]">{details}</p>}
  </div>
);

const CloudInfrastructure = () => (
  <svg className="h-full w-full" viewBox="0 0 360 420" fill="none" aria-hidden="true">
    <path d="M80 138c1.2-45.6 38.9-82 84.8-82 24.3 0 46.3 10.2 61.8 26.5 8.8-4.6 18.8-7.2 29.4-7.2 34.8 0 63 28.2 63 63 0 2.9-.2 5.8-.6 8.6 22.2 7.3 38.1 28.2 38.1 52.8 0 30.7-24.9 55.6-55.6 55.6H76.7c-38.8 0-70.2-31.4-70.2-70.2 0-33.7 23.7-61.9 55.4-68.7 4.7-1 9.5-1.4 14.1-1.3 1.1 7.8 2.4 15.5 4 22.9Z" fill="#1769D1" fillOpacity="0.16" stroke="#38BDF8" strokeWidth="2" />
    <path d="M112 170h136M132 199h88M155 228h154" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeDasharray="7 9" opacity="0.65" />

    <path d="M180 258v38M104 296h152M104 296v34M180 296v34M256 296v34" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" />

    <g filter="url(#about-server-shadow)">
      <rect x="45" y="330" width="118" height="56" rx="8" fill="#0B2345" stroke="#38BDF8" strokeOpacity="0.55" />
      <rect x="197" y="330" width="118" height="56" rx="8" fill="#0B2345" stroke="#38BDF8" strokeOpacity="0.55" />
      <rect x="121" y="260" width="118" height="56" rx="8" fill="#0B2345" stroke="#38BDF8" strokeOpacity="0.55" />
    </g>

    <circle cx="68" cy="350" r="5" fill="#38BDF8" />
    <circle cx="90" cy="350" r="5" fill="#DCEEFF" />
    <path d="M113 350h31M68 367h76" stroke="#DCEEFF" strokeWidth="2" strokeLinecap="round" opacity="0.65" />

    <circle cx="220" cy="350" r="5" fill="#38BDF8" />
    <circle cx="242" cy="350" r="5" fill="#DCEEFF" />
    <path d="M265 350h31M220 367h76" stroke="#DCEEFF" strokeWidth="2" strokeLinecap="round" opacity="0.65" />

    <circle cx="144" cy="280" r="5" fill="#38BDF8" />
    <circle cx="166" cy="280" r="5" fill="#DCEEFF" />
    <path d="M189 280h31M144 297h76" stroke="#DCEEFF" strokeWidth="2" strokeLinecap="round" opacity="0.65" />

    <defs>
      <filter id="about-server-shadow" x="25" y="240" width="310" height="166" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#000000" floodOpacity="0.25" />
      </filter>
    </defs>
  </svg>
);

const About = () => {
  const technologies = [
    { name: 'Salesforce Administration', details: 'CRM Configuration', icon: <SalesforceIcon /> },
    { name: 'Service Cloud', details: 'Cases · Entitlements · SLAs', icon: <CloudStackIcon /> },
    { name: 'Flow Automation', details: 'Record-Triggered · Screen Flows', icon: <CodeStackIcon label="F" /> },
    { name: 'Agentforce', details: 'Salesforce AI', icon: <CodeStackIcon label="AI" /> },
  ];

  return (
    <section id="about" className="relative w-full overflow-hidden bg-[#061B3A] px-6 pb-28 pt-24 text-white md:px-12 md:pb-32 md:pt-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute -left-32 top-12 h-80 w-[520px] opacity-[0.08]" viewBox="0 0 520 260" fill="none">
          <path d="M90 165c0-38 31-69 69-69 17-35 52-53 88-53 54 0 99 45 99 99 36 0 63 27 63 63s-27 63-63 63H98c-45 0-81-36-81-81 0-11 2-20 6-30 19 7 42 8 67 8Z" fill="#DCEEFF" />
        </svg>
        <svg className="absolute -right-28 bottom-24 h-72 w-[480px] opacity-[0.08]" viewBox="0 0 520 260" fill="none">
          <path d="M90 165c0-38 31-69 69-69 17-35 52-53 88-53 54 0 99 45 99 99 36 0 63 27 63 63s-27 63-63 63H98c-45 0-81-36-81-81 0-11 2-20 6-30 19 7 42 8 67 8Z" fill="#38BDF8" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[280px_minmax(0,1fr)_300px] xl:gap-10">
          <div data-aos="fade-right" className="flex justify-center lg:justify-start">
            <div className="relative pt-16">
              <div className="absolute left-1/2 top-0 h-20 w-px -translate-x-1/2 bg-[#38BDF8]/60" />
              <div className="absolute left-1/2 top-14 z-20 h-8 w-20 -translate-x-1/2 rounded-b-lg border border-[#38BDF8]/30 bg-[#0B2345] shadow-xl" />
              <div className="relative w-[270px] -rotate-3 rounded-lg border border-[#38BDF8]/35 bg-[#0B2345] p-4 shadow-[0_30px_70px_rgba(0,0,0,0.34)] transition-transform duration-500 hover:rotate-0 sm:w-[300px]">
                <div className="mb-4 overflow-hidden rounded-lg border-2 border-[#38BDF8]/45">
                  <img src={aboutPhoto} alt={personalInfo.name} className="aspect-[4/5] w-full object-cover object-top" />
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#38BDF8]">{personalInfo.firstName}</p>
                    <p className="mt-1 text-xs font-semibold text-[#DCEEFF]/75">Computer Science</p>
                  </div>
                  <span className="h-11 w-11 rounded-lg border border-[#38BDF8]/25 bg-[#1769D1]/15" />
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150" className="max-w-2xl text-center lg:text-left">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#38BDF8]">About me</p>
            <h2 className="mb-6 text-5xl font-black leading-none text-white md:text-6xl">{aboutContent.heading}</h2>
            <div className="space-y-4 text-base leading-[1.75] text-[#DCEEFF] md:text-lg">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {aboutContent.techStack.map((item) => (
                <span key={item} className="rounded-full border border-[#38BDF8]/25 bg-white/[0.045] px-4 py-2 text-sm font-bold text-[#DCEEFF]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="250" className="mx-auto h-[360px] w-full max-w-[360px] lg:col-span-2 lg:h-[300px] xl:col-span-1 xl:h-[420px]">
            <CloudInfrastructure />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="350" className="mt-20 border-t border-[#38BDF8]/20 pt-14">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#38BDF8]">Technical stack</p>
              <h3 className="text-3xl font-black text-white md:text-4xl">Salesforce-first technical stack</h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#DCEEFF]/75 md:text-right">
              Administration, service workflows, automation, and Agentforce, supported by cloud and data skills.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech) => (
              <StackCard key={tech.name} icon={tech.icon} name={tech.name} details={tech.details} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
