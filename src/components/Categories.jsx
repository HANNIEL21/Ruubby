import React from 'react';
import { PiShirtFoldedFill } from "react-icons/pi";
import { IoShirt, IoLaptopSharp } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineDevicesOther, MdFitnessCenter, MdChevronLeft, MdChevronRight, } from "react-icons/md";
import { GiAmpleDress, } from "react-icons/gi";

const Categories = () => {
    const categories = [
        { title: "Male Fashion", icon: <PiShirtFoldedFill /> },
        { title: "Female Fashion", icon: <GiAmpleDress /> },
        { title: "Kids Fashion", icon: <IoShirt /> },
        { title: "Smart Devices", icon: <MdOutlineDevicesOther /> },
        { title: "Kitchen Appliances", icon: <FaKitchenSet /> },
        { title: "Laptop", icon: <IoLaptopSharp /> },
        { title: "Fitness", icon: <MdFitnessCenter /> },
    ]
    return (
        <div>
            <div>
                <button><MdChevronLeft/></button>
                <div className='flex items-center'>
                    {
                        categories.map(({ title, icon }, index) => <div className='rounded-md bg-gradient-to-r from-blue-800 to-purple-900 text-white font-bold mx-3 p-3 flex items-center'> <i className='me-2'>{icon}</i> {title}</div>)
                    }
                </div>
                <button><MdChevronRight/></button>
            </div>
        </div>
    )
}

export default Categories