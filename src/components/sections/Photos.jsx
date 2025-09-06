// src/components/sections/About.jsx
import { RevealOnScroll } from "../RevealOnScroll";

export const Photos = () => {

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <div class="grid grid-cols-4 gap-4">
            <div>01</div>

             <div>09</div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
