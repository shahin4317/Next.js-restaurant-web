import React from 'react';
import Image from "next/image";
import Link from "next/link";
import GalleyCard from '@/components/GalleyCard';


const GlleryPage = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const data = await res.json();
    const foods = data.data;
    console.log(foods);
    return (
        <div className="bg-black min-h-screen py-20">

            <div className="text-center mb-16">
                <div className='text-center items-center justify-center flex'>
                    <Image
                        src={'/logo.png'}
                        alt={'logo img'}
                        width={200}
                        height={100}
                        className=''
                    ></Image>

                </div>



                <h1 className="text-5xl md:text-6xl font-bold text-white mt-3">
                    Food Gallery
                </h1>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    A visual journey through our finest dishes, prepared with fresh ingredients
                    and served with elegance.
                </p>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

                {foods.map((food) => (
                    <GalleyCard
                        key={food.id}
                        food={food}
                    />
                ))}

            </div>
            <div className="max-w-4xl mx-auto mt-20 px-4">
                <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-3xl p-10 text-center shadow-2xl">

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ready To Experience Leaf & Plate?
                    </h2>

                    <p className="text-green-100 mt-4 max-w-2xl mx-auto">
                        Every dish is crafted with fresh ingredients, passion, and care.
                        Reserve your table today and enjoy a memorable dining experience.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

                        <Link href="/">
                            <button className="btn bg-white text-green-900 border-none hover:scale-105 transition">
                                ← Back To Home
                            </button>
                        </Link>

                        <Link href="/booktable">
                            <button className="btn bg-green-900 text-white border-none hover:scale-105 transition">
                                Book A Table 🍽️
                            </button>
                        </Link>

                    </div>

                </div>
            </div>

        </div>

    )
};
export default GlleryPage;