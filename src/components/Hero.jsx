import hero from "../assets/hero.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="min-h-screen bg-slate-950 flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="order-2 md:order-1 text-center md:text-left">

          <p className="text-cyan-400 text-lg md:text-xl font-semibold">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mt-4 leading-tight">
            Hari Vishnu
          </h1>

          <h2 className="text-2xl md:text-3xl text-cyan-400 mt-5 font-semibold">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React.js Developer",
                2000,
                "UI Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="text-slate-400 mt-6 leading-8 text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Passionate Frontend Developer skilled in HTML, CSS,
            JavaScript, Bootstrap, Tailwind CSS, and React.js.
            I love building beautiful, responsive, and user-friendly
            web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-10">

            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-3 rounded-xl text-white font-semibold shadow-lg"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition px-8 py-3 rounded-xl font-semibold"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-8 text-3xl">

            <a
              href="https://github.com/harivishnu6300-afk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/barreedula-hari-vishnu-a73405308"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:harivishnu6300@gmail.com"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="order-1 md:order-2 flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-30"></div>

            <img
              src={hero}
              alt="Hari Vishnu"
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[340px] md:h-[340px] object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;