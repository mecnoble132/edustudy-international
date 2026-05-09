import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../edustudylogo.png';

export const Navbar = ({ currentPath }: { currentPath: string }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const isActive = (href: string) => {
    if (href === '#home' && (currentPath === '#home' || currentPath === '')) return true;
    return currentPath === href;
  };

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-500 h-24 flex items-center ${
        isScrolled || currentPath !== '#home'
          ? 'bg-white border-b border-gray-100 shadow-md' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="relative">
            <div className={`absolute -inset-1.5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity ${isScrolled || currentPath !== '#home' ? 'bg-gray-200' : 'bg-white/20'}`} />
            <img
              src={logo}
              alt="EduStudy International"
              className="h-11 w-11 rounded-full object-cover object-center relative z-10 border border-white/10 shadow-lg"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-extrabold text-base tracking-tight transition-colors ${isScrolled || currentPath !== '#home' ? 'text-[#002147]' : 'text-white'}`}>
              EduStudy International
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-all relative ${
                isScrolled || currentPath !== '#home'
                  ? (isActive(link.href) ? 'text-[#002147]' : 'text-gray-600 hover:text-[#002147]')
                  : (isActive(link.href) ? 'text-white' : 'text-white/80 hover:text-white')
              } ${
                isActive(link.href) && (
                  `after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 ${isScrolled || currentPath !== '#home' ? 'after:bg-[#B8860B]' : 'after:bg-white'}`
                )
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a 
          href="#contact"
          className={`hidden md:flex text-xs font-black uppercase tracking-widest px-7 py-3.5 rounded transition-all transform hover:scale-105 shadow-lg active:scale-95 ${
            isScrolled || currentPath !== '#home'
              ? 'bg-[#002147] text-white hover:bg-[#00306b]' 
              : 'bg-white text-[#002147] hover:bg-gray-100'
          }`}
        >
          Get Free Counselling
        </a>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${isScrolled || currentPath !== '#home' ? 'text-[#002147]' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#001a35] border-t border-white/5 px-4 py-6 space-y-4 shadow-2xl animate-fade-in origin-top">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block text-base font-bold py-3 border-b border-white/5 last:border-0 transition-colors ${
                isActive(link.href) ? 'text-[#B8860B]' : 'text-slate-300 hover:text-white'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="block w-full text-center bg-[#B8860B] text-white text-sm font-black uppercase tracking-widest px-4 py-4 rounded mt-4 hover:bg-[#d4a017] transition-colors shadow-lg"
            onClick={() => setMobileOpen(false)}
          >
            Get Free Counselling
          </a>
        </div>
      )}
    </nav>
  );
};
