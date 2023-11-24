import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between shadow-sm items-center bg-white px-8 p-5">
      <div>
        <h1 className="text-xl font-bold">
          <NavLink to="/" activeClassName="active-link">
            HMIF
          </NavLink>
        </h1>
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
