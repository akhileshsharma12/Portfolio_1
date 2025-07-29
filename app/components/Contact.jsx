"use client";
import React, { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {

    const [token, setToken] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            alert("Please complete the hCaptcha!");
            return;
        }

        const formData = new FormData(e.target);

        formData.append("access_key", "fcfb63fb-44a3-4b2c-a20e-f6d05f1f98f2");
        formData.append("h-captcha-response", token);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert("Form Submitted Successfully");
            e.target.reset();
            setToken("");
            hcaptchaRef.current.resetCaptcha();
        } else {
            console.log("Error", data);
            alert("Error Submitting Form");
        }
    };

    return (
        <section id="contact-section" className="bg-[#021526] text-white py-15 px-6 md:px-20">
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
                                <a href="https://www.linkedin.com/in/dr-girish-kumar-b-761186207/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-sm text-gray-400"> Girish Bhavekar Linkdin </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right - Contact Form */}
                <div className="flex-1">
                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                        <div>
                            <label className="block text-sm mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-[#103a62] text-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-sky-500"
                                name="Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-[#103a62] text-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-sky-500"
                                name="Email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Your message"
                                className="w-full bg-[#103a62] text-white px-4 py-2 rounded resize-none outline-none focus:ring-2 focus:ring-sky-500"
                                name="Message"
                            ></textarea>
                        </div>

                        {/* reCAPTCHA widget */}
                        <HCaptcha
                            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" 
                            onVerify={setToken}
                            reCaptchaCompat={false}
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
