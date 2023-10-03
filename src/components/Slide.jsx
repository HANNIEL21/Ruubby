import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ title, data, seeAll }) => {
    return (
        <div className='my-10'>
            <div className='flex justify-between my-5'>
                <h2 className='font-bold text-xl'>{title}</h2>
                {seeAll && (
                    <Link
                        to='/shop'
                        className='font-medium cursor-pointer select-none text-xl text-blue-800'
                    >
                        See all
                    </Link>
                )}
            </div>
            <div className='grid grid-flow-col overflow-x-scroll gap-3 horScroll scroll pb-5'>
                {data.map(({ title, img }, i) => {
                    return (
                        <div key={i} className='w-[100px] md:w-[100px]'>
                            <img src={img} className='w-32 h-24 object-contain' alt={title} />
                            <p className='text-sm capitalize font-medium my-2 p-2 text-center'>
                                {title}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Slide;
