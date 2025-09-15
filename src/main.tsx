import { createRoot } from 'react-dom/client';
import './index.css';
import Hero from './components/Hero.tsx';
import Navbar from './components/Navbar.tsx';
import Sponsors from './components/Sponsors.tsx';
import Services from './components/Services.tsx';
import Study from './components/Study.tsx';
import Process from './components/Process.tsx';
import Team from './components/Team.tsx';
import Testimonials from './components/Testimonials.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/footer.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <Navbar />
    <Hero />
    <Sponsors />
    <Services />
    <Study />
    <Process />
    <Team />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);