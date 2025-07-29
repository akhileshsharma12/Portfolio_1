import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import award1 from '@/assets/award1.jpg';
import award2 from '@/assets/award2.jpg';
import award3 from '@/assets/award3.jpg';

const projects = [
    {
        title: 'Raman Research Award',
        category: 'web design',
        img: award1,
    },
    {
        title: 'Bhau Anant Limaye Award',
        category: 'mobile app',
        img: award2,
    },
    {
        title: 'Received Research Award / Appreciation',
        category: 'web design',
        img: award3,
    },
];

const Achievement = () => {
    return (
        <section id="achievement" className="bg-[#182836] text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mt-2">My Achievements</h2>
                <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                    Award-winning researcher in biomedical signal processing, Prof. Bhavekar's contributions are shaping the future of AI and ML in healthcare.
                </p>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-xl h-85 flex flex-col justify-end relative overflow-hidden bg-cover bg-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            style={{ backgroundImage: `url(${project.img.src})` }}
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
