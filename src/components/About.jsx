function About() {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="min-h-screen bg-slate-900 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 
        data-aos="fade-down"
        className="text-5xl font-bold text-center text-cyan-400 mb-16">
          About Me
        </h2>

        <div 
          data-aos="zoom-in-up"
          data-aos-delay="200"
          className="bg-slate-800 rounded-2xl p-10 shadow-xl border border-slate-700 hover:border-cyan-400 hover:shadow-cyan-500/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

          <p className="text-slate-300 text-lg leading-8">
            Hello! I'm <span className="text-cyan-400 font-semibold">Hari Vishnu</span>,
            a passionate Frontend Developer who enjoys creating modern,
            responsive, and user-friendly websites using React.js and Tailwind CSS.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div>
              <h3 className="text-cyan-400 font-bold text-xl mb-2">
                🎓 Education
              </h3>

              <p className="text-slate-300">
                M.Tech Graduate
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold text-xl mb-2">
                💻 Experience
              </h3>

              <p className="text-slate-300">
                Fresher | Frontend Developer
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold text-xl mb-2">
                📍 Location
              </h3>

              <p className="text-slate-300">
                Andhra Pradesh, India
              </p>
            </div>

            <div>
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