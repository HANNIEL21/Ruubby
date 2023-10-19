import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaOpencart, FaRegBell } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../Export';

const DashboardHeader = () => {
    const { token, userDetails } = useSelector((state) => state.user);

    const fullName = userDetails.firstName + " " + userDetails.lastName;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(Logout());
        navigate("/");
    }

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='p-4 bg-white drop-shadow-sm flex items-center justify-between'>
            <div>
                <h3 className='text-2xl font-bold m-0'>{`Hi, ${fullName}`}</h3>
                <i className='text-xs text-blue-800 font-semibold'>{userDetails?.userType}</i>
            </div>

            <input
                className='shadow appearance-none border rounded-xl w-2/5 py-3 px-3 border-none text-[#042349] leading-tight focus:outline-none focus:shadow-outline placeholder-[#052B73]'
                id='search'
                type='text'
                placeholder='Search'
                name='search'
            />

            <div className='flex justify-between align-center'>
                <div className='flex justify-between align-center'>
                    {token && (
                        <Link to='/shop/cart' className='my-0' >
                            <i className='text-2xl text-blue-800 flex cursor-pointer'>
                                <FaRegBell className='m-0' />
                                <h2 className='text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center p-1 -translate-y-2'>
                                    {/* {cartItems.length} */}
                                </h2>
                            </i>
                        </Link>
                    )}
                    {token && (
                        <Link to='/shop/cart' className='mx-5 my-0 '>
                            <i className='text-2xl text-blue-800 flex cursor-pointer'>
                                <FaOpencart className='m-0' />
                                <h2 className='text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center p-1 -translate-y-2'>
                                    {/* {cartItems.length} */}
                                </h2>
                            </i>
                        </Link>
                    )}
                </div>
                <div>
                    <div className="relative inline-block text-left ">
                        <div>
                            <button
                                type="button"
                                style={{ transition: "all .15s ease" }}
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex w-full justify-center rounded-full gap-x-1.5 bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 hover:text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-800" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <span>{fullName}</span>
                            </button>
                        </div>

                        <div className={isOpen
                            ? "block absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            : "hidden"} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                            <div className="p-1 bg-gray-200 grid grid-cols-1 divide-y-8" role="none">
                                <Link >
                                    <div className='bg-gray-100 hover:bg-blue-800 p-2 text-center text-md hover:text-white rounded-md font-semibold'>Profile</div>
                                </Link>
                                <Link to="/">
                                    <button
                                        className="bg-gray-100 w-full hover:bg-red-500 p-2 text-md hover:text-white rounded-md font-semibold"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>

                    {/* <img src={userProfile.selfie} /> */}
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader