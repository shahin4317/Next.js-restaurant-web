import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterPage = () => {
    return (
        <footer className="bg-green-950 text-white">
            <div className="max-w-7xl mx-auto px-5 py-12">
                <div className="grid md:grid-cols-3 gap-10">

                    {/* Logo & Description */}
                    <div>
                        {/* Logo Here */}
                        <Link className='mb-10' href={'/'}>
                        <Image
                            src={'/logo.png'}
                            alt='logo'
                            width={150}
                            height={100}
                        ></Image></Link>
                        

                        <p className="mt-3 ">
                            Fresh ingredients, unforgettable flavors, and a dining
                            experience crafted with care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-2">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/Menu">Menu</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/booktable">Book a Table</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Contact Us
                        </h3>

                        <div className="space-y-3 text-gray-300">
                            <p>📍 Tachnical Road,Sylhet</p>
                            <p>📞 +880 1850840896</p>
                            <p>✉️ shahinalam4317@gmail.com.com</p>

                            <div className="pt-3">
                                <p>🕒 Mon - Thu: 10AM - 10PM</p>
                                <p>🕒 Fri - Sat: 10AM - 11PM</p>
                                <p>🕒 Sunday: 11AM - 10PM</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-green-800 mt-10 pt-6 text-center text-gray-400">
                    <p>
                        © 2026 Leaf & Plate. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;