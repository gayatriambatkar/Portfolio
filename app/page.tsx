import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Thinking from '@/components/sections/Thinking';
import Depth from '@/components/sections/Depth';
import Experience from '@/components/sections/Experience';
import Runtime from '@/components/sections/Runtime';
import EngineeringNotes from '@/components/sections/EngineeringNotes';
import Failures from '@/components/sections/Failures';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <main className="relative z-[1]">
        <Hero />
        <Projects />
        <Experience />
        <Thinking />
        <Depth />
        <Runtime />
        <EngineeringNotes />
        <Failures />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
