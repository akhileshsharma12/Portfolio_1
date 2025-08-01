'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const images = [
    {
        src: '/assets/conf1.png',
        title: 'Electric Power and Renewable Energy Conference (EPREC)',
        date: '2020',
        location: 'NIT Jamshedpur',
        description: 'Presented innovations in renewable energy integration and smart grid systems.'
    },
    {
        src: '/assets/conf3.png',
        title: '2nd IEEE International Conference on Electrical Power and Energy Systems (ICEPES)',
        date: '2021',
        location: 'SLIET (Central Institute CFTI)',
        description: 'Presented research on optimization techniques in electrical energy systems and smart grid reliability.'
    },
    {
        src: '/assets/conf4.webp',
        title: '3rd International Conference on Computational Electronics for Wireless Communications (ICCWC)',
        date: '22-23 Dec, 2023',
        location: 'NIT Jalandhar (Hybrid Mode)',
        description: 'Presented advancements in wireless communication systems and computational modeling in a hybrid mode setup.',
        link: 'https://www.iccwc-2023.com/'
    }
];

const Conference = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleOverlay = (index) => {
        setActiveIndex(prev => prev === index ? null : index);
    };

    return (
        <section id="conference" className="py-16 px-4 bg-[#182836] text-white relative">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-3xl font-bold">Conferences</h1>
                <p className="text-gray-400 mt-2">Sessions & Talks Conducted</p>

                <div className="mt-12 relative">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
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
                        {images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="group relative w-full h-[280px] md:h-[420px] rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => toggleOverlay(index)}
                                >
                                    <img
                                        src={item.src}
                                        alt={`Conference Slide ${index + 1}`}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                    <div
                                        className={`absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 transition-all duration-500 
                                        ${activeIndex === index ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
                                    >
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-300">{item.date} | {item.location}</p>
                                        <p className="text-sm mt-2 text-gray-200">{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex justify-center gap-6 mt-10">
                        <button className="custom-prev bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className="custom-next bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Conference;
