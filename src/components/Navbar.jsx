import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive
        ? "text-purple-500"
        : scrolled
          ? "text-gray-700 hover:text-black"
          : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-16 py-6 transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-black"
      }`}
    >
      <div
        className={`font-bold text-xl tracking-wide transition-colors duration-300 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        JERANYAMA
      </div>

      <ul className="flex gap-8 font-medium">
        <li>
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/certificates" className={linkClasses}>
            Certificates
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className={linkClasses}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={linkClasses}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={linkClasses}>
            Skills
          </NavLink>
        </li>
      </ul>

      <NavLink
        to="/contact"
        className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
