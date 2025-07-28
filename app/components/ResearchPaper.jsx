'use client';
import React, { useState } from 'react';
import researchPapers from '@/researchPapers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ResearchPaper = () => {
    const [activeModal, setActiveModal] = useState(null);

    const renderPapers = (list) => (
        <ul className="space-y-4 mt-4 text-left">
            {list.map((paper, i) => (
                <li key={i} className="bg-[#071e32] p-4 rounded-xl">
                    <h3 className="text-white font-medium">{paper.title}</h3>
                    <p className="text-sm text-gray-400">{paper.journal} • {paper.year}</p>
                    {paper.doi !== "#" && (
                        <a
                            href={paper.doi}
                            className="text-sm text-sky-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Paper
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );

    const categories = [
        { key: 'journals', label: 'Journal Publications' },
        { key: 'conferences', label: 'Conference Papers' },
        { key: 'underReview', label: 'Under Review / Early Works' },
    ];

    return (
        <section id="research" className="bg-[#182836] text-white py-15 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Research</h2>
                <p className="text-gray-400 mb-12">Explore various categories of academic research contributions.</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <div
                            key={cat.key}
                            onClick={() => setActiveModal(cat.key)}
                            className="border border-white/10 rounded-xl p-6 cursor-pointer bg-[#021b31] hover:bg-white/10 transition"
                        >
                            <h3 className="text-xl font-semibold mb-1">{cat.label}</h3>
                            
                            <p className="text-sm text-sky-400 flex items-center justify-center gap-1">
                                 <FontAwesomeIcon icon={faArrowRight} className="ml-1 mt-5" />
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {activeModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center px-4">
                    <div className="bg-[#202d3a] max-w-3xl w-full rounded-xl p-6 max-h-[80vh] overflow-y-auto relative">
                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-3 right-4 text-white text-xl"
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold mb-2 text-center">{categories.find(c => c.key === activeModal).label}</h3>
                        {renderPapers(researchPapers[activeModal])}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ResearchPaper;
