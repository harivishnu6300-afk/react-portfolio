import { useState, useEffect } from "react";

function Navbar() {

  const [active, setActive] = useState("home");

  useEffect(() => {

  }, []);
  
  return (
    <nav className="w-full fixed top-0 left-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Vishnu
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-white font-medium">

          <li>
            <a href="#home" className="hover:text-cyan-400 transition duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition duration-300">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;