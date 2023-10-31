import React from 'react';
import { Link } from 'react-router-dom';
import { Slider, Categories, ItemGrid } from '../../Export';

const ShopHome = () => {
    return (
        <div>
            <section className='grid grid-cols-1 md:grid-cols-2 md:h-[400px] bg-blue-50 p-2 overflow-hidden'>
                <div className='flex items-center gap-2 '>
                    <div>
                        <img className='hidden h-[400px] md:flex' src="/Assets/buy.png" alt='' />
                    </div>
                    <div className=''>
                        <div>
                            <h1 className='font-semibold capitalize text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-900 block leading-[3rem]'>
                                Deals you don’t want to miss
                            </h1>

                            <Link to='shop/category/1'>
                                <button className='bg-gradient-to-r from-blue-800 to-purple-900 p-3 px-10 text-white ml-auto hover:scale-95 transition rounded-md shadow-xl my-6'>
                                    Buy now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <Slider />
                </div>
            </section>
            <section>
                <Categories />
            </section>
            <section>
                <div className='flex justify-between items-center px-3'>
                    <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-900 m-0'>Today's Deal</h2>
                    <Link>
                        <h2 className='cursor-pointer text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-900 m-0'>See all items</h2>
                    </Link>
                </div>
                <ItemGrid />
            </section>
        </div>

    )
}

export default ShopHome