"use client";
import React, { useState } from "react";

const services = [
    {
        title: "Artificial Intelligence",
        icon: "fa-brain",
        link: "#",
        description: [
            "Transformative Effects of Artificial Intelligence on Workforce Dynamics in Industry 4.0.",
            "Impact of artificial intelligence on the development of employment and the labor market.",
            "An Invention On Heart Disease Prediction Model Based On Travel-Hunt Optimizer.",
        ],
    },
    {
        title: "Machine Learning Solutions",
        icon: "fa-robot",
        link: "#",
        description: [
            "Heart disease prediction using machine learning, deep Learning and optimization techniques-A semantic review.",
            "Herding exploring algorithm With light gradient boosting machine classifier for effective prediction of heart diseases.",
            "Hybrid PCA-Based Machine Learning Models for Predictive Analytics in Urban Health Monitoring Systems.",
        ],
    },
    {
        title: "Neural Network",
        icon: "fa-link",
        link: "#",
        description: [
            "A hybrid model for heart disease prediction using recurrent neural network and long short term memory",
            "Electrocardiogram signal classification using VGGNet: a neural network based classification model",
            "Hybrid approach to medical decision-making: prediction of heart disease with artificial neural network.",
        ],
    },
];

const Articles = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleViewMore = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <section
            id="specialization"
            className="w-full px-6 py-15 bg-[#021526] text-white text-center"
        >
            <h2 className="text-3xl font-bold mb-2">My Articles</h2>
            <p className=" text-gray-400 mb-12">
                Explore my published work in Artificial Intelligence, Machine Learning, and Biomedical Engineering — where innovation meets real-world impact.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[#1f2d3d] p-8 rounded-lg shadow hover:shadow-xl hover:-translate-y-2 transition-all"
                    >
                        <div className="text-4xl text-sky-500 mb-4">
                            <i className={`fas ${service.icon}`}></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <button
                            onClick={() => handleViewMore(service)}
                            className="text-sky-400 text-sm hover:underline cursor-pointer inline-flex items-center gap-1 focus:outline-none"
                        >
                            View more <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal for open when clicks */}
            {selectedService && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
                    <div className="bg-[#293542] p-8 rounded-lg shadow-lg w-full max-w-3xl text-left relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <div className="text-4xl text-sky-500 mb-4">
                            <i className={`fas ${selectedService.icon}`}></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">{selectedService.title}</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            {selectedService.description.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            <div className="mt-12 text-center">
                <a
                    href="https://scholar.google.com/citations?user=2binJeEAAAAJ&hl=en&oi=a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-sky-600 hover:bg-sky-300 hover:text-sky-900 text-white rounded-lg font-medium transition duration-300"
                >
                    View Research Articles 📄
                </a>
            </div>

        </section>
    );
};

export default Articles;
