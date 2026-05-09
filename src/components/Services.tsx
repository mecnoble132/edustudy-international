export const Services = () => {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=600&h=280&fit=crop&auto=format',
      title: 'Credit Transfer Admissions',
      desc: 'Seamlessly transfer your academic credits and finish your B.Tech degree faster without starting over.',
      link: '#services-credit-transfer',
      accent: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        tag: 'bg-blue-100 text-blue-700',
        badge: 'Credit Transfer',
        hover: 'group-hover:bg-blue-600',
        dot: 'bg-blue-500',
        link: 'text-blue-600 hover:text-blue-800',
        bar: 'bg-blue-500',
      },
    },
    {
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=280&fit=crop&auto=format',
      title: 'First Year Domestic Admissions',
      desc: 'Expert guidance for secure admissions in top Indian institutions — IITs, NITs, and private universities.',
      link: '#services-domestic',
      accent: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        tag: 'bg-emerald-100 text-emerald-700',
        badge: 'Domestic',
        hover: 'group-hover:bg-emerald-600',
        dot: 'bg-emerald-500',
        link: 'text-emerald-700 hover:text-emerald-900',
        bar: 'bg-emerald-500',
      },
    },
    {
      image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=600&h=280&fit=crop&auto=format',
      title: 'Abroad Admissions',
      desc: 'Unlock global opportunities with our international admission services — UK, USA, Europe & beyond.',
      link: '#services-international',
      accent: {
        bg: 'bg-violet-50',
        border: 'border-violet-200',
        tag: 'bg-violet-100 text-violet-700',
        badge: 'International',
        hover: 'group-hover:bg-violet-600',
        dot: 'bg-violet-500',
        link: 'text-violet-700 hover:text-violet-900',
        bar: 'bg-violet-500',
      },
    },
    {
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=280&fit=crop&auto=format',
      title: 'Embassy Attestations',
      desc: 'Hassle-free document attestation and verification services for all international academic requirements.',
      link: '#services-attestation',
      accent: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        tag: 'bg-amber-100 text-amber-700',
        badge: 'Attestation',
        hover: 'group-hover:bg-amber-600',
        dot: 'bg-amber-500',
        link: 'text-amber-700 hover:text-amber-900',
        bar: 'bg-amber-500',
      },
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002147] mb-2">Services We Provide</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Comprehensive educational consultancy for domestic and international students.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group rounded-xl border ${service.accent.border} bg-white overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-36">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Colored overlay bar at bottom */}
                <div className={`absolute bottom-0 left-0 w-full h-1 ${service.accent.bar}`} />
                {/* Badge */}
                <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${service.accent.tag}`}>
                  {service.accent.badge}
                </span>
              </div>

              {/* Content */}
              <div className={`flex flex-col flex-grow p-5 ${service.accent.bg}`}>
                <h3 className="text-sm font-bold text-[#002147] mb-2 leading-snug">{service.title}</h3>
                <p className="text-gray-500 text-xs mb-4 flex-grow leading-relaxed">{service.desc}</p>
                <a
                  href={service.link}
                  className={`text-xs font-bold ${service.accent.link} transition-colors flex items-center gap-1`}
                >
                  Learn More <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
