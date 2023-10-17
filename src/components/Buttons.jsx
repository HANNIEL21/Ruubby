import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';
import {useSelector, useDispatch} from "react-redux";
import { Logout } from '../Export';


const Buttons = ({ setIsSidebarOpen }) => {
    const {token, userDetails } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(Logout());
        navigate("/");
    }

    return (
        <div className='flex flex-col lg:flex-row gap-4 text-sm lg:items-center'>
            {token && (
                <Link to='/shop/cart' onClick={() => setIsSidebarOpen(false)}>
                    <i className='text-2xl text-blue-800 flex cursor-pointer'>
                        <FaOpencart />
                        <h2 className='text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center p-1 -translate-y-2'>
                            {/* {cartItems.length} */}
                        </h2>
                    </i>
                </Link>
            )}
            {token && (
                <Link
                    to={`${userDetails?.userType === "consumer" ? "/shop" : "/dashboard"}`}
                    className='p-3 w-full px-8 text-blue-800 border-blue-800 border-2 font-medium hover:scale-95 transition rounded-md shadow-md whitespace-nowrap capitalize select-none cursor-pointer'
                >
                    Hi, {`${userDetails.firstName || ""}`}
                </Link>
            )}

            {token ? (
                <button
                    className='p-3 w-full px-8 bg-blue-800 text-white border-2 border-blue-800 font-medium hover:scale-95 transition hover:bg-blue-900 rounded-md shadow-md'
                    onClick={handleLogout}
                >
                    Logout
                </button>
            ) : (
                <div className='flex flex-col lg:flex-row gap-4 text-sm lg:items-center'>
                    <Link to='/login'>
                        <button className='p-3 w-full px-8 bg-white text-blue border-2 border-blue-800 font-medium hover:scale-95 transition hover:bg-blue-900 hover:text-white rounded-md shadow-md'>
                            Login
                        </button>
                    </Link>
                    <Link to='/signup'>
                        <button className='p-3 w-full px-8 bg-blue-800 text-white border-2 border-blue-800 font-medium hover:scale-95 transition hover:bg-blue-900 rounded-md shadow-md'>
                            Sign Up
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Buttons