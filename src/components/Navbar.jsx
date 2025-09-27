// src/components/Navbar.jsx
import { useEffect } from "react";
import Image from "next/image";
import { ReactComponent as MyIcon } from "./assets/my-icon.svg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  function App() {
    return (
      <header className="flex items-center justify-between px-4 mx-auto py-3 bg-[#64001E] sticky top-0 z-30">
        <MyIcon className="w-6 h-6 text-blue-500" />;
        <div>
          <Image
            className="h-24 w-24 object-cover"
            src="/public/file4.png"
            alt="logo"
          ></Image>
        </div>
        <div
          className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          &#9776;
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#photos"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Photos
          </a>
          <a
            href="#blog"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </header>
    );
  }
}
