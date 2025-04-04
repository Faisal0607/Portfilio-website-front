'use client';

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-3 hidden md:block text-gray-300">
            Dev Portfolio
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">About me</a>
          <a href="#skills" className="cursor-pointer">Skills</a>
          <a href="#projects" className="cursor-pointer">Projects</a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#03001417] backdrop-blur-md shadow-lg py-5 flex flex-col items-center gap-4 text-gray-200">
          <a href="#about-me" className="cursor-pointer" onClick={() => setIsOpen(false)}>
            About me
          </a>
          <a href="#skills" className="cursor-pointer" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="cursor-pointer" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <div className="flex gap-5 mt-2">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;