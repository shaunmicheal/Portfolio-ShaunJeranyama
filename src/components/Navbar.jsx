import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/certificates", label: "Certificates" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 px-6 md:px-16 py-6 transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-black"
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`font-bold text-xl tracking-wide transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          JERANYAMA
        </div>

        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/contact"
          className="hidden md:inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
        >
          Contact
        </NavLink>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-3xl transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-6 pb-4 md:hidden font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={linkClasses}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
