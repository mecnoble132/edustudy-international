import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { Specialization } from '../components/Specialization';
import { Roadmap } from '../components/Roadmap';
import { About } from '../components/About';
import { SuccessStories } from '../components/SuccessStories';
import { FAQ } from '../components/FAQ';
import { ContactCTA } from '../components/ContactCTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Specialization />
      <Roadmap />
      <About />
      <SuccessStories />
      <FAQ />
      <ContactCTA />
    </>
  );
};
