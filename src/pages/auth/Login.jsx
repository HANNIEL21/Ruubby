import React from 'react';
import Axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {
    clearState,
    isLoadingFalse,
    isLoadingTrue,
    setEmail,
    setPassword,
} from '../../Redux/Features/Auth/AuthSlice';
import {
    setToken,
    setUserDetails
} from '../../Redux/Features/User/UserSlice';
import { Spinner } from '../../Export';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isError, user } = useSelector((state) => state.auth);

    const errorDiv = isError ? (
        <small className='text-red-600 text-center w-52 mt-4'>
            Sorry, the credentials do not match our records
        </small>
    ) : null;

    const handleLogin = async () => {
        try {
            dispatch(isLoadingTrue());

            const response = await Axios.post("http://localhost:5000/Ruubby_api/v1/auth/login", {
                email: user.email,
                password: user.password,
            });

            dispatch(isLoadingFalse());

            const userData = response.data;


            dispatch(setUserDetails(userData));
            dispatch(setToken(response.data.token));

            navigate("/shop");
            dispatch(clearState());

        } catch (error) {
            dispatch(isLoadingFalse());
            console.error("An error occurred during login:", error);
        }
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }

    return (
        <div className='flex h-screen w-full p-4'>
            <div className="w-[60%] hidden md:inline-flex bg-blue-800 rounded-3xl"></div>
            <div className="flex-1 h-screen flex justify-center align-center">
                <div className="flex h-screen w-[60%] flex-col justify-evenly">
                    <Link to='/' className='text-[#0F3460] font-semibold '>
                        <button>
                            <FaChevronLeft />
                        </button>
                    </Link>
                    <div className='flex justify-center'>
                        <img alt='logo' className='w-20' src="/Assets/logo.png" />
                    </div>
                    <form onSubmit={handleSubmit} method='POST'>
                        <div className='mb-4'>
                            <input
                                className='appearance-none border-solid font-semibold border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-none focus:shadow-outline placeholder-[#052B73]'
                                id='username'
                                type='email'
                                placeholder='Enter your Email'
                                name='email'
                                value={user.email}
                                onChange={(e) => dispatch(setEmail(e.target.value))}
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <input
                                className='appearance-none border-solid font-semibold border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-[#052B73]'
                                id='password'
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={user.password}
                                onChange={(e) => dispatch(setPassword(e.target.value))}
                                required
                            />

                            <Link
                                to='/password'
                                className='font-semibold text-sm text-blue-800 align-left'
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <p className='mb-2'>{errorDiv}</p>
                        <div className='mb-6'>
                            <button
                                className='bg-[#0F3460] hover:bg-blue-900 w-full text-white rounded-xl font-bold p-2 md:p-3 focus:outline-none focus:shadow-outline'
                                type='submit'
                                onClick={handleSubmit}
                            >
                                {isLoading ? (
                                    <Spinner loaderText='Signing In' />
                                ) : (
                                    <p>Sign In</p>
                                )}
                            </button>
                        </div>
                        <p className='text-center text-gray-500 text-lg mb-8 mt-5 '>
                            Don't Have An Account?
                            <Link to='/signup' className='text-[#0F3460] font-semibold'>
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
