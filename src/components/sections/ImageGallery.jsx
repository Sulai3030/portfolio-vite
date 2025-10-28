import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";


const images = [
  {
    id: 1,
    src: "./public/Images/54446266337_930e366f33_c.jpg",
    alt: "Beach Sunset",
  },
  {
    id: 2,
    src: "./public/Images/54447368223_12e6553954_c.jpg",
    alt: "Mountain View",
  },
  {
    id: 3,
    src: "./public/Images/54484194432_b38c16ac61_c.jpg",
    alt: "City Lights",
  },
  {
    id: 4,
    src: "./public/Images/54486557502_146131e926_c.jpg",
    alt: "Forest Path",
  },
  {
    id: 5,
    src: "./public/Images/54487398471_77ef349fb6_c.jpg",
    alt: "Ocean Waves",
  },
  {
    id: 6,
    src: "./public/Images/54487597069_aaa4ce8560_c.jpg",
    alt: "Desert Dunes",
  },
];

const ImageGallery = () => {
  return (
    <section
      id="photos"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto p-6 ">
          <h2 className="text-3xl font-bold text-center mb-8">Image Gallery</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative group overflow-hidden rounded-2xl shadow-lg">
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
export default ImageGallery;
