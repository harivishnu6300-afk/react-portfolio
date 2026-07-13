import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built using React.js and Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
    },
    {
      title: "Weather App",
      description:
        "A weather application that displays live weather information using an API.",
      tech: ["React", "API", "CSS"],
    },
    {
      title: "Instagram Clone",
      description:
        "A modern Instagram UI clone built with React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="min-h-screen bg-slate-950 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2
          data-aos="fade-down"
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 200}
              className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700 hover:border-cyan-400 hover:shadow-cyan-500/30 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-slate-300 leading-7">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-3 mt-5">
                {project.tech.map((item, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">

                <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg text-white transition duration-300">
                  <FaExternalLinkAlt />
                  Live Demo
                </button>

                <button className="flex items-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-5 py-2 rounded-lg transition duration-300">
                  <FaGithub />
                  GitHub
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;