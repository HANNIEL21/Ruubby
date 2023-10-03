import React, { useState } from 'react';
import { BsFilter, BsDownload } from "react-icons/bs";
import { GiPaintBrush, GiTrashCan, GiEyeTarget } from "react-icons/gi";
import { Link } from 'react-router-dom';

const DashboardTable = ({ title, labels, filter, data }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <header className='flex flex-col'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-4xl font-bold text-blue-800'>{title}</h2>
                    <div className='flex items-center justify-evenly'>
                        <button
                            type="button"
                            className="inline-flex w-1/5 justify-center rounded-md gap-x-1.5 bg-white px-3 py-2 text-2xl font-semibold text-gray-900 hover:text-white shadow hover:bg-gray-200"
                            id="download-button"
                        >
                            <BsDownload />
                        </button>
                        {/* filter */}
                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    style={{ transition: "all .15s ease" }}
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="inline-flex w-full justify-center rounded-md gap-x-1.5 bg-white px-3 py-2 text-2xl font-semibold text-gray-900 hover:text-white shadow hover:bg-gray-200"
                                    id="filter-button"
                                    aria-expanded="true"
                                    aria-haspopup="true"
                                >
                                    <BsFilter />
                                </button>
                            </div>

                            <div className={isOpen
                                ? "block absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                : "hidden"}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="filter-button"
                                tabIndex="-1">
                                <div className="p-1 bg-gray-200 grid grid-cols-1 divide-y-8" role="none">
                                    {
                                        filter.map((item, i) => (
                                            <Link key={i} to={item.url} >
                                                <div className='bg-gray-100 hover:bg-blue-800 p-2 text-md hover:text-white rounded-md font-semibold'>{item}</div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        {/* input */}
                        <input
                            className='shadow appearance-none border rounded-xl w-4/5 py-3 px-3 border-none text-[#042349] leading-tight focus:outline-none focus:shadow-outline placeholder-[#052B73]'
                            id='search'
                            type='text'
                            placeholder='Search'
                            name='search'
                        />
                    </div>
                </div>
                <div className={`grid grid-cols-${labels.length + 1} rounded-md bg-gradient-to-r from-blue-800 to-purple-900 text-white text-sm font-semibold p-4 mt-4 min-w-[900px]`}>
                    {labels.map((item, i) => (
                        <h2 key={i}>{item}</h2>
                    ))}
                </div>

            </header>
            <main>
                {
                    data.map((item, i) => (
                        <div
                            key={i}
                            className='grid grid-cols-7 items-center rounded-md my-2 px-4 py-2 bg-white text-gray-400 text-sm '
                        >
                            {
                                Object.values(item).map((value, j) => (
                                    <h2 key={j} className='m-0'>{value}</h2>
                                ))
                            }
                            <div className='flex items-center justify-around'>
                                <button className=' bg-gray-100 hover:bg-gray-200 p-2 rounded-md text-xl text-green-600'><GiPaintBrush /></button>
                                <button className=' bg-gray-100 hover:bg-gray-200 p-2 rounded-md text-xl text-blue-600'><GiEyeTarget /></button>
                                <button className=' bg-gray-100 hover:bg-gray-200 p-2 rounded-md text-xl text-red-600'><GiTrashCan /></button>
                            </div>
                        </div>
                    ))
                }
            </main>
        </>
    )
}

export default DashboardTable
