import React from "react";

const ExploreCard = ({ image, dir, text, header }) => {
    return (
        <div
            className={`${dir} flex items-center md:gap-10 my-10 max-w-6xl mx-auto`}
        >
            <div className='md:w-[50%]'>
                <h2 className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-900 font-bold '>
                    {header}
                </h2>
                <p className='text-lg md:text-2xl my-5'>{text}</p>
            </div>
            <div className='md:w-[50%] p-8 mb-5 md:p-12 bg-[#F5F7FB]'>
                <img src={image} alt='' />
            </div>
        </div>
    );
};

export default ExploreCard;
