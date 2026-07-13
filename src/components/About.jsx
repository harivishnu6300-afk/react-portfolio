function About() {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="min-h-screen bg-slate-900 py-20 px-5 md:px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-14"
        >
          About Me
        </h2>

        {/* Card */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="700"
          className="bg-slate-800 rounded-2xl p-6 md:p-10 shadow-xl border border-slate-700 hover:border-cyan-400 hover:shadow-cyan-500/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >
          {/* Intro */}
          <p className="text-slate-300 text-base md:text-lg leading-8 text-center md:text-left">
            Hello! I'm{" "}
            <span className="text-cyan-400 font-semibold">
              Hari Vishnu
            </span>
            , a passionate Frontend Developer who enjoys creating modern,
            responsive, and user-friendly websites using React.js and Tailwind
            CSS.
          </p>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

            <div className="bg-slate-700/40 rounded-xl p-5 hover:bg-slate-700 transition duration-300">
              <h3 className="text-cyan-400 font-bold text-xl mb-2">
                🎓 Education
              </h3>
              <p className="text-slate-300">
                M.Tech Graduate
              </p>
            </div>

            <div className="bg-slate-700/40 rounded-xl p-5 hover:bg-slate-700 transition duration-300">
              <h3 className="text-cyan-400 font-bold text-xl mb-2">
                💻 Experience
              </h3>
              <p className="text-slate-300">
                Frontend Developer
              </p>
            </div>

            <div className="bg-slate-700/40 rounded-xl p-5 hover:bg-slate-700 transition duration-300">
              <h3 className="text-cyan-400 font-bold text-xl mb-2">
                📍 Location
              </h3>
              <p className="text-slate-300">
                Andhra Pradesh, India
              </p>
            </div>

            <div className="bg-slate-700/40 rounded-xl p-5 hover:bg-slate-700 transition duration-300">
              <h3 className="text-cyan-400 font-bold text-xl mb-2">
                🎯 Goal
              </h3>
              <p className="text-slate-300">
                To become a Full Stack Developer and build impactful web applications.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;