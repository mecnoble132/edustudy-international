import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const stories = [
  {
    name: "Lana Meharin",
    achievement: "Credit Transfer Support",
    story: "An outstanding credit transfer experience! Edu Study International provided exceptionally reliable, professional, and friendly service throughout the entire process. Their efficiency and transparency exceeded my expectations I’m completely satisfied and truly grateful for their support.",
    rating: 5
  },
  {
    name: "Fesni Finu",
    achievement: "University Selection",
    story: "I had a great experience with Edustudy international.They provide me Valuable assistance with university selection .Provides us best counsellor and best guidance through efficient handling with our application and queries .this team was incredibly supportive for selection of education career After my higher study.",
    rating: 5
  },
  {
    name: "Vijisha K",
    achievement: "Educational Guidance",
    story: "I had a great experience with Edustudy international.They provide me Valuable assistance with university selection .this team was incredibly supportive for selection of education career After my higher study.",
    rating: 5
  }
];

export const SuccessStories = () => {
  return (
    <section id="success-stories" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#B8860B] text-xs font-black uppercase tracking-[0.3em] mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#002147] mb-6 tracking-tight"
          >
            Students Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Real results from real students who chose EduStudy International to shape their academic future.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative group hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#B8860B] rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                <Quote className="text-white w-6 h-6" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B8860B] text-[#B8860B]" />
                ))}
              </div>

              <p className="text-slate-600 italic mb-8 leading-relaxed">
                "{story.story}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {story.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#002147]">{story.name}</h4>
                  <p className="text-xs text-[#B8860B] font-bold uppercase tracking-wider">{story.achievement}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
