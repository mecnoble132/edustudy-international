import { useEffect } from 'react';
import { ContactCTA } from '../components/ContactCTA';

/* ── Shared Page Hero ─────────────────────────────── */
const PageHero = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="relative overflow-hidden bg-[#001a35] pt-40 pb-16 px-4">
    {/* Grid pattern */}
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
        Our Services
      </span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
        {title}
      </h1>
      <p className="text-slate-300 text-base max-w-xl mx-auto">{subtitle}</p>
    </div>
  </div>
);

/* ── Service Data ─────────────────────────────────── */
const services = [
  {
    tag: 'Credit Transfer',
    title: 'Credit Transfer Admissions',
    description:
      'Successfully transfer your existing academic credits to premier Indian universities. Perfect for students looking to continue their B.Tech without starting from scratch.',
    image: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=900&auto=format&fit=crop',
    details: [
      'UGC / AICTE Approved Universities',
      'Lateral Entry to 2nd / 3rd Year',
      'Valid Degree Certificates',
      'Government Job Eligibility',
    ],
  },
  {
    tag: 'Domestic',
    title: 'First Year Domestic Admissions',
    description:
      'Get guided admission into top-tier private and deemed universities across India. We handle the paperwork and counselling for a completely stress-free entry.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&auto=format&fit=crop',
    details: [
      'Top Engineering Colleges',
      'Management Quota Guidance',
      'Campus Visit Assistance',
      'Document Verification',
    ],
  },
  {
    tag: 'International',
    title: 'Abroad Admissions',
    description:
      'Navigate the complex process of studying in the UK, USA, Europe, or Australia with our expert consultants by your side at every step.',
    image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=900&auto=format&fit=crop',
    details: ['University Selection', 'Visa Documentation', 'SOP Assistance', 'Pre-departure Briefing'],
  },
  {
    tag: 'Attestation',
    title: 'Embassy Attestations',
    description:
      'Hassle-free document attestation and verification services for all international academic and professional requirements.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&auto=format&fit=crop',
    details: ['MEA Attestation', 'Embassy Legalisation', 'Document Apostille', 'Courier Assistance'],
  },
];

/* ── Page ─────────────────────────────────────────── */
export const ServicesPage = () => {
  useEffect(() => {
    if (window.location.hash.includes('-')) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Services We Provide"
        subtitle="Comprehensive educational consultancy for domestic and international students."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 space-y-20">
        {services.map((service, i) => (
          <div
            key={i}
            id={`services-${service.tag.toLowerCase().replace(' ', '-')}`}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center scroll-mt-24`}
          >
            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#002147] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow">
                  {service.tag}
                </span>
                {/* Gold accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] to-[#d4a017]" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-5">
              <span className="text-[#B8860B] text-[10px] font-black uppercase tracking-widest">{service.tag}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002147] leading-tight">{service.title}</h2>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <span className="w-2 h-2 bg-[#B8860B] rounded-full shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-block bg-[#002147] text-white text-xs font-black uppercase tracking-widest px-7 py-3 rounded hover:bg-[#00306b] transition-all shadow-lg transform hover:-translate-y-0.5">
                Enquire Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <ContactCTA />
    </div>
  );
};
