import React, { useEffect, useState } from 'react';
import { Buttons } from "../Export";
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [navLinks, setNavLinks] = useState([]);
    const {token} = useSelector((state) => state.user);

    useEffect(() => {
        let links;
        if (!token) {
            links = [
                { title: "Credit Score", url: "/creditscore" },
                { title: "Rent a Property", url: "/properties" },
                { title: "shop now", url: "/shop" },

                { title: "frequently asked question", url: "/faqs" },
                { title: "privacy", url: "/privacy" },
                { title: "about us", url: "/about" },


            ];
        } else {
            links = [
                { title: "Home", url: "/shop" },
                { title: "My Profile", url: "/myprofile" },
                { title: "Orders", url: "/orders" },
                { title: "Credit Score", url: "/creditscore" },
                { title: "Rent a Property", url: "/properties" },

            ];
        }
        setNavLinks(links);
    }, [token]);

    return (
        <div className='max-w-[2000px] mx-auto'>
            <div className='flex justify-between items-center text-sm p-4 px-8'>
                <div className='flex items-center justify-between w-full lg:w-fit'>
                    <Link to='/'>
                        <img
                            src="./Assets/logo.png"
                            className={`${isSidebarOpen ? "opacity-25" : "opacity-100"
                                } w-10 opacity-100`}
                            alt='logo'
                        />
                    </Link>

                    <i
                        className='text-3xl text-blue-800 flex lg:hidden'
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <BiMenuAltRight />
                    </i>
                </div>
                <div className='hidden lg:flex gap-6'>
                    {navLinks.map(({ title, url }, i) => {
                        return (
                            <Link
                                key={i}
                                className='capitalize font-medium hover:text-blue-800 transition'
                                to={url}
                            >
                                {title}
                            </Link>
                        );
                    })}
                </div>
                <div className='hidden lg:flex items-center'>
                    <Buttons setIsSidebarOpen={setIsSidebarOpen} />
                </div>
            </div>

            <div
                className={`${isSidebarOpen ? "translate-x-0" : "translate-x-96"
                    } fixed top-0 right-0 transition p-4 w-72 bg-white shadow-xl lg:hidden z-50 min-h-screen`}
            >
                <div className='flex items-center justify-between w-full lg:w-fit'>
                    <Link to='/'>
                        <img src="./Assets/logo.png" className='w-10' alt='logo' />
                    </Link>

                    <i
                        className='text-3xl text-blue-800 flex lg:hidden'
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <MdClose />
                    </i>
                </div>
                <div className='flex flex-col gap-6 my-6'>
                    {navLinks.map(({ title, url }, i) => {
                        return (
                            <Link
                                key={i}
                                className='capitalize font-medium hover:text-blue-800 transition'
                                to={url}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                {title}
                            </Link>
                        );
                    })}
                </div>
                <Buttons />
            </div>
        </div>
    )
}

export default Header