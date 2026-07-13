import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-700 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold text-cyan-400"
        >
          Vishnu
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-900 border-t border-slate-700 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-5" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-white font-medium text-lg">

          <li>
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Contact
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;