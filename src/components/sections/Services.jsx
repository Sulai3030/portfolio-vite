import React from 'react';
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";


const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
            My Services
          </h2>
          <p className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
            {/* Describe your services here */}
            I offer a range of services to help you achieve your goals.
          </p>
          <img className="h-48 w-full object-cover src= https://imgur.com/a/vMaF76J.jpg" alt="code snippet"/>
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p class="text-gray-300 text-left mb-6 ">
              <div></div>
              <ul className="list-disc list-inside">
                <li>Website Development</li>
                <li>Health and Wellnes Writing</li>
                <li>Healthcare Policy Writing and Reporting</li>
                <li>Technical Writing</li>
                <li>Film and Television Criticism, Reporting, and Analysis</li>
              </ul>
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Services;
