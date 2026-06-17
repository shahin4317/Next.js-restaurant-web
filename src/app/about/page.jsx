import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-green-50 min-h-screen">

            {/* Hero */}
            <section className="bg-green-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-5 text-center">
                    <h1 className="text-5xl font-bold mb-4">
                        About Leaf & Plate
                    </h1>

                    <p className="max-w-2xl mx-auto text-green-100">
                        Fresh ingredients, healthy choices, and unforgettable dining
                        experiences crafted with passion.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="max-w-6xl mx-auto px-5 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-4xl font-bold text-green-900 mb-6">
                            Our Story
                        </h2>

                        <p className="text-gray-600 leading-8">
                            At Leaf & Plate, we believe great food starts with fresh
                            ingredients. Our mission is to serve healthy, delicious,
                            and beautifully crafted meals that bring people together.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            From farm-fresh vegetables to carefully selected proteins,
                            every dish is prepared with quality and care.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">
                            🌿 Our Mission
                        </h3>

                        <p className="text-gray-600">
                            To provide healthy, flavorful meals while creating a warm
                            and welcoming dining experience for every guest.
                        </p>
                    </div>

                </div>
            </section>

            {/* Stats */}
            <section className="max-w-6xl mx-auto px-5 pb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    <div className="bg-white rounded-2xl p-6 text-center shadow">
                        <h3 className="text-3xl font-bold text-green-800">500+</h3>
                        <p className="text-gray-500">Happy Guests</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center shadow">
                        <h3 className="text-3xl font-bold text-green-800">50+</h3>
                        <p className="text-gray-500">Menu Items</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center shadow">
                        <h3 className="text-3xl font-bold text-green-800">4.9★</h3>
                        <p className="text-gray-500">Customer Rating</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center shadow">
                        <h3 className="text-3xl font-bold text-green-800">5+</h3>
                        <p className="text-gray-500">Years Experience</p>
                    </div>

                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-5">

                    <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
                        Why Choose Us?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="p-6 rounded-2xl shadow">
                            <h3 className="text-xl font-bold mb-3 text-green-900">
                                🌱 Fresh Ingredients
                            </h3>
                            <p className="text-gray-600 ">
                                Carefully sourced ingredients for every meal.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl shadow">
                            <h3 className="text-xl font-bold mb-3 text-green-900">
                                🍽️ Premium Dining
                            </h3>
                            <p className="text-gray-600">
                                Comfortable atmosphere and exceptional service.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl shadow">
                            <h3 className="text-xl font-bold mb-3 text-green-900">
                                ⭐ Top Quality
                            </h3>
                            <p className="text-gray-600">
                                Every dish is crafted with care and passion.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-5">

                    <div className="bg-green-900 rounded-3xl text-white text-center p-10">

                        <h2 className="text-4xl font-bold mb-4">
                            Ready to Dine With Us?
                        </h2>

                        <p className="text-green-100 mb-6">
                            Reserve your table today and enjoy a memorable dining experience.
                        </p>

                        <Link href="/booktable">
                            <button className="btn bg-white text-green-900 border-none">
                                Book a Table
                            </button>
                        </Link>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default AboutPage;