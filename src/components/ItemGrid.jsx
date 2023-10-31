import React from 'react';
import { Link } from "react-router-dom";
import { Currency } from "../Export";

const ItemGrid = () => {
    const items = [
        {
            id: "1",
            img: "/Assets/car.png",
            title: "benz",
            desc: "Mercedes Benz C300 2019 model red color with wide body kit",
            price: 200000000,
        },
        {
            id: "2",
            img: "/Assets/car.png",
            title: "benz",
            desc: "Mercedes Benz C300 2019 model red color with wide body kit",
            price: 200000000,
        },
        {
            id: "3",
            img: "/Assets/car.png",
            title: "benz",
            desc: "Mercedes Benz C300 2019 model red color with wide body kit",
            price: 200000000,
        },
        {
            id: "4",
            img: "/Assets/car.png",
            title: "benz",
            desc: "Mercedes Benz C300 2019 model red color with wide body kit",
            price: 200000000,
        },
        {
            id: "5",
            img: "/Assets/car.png",
            title: "benz",
            desc: "Mercedes Benz C300 2019 model red color with wide body kit",
            price: 200000000,
        },
        {
            id: "6",
            img: "/Assets/car.png",
            title: "benz",
            desc: "Mercedes Benz C300 2019 model red color with wide body kit",
            price: 200000000,
        },
        {
            id: "7",
            img: "/Assets/car.png",
            title: "benz",
            desc: "Mercedes Benz C300 2019 model red color with wide body kit",
            price: 200000000,
        },
    ]

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 items-center px-10 my-4'>
            {items
                ?.slice(0, 18)
                .map(({ img, price, title, desc, id }, i) => {
                    return (
                        <Link to={`/shop/product/${id}`} key={i}>
                            <div className='flex-col bg-gray-100 gap-4 items-center p-3 rounded-md shadow-md cursor-pointer hover:scale-105 transition h-[200px] w-[160px]'>
                                <img
                                    className='w-[100%] h-[70%] object-cover'
                                    src={img}
                                    alt={title}
                                />
                                <div>
                                    <h2 className='text-sm capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-900 m-0'>
                                        {title?.slice(0, 25)}
                                        {`${title?.length > 25 ? "..." : ""}`}
                                    </h2>
                                    <Currency
                                        className='text-xs font-medium my-2'
                                        amount={price}
                                    />


                                </div>
                            </div>
                        </Link>
                    );
                })}
        </div>
    )
}

export default ItemGrid