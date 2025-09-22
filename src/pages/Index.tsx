
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Thanks } from '@/components/sections/Thanks';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Services />
          <Projects />
          <Experience />
          <Contact />
          <Thanks />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
