import React from 'react';

const BookTablePage = () => {
    return (
        <div className="min-h-screen bg-green-50 pt-15">
            {/* Hero Section */}
            <section className="bg-green-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-5 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Reserve Your Table
                    </h1>
                    <p className="text-green-100 max-w-2xl mx-auto">
                        Enjoy fresh flavors and a memorable dining experience at
                        <span className="font-semibold"> Leaf & Plate</span>.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="max-w-6xl mx-auto px-5 py-16">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-green-900 mb-6">
                            Book a Table
                        </h2>

                        <form className="space-y-4 text-black ">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border rounded-lg p-3"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full border rounded-lg p-3"
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="date"
                                    className="border rounded-lg p-3"
                                />

                                <input
                                    type="time"
                                    className="border rounded-lg p-3"
                                />
                            </div>

                            <select className="w-full border rounded-lg p-3 text-black">
                                <option>Select Guests</option>
                                <option>1 Person</option>
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4 People</option>
                                <option>5+ People</option>
                            </select>

                            <textarea
                                rows="4"
                                placeholder="Special Request (Optional)"
                                className="w-full border rounded-lg p-3"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-lg font-semibold transition"
                            >
                                Confirm Reservation
                            </button>
                        </form>
                    </div>

                    {/* Info Side */}
                    <div>
                        <h2 className="text-3xl font-bold text-green-900 mb-6">
                            Why Choose Leaf & Plate?
                        </h2>

                        <div className="space-y-4">
                            <div className="bg-white p-5 rounded-xl shadow text-green-900">
                                <h3 className="font-semibold text-lg ">
                                    🌿 Fresh Ingredients
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Every dish is prepared with carefully selected fresh ingredients.
                                </p>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow">
                                <h3 className="font-semibold text-lg text-green-900">
                                    🍽️ Comfortable Dining
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Relax and enjoy a warm, welcoming atmosphere.
                                </p>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow">
                                <h3 className="font-semibold text-lg text-green-900">
                                    ⭐ Excellent Service
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Our team is dedicated to making every visit special.
                                </p>
                            </div>
                        </div>

                        <div className="bg-green-900 text-white p-6 rounded-2xl mt-6">
                            <h3 className="text-xl font-bold mb-3">Opening Hours</h3>

                            <p>Mon - Thu : 10:00 AM - 10:00 PM</p>
                            <p>Fri - Sat : 10:00 AM - 11:00 PM</p>
                            <p>Sunday : 11:00 AM - 10:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookTablePage;