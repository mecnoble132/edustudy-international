import { MessageSquare, UserCheck, School, FileText, ClipboardCheck, CheckCircle } from 'lucide-react';

export const Roadmap = () => {
  const steps = [
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Career Counselling', step: 'Step 1' },
    { icon: <UserCheck className="w-5 h-5" />, label: 'Profile Evaluation', step: 'Step 2' },
    { icon: <School className="w-5 h-5" />, label: 'University Shortlist', step: 'Step 3' },
    { icon: <FileText className="w-5 h-5" />, label: 'Application Process', step: 'Step 4' },
    { icon: <ClipboardCheck className="w-5 h-5" />, label: 'Admission Offer', step: 'Step 5' },
    { icon: <CheckCircle className="w-5 h-5" />, label: 'Seat Confirmation', step: 'Step 6' },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002147] mb-2">Our Roadmap to Success</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            From initial consultation to your final seat confirmation, we guide you every step.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[8.33%] right-[8.33%] h-px bg-gray-200 z-0" />

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center text-[#002147] mb-3 hover:bg-[#002147] hover:text-white transition-all cursor-default">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold text-[#B8860B] uppercase tracking-widest mb-0.5">{step.step}</span>
                <p className="text-xs font-semibold text-[#002147] leading-snug">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
