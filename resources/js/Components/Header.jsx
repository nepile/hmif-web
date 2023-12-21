import React from "react";
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
                    <a href="/" activeClassName="active-link">
                        <div className="md:w-14 w-10 flex gap-2 items-center">
                            <img
                                className="w-full"
                                alt="Logo Himpunan Mahasiswa Informatika"
                                src="images/logo.png"
                            ></img>
                            <p className="text-2xl font-bold">HMIF</p>
                        </div>
                    </a>
                </div>

                <div className="text-lg gap-x-10 hidden md:flex">
                    <a
                        href="/"
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        Home
                    </a>
                    <a
                        href="/events"
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        Events
                    </a>
                    <a
                        href="/news"
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        News
                    </a>
                    <a
                        href="/aspirations"
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        Aspirations
                    </a>
                    <a
                        href="/about"
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        About Us
                    </a>
                </div>

                <div className="hidden md:flex">
                    <button className="bg-gray-800 text-white px-6 py-1 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline text-xl">
                        <a href="/login" activeClassName="active-link">
                            Login
                        </a>
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
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Events</a>
                    </li>
                    <li>
                        <a>News</a>
                    </li>
                    <li>
                        <a>Aspirations</a>
                    </li>
                    <li>
                        <a>About Us</a>
                    </li>
                    <li className="w-full text-center first-bg py-2 rounded-full">
                        <a className="text-white w-full">Login</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
