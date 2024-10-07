"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]">
      <div className="flex justify-between mx-auto px-4 py-2">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src="https://rh7112.github.io/personal-portfolio/images/logo-no-background.png"
            alt="logo"
            width={100}
            height={50}
          />
        </Link>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
        <ul className="hidden md:flex md:space-x-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
      {navbarOpen && (
        <MenuOverlay
          links={navLinks}
          isOpen={navbarOpen}
          setIsOpen={setNavbarOpen}
        />
      )}
    </nav>
  );
};

export default Navbar;
