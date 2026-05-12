import { ReactNode, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: ReactNode;
}

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is Credit Transfer for B.Tech students?",
      answer: (
        <div className="space-y-4">
          <p>
            A credit transfer admission for B.Tech students means a student moves from one college/university to another and carries forward (“transfers”) the academic credits they already earned.
          </p>
          <p>
            Instead of starting the degree from the first year again, the new institution may recognize completed subjects and allow the student to continue from the corresponding semester or year.
          </p>
          <div className="pt-2">
            <p className="font-bold text-[#002147] mb-2 uppercase text-[10px] tracking-wider">How it works</p>
            <p className="mb-2">When you complete subjects in a B.Tech program, each subject has assigned credits. For example, Engineering Mathematics might be 4 credits, while a Programming Lab is 2 credits.</p>
            <ul className="space-y-2 list-disc pl-4 text-gray-500">
              <li>The new college checks your syllabus, marks, and credits.</li>
              <li>They compare them with their own curriculum.</li>
              <li>Matching subjects are accepted as transferred credits.</li>
              <li>You continue the course without repeating those subjects.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "Who is eligible for Credit Transfer?",
      answer: (
        <div className="space-y-4">
          <p>To be eligible for a credit transfer, you must meet the following criteria:</p>
          <div className="space-y-3">
            <div>
              <p className="font-bold text-[#002147] text-[10px] uppercase tracking-wider mb-1">Institutional Recognition</p>
              <p>You should already be studying in a recognized engineering college/university. The institution must be approved by <span className="font-semibold text-blue-600">AICTE</span> or a recognized authority like the <span className="font-semibold text-blue-600">UGC</span>.</p>
            </div>
            <div>
              <p className="font-bold text-[#002147] text-[10px] uppercase tracking-wider mb-1">Academic Completion</p>
              <p>Most universities allow transfer only after you have completed at least one year (2 semesters) or sometimes after the 2nd year.</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-xl border border-amber-100">
              <p className="text-amber-800 text-xs leading-relaxed">
                <span className="font-bold">Note:</span> Even if eligible, transfer depends on <span className="font-bold">vacant seats</span> in the target college or branch. For example, Computer Science seats may be full while Mechanical has vacancies.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "Which Universities are available for Credit Transfer?",
      answer: (
        <div className="space-y-4">
          <p>We facilitate admissions in premier institutions, including:</p>
          <ul className="grid grid-cols-1 gap-3">
            <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 group hover:border-blue-200 hover:bg-white transition-all">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="font-bold text-[#002147]">Prist University</span>
            </li>
            <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 group hover:border-blue-200 hover:bg-white transition-all">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="font-bold text-[#002147]">Vinayaka Missions Research and Foundation</span>
            </li>
          </ul>
          <p className="text-xs text-gray-500">We also work with many other UGC and AICTE approved universities across India. Contact our experts for a personalized list based on your preferences.</p>
        </div>
      )
    },
  ];

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-4">
            <HelpCircle size={14} />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002147] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our services and the admission process. 
            Can't find the answer you're looking for? Reach out to our team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`group border rounded-2xl transition-all duration-300 ${
                activeIndex === index 
                  ? 'border-blue-200 bg-blue-50/30 shadow-sm' 
                  : 'border-gray-100 bg-gray-50/50 hover:border-blue-200 hover:bg-white'
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
              >
                <span className={`font-semibold text-sm sm:text-base transition-colors ${
                  activeIndex === index ? 'text-blue-700' : 'text-[#002147]'
                }`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-400 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180 text-blue-500' : 'group-hover:text-blue-400'
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 sm:p-6 pt-0 border-t border-blue-100/50">
                  <div className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Still have questions? 
            <a href="#contact" className="ml-2 font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Contact us today →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
