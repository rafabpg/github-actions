import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavLink from "../components/Navlink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-900 shadow-lg p-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-gray-200">Rafael Pillar</h1>

      <nav className="hidden md:flex space-x-6">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </nav>

      <NavLink
        href="CV-rafabpg.pdf"
        className="hidden md:block bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-purple-900"
        download="CV-rafabpg.pdf"
      >
        Download CV
      </NavLink>

      <button
        className="md:hidden text-gray-400 hover:text-cyan-400 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col space-y-4 md:hidden">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink
            href="CV-rafabpg.pdf"
            className="bg-cyan-500 text-gray-200 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-purple-900 text-center"
            download="CV-rafabpg.pdf"
          >
            Download CV
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
