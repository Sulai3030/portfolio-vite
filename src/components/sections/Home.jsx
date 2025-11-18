// src/components/sections/Home.jsx
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 p-6 bg-[#22C4F4">
          <div className="rounded-xl p-8 border bg-[#131417] border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-[#2BC3F0] text-3xl mb-8 max-w-lg mx-auto font-bold text-center">
              Hi! I'm Sulai!
            </p>
            <p className="text-gray-300 text-2xl mb-6 max-w-lg mx-auto">
              I’m a full-stack web developer who loves crafting clean, scalable
              web applications.
            </p>
            <p className="text-gray-300 text-1xl space-y-8 mb-8 max-w-lg mx-auto">
              My goal is to build solutions that offer both exceptional
              performance and a delightful user experience.
            </p>
            <div className="flex justify-center space-x-2">
              <a
                href="#projects"
                className="border border-[#2BC3F0] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hoverbg-blue-500/100)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-[#2BC3F0] text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)], hoverbg-blue-500/10)]"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
