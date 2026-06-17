import React from 'react';
import {
    MapPin,
    Phone,
    Mail,
    Clock
} from "lucide-react";
const ContactPage = () => {
    return (
        <div className="bg-green-50 min-h-screen ">

            {/* Hero */}
            <section className="bg-green-900 text-white  py-24">
                <div className="max-w-6xl mx-auto px-5 text-center p-10">
                    <p className="uppercase tracking-[6px] text-green-300 text-5xl">
                        Contact Us
                    </p>

                    <h1 className=" font-bold mt-2">
                        Get In Touch
                    </h1>

                    <p className="max-w-2xl mx-auto mt-5 text-gray-300">
                        We'd love to hear from you. Whether you have a question,
                        feedback, or reservation request, we're here to help.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-7xl mx-auto px-5 py-20">

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left Side */}
                    <div className="bg-white rounded-3xl p-8 shadow-2xl">

                        <h2 className="text-3xl font-bold text-green-900 mb-10">
                            Contact Information
                        </h2>

                        <div className="space-y-8">

                            <div className="flex gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-xl">
                                    <MapPin className="text-green-800" />
                                </div>

                                <div className=''>
                                    <h3 className="font-semibold text-lg text-green-900">
                                        Address
                                    </h3>

                                    <p className="text-gray-500">
                                        Tachnical Road , Sylhet
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-xl">
                                    <Phone className="text-green-800" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg text-green-900">
                                        Phone
                                    </h3>

                                    <p className="text-gray-500">
                                        +880 1850840896
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-xl">
                                    <Mail className="text-green-800" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg text-green-900">
                                        Email
                                    </h3>

                                    <p className="text-gray-500">
                                        shainalam4317@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-green-100 p-3 rounded-xl">
                                    <Clock className="text-green-800" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg text-green-900">
                                        Opening Hours
                                    </h3>

                                    <p className="text-gray-500">
                                        Mon - Sun: 10:00 AM - 11:00 PM
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-2xl">

                        <h2 className="text-3xl font-bold text-green-900 mb-10">
                            Send Message
                        </h2>

                        <form className="space-y-6">

                            {/* Name */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="mb-3 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="mb-3 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                            />

                            {/* Subject */}
                            <input
                                type="text"
                                placeholder="Subject"
                                className=" mb-3 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                            />

                            {/* Message */}
                            <textarea
                                rows="6"
                                placeholder="Write your message..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 resize-none"
                            />

                            {/* Button */}
                            <button
                                className="w-full py-3 rounded-xl bg-green-900 text-white font-semibold hover:bg-green-800 transition duration-300"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="pb-20">
                <div className="max-w-5xl mx-auto px-5">

                    <div className="bg-green-900 rounded-3xl p-10 text-center text-white  mb-10">

                        <h2 className="text-4xl font-bold">
                            Reserve Your Table Today
                        </h2>

                        <p className=" text-green-100 mt-4 mb-8">
                            Enjoy fresh ingredients, elegant dining,
                            and unforgettable flavors.
                        </p>

                        <button className="btn mt-8 bg-white text-green-900 border-none">
                            Book a Table
                        </button>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default ContactPage;