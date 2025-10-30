import React from 'react';
//import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import codesnippet from "@/codesnippet.webp";


const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
            Website Development and Profesional Writing Services
          </h2>
          <p className="font-bold mb-8 bg-linear-to-r  text-center text-base ">
            {/* Describe your services here */}I develop and maintain user
            focused websites, as well as write and edit content.
          </p>
          <img
            className="h-48 w-full object-cover"
            src={codesnippet}
            alt="code snippet"
            width={300}
            height={200}
          />
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <div>My services include:</div>
            <ol className="list-disc list-inside text-left">
              <li>Website Development</li>
              <li>Health and Wellness Writing</li>
              <li>Healthcare Policy Writing and Reporting</li>
              <li>Technical Writing</li>
              <li>Educational Writing</li>
              <li>Film and Television Criticism, Reporting, and Analysis</li>
            </ol>
          </div>
          <br />
          <div className="max-w-3xl mx-auto px-4 space-y-4 mt-8">
            <h2 className="text-2xl font-bold mb-8 bg-linear-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
              Below are links to satisfied customers of my copywriting and
              content creation services:
            </h2>
            <p className="text-1xl font-bold mb-8 bg-linear-to-r from-blue-500 to-[#71D7F5] bg-clip-text text-transparent text-left">
              Healthcare Copy Writing:
            </p>
            <ul className="list-disc list-inside text-left no-underline hover:underline">
              <li>
                <a href="https://blackhealthmatters.com/lauren-lee-talks-kidney-disease-breakthroughs/">
                  Lauren Lee talks kidney disease breakthroughs
                </a>
              </li>
              <li>
                <a href="https://blackhealthmatters.com/is-there-a-light-at-the-end-of-the-dark-tunnel-of-kidney-disease-in-children/">
                  Is there light at the end of the tunnel of kidney Disease? An
                  interview with Dr. Gbadegesin
                </a>
              </li>
              <li>
                <a href="https://blackhealthmatters.com/working-with-your-doctor-when-you-have-kidney-disease-empowering-yourself-to-be-an-advocate-for-you">
                  Working with your doctor. Empowering Yourself to be an
                  Advocate for Yourself
                </a>
              </li>
              <li>
                <a href="https://blackhealthmatters.com/kidney-disease/what-is-fsgs/">
                  What is FSGS?
                </a>
              </li>
              <li>
                <a href="https://blackhealthmatters.com/the-truth-about-kidney-disease/">
                  The Truth About Kidney Disease.
                </a>
              </li>
              <li>
                <a href="https://blackhealthmatters.com/how-can-i-be-in-a-clinical-trial/">
                  How Can I Be In A Clinical Trial?
                </a>
              </li>
            </ul>

            <p className="text-1xl font-bold mb-8 bg-linear-to-r from-blue-500 to-[#71D7F5] bg-clip-text text-transparent text-left">
              Health Policy Writing and Reporting:
            </p>
            <p className="text-1xl text-gray-300 text-left mb-6">
              I have edited and written healthcare policy for official websites
              such as this one for the State of New York touting the roll-out of
              a new health insurance plan for the disabled population. New York
              Medicaid Choice is the managed care enrollment program of the New
              York State Department of Health.
              <li>
                <a
                  href="https://nymedicaidchoice.com//"
                  className="hover:underline"
                >
                  New York Medicaid Choice.com
                </a>
              </li>
            </p>
            <p className="text-1xl font-bold mb-8 bg-linear-to-r from-blue-500 to-[#71D7F5] bg-clip-text text-transparent text-left">
              Technical Writing
            </p>
            <p className="text-1xl text-gray-300 text-left mb-6">
              I am also a technincal writer having written for the New York City
              Department of Bulidings when they digitized the process by which
              building owners register to build new, and/or improve upon
              existing, structures in the city of New York.
              <li>
                <a
                  href="https://www.nyc.gov/site/buildings/index.page"
                  className="hover:underline"
                >
                  New York Department of Buildings
                </a>
              </li>
            </p>
            <p className="text-1xl font-bold mb-8 bg-linear-to-r from-blue-500 to-[#71D7F5] bg-clip-text text-transparent text-left">
              Educational Writing
            </p>
            <p className="text-1xl text-gray-300 text-left mb-6">
              I have written in the education space as well.
              <li>
                <a
                  href="https://www.princetonreview.com/law-school-advice/strategies-to-succeed-in-law-school"
                  className="hover:underline"
                >
                  The Princeton Review: Strategies to Succeed in Law School
                </a>
              </li>
            </p>
            <p className="text-1xl font-bold mb-8 bg-linear-to-r from-blue-500 to-[#71D7F5] bg-clip-text text-transparent text-left">
              Film Reporting and Criticism
            </p>
            <p className="text-1xl text-gray-300 text-left mb-6">
              For years I wrote Film and TV reviews. Samples can be found here:
              <li>
                <a
                  href="https://screenrant.com/author/sulai/"
                  className="hover:underline"
                >
                  Screenrant.com
                </a>
              </li>
              <li>
                <a
                  href="https://thescriptlab.com/features/main/reviews-2/tv-reviews/2387-burn-notice-series-finale/"
                  className="hover:underline"
                >
                  TheScriptLab.com
                </a>
              </li>
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Services;
