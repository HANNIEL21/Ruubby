import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
    AiFillHome,
    AiOutlineHome,
    AiFillShop,
    AiOutlineShop,
    AiOutlineTags,
    AiFillTags
} from "react-icons/ai";
import {
    BsBuildings,
    BsBuildingsFill,
    BsCart,
    BsCartFill,

} from "react-icons/bs";
import {
    HiOutlineUserGroup,
    HiMiniUserGroup,
    HiUser,
    HiOutlineUser
} from "react-icons/hi2";
import {
    RiFilePaperFill,
    RiFilePaperLine,
} from "react-icons/ri";
const Sidebar = () => {
    const [userType, setUserType] = useState("Admin");
    const [navLinks, setNavLinks] = useState([]);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        let links;
        if (userType === "Admin") {
            links = [
                { title: "Dashboard", url: "/dashboard", icon: <AiOutlineHome />, selectedIcon: <AiFillHome /> },
                { title: "Users", url: "users", icon: <HiOutlineUserGroup />, selectedIcon: <HiMiniUserGroup /> },
                { title: "Orders", url: "orders", icon: <BsCart />, selectedIcon: <BsCartFill /> },
                { title: "Products", url: "products", icon: <AiOutlineTags />, selectedIcon: <AiFillTags /> },
                { title: "Properties", url: "properties", icon: <BsBuildings />, selectedIcon: <BsBuildingsFill /> },
                { title: "Landlords", url: "landlords", icon: <HiOutlineUser />, selectedIcon: <HiUser /> },
                { title: "Merchants", url: "merchants", icon: <AiOutlineShop />, selectedIcon: <AiFillShop /> },
                { title: "Transactions", url: "transactions", icon: <RiFilePaperLine />, selectedIcon: <RiFilePaperFill /> },
            ];
            setNavLinks(links);
        } else if (userType === "Merchant") {
            links = [
                { title: "Dashboard", url: "/dashboard", icon: <AiFillHome /> },
                { title: "Orders", url: "/dashboard" },
                { title: "Products", url: "/dashboard" },
                { title: "Transactions", url: "/dashboard" },
            ];
            setNavLinks(links);
        } else if (userType === "Landlord") {
            links = [
                { title: "Dashboard", url: "/dashboard", icon: <AiFillHome /> },
                { title: "Orders", url: "/dashboard" },
                { title: "Properties", url: "/dashboard" },
                { title: "Transactions", url: "/dashboard" },
            ];
            setNavLinks(links);
        }
    }, [])

    return (
        <div className='drop-shadow-sm flex flex-col w-48 justify-between py-5 px-2'>
            <sectiton className="flex justify-center" >
                <Link to="/dashboard">
                    <img src="./Assets/logo.png" alt="Ruubby Logo" />
                </Link>
            </sectiton>
            <sectiton>
                {
                    navLinks.map((link, i) => (
                        <Link to={link.url} key={i}>
                            <div
                                className={`flex items-center ${selected === i
                                    ? "text-white border bg-blue-800 text-bold rounded-md p-2 m-2"
                                    : "text-gray-400 p-2 px-5"
                                    } hover:scale-95 transition`}
                                onClick={() => setSelected(i)}
                            >
                                <i className='text-xl pr-3'>{selected === i ? link.selectedIcon : link.icon}</i>
                                <h2 className='text-sm font-bold my-1 hidden md:flex'>{link.title}</h2>
                            </div>
                        </Link>
                    ))
                }
            </sectiton>
            <sectiton>
                Actions
            </sectiton>
        </div>
    )
}

export default Sidebar