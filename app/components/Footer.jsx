"use client";
import React from "react";

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-[#182836] text-white w-full pb-2">
            {/* Top Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-9 py-6 gap-6 text-center sm:text-left">
                {/* Left Section */}
                <div className="flex flex-col items-center sm:items-start">
                    <p className="text-xl font-semibold">Girish Bhavekar</p>
                    <div className="flex items-center gap-2 text-sky-400 text-sm sm:text-base">
                        <i className="fa-solid fa-briefcase" />
                        <span>Three Artisans Multiservices</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-6 sm:gap-10 w-full sm:w-auto">
                    {/* Social Icons */}
                    <ul className="flex gap-5 text-sky-600 text-2xl">
                        <a href="https://threeartisans.com/" className="hover:text-sky-400 transition cursor-pointer">
                            <i className="fa-solid fa-user" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61557918493838&mibextid=rS40aB7S9Ucbxw6v" className="hover:text-sky-400 transition cursor-pointer">
                            <i className="fab fa-facebook" />
                        </a>
                        <a href="https://www.instagram.com/threeartisans01?igsh=cnE5ZWNwZ2wwbWp2" className="hover:text-sky-400 transition cursor-pointer">
                            <i className="fa-brands fa-instagram" />
                        </a>
                    </ul>

          
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center py-3 border-t border-white/10 text-sm text-gray-300">
                © {new Date().getFullYear()} - All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
