export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-scereen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx auo px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to right from blue-500 to cyan-400 bg-clip-text text-transparent text-center">
          {""}
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3>Cloud Platform</h3>
          </div>
        <p>
          Scalable cloud infrastructure management with real-time monitoring and automated scaling.
        </p>
        <div>
          {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 py-1 ">

            </span>
          ))}
          </div>
        </div>
      </div>
     </section>
  );
};
