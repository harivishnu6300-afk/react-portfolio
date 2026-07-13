import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-slate-400 text-center">
          © 2026 Hari Vishnu. All Rights Reserved.
        </p>

        <div className="flex gap-6 text-2xl">

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

        <p className="text-slate-500 text-center text-sm">
          Made with ❤️ using React & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}

export default Footer;