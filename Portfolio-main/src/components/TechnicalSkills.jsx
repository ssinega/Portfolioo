import { technicalSkills } from '../data/portfolioData';

const SkillBadge = ({ skill, index }) => (
  <span
    className="skill-badge"
    style={{ transitionDelay: `${index * 30}ms` }}
  >
    {skill}
  </span>
);

const SkillCard = ({ category, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="skill-card group"
  >
    <h3 className="text-white text-lg font-black tracking-tight mb-6 pb-2 border-b border-white/10 uppercase skill-card-title">
      {category.title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill, i) => (
        <SkillBadge key={skill} skill={skill} index={i}/>
      ))}
    </div>
    {/* Inner shimmer */}
    <div className="skill-card-shimmer" aria-hidden="true"/>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="bg-[#061B3A] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1769D1]/10 rounded-full blur-[120px] pointer-events-none"/>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none"/>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase skills-heading">
            My Skillset
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Salesforce administration, automation, platform skills, and supporting cloud and data technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index}/>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
