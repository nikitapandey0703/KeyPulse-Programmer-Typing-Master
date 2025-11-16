import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Typing Test", path: "/typing-test" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  return (
    <nav className=" text-white px-6 md:px-20 py-8 flex justify-between items-center relative">
      {/* Logo */}
      <div>
        <img src="/logo.png" alt="logo" className="w-40" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-bold">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-[#068a8d]" : "hover:text-[#068a8d]"
            }
          >
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex gap-4">
        {/* No need for isActive here */}
        <Button
          name="Sign up"
          className="bg-[#068a8d] text-white px-4 py-2 rounded-md"
        />

        <Button
          name="Sign in"
          icon={<IoIosArrowDown className="ml-2" />}
          className="bg-transparent border border-white px-4 py-2 rounded-md"
        />
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col gap-6 p-6 md:hidden z-50">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-[#068a8d] font-bold" : "text-white font-bold"
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="flex flex-col gap-4 mt-4">
            <Button
              name="Sign in"
              className="bg-transparent border px-4 py-2 rounded-md"
            />
            <Button
              name="Sign up"
              className="bg-[#068a8d] px-4 py-2 rounded-md"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
