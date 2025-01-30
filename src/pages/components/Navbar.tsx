'use client'
import React, { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center py-5 px-7">
        <div className="text-white text-2xl font-medium hover:shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)]">
          <IoHome className="text-4xl" />
        </div>
        <ul className="hidden md:flex space-x-10 text-lg text-sm">
          <li className="menulink hover:shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)] text-white">
            <a href="#hero">Home</a>
          </li>
          <li className="menulink hover:shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)] text-white">
            <a href="#skills">Skills</a>
          </li>
          <li className="menulink hover:shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)] text-white">
            <a href="#project">Project</a>
          </li>

          <li className="menulink hover:shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)] text-white">
            <a href="#about">About</a>
          </li>
          <li className="menulink hover:shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)]  text-white">
            <a href="#contact">Contact</a>
          </li>
        </ul>

      
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-700">
          <ul className="flex flex-col items-start p-4 space-y-4 text-lg font-medium text-white">
            <li className="menulink hover:text-yellow-400 w-full">
              <a href="#hero" onClick={toggleMenu}>Home</a>
            </li>
            <li className="menulink hover:text-yellow-400 w-full">
              <a href="#skills" onClick={toggleMenu}>Skills</a>
            </li>
            <li className="menulink hover:text-yellow-400 w-full">
              <a href="#project" onClick={toggleMenu}>Skills</a>
            </li>
            <li className="menulink hover:text-yellow-400 w-full">
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li className="menulink hover:text-yellow-400 w-full">
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
