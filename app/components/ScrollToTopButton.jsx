"use client";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 bg-sky-600 text-white px-4 py-2 rounded-full shadow-lg text-xl transition-all duration-300 z-50 ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;
