// src/components/sections/About.jsx
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Javascript",
    "React",
    "VueJS",
    "TypeScript",
    "TailwindCSS",
  ];
  const backendSkills = [
    "Node.js",
    "Python",
    "MongoDB",
    "GraphQL"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-[#001E99] to-[#6DA0E3] bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 text-left mb-6 ">
              I am a Frontend Developer who is passionate about building great
              user experiences.
            </p>
            <p className="text-gray-300 text-left mb-6">
              Ambitious and user-focused, I have experience working in teams as
              well as independently.
            </p>
            <p className="text-gray-300 text-left mb-6">
              I have strong project management experience and experience
              delegating responsibilities to a team. A flexible and quick
              learner, I am committed to constantly evolving my skillset.
            </p>
            <p className="text-gray-300 text-left mb-6">
              {" "}
              When I'm not coding, you'll find me baking delicious desserts and
              doing nature photography.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 text-left space-y-2">
                <li>
                  <strong>Certificate, Full Stack Web Development</strong> --
                  Columbia University, New York City, NY (2016)
                </li>
                <li>
                  Master's in Fine Arts - The New School University (2009)
                </li>
                <li>
                  Certificate in Publishing - Emerson College, Boston, MA 2003
                </li>
                <li>Bachelor of Arts - Emory University, Atlanta,GA 2001</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div className="text-left text-lg">
                  <h4 className="font-semibold">PartyDash.com (2019)</h4>
                  <p className="text-sm mb-2">
                    Front-End Design <br></br>• Developed responsive frontend
                    design for party management app.
                    <br />• Used CSS and HTML to create inviting website
                    <br />
                    Technologies used:
                    <br /> HTML, CSS, Bootstrap, VueJs
                  </p>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">Webmaster - Mayapple.org</h4>
                  <p className="text-sm mb-2">
                    ● Updated site (Drupal) to include crucial information and
                    links to Mayapple’s program at Sarah Lawrence College.
                    <br />● Communicated foundation’s message through updates on
                    homepage about mission, events, enrollment opportunities and
                    scholarships.
                  </p>
                </div>
              </div>
              <div className="text-left">
                <h4 className="font-semibold">
                  Technical Writer - Regeneron Pharmaceuticals
                </h4>
                <p className="text-sm mb-2">
                  ● Developed and edited technical documentation, tofacilitate
                  communication between technical and non-technical end-users
                  regarding standard operating procedures (SOPs) across various
                  departments.
                  <br />● Individually created user-facing documentation through
                  SharePoint to ensure a seamless continuation of company
                  operations in the event of critical issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
