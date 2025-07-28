"use client";
import React, { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {

    const [captchaValue, setCaptchaValue] = useState(null);

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
        console.log('Captcha value:', value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValue) {
            alert('Please complete the reCAPTCHA!');
            return;
        }
        // Process your form here
        alert('Form submitted successfully!');
    };

    return (
        <section className="bg-[#021526] text-white py-15 px-6 md:px-20" id="contact">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
                {/* Left - Contact Info */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl font-bold">Contact me</h2>
                    <p className="text-gray-300">Get in touch</p>

                    <div className="space-y-4 mt-6">
                        <div className="flex items-center gap-4">
                            <i className="fas fa-envelope text-xl text-sky-500"></i>
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p className="text-sm text-gray-400">gbhavekar2020@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <i className="fa-brands fa-orcid text-xl text-sky-500"></i>
                            <div>
                                <h4 className="font-semibold"> ORCID </h4>
                                <a href="https://orcid.org/0000-0002-5084-0927" className="text-sm text-gray-400"> ORCID Profile </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <i className="fab fa-linkedin text-xl text-sky-400"></i>
                            <div>
                                <h4 className="font-semibold">LinkedIn</h4>
                                <p className="text-sm text-gray-400">linkedin.com/in/jdfjdfhefj</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right - Contact Form */}
                <div className="flex-1">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-[#103a62] text-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-[#103a62] text-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Your message"
                                className="w-full bg-[#103a62] text-white px-4 py-2 rounded resize-none outline-none focus:ring-2 focus:ring-sky-500"
                            ></textarea>
                        </div>

                        {/* reCAPTCHA widget */}
                        <ReCAPTCHA
                            sitekey="6LdOHo8rAAAAAGjI5tYi_PpFLYeFH18isCR8yeVm" 
                            onChange={handleCaptchaChange}
                        />

                        <button
                            type="submit"
                            className="bg-sky-600 hover:bg-sky-700 cursor-pointer text-white px-6 py-2 rounded font-semibold transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
