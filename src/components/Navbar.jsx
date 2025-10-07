import { useEffect } from "react";
//import { Logo } from "/public/s.svg";


export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);


  return (
    <nav className="sticky top-0">
      <div className="max-w-5xl mx-auto px-4 bg-[#ef1456]">
        <img
          className="inline
                    max-width: 100%;
                    height: auto;
                    alt: logo"
          src="public/s.png"
        />

        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-gray-300">
            {" "}
            Sulai<span className="text-{#2d81ff}">.Sivadel</span>{" "}
          </a>
          <div className="bg-[url('public/s.png')] h-screen bg-no-repeat style background-size: cover;"></div>
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
        </div>
      </div>
    </nav>
  );
}
