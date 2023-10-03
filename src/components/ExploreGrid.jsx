import React from "react";

const ExploreGrid = ({ header, text, index }) => {
    return (
        <div className='h-[300px] text-white p-4 relative'>
            <span className='w-5 h-5 text-center text-[10px] flex items-center justify-center border- border-[1px] border-gray-100 text-gray-100'>
                {index}
            </span>
            <h2 className='font-bold my-5 mt-10 text-4xl'>{header}</h2>
            <p className='text-base'>{text}</p>
            <hr className='absolute bottom-10 z-50 w-full bg-gray-400 border-gray-400 -m-4' />
        </div>
    );
};

export default ExploreGrid;
