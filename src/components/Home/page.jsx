
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <section className="bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-5 py-16 md:py-24">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                            🌿 Fresh & Healthy Food
                        </span>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">
                            Fresh Flavors,
                            <br />
                            Served With
                            <span className="text-green-700"> Passion</span>
                        </h1>

                        <p className="text-gray-600 mt-6 text-lg max-w-xl">
                            Discover delicious meals crafted with fresh ingredients.
                            Experience healthy dining and unforgettable flavors at
                            Leaf & Plate.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link href="/Menu">
                                <button className="btn bg-green-800 hover:bg-green-900 text-white border-none">
                                    Explore Menu
                                </button>
                            </Link>

                            <Link href="/booktable">
                                <button className="btn btn-outline border-green-800 text-green-800">
                                    Book a Table
                                </button>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 mt-10">
                            <div>
                                <h3 className="text-3xl font-bold text-green-800">500+</h3>
                                <p className="text-gray-500">Happy Guests</p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-green-800">50+</h3>
                                <p className="text-gray-500">Fresh Dishes</p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-green-800">4.9★</h3>
                                <p className="text-gray-500">Customer Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="">
                        <div className="bg-green-200 blur-3xl opacity-30 rounded-full"></div>

                        <img
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                            alt="Healthy Food"
                            className=" rounded-3xl shadow-2xl w-[] h-[500px] "
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomePage;