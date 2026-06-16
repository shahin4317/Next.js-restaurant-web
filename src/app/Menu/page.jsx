import FoodsCard from '@/components/FoodsCard';
import Link from 'next/link';
import React from 'react';

const MenuPage = async () => {
    const res = await fetch(' https://phi-lab-server.vercel.app/api/v1/lab/foods')
    const data = await res.json();
    const foods = data.data;
    console.log(foods);


    return (
        <div className='container mx-auto mb-5'>
            <div className="pt-8 mb-10 flex justify-center">
                <h1 className="text-3xl font-bold text-white">
                    Total {foods.length} Food Items Available
                </h1>
            </div>
            <div className='container justify-center items-center  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    foods.map((food, id) => <FoodsCard key={food.id} food={food}></FoodsCard>)
                }
            </div>
        </div>
    );
};

export default MenuPage;