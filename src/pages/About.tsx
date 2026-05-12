import logo from '../edustudylogo.png';
import { ContactCTA } from '../components/ContactCTA';
import { FAQ } from '../components/FAQ';

/* ── Shared Page Hero ─────────────────────────────── */
const PageHero = () => (
  <div className="relative overflow-hidden bg-[#001a35] pt-40 pb-16 px-4">
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#002147] via-[#001a35] to-[#000d1a] opacity-90" />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <span className="inline-block text-[#B8860B] text-[10px] font-black uppercase tracking-widest mb-4">
        Who We Are
      </span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
        Leading the Way in Educational Consultancy
      </h1>
      <p className="text-slate-300 text-base max-w-xl mx-auto">
        Ethical, transparent, and results-driven guidance for every student's academic journey.
      </p>
    </div>
  </div>
);

/* ── Mission Points ────────────────────────────────── */
const missionPoints = [
  'Providing ethical and transparent guidance for credit transfers.',
  'Simplifying the admission process for domestic and international universities.',
  'Ensuring 100% genuine documentation and university approvals.',
  'Mentoring students for career excellence and global adaptability.',
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHero />

      {/* Who We Are */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <span className="text-[#B8860B] text-[10px] font-black uppercase tracking-widest">Our Story</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#002147] leading-tight">
              Empowering Students Through Alternative Pathways
            </h2>
            <p className="text-slate-600 leading-relaxed">
              EduStudy International LLP is a premier educational consultancy based in Kerala, with corporate offices in
              Malappuram and regional centers in Kochi. We specialise in providing alternative pathways for students who
              have faced academic setbacks, ensuring they reach their career goals through ethical and transparent
              guidance.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Founded with the belief that a setback is merely a setup for a comeback, we have guided over 1000 students
              into top universities across India and globally.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white p-10 rounded-[32px] shadow-2xl border border-gray-100 flex justify-center transform -rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[320px]">
              <img src={logo} alt="EduStudy International" className="w-56 h-56 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-5">
            <span className="text-[#B8860B] text-[10px] font-black uppercase tracking-widest">Our Vision</span>
            <h2 className="text-2xl font-bold text-[#002147]">The Bridge to Global Education</h2>
            <p className="text-slate-600 leading-relaxed">
              To be a globally trusted education consultancy empowering students to access world-class education and build successful international careers through ethical and personalized guidance.
            </p>
            <blockquote className="border-l-4 border-[#B8860B] pl-5 italic text-[#002147] font-medium">
              "You are not behind in life; you are preparing for a different kind of success."
            </blockquote>
          </div>

          <div className="space-y-5">
            <span className="text-[#B8860B] text-[10px] font-black uppercase tracking-widest">Our Mission</span>
            <h2 className="text-2xl font-bold text-[#002147]">What Drives Us Every Day</h2>
            <ul className="space-y-4">
              {missionPoints.map((point, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-6 h-6 bg-[#B8860B]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-[#B8860B] rounded-full" />
                  </span>
                  <span className="text-slate-700 text-sm leading-relaxed font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats strip matching homepage */}
      <section className="bg-gray-50 py-14 px-4 sm:px-6 border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '#1', label: "India's leading credit transfer institution" },
            { value: '2', label: 'Offices in Malappuram & Kochi' },
            { value: '1000+', label: 'Students Guided' },
            { value: '100%', label: 'Genuine Documentation' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-[#002147] mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ />
      <ContactCTA />
    </div>
  );
};
