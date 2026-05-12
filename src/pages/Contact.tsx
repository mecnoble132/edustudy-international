import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { FAQ } from '../components/FAQ';

/* ── Custom Branded Select ────────────────────────── */
const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Credit Transfer Inquiry');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    'Credit Transfer Inquiry',
    'Domestic Admission',
    'Abroad Admission',
    'Other'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div 
        className={`w-full px-4 py-3 text-sm font-semibold text-[#002147] rounded-lg border transition-all flex items-center justify-between cursor-pointer select-none ${
          isOpen ? 'border-[#B8860B] ring-2 ring-[#B8860B]/20 bg-white shadow-sm' : 'border-gray-200 bg-gray-50 hover:border-[#B8860B]/50 hover:bg-white'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <ChevronDown className={`w-4 h-4 text-[#B8860B] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={3} />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] overflow-hidden animate-fade-in origin-top">
          {options.map((option) => (
            <div
              key={option}
              className={`px-4 py-3 text-sm cursor-pointer transition-all flex items-center gap-3 border-b border-gray-50 last:border-0 ${
                selected === option 
                  ? 'bg-[#001a35] text-white font-bold' 
                  : 'text-slate-600 hover:bg-[#f8fafc] hover:text-[#002147] font-medium'
              }`}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              <span className={`w-2 h-2 rounded-full transition-colors ${selected === option ? 'bg-[#B8860B]' : 'bg-transparent'}`} />
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

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
        Get in Touch
      </span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
        We're Here to Help
      </h1>
      <p className="text-slate-300 text-base max-w-xl mx-auto">
        Have questions about B.Tech credit transfers or admissions? Our expert consultants are ready to assist you.
      </p>
    </div>
  </div>
);

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 pb-20">
        {/* Contact Cards - Scaled Down */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#B8860B]/10 rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-[#B8860B]" />
            </div>
            <h3 className="text-lg font-bold text-[#002147]">Call Us</h3>
            <p className="text-xs text-slate-500 mb-2">Mon-Sat, 9am - 6pm</p>
            <a href="tel:+917975821188" className="text-sm font-black text-[#002147] hover:text-[#B8860B] transition-colors">
              +91 79758 21188
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#B8860B]/10 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-[#B8860B]" />
            </div>
            <h3 className="text-lg font-bold text-[#002147]">Email Us</h3>
            <p className="text-xs text-slate-500 mb-2">Replies within 24 hours</p>
            <a href="mailto:info@edustudy.co.in" className="text-sm font-black text-[#002147] hover:text-[#B8860B] transition-colors">
              info@edustudy.co.in
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#B8860B]/10 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-[#B8860B]" />
            </div>
            <h3 className="text-lg font-bold text-[#002147]">Office Hours</h3>
            <p className="text-xs text-slate-500 mb-2">Visit our office</p>
            <p className="text-sm font-black text-[#002147]">
              9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form - More compact */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#002147]">Send a Message</h2>
              <p className="text-sm text-slate-500 mt-1">Fill out the form below and we'll get back to you shortly.</p>
            </div>
            
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                <CustomSelect />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                <textarea rows={4} className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button 
                onClick={(e) => { e.preventDefault(); alert('Message sent successfully! Our team will contact you soon.'); }}
                className="w-full bg-[#002147] text-white py-3 rounded-lg text-sm font-black uppercase tracking-widest hover:bg-[#00306b] transition-all shadow-md active:scale-[0.98] mt-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Locations - Scaled down */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg flex gap-4 items-start group hover:border-[#B8860B]/30 transition-colors">
              <div className="w-10 h-10 bg-[#002147] text-white rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#002147]">Malappuram Office</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">Corporate Head Office, Downhill, Malappuram, Kerala 676505</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg flex gap-4 items-start group hover:border-[#B8860B]/30 transition-colors">
              <div className="w-10 h-10 bg-[#B8860B] text-white rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#002147]">Kochi Office</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">Regional Center, Edappally, Kochi, Kerala 682024</p>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-[#B8860B] p-6 rounded-2xl text-white shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-1">Need immediate help?</h3>
                <p className="text-white/80 text-sm mb-5">Our experts are available for a quick chat right now.</p>
                <a href="https://wa.me/917975821188" className="bg-white text-[#002147] px-5 py-2.5 text-sm rounded-lg font-bold inline-block hover:shadow-lg transition-all active:scale-95">
                  Chat via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
};
