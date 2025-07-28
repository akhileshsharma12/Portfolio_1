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
            className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-3 flex justify-between items-center z-50 transition duration-300 ${
                scrolled ? "bg-[#2d4f6c] text-[#fbfdff]" : "bg-[#021526] text-[#95c3eb]"
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
                    href="#contact"
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
                className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#182836]  text-[#fff] transition duration-500"
            >
                <div className="absolute right-6 top-6" onClick={closeMenu}>
                    <Image src={assets.close_white} alt="close" className="w-5 cursor-pointer" />
                </div>

               <li><a href="#home"> Home </a></li>
                <li><a href="#about"> About </a></li>
                <li><a href="#software"> Tools Used </a></li>
                <li><a href="#achievement"> Achievement </a></li>
                <li><a href="#projects"> Projects </a></li>
                <li><a href="#specialization"> Articles </a></li>
                <li><a href="#contact"> Contact </a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
