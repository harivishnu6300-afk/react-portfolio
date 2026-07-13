import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        <h2 className="text-cyan-400 text-2xl font-bold">
          Hari Vishnu
        </h2>

        <p className="text-slate-400 mt-4 md:mt-0">
          © 2026 All Rights Reserved.
        </p>

        <div className="flex gap-6 text-2xl mt-4 md:mt-0">

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;