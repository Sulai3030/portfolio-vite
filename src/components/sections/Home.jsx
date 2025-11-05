// src/components/sections/Home.jsx
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-left z-10 px-4">
          <p className="text-gray-300 text-3xl mb-6 max-w-lg mx-auto">
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
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)], hoverbg-blue-500/10)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
