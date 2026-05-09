import logo from '../edustudylogo.png';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: 'Credit Transfer', href: '#services-credit-transfer' },
    { name: 'Domestic Admissions', href: '#services-domestic' },
    { name: 'Abroad Admissions', href: '#services-international' },
    { name: 'Embassy Attestations', href: '#services-attestation' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Home', href: '#home' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="bg-[#000d1a] text-slate-400 pt-20 pb-10 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <img
                src={logo}
                alt="EduStudy International"
                className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-2xl"
              />
              <div className="flex flex-col">
                <span className="text-white font-black text-lg leading-none tracking-tight">EduStudy</span>
                <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-widest mt-1">International</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              India's leading educational consultancy specializing in B.Tech credit transfers. We empower students to overcome academic hurdles and achieve global success.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#B8860B] hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-8 flex items-center gap-2">
              <span className="w-6 h-px bg-[#B8860B]" /> Our Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-8 flex items-center gap-2">
              <span className="w-6 h-px bg-[#B8860B]" /> Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-8 flex items-center gap-2">
              <span className="w-6 h-px bg-[#B8860B]" /> Contact Details
            </h4>
            <div className="space-y-5">
              <a href="tel:+917975821188" className="flex items-start gap-3 group text-sm hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-[#B8860B] shrink-0" />
                <span>+91 79758 21188</span>
              </a>
              <a href="mailto:info@edustudy.co.in" className="flex items-start gap-3 group text-sm hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-[#B8860B] shrink-0" />
                <span>info@edustudy.co.in</span>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-[#B8860B] shrink-0" />
                <div className="space-y-2">
                  <p><span className="text-white font-semibold">Malappuram:</span> Corporate Office, Kerala</p>
                  <p><span className="text-white font-semibold">Kochi:</span> Regional Center, Kerala</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            © {currentYear} EduStudy International LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] uppercase font-black tracking-widest text-slate-500">
            <span className="text-[#B8860B]/60 hover:text-[#B8860B] cursor-default transition-colors">ISO 9001:2015 Certified</span>
            <span className="text-[#B8860B]/60 hover:text-[#B8860B] cursor-default transition-colors">UGC Approved Consultant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
