import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[70px] bg-indigo-900/80 flex flex-col justify-center items-center sm:flex-row sm:justify-center sm:items-center gap-2 sm:gap-6">
      <div className="flex gap-2 items-center">
        <h4 className="text-yellow-400 text-lg font-bold">
          Creado por Matias Arias
        </h4>
        <BsFillMoonStarsFill className="text-xl text-yellow-200" />
      </div>

      <div className="flex gap-6">
        <a href="https://github.com/matiarias" target="_blank">
          <FaGithub className="text-4xl md:text-3xl hover:text-gray-100" />
        </a>
        <a href="https://www.linkedin.com/in/matiasarias27" target="_blank">
          <FaLinkedinIn className="text-4xl md:text-3xl hover:text-yellow-500" />
        </a>
        <a href="https://www.instagram.com/_matiarias/?hl=es" target="_blank">
          <FaInstagram className="text-4xl md:text-3xl hover:text-emerald-300" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
