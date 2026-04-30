import { useState } from "react";
import { NavLink } from "react-router-dom";

 function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-zinc-950 h-20 md:h-24 z-10 w-full flex p-4 md:p-6 md:pr-16 md:pl-10 justify-between items-center sticky top-0">
      
      {/* Logo */}
      <img className="w-28 h-auto md:w-38 md:h-17 -m-1.5" src="/images/Logo.png" alt="" />

      {/* Desktop Menu */}
      <ul className="text-white font-bold hidden md:flex justify-around w-1/3 h-full items-center text-sm md:text-base lg:text-lg">
        
        <li className="transition hover:scale-105">
          <NavLink to="/" className={({ isActive }) => isActive ? "underline decoration-red-500" : ""}>HOME</NavLink>
        </li>

        <li className="transition hover:scale-105">
          <NavLink to="/projects" className={({ isActive }) => isActive ? "underline decoration-red-500" : ""}>PROJECTS</NavLink>
        </li>

        <li className="transition hover:scale-105">
          <NavLink to="/about" className={({ isActive }) => isActive ? "underline decoration-red-500" : ""}>ABOUT US</NavLink>
        </li>

        <li className="transition hover:scale-105">
          <NavLink to="/contact" className={({ isActive }) => isActive ? "underline decoration-red-500" : ""}>CONTACT</NavLink>
        </li>

      </ul>

      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1 z-20"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
      </button>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-20 left-0 w-full bg-zinc-950 text-white font-bold flex flex-col items-center gap-6 py-6 text-lg transform transition-all duration-300 md:hidden
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"} `}
      >
        
        <li onClick={() => setOpen(false)} className={`"transition hover:scale-105 " ({ isActive }) => isActive ? "underline decoration-red-500" : ""`}>
          <NavLink to="/">HOME</NavLink>
        </li>

        <li onClick={() => setOpen(false)} className={`"transition hover:scale-105 " ({ isActive }) => isActive ? "underline decoration-red-500" : ""`}>
          <NavLink to="/projects">PROJECTS</NavLink>
        </li>

        <li onClick={() => setOpen(false)} className={`"transition hover:scale-105 " ({ isActive }) => isActive ? "underline decoration-red-500" : ""`}>
          <NavLink to="/about">ABOUT US</NavLink>
        </li>

        <li onClick={() => setOpen(false)} className={`"transition hover:scale-105 " ({ isActive }) => isActive ? "underline decoration-red-500" : ""`}>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>

      </ul>

    </nav>
  );
}


export default Nav;
