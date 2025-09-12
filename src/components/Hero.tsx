// src/components/Hero.tsx
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative pt-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-20">
          
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl lg:text-6xl">
              Navigating the digital landscape <br className="hidden lg:block" /> 
              for success  
            </h1>
            
            <p className="mt-6 text-lg text-black">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, 
              social media marketing, and content creation.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button className="px-6 py-3 rounded-xl bg-black text-white hover:bg-white hover:text-black border border-black transition">
                Book a Consultation
              </button>
            </div>
          </div>
          
          {/* Right Illustration */}
          <div className="relative w-full max-w-md lg:max-w-lg">
            <img 
              src="/img/Illustration.png"   // ✅ Corrected path
              alt="Hero Illustration" 
              className="w-full h-auto drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
