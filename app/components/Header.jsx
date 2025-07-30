import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';


const Header = () => {
    return (
        <div id='home' className="w-full min-h-screen flex flex-col lg:flex-row px-4 sm:px-6 lg:px-20 justify-center items-center gap-10 text-center lg:text-left lg:pt-10">

            {/* Left Side - Social Icons */}
            <div className="flex lg:flex-col gap-5 max-sm:gap-7 text-gray-600 list-none justify-center lg:justify-start max-sm:order-2">
                <a href='https://scholar.google.com/citations?user=2binJeEAAAAJ&hl=en&oi=a' className='text-2xl text-sky-600'> <i className="fa-brands fa-google-scholar"></i> </a>
                <a className='text-2xl text-sky-600' href='https://orcid.org/0000-0002-5084-0927'> <i className="fa-brands fa-orcid"></i> </a>
                <a href='https://www.linkedin.com/in/dr-girish-kumar-b-761186207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='text-2xl text-sky-600'> <i className="fa-brands fa-linkedin"></i> </a>
            </div>

            {/* Center - Profile Image */}
            <div className="flex justify-center max-sm:order max-sm:mt-20">
                <Image
                    src={assets.profile_img}
                    alt="Dr. Girish Bhavekar"
                    className="rounded-[50%_50%_48%_52%/34%_38%_62%_66%] w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 border border-gray-500 object-cover"
                />
            </div>

            {/* Right Side - Text Content */}
            <div className="flex flex-col items-center lg:items-start max-w-xl px-2 sm:px-0 max-sm:order-[1]">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-medium flex items-center gap-2 sm:gap-3 flex-wrap justify-center lg:justify-start">
                    Hi, I'm Dr.
                    <span className="font-bold text-[#6EACDA] text-2xl sm:text-4xl lg:text-5xl">Girish Bhavekar</span>
                </h3>

                <span className="text-lg sm:text-xl lg:text-2xl text-sky-500 mt-3">
                    Professor | Researcher | AI Specialist
                </span>

                <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                    Dr. Girish Bhavekar is a seasoned researcher and educator with deep expertise in Artificial Intelligence,
                    Machine Learning, and Blockchain technologies. His work bridges the gap between research and impactful
                    real-world applications, inspiring innovation and mentoring future tech leaders.
                </p>

                <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
                    <a href="#contact-section">
                        <button id='contact' className="bg-sky-600 hover:bg-sky-700  text-white text-sm sm:text-lg px-6 py-2 sm:px-7 rounded-md transition cursor-pointer">
                            Contact Me
                        </button>
                    </a>

                    <a
                        href="/resume.pdf"
                        download="resume.pdf"
                        className="inline-block text-sky-600 hover:bg-sky-100 border border-sky-600 text-sm sm:text-lg px-6 py-2 sm:px-7 rounded-md transition cursor-pointer"
                    >
                        Download Resume
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Header;
