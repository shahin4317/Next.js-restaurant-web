import Image from 'next/image';
import React from 'react';

const FoodDetailsPage = async ({ params }) => {
    const { foodId } = await params
    const res = await fetch(` https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-10 px-4 pt-4">

            <div className="max-w-6xl mx-auto">

                {/* MAIN CARD */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

                    {/* IMAGE */}
                    <div className="flex justify-center">
                        <Image
                            src={food.image_link}
                            alt={food.dish_name}
                            width={300}
                            height={200}
                            
                            
                        />
                    </div>

                    {/* INFO */}
                    <div className="p-8 flex flex-col justify-center">

                        <span className="w-fit bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            {food.category}
                        </span>

                        <h1 className="text-3xl font-bold text-gray-800 mt-4 leading-tight">
                            {food.dish_name}
                        </h1>

                        <p className="text-gray-500 mt-2">
                            {food.cuisine}
                        </p>

                        <div className="flex items-center gap-4 mt-5">
                            <p className="text-yellow-500 font-semibold text-black">
                                ⭐ {food.rating}
                            </p>

                            <p className="text-green-700 text-2xl font-bold">
                                ৳ {food.price}
                            </p>
                        </div>

                        <button className="mt-6 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition">
                            Order Now
                        </button>

                    </div>
                </div>

                {/* INGREDIENTS */}
                <div className="mt-10 bg-white rounded-2xl shadow-md p-6">

                    <h2 className="text-2xl font-bold text-green-800 mb-4">
                        🥗 Ingredients
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-3">
                        {food.main_ingredients.map((item, i) => (
                            <div
                                key={i}
                                className="bg-green-50 border border-green-100 px-4 py-2 rounded-lg text-gray-700"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* NUTRITION */}
                <div className="mt-10 bg-white rounded-2xl shadow-md p-6">

                    <h2 className="text-2xl font-bold text-green-800 mb-4">
                        🔥 Nutrition Info
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        <div className="bg-gray-50 p-4 rounded-xl text-center">
                            <p className="font-bold text-green-700">
                                {food.approximate_nutrition_per_serving.calories}
                            </p>
                            <p className="text-sm text-gray-500">Calories</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl text-center">
                            <p className="font-bold text-green-700">
                                {food.approximate_nutrition_per_serving.protein}
                            </p>
                            <p className="text-sm text-gray-500">Protein</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl text-center">
                            <p className="font-bold text-green-700">
                                {food.approximate_nutrition_per_serving.carbohydrates}
                            </p>
                            <p className="text-sm text-gray-500">Carbs</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl text-center">
                            <p className="font-bold text-green-700">
                                {food.approximate_nutrition_per_serving.fat}
                            </p>
                            <p className="text-sm text-gray-500">Fat</p>
                        </div>

                    </div>
                </div>

                {/* STEPS */}
                <div className="mt-10 bg-white rounded-2xl shadow-md p-6">

                    <h2 className="text-2xl font-bold text-green-800 mb-4">
                        👨‍🍳 Cooking Steps
                    </h2>

                    <ol className="space-y-3 list-decimal pl-5 text-gray-700 leading-relaxed">
                        {food.cooking_steps.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ol>

                </div>

            </div>
        </div>
    );
};

export default FoodDetailsPage;