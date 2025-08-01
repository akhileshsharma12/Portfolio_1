import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';   

const projects = [
    {
        title: 'Raman Research Award',
        category: 'web design',
        img: '/assets/award1.png',
    },
    {
        title: 'Bhau Anant Limaye Award',
        category: 'mobile app',
        img: '/assets/award2.png',
    },
    {
        title: 'Received Research Award / Appreciation',
        category: 'web design',
        img: '/assets/award3.png',
    },
];

const Achievement = () => {
    return (
        <section id="achievement" className="bg-[#182836] text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mt-2">My Achievements</h2>
                <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                    Award-winning researcher in biomedical signal processing, Dr. Bhavekar's contributions are shaping the future of AI and ML in healthcare.
                </p>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-xl h-85 flex flex-col justify-end relative overflow-hidden bg-cover bg-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            style={{ backgroundImage: `url(${project.img})` }}
                        >
                            <div className="relative z-10 bg-white text-black rounded-md px-4 py-3 text-center flex justify-center items-center m-4">
                                <p className="font-semibold text-sm text-[#021526]">{project.title}</p>

                            </div>

                            {/* Optional overlay */}
                            <div className="absolute bg-black/40 z-0" />

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievement;
