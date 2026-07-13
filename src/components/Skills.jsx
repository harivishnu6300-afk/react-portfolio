import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML",
      level: 95,
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS",
      level: 90,
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      level: 85,
      icon: <SiJavascript className="text-yellow-400" />,
    },
    {
      name: "Bootstrap",
      level: 85,
      icon: <FaBootstrap className="text-purple-500" />,
    },
    {
      name: "Tailwind CSS",
      level: 90,
      icon: <SiTailwindcss className="text-cyan-400" />,
    },
    {
      name: "React.js",
      level: 80,
      icon: <SiReact className="text-cyan-400" />,
    },
    {
      name: "jQuery",
      level: 80,
      icon: <SiJavascript className="text-yellow-400" />,
    },
    {
      name: "GitHub",
      level: 80,
      icon: <FaGithub className="text-white" />,
    },
  ];

  return (
    <section
      id="skills"
      data-aos="fade-up"
      className="bg-slate-950 py-20 px-5 md:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-14"
        >
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/30 hover:-translate-y-2 hover:scale-105 transition-all duration-500"
            >

              <div className="text-5xl flex justify-center mb-5">
                {skill.icon}
              </div>

              <h3 className="text-white text-xl font-bold text-center">
                {skill.name}
              </h3>

              <div className="flex justify-between mt-5 mb-2">
                <span className="text-slate-300 text-sm">
                  Proficiency
                </span>

                <span className="text-cyan-400 font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-3 bg-cyan-400 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;