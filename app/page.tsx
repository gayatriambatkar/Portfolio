import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Depth from '@/components/sections/Depth';
import Thinking from '@/components/sections/Thinking';
import Runtime from '@/components/sections/Runtime';
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
        <Depth />
        <Thinking />
        <Runtime />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
