import logo from '../edustudylogo.png';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center bg-[#001a35]">
      {/* Background: Premium Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#002147] via-[#001a35] to-[#000d1a] opacity-90" />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 pt-40 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              India's Leading B.Tech Credit Transfer Institution
            </h1>

            <p className="text-[#d4a827] italic text-lg sm:text-xl font-medium mb-4 max-w-xl">
              "You are not behind in life; you are preparing for a different kind of success."
            </p>

            <p className="text-slate-300 text-base mb-8 max-w-lg leading-relaxed">
              Domestic &amp; Global Education Consultancy. We bridge the gap between your past academic hurdles and your future global potential.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#services" className="inline-block bg-[#B8860B] text-white text-sm font-bold px-8 py-3 rounded hover:bg-[#d4a017] transition-all shadow-lg transform hover:-translate-y-0.5">
                Explore Our Services
              </a>
              <a href="#contact" className="inline-block border border-white/30 text-white text-sm font-bold px-8 py-3 rounded hover:bg-white/10 transition-all backdrop-blur-sm">
                Contact Us Now
              </a>
            </div>
          </div>

          {/* Right Column: Large Logo Branding */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Subtle Glow */}
              <div className="absolute -inset-4 bg-[#B8860B]/10 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
              
              {/* Logo Card */}
              <div className="relative bg-white p-4 sm:p-6 rounded-2xl shadow-2xl transform hover:scale-[1.01] transition-transform duration-500 max-w-[280px] sm:max-w-[340px]">
                <img
                  src={logo}
                  alt="EduStudy International"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
