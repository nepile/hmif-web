import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = useState(false);

  console.log(isOpen);

  return (
    <div
      className={`w-full fixed top-0 shadow-sm transition-all bg-white z-10 ${
        isOpen ? "h-96 px-5 py-7" : "py-7 px-5"
      }`}
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <NavLink to="/" activeClassName="active-link">
            <div className="flex gap-2 items-center">
              <img src="images/logo.png" width={40}></img>
              <h1 className="text-xl font-bold">HMIF</h1>
            </div>
          </NavLink>
        </div>

        <div className="text-lg gap-x-10 hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Events
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            News
          </NavLink>
          <NavLink
            to="/aspirations"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Aspirations
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About Us
          </NavLink>
        </div>

        <div className="hidden md:flex">
          <button className="bg-gray-800 text-white px-6 py-1 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline">
            <NavLink to="/login" activeClassName="active-link">
              Login
            </NavLink>
          </button>
        </div>

        <div className="md:hidden block">
          <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      <nav
        className={`md:hidden flex justify-center ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-y-5 w-full">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Events</NavLink>
          </li>
          <li>
            <NavLink>News</NavLink>
          </li>
          <li>
            <NavLink>Aspirations</NavLink>
          </li>
          <li>
            <NavLink>About Us</NavLink>
          </li>
          <li className="w-full text-center first-bg py-2 rounded-full">
            <NavLink className="text-white w-full">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
