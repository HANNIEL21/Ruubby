import React from 'react';
import { useParams } from 'react-router-dom'

const Product = () => {
    const { id } = useParams();
    const images = [
        "/Assets/car.png",
        "/Assets/car.png",
        "/Assets/car.png",
    ]
    return (
        <div className='max-w-[2000px] mx-auto overflow-x-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-2'>
                <div className='flex flex-col-reverse xl:flex-row gap-4 items-center p-4 overflow-hidden'>
                    <div className='h-full mt-3 flex flex-row xl:flex-col items-center justify-center gap-4 '>
                        {images.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className='p-4 rounded-md shadow-md cursor-pointer relative'
                                >
                                    <img
                                        src={item}
                                        className='w-full h-24 md:w-[100%] md:h-[100px] object-contain'
                                        alt={""}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <img
                            src={images[0]}
                            className='w-full h-[350px] object-contain md:w-[100%]'
                            alt='product img'
                        />
                    </div>
                </div>
                <div className='p-4'>
                    <div>
                        <div className='flex flex-col gap-2 mt-3 '>
                            <h2 className='text-xl md:text-2xl capitalize font-bold'>
                                {/* {product_name} */}
                            </h2>
                            <p className='text-xs italic'>
                                {/* {description} */}
                            </p>
                            <div className='flex'>
                                {/* <img src={star} alt='rating' />
                                <img src={star} alt='rating' />
                                <img src={star} alt='rating' />
                                <img src={star} alt='rating' />
                                <img src={star} alt='rating' /> */}
                            </div>
                            <h2 className='text-xs'>
                                {/* ({allReviews?.length} Reviews) */}
                            </h2>
                        </div>
                    </div>
                    {/* <p className='text-s my-1 capitalize'>item code-#0112561829</p> */}
                    <hr className='h-px bg-gray-100 border-0 dark:bg-gray-200 my-4'></hr>
                    <div>
                        {/* <Currency
                            amount={price}
                            className='text-xl my-8 font-bold text-blue-600'
                        /> */}

                        {/* <p className='my-3 text-green-600 '>
              You have two ruubby points for buying this products.
            </p> */}

                        <div className='flex gap-3 my-6 items-center text-center'>
                            <h3 className='font-medium'>Quantity</h3>
                            {/* <Counter counter={counter} setCounter={setCounter} /> */}
                        </div>

                        <p className='my-5 font-medium text-xs'>
                            Get it on credit with our payment option
                        </p>
                    </div>
                    <div className='flex gap-3 my-8 flex-col md:flex-row'>
                        <button
                            className='bg-gradient-to-r from-blue-800 to-purple-900 px-8  text-[#fff] rounded-md shadow-md w-full md:w-52 p-4'
                            onClick={() => { }}
                        >
                            Buy Now
                        </button>
                        <button
                            className='py-4 px-4 border rounded-md shadow-xl bg-white shadow-gray-200 '
                            onClick={() => { }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product