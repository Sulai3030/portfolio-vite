import React, { useState, useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 inset-x-0 z-20 mr-[calc 100%-100vw] flex h-14 items-center justify-between relative px-4 py-3">
      <div className="max-w-7xl mx-auto px-4 bg-[#59040C] sm:px-6 lg:px-12">
        <img
          className="inline max-w-full object-scale-down h-18 w-18 float-left"
          alt="logo"
          src="/s.png"
        />
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-gray-300">
            Sulai
            <span className="bg-gradient-to-r from-[#2c80ff] to-[#44B9DB] bg-clip-text text-transparent leading-right">
              .Sivadel
            </span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8 px-8">
            <a href="#home" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white">
              Projects
            </a>
            <a href="#photos" className="text-gray-300 hover:text-white">
              Photos
            </a>
            <a href="#blog" className="text-gray-300 hover:text-white">
              Blog
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("initial-image-src.jpg");

  const changeImageSrc = () => {
    setImageSrc("s.jpg");
  };

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <img src={imageSrc} alt="dynamic" />
      <button onClick={changeImageSrc}>Change Image</button>
    </div>
  );
}

export default App;
