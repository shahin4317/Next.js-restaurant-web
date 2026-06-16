import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodsCard = ({ food }) => {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

            {/* Image */}
            <div className="relative h-64 flex overflow-hidden justify-center items-center text-center">
                <Image
                    src={food.image_link}
                    alt={food.dish_name}
                    width={250}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-500 "

                ></Image>


                <div className="absolute top-4 left-4">
                    <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full">
                        {food.category}
                    </span>
                </div>

                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow text-gray-700">
                    ⭐ {food.rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
                    {food.dish_name}
                </h2>

                <p className="text-gray-500 mt-2 text-sm line-clamp-2">
                    {food.cuisine}
                </p>

                <div className="flex items-center justify-between mt-5">
                    <h3 className="text-2xl font-bold text-green-800">
                        ${food.price}
                    </h3>
                    <div className=''>
                        <Link href={`/Menu/${food.id}`}><button className="badge badge-outline text-black p-4 mr-4">See More</button></Link>

                        <button className="bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded-xl transition">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodsCard;