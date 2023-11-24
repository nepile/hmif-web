import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between sticky top-0 shadow-sm items-center bg-white px-8 p-5 z-10">
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

      <div>
        <button className="bg-gray-800 text-white px-6 py-1 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline">
          <NavLink to="/login" activeClassName="active-link">
            Login
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Header;
