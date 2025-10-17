//import {MobileMenu} from "src/components/MobileMenu.jsx";
import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav
      className={`
        text-center sm:text-left fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center max-w-screen-xl  flex-wrap justify-between mx-auto p-4
        px-2 sm:px-6 lg:px-8
        transition-all duration-300 ease-in-out
         inset-y-0
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-4 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-blue-500 hover:scale-110"
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-blue-500 hover:scale-110"
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-blue-500 hover:scale-110"
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-blue-500 hover:scale-110"
      >
        Photos
      </a>
      <a
        href="#blog"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-blue-500 hover:scale-110"
      >
        Blog
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-blue-500 hover:scale-110"
      >
        Contact
      </a>
    </nav>
  );
};
