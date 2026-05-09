export const Stats = () => {
  const stats = [
    { label: "India's leading credit transfer institution", value: "#1" },
    { label: "Offices in Malappuram & Kochi", value: "2" },
    { label: "Domestic & Global Admissions", value: "Global" },
    { label: "Students Guided", value: "1000+" },
  ];

  return (
    <section className="relative z-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,33,71,0.15)] border border-gray-100 -mt-10 mb-12 py-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`text-center px-4 transition-all duration-300 hover:scale-105 ${
                i !== stats.length - 1 ? 'md:border-r border-gray-100' : ''
              }`}
            >
              <div className="text-2xl md:text-3xl font-black text-[#002147] mb-1">
                {stat.value}
              </div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-slate-400 max-w-[140px] mx-auto leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
