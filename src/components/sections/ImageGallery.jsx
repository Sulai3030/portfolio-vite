import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";
import sunset from "../../Images/sunset43025.webp";
import summer_storm from "../../Images/summerstorm.webp";
import ship_on_horizon from "../../Images/ship_on_horizon.webp";
import pollinator from "../../Images/pollinator.webp";
import horsecloud2 from "../../Images/horsecloud2.webp";
import tomato01 from "../../Images/tomato01.webp";



const images = [
  {
    id: 1,
    src: sunset,
    alt: "Instagram Sunset",
  },
  {
    id: 2,
    src: horsecloud2,
    alt: "horsecloud",
  },
  {
    id: 3,
    src: pollinator,
    alt: "Pollinator",
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
    src: tomato01,
    alt: "tomato",
  },
];

const Photos = () => {
  return (
    <section
      id="photos"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto p-6 bg-[#131417]">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2BC3F0]">
            Photo Gallery
          </h2>
          <p className="text-base font-bold text-leftmb-2">
            I am an amateur photographer and here are some of my beginner
            photos. I just got a beginner camera. More of my photos can be found
            on my{" "}
            <a
              href="https://www.instagram.com/sulai3030/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2BC3F0] underline"
            >
              Instagram
            </a>
          </p>
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
