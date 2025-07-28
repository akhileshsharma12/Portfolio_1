'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import patent1 from '@/assets/patent1.png';
import patent2 from '@/assets/patent2.png';
import patent3 from '@/assets/patent3.png';

const projects = [
    {
        title: "Heart Disease Prediction Model",
        subtitle: 'Have a sip, survive the work week',
        buttonText: 'See our menu',
        type: 'Project 1',
        image: patent1,
        description:
            'Indian Government Innovation patent Girish S Bhavekar,Dr. Agam Das Goswami on Heart Disease Prediction Model Based On Herding –Exploring Optimization Algorithm and Deep Learning Technique Published 04/2022 Dated 28/01/2022 Application No.202241001418.',
        link: 'https://search.ipindia.gov.in/IPOJournal/Journal/Patent',
    },
    {
        title: "Design & Development of ECG Classification",
        subtitle: 'Modern & Responsive',
        buttonText: 'View Portfolio',
        type: 'Project 2',
        image: patent2,
        description:
            'Indian Government Innovation patent Girish S Bhavekar,Dr. Agam Das Goswami on Design & Development of ECG Classification Using Ensemble CNN and Bio-Inspired Computational Models Application Number: 202341039073',
        link: 'https://search.ipindia.gov.in/IPOJournal/Journal/Patent',
    },
    {
        title: "Device For Ensuring Child Safety, And Method.",
        subtitle: 'Modern & Responsive',
        buttonText: 'View Portfolio',
        type: 'Project 3',
        image: patent3,
        description:
            'Indian Government Innovation patent Girish S Bhavekar,Dr. Agam Das Goswami on HEALTH MONITORING SYSTEM AND METHOD THEREOF Application Number: 202341063500 A 06-10-2023,',
        link: 'https://search.ipindia.gov.in/IPOJournal/Journal/Patent',
    },
];


const Patents = () => {
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    return (
        <section id='projects' className="py-15 px-4 bg-[#0f1123] text-white relative">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold">Patents</h2>
                <p className="text-gray-400 mt-2">Recognized research and innovative designs shaping the future of healthcare and safety.</p>

                <div className="mt-12 relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        className="swiper-container"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col lg:flex-row items-center gap-10 px-3">
                                    <div className="w-full lg:w-1/2 h-[250px] lg:h-[350px] rounded-xl overflow-hidden shadow-md">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-left w-full lg:w-1/2">
                                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-gray-300 mb-6 text-justify">
                                            {truncateText(project.description, 30)}
                                        </p>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md transition-all"
                                        >
                                            Read More
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>

                    {/* Bottom Center Navigation Buttons */}
                    <div className="flex justify-center gap-6 mt-10">
                        <button className="custom-prev cursor-pointer bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className="custom-next cursor-pointer bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Patents;
