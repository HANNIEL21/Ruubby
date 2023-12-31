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
import { useSelector } from 'react-redux';
const Sidebar = () => {
    const {userDetails} = useSelector((state) => state.user);
    const [navLinks, setNavLinks] = useState([]);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        let links;
        if (userDetails.userType === "admin") {
            links = [
                { title: "Dashboard", url: "/dashboard", icon: <AiOutlineHome />, selectedIcon: <AiFillHome /> },
                { title: "Users", url: "users", icon: <HiOutlineUserGroup />, selectedIcon: <HiMiniUserGroup /> },
                { title: "Landlords", url: "landlords", icon: <HiOutlineUser />, selectedIcon: <HiUser /> },
                { title: "Merchants", url: "merchants", icon: <AiOutlineShop />, selectedIcon: <AiFillShop /> },
                { title: "Orders", url: "orders", icon: <BsCart />, selectedIcon: <BsCartFill /> },
                { title: "Products", url: "products", icon: <AiOutlineTags />, selectedIcon: <AiFillTags /> },
                { title: "Properties", url: "properties", icon: <BsBuildings />, selectedIcon: <BsBuildingsFill /> },
                { title: "Transactions", url: "transactions", icon: <RiFilePaperLine />, selectedIcon: <RiFilePaperFill /> },
            ];
            setNavLinks(links);
        } else if (userDetails.userType === "merchant") {
            links = [
                { title: "Dashboard", url: "/dashboard", icon: <AiOutlineHome />, selectedIcon: <AiFillHome /> },
                { title: "Orders", url: "orders", icon: <BsCart />, selectedIcon: <BsCartFill /> },
                { title: "Products", url: "products", icon: <AiOutlineTags />, selectedIcon: <AiFillTags /> },
                { title: "Transactions", url: "transactions", icon: <RiFilePaperLine />, selectedIcon: <RiFilePaperFill /> },
            ];
            setNavLinks(links);
        } else if (userDetails.userType === "landlord") {
            links = [
                { title: "Dashboard", url: "/dashboard", icon: <AiFillHome />, selectedIcon: <AiFillHome /> },
                { title: "Orders", url: "orders", icon: <BsCart />, selectedIcon: <BsCartFill /> },
                { title: "Properties", url: "properties", icon: <BsBuildings />, selectedIcon: <BsBuildingsFill /> },
                { title: "Transactions", url: "transactions", icon: <RiFilePaperLine />, selectedIcon: <RiFilePaperFill />},
            ];
            setNavLinks(links);
        }
    }, [userDetails.userType])

    return (
        <div className='drop-shadow-sm flex flex-col w-48 justify-between py-5 px-2'>
            <div className="flex justify-center" >
                <Link to="/shop">
                    <img src="./Assets/logo.png" alt="Ruubby Logo" />
                </Link>
            </div>
            <div>
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
            </div>
            <div>
                Actions
            </div>
        </div>
    )
}

export default Sidebar