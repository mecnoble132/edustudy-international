import logo from '../edustudylogo.png';
import { MapPin } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Logo Card */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center justify-center aspect-square">
            <img
              src={logo}
              alt="EduStudy International Logo"
              className="w-48 h-48 object-contain"
            />
            <div className="mt-2 text-center">
              <span className="text-[#002147] font-black text-sm tracking-tight">EDUSTUDY</span>
              <br />
              <span className="text-gray-400 text-[10px] font-medium uppercase tracking-widest">International</span>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1">
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#002147] bg-[#002147]/8 px-3 py-1 rounded mb-4">
            Our Vision
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002147] leading-tight mb-4">
            Empowering Students Through Alternative Pathways
          </h2>

          <div className="space-y-4 text-gray-500 text-sm leading-relaxed mb-6">
            <p>
              At EduStudy International LLP, we believe that a setback is merely a setup for a comeback.
              We are dedicated to providing ethical, transparent, and comprehensive educational consultancy services.
            </p>
            <p>
              Our goal is to be the bridge that connects aspiring students with global educational opportunities,
              regardless of past academic hurdles, ensuring every student has the chance to achieve their true potential.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {['Malappuram', 'Kochi'].map((city) => (
              <a
                key={city}
                href="#"
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 hover:shadow-sm transition-shadow group"
              >
                <MapPin className="w-4 h-4 text-[#B8860B]" />
                <span className="text-sm font-semibold text-[#002147]">{city}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
