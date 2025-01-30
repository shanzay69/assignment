import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from 'next/link';
function Footer() {
  return (
    <div className="mt-10 py-10 bg-sky-600 text-white text-center">
      <div className="flex justify-center items-center gap-5 mb-4">
        <Link href="https://github.com/shanzay69" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl  transition duration-300 hover:scale-110" />
        </Link>
        <Link href="https://www.linkedin.com/in/shanza-khan-620ba0333/ " target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-4xl transition duration-300 hover:scale-110" />
        </Link>
      </div>
      <div className="text-lg font-medium">
        @SHANZA Khan | 2024
      </div>
    </div>
  );
}

export default Footer;
