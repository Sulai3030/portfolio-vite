import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";


const images = [
  { id: 1, src: "/images/photo1.jpg", alt: "Beach Sunset" },
  { id: 2, src: "/images/photo2.jpg", alt: "Mountain View" },
  { id: 3, src: "/images/photo3.jpg", alt: "City Lights" },
  { id: 4, src: "/images/photo4.jpg", alt: "Forest Path" },
  { id: 5, src: "/images/photo5.jpg", alt: "Ocean Waves" },
  { id: 6, src: "/images/photo6.jpg", alt: "Desert Dunes" },
];

const ImageGallery = () => {
  return (
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
  );
};

export default ImageGallery;
