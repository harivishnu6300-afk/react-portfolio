import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built using React.js and Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      live: "https://react-portfolio-oiwp.vercel.app",
      github: "https://github.com/harivishnu6300-afk/react-portfolio",
    },
    {
      title: "Weather App",
      description:
        "A weather application that displays live weather information using an API.",
      tech: ["React", "API", "CSS"],
      live: "#",
      github: "#",
    },
    {
      title: "Instagram Clone",
      description:
        "A modern Instagram UI clone built with React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="bg-slate-950 py-20 px-5 md:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-14"
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl hover:border-cyan-400 hover:shadow-cyan-500/30 hover:-translate-y-2 hover:scale-105 transition-all duration-500"
            >

              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 leading-7 min-h-[90px]">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((item, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg text-white font-semibold transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-5 py-3 rounded-lg transition"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;