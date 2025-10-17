// src/components/sections/Projects.jsx
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">PartyDash.com</h3>
              <p className="text-sm font-bold text-leftmb-2">
                Frontend Engineer
              </p>
              <p className="text-gray-400 text-left mb-4">
                I designed the customer interface of a website that delivers
                ready-made birthday parties.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Javascript", "HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://web.archive.org/web/20220707140808/https://partydash.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold text-leftmb-2">
                <a href="https://www.johndavidwest.com/">
                  John David West: Social Media + Photography
                </a>
              </h3>
              <p className="text-sm font-bold text-leftmb-2">
                Fullstack Engineer
              </p>
              <p className="text-gray-400 text-left mb-4">
                John David West is a dynamic Social Media Manager and
                Photographer who thrives on the art of content creation.
              </p>
              <p className="text-gray-400 text-left mb-4">
                With eight years of experience in social media management,
                social strategy, and campaign execution that converts fans to
                customers by cultivating communities and creating quality
                multimedia content across platforms.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "HTML", "CSS", "Photoshop"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.johndavidwest.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-lg font-bold mb-2">
                Mayapple Center for the Arts and Humanities
              </h3>
              <p className="text-sm font-bold text-leftmb-2">Webmaster</p>
              <p className="text-gray-400 mb-4 text-left">
                Updated the site to include essential information about
                Mayapple’s program at Sarah Lawrence College, including links to
                relevant resources.
              </p>
              <p className="text-gray-400 mb-4 text-left">
                Communicated the foundation’s message through updates on the
                homepage, highlighting the mission, upcoming events, enrollment
                opportunities, and scholarships.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Drupal"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://mayapplecenter.org/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">
                Regeneron Pharmaceuticals, Inc.
              </h3>
              <p className="text-sm font-bold text-leftmb-2">
                Technical Writer
              </p>
              <p className="text-gray-400 text-left mb-4">
                Some of my work is under an NDA.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Sharepoint", "MS Word"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.regeneron.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4">
            <div className="mt-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <p className="text-xl font-bold text-center mb-2">
                  New York Department of Buildings
                </p>
                <p className="text-sm font-bold text-leftmb-2">
                  Technical Writer
                </p>
                <p className="text-gray-400 text-left mb-4">
                  Our team rewrote and edited complex technical information in
                  order to present it in a clear and concise manner to the
                  public.
                </p>
                <p className="text-gray-400 text-left mb-4">
                  We created User Guides and Manuals to aid end-users
                  (architects, contractors, superintendents, the general public
                  etc.) in understanding the online portal for the New York City
                  Department of Buildings’ website.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Javascript", "HTML", "CSS"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-blue-400 hover:text-blue-300 transition-colors my-4">
                  <a href="https://www1.nyc.gov/site/buildings/index.page">
                    View Project →
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition">
                <p className="text-xl font-bold text-center mb-2">Maximus</p>
                <p className="text-sm font-bold text-leftmb-2">
                  Assistant Editor - Website QA
                </p>
                <p className="text-gray-400 text-left mb-4">
                  <li className="list-disc">
                    Translated legal team communications into easily
                    understandable materials for the general public.
                  </li>
                  <li className="list-disc">
                    Performed QA on the New York Medicaid Choice
                    website to prevent new errors. Copywrote internal and
                    external communications materials to promote and support
                    executive managers.{" "}
                  </li>
                  <li className="list-disc">
                    Performed quality assurance on the New York Medicaid Choice
                    website to prevent new errors.{" "}
                  </li>
                  <li className="list-disc">
                    Copywrote internal and external communications materials to
                    promote and support executive managers.
                  </li>
                  <li className="list-disc">
                    Managed professional recording sessions with Native speakers
                    of six languages to create new healthcare plan material that could be
                    easily understood by hearing and developmentally-impaired
                    citizens of New York State.{" "}
                  </li>
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "Photoshop"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://nymedicaidchoice.com/"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
