import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, isOpen, setIsOpen }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);

  useEffect(() => {
    if (windowWidth > 768) setIsOpen(false);
  }, [windowWidth, setIsOpen]);

  return (
    <ul
      className={`flex flex-col py-4 items-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {links.map((link) => (
        <li key={link.path}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
