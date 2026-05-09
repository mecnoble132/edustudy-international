import { Phone, Mail } from 'lucide-react';

export const ContactCTA = () => {
  return (
    <section id="contact" className="bg-[#002147] py-16 px-4 sm:px-6 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Start Your Journey Today</h2>
        <p className="text-slate-300 text-sm mb-10 max-w-lg mx-auto">
          Connect with our expert counsellors and find the best path forward for your education and career.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
          <a href="tel:+917975821188" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#B8860B] transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold">+91 79758 21188</span>
          </a>

          <a href="mailto:info@edustudy.co.in" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#B8860B] transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold">info@edustudy.co.in</span>
          </a>
        </div>

        <a href="#contact" className="inline-block bg-[#B8860B] text-white text-sm font-bold px-10 py-3 rounded hover:bg-[#d4a017] transition-colors shadow-lg">
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
};
