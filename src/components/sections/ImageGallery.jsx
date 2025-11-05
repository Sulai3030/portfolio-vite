import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";
import sunset from "../../Images/sunset43025.webp";
import lake01 from "../../Images/lake01.webp";
import woods01 from "../../Images/woods.webp";
import summer_storm from "../../Images/summerstorm.webp";
import ship_on_horizon from "../../Images/ship_on_horizon.webp";
import sunset02 from "../../Images/sunset02.webp";




const images = [
  {
    id: 1,
    src: sunset,
    alt: "Instagram Sunset",
  },
  {
    id: 2,
    src: lake01,
    alt: "Lake01",
  },
  {
    id: 3,
    src: woods01,
    alt: "Woods_sunset",
  },
  {
    id: 4,
    src: summer_storm,
    alt: "summer_storm",
  },
  {
    id: 5,
    src: ship_on_horizon,
    alt: "ship on horizon",
  },
  {
    id: 6,
    src: sunset02,
    alt: "summer_sunset",
  },
];

const Photos = () => {
  return (
    <section
      id="photos"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2BC3F0]">
            Image Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-64"
                />
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Photos;
