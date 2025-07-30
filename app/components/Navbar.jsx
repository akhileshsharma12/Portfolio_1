"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const sideMenuRef = useRef();
    const [scrolled, setScrolled] = useState(false);

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    };

    // Detect scroll to change navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-3 flex justify-between items-center z-50 transition duration-300 ${scrolled ? "bg-[#2d4f6c] text-[#fbfdff]" : "bg-[#021526] text-[#95c3eb]"
                }`}
        >
            <span>
                <a className="text-2xl text-bolder  font-extrabold" href="#top">
                    Girish Bhavekar
                </a>
            </span>

            <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-opacity-50 text-lg">
                <li><a href="#home"> Home </a></li>
                <li><a href="#about"> About </a></li>
                <li><a href="#achievement"> Achievement </a></li>
                <li><a href="#projects"> Patents </a></li>
                <li><a href="#conference"> Conferences </a></li>
                <li><a href="#specialization"> Articles </a></li>
            </ul>

            <div className="flex items-center gap-4">
                {/* <button>
                    <Image src={assets.moon_icon} alt="moon" className="w-6" />
                </button> */}

                <a
                    href="#contact-section"
                    className="hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 text-xl"
                >
                    Contact
                    {/* <FontAwesomeIcon icon={faArrowRight} className="text-[#95c3eb] text-lg" /> */}

                </a>

                <button className="block md:hidden ml-3" onClick={openMenu}>
                    <Image src={assets.menu_white} alt="menu" className="w-6" />
                </button>
            </div>

            {/* Mobile Menu */}
            <ul
                ref={sideMenuRef}
                className="flex md:hidden flex-col gap-6 py-24 px-8 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gradient-to-b from-[#182836] to-[#0e1c2a] text-white backdrop-blur-lg shadow-2xl transition-transform duration-500 ease-in-out rounded-l-3xl"
            >
                <div
                    className="absolute right-4 top-4 cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                    onClick={closeMenu}
                >
                    <Image src={assets.close_white} alt="close" className="w-4" />
                </div>

                {[
                    { href: "#home", label: "Home" },
                    { href: "#about", label: "About" },
                    { href: "#software", label: "Tools Used" },
                    { href: "#achievement", label: "Achievement" },
                    { href: "#projects", label: "Patents" },
                    { href: "#specialization", label: "Articles" },
                    { href: "#research", label: "Research" },
                    { href: "#contact-section", label: "Contact" },
                ].map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.href}
                            className="block py-2 px-3 rounded-lg text-lg hover:bg-white/10 transition duration-200"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
