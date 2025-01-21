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
    <div className="sticky top-0 z-50 bg-black">
      <div className="container mx-auto flex justify-between items-center py-5 px-7">
        {/* Logo Section */}
        <div className="text-white text-2xl font-medium hover:text-yellow-400">
          <IoHome className="text-4xl" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg text-sm">
          <li className="menulink hover:text-yellow-400 text-white">
            <a href="#hero">Home</a>
          </li>
          <li className="menulink hover:text-yellow-400">
            <a href="#skills">Skills</a>
          </li>
          <li className="menulink hover:text-yellow-400">
            <a href="#about">About</a>
          </li>
          <li className="menulink hover:text-yellow-400">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
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
}
