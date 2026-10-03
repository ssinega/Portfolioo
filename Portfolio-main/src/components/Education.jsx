import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Education
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 uppercase">
            Academic Background
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            A strong foundation in computer science, software engineering, and applied technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div data-aos="fade-right" className="bg-[#0B2345] rounded-3xl p-8 text-white shadow-[0_20px_50px_rgba(23,105,209,0.15)]">
            <p className="text-xs font-black uppercase tracking-[0.3em] opacity-80 mb-4">Degree</p>
            <h3 className="break-words text-2xl md:text-3xl font-black mb-3">{education.degree}</h3>
            <p className="text-[#A9BDD0] text-base font-medium">{education.institution}</p>
            <p className="mt-4 text-sm font-semibold text-[#DCEEFF]">{education.status}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm font-semibold">CGPA: {education.cgpa}</span>
              <span className="px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm font-semibold">Study period: {education.period}</span>
            </div>
          </div>

          <div data-aos="fade-left" className="bg-[#111111] rounded-3xl p-8 text-white border border-white/10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/50 mb-4">Highlights</p>
            <ul className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
              <li className="flex gap-3"><span className="text-[#1769D1] font-black">•</span><span>Currently pursuing an undergraduate degree in Computer Science and Engineering.</span></li>
              <li className="flex gap-3"><span className="text-[#1769D1] font-black">•</span><span>Building Salesforce, cloud, and programming skills alongside academic study.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
