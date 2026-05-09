import { CheckCircle2, Users, Lightbulb } from 'lucide-react';

export const Specialization = () => {
  return (
    <section id="specialization" className="bg-[#002147] py-16 px-4 sm:px-6 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left side */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">Specialized in Credit Transfer</h2>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            We provide a seamless pathway for students looking to transfer their academic credits and complete
            their degree without losing valuable time or progress.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {['B.Tech / B.E', 'UG & PG Programs', 'UGC Approved'].map((tag) => (
              <span
                key={tag}
                className="border border-white/20 text-white text-[11px] font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <a href="#contact" className="inline-block bg-[#B8860B] text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-[#d4a017] transition-colors">
            Check Your Eligibility
          </a>
        </div>

        {/* Right side – two-column list */}
        <div className="grid grid-cols-2 gap-6 bg-white/5 rounded-xl border border-white/10 p-6">
          {/* Who Can Apply */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-[#B8860B]" />
              <h3 className="font-bold text-sm">Who Can Apply</h3>
            </div>
            <ul className="space-y-3">
              {['Discontinued Students', 'Failed Students', 'Diploma Holders', 'Working Professionals'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What We Offer */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-4 h-4 text-[#B8860B]" />
              <h3 className="font-bold text-sm">What We Offer</h3>
            </div>
            <ul className="space-y-3">
              {['Credit Mapping', 'University Selection', 'Documentation', 'Admission Assurance'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
