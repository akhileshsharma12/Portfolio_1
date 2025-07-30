import React from 'react';
import Image from 'next/image';

const tools = [
    { name: "Blockchain", src: "/blockchain.png" },
    { name: "AWS", src: "/tools/aws.svg" },
    { name: "Python", src: "/tools/python.svg" },
    { name: "LaTeX", src: "/latex.png" },
    { name: "EDA Playground", src: "/eda.png" },
    { name: "Arduino", src: "/arduino.png" },
    { name: "Python", src: "/tools/python.svg" },
    { name: "NVIDIA Logo", src: "/nvidia.png" },
    { name: "Blockchain", src: "/blockchain.png" },
    { name: "Deep Learning", src: "/tools/deeplearning.png" },
    { name: "Machine Learning", src: "/ml.png" }
];

const ToolsUsed = () => {
    return (

        <section id='software' className="py-15 text-center">
            <h2 className="text-3xl font-bold text-white-800 mb-2"> Software Hardware Tools </h2>
            <div className="overflow-x-scroll overflow-y-hidden whitespace-nowrap mt-10 lg:mt-10 scrollbar-hide">
                <div className="flex animate-scroll gap-26">
                    {tools.map((tool, index) => (
                        <div key={index} className="inline-block min-w-[100px] h-[80px] relative">
                            <Image
                                src={tool.src}
                                alt={tool.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default ToolsUsed