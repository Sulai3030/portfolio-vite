import { RevealOnScroll } from "../RevealOnScroll";

export const Photos = () => {
  return (
    <section id="photos" className="py-24 px-4 relative">
      {""}
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
            Photos
          </h2>
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <div className="container mx-auto max-w-5xl">
              <img
                class="h-48 w-96 object-cover ..."
                src="public/horsecloud.JPG"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
