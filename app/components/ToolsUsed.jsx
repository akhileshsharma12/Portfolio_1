import React from 'react';
import Image from 'next/image';

const tools = [
    { name: "Blockchain", src: "/tools/blockchain.png" },
    { name: "AWS", src: "/tools/aws.svg" },
    { name: "Python", src: "/tools/python.svg" },
    { name: "LaTeX", src: "/tools/latex.png" },
    { name: "EDA Playground", src: "/tools/eda.png" },
    { name: "Arduino", src: "/tools/arduino.png" },
    { name: "Python", src: "/tools/python.svg" },
    { name: "NVIDIA Logo", src: "/tools/nvidia.png" },
    { name: "Blockchain", src: "/tools/blockchain.png" },
    { name: "Deep Learning", src: "/tools/deeplearning.png" },
    { name: "Machine Learning", src: "/tools/ml.png" }
];

const ToolsUsed = () => {
    return (

        <section id='software' className="py-15 text-center">
            <h2 className="text-3xl font-bold text-white-800 mb-2"> Software Hardware Tools </h2>
            <div className="overflow-x-scroll overflow-y-hidden whitespace-nowrap mt-10 lg:mt-10 scrollbar-hide">
                <div className="flex items-center animate-scroll gap-26 h-[80px]">
                    {tools.map((tool, index) => (
                        <div key={index} className="flex items-center justify-center min-w-[100px] h-full relative">
                            <img
                                src={tool.src}
                                alt={tool.name}
                                className="object-contain max-h-[60px] max-w-[80px] mx-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default ToolsUsed