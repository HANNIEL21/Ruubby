import { Fragment, useRef, useState } from 'react';
import axios from "axios";
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch, useSelector } from "react-redux";

import {
    setName,
    setPrice,
    setOwner,
    setCategory,
    setImage,
    setQuantity,
    setBrand,
    setDesc,
} from '../Redux/Features/Product/ProductSlice';

const FloatingButton = ({ title }) => {
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);

    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.item);
    const { user } = useSelector((state) => state.user);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(); // Create a FormData object to send the images

        // Append each selected image to the FormData object
        for (let i = 0; i < product.images.length; i++) {
            formData.append("images", product.images[i]);
        }

        // Append other product data to the FormData
        formData.append("title", product.name);
        formData.append("desc", product.desc);
        formData.append("category", product.category);
        formData.append("brand", product.brand);
        formData.append("size", product.size);
        formData.append("owner", user._id);
        formData.append("price", product.price);
        formData.append("quantity", product.quantity);
        formData.append("images", product.images);

        try {
            const response = await axios.post("http://localhost:5000/api/v1/product", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Set the correct content type for form data
                },
            });

            console.log("Product created:", response.data);
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };



    return (
        <>
            <button
                type="button"
                className="absolute bottom-5 right-5 rounded-md bg-gradient-to-r from-blue-800 to-purple-900 text-white text-sm font-semibold p-4 sm:ml-3 sm:w-auto"
                onClick={() => setOpen(true)}
            >
                {title}
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="">
                                            <div className="flex items-center">
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <i className="h-6 w-6 text-red-600" aria-hidden="true" />
                                                </div>
                                                <Dialog.Title as="h2" className="text-base font-bold leading-2 text-gray-900 ms-4">
                                                    Create {title}
                                                </Dialog.Title>
                                            </div>

                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">

                                                <form className="mt-2 grid grid-cols-1 gap-2">
                                                    <div className='grid grid-cols-2 gap-2'>
                                                        <label className='flex flex-col'>
                                                            <span>Name</span>
                                                            <input
                                                                type="text"
                                                                onChange={(e) => dispatch(setName(e.target.value))}
                                                                className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]'
                                                                placeholder='Enter Item Name'
                                                            />
                                                        </label>
                                                        <label className='flex flex-col'>
                                                            <span>Price</span>
                                                            <input
                                                                type="text"
                                                                onChange={(e) => dispatch(setPrice(e.target.value))}
                                                                className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]' placeholder='Enter Item Price'
                                                            />
                                                        </label>
                                                        <label>
                                                            <span>Category</span>
                                                            <select
                                                                id='business-type'
                                                                name='user_id'
                                                                className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]'
                                                                onChange={(e) => dispatch(setCategory(e.target.value))}
                                                            >
                                                                <option>Select Item Category</option>
                                                                <option value='fashion'>Fashion</option>
                                                                <option value='book'>Book</option>
                                                                <option value='merchant'>Merchant</option>
                                                                <option value='landlord'>Landlord</option>

                                                            </select>
                                                        </label>
                                                        <label className='flex flex-col'>
                                                            <span>Quantity</span>
                                                            <input
                                                                type="number"
                                                                defaultValue="0"
                                                                onChange={(e) => dispatch(setQuantity(e.target.value))}
                                                                className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]'
                                                            />
                                                        </label>
                                                        <label className='flex flex-col'>
                                                            <span>Brand (Optional)</span>
                                                            <input
                                                                type="text"
                                                                onChange={(e) => dispatch(setBrand(e.target.value))}
                                                                className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]' placeholder='Enter Item Brand'
                                                            />
                                                        </label>
                                                        <label className='flex flex-col'>
                                                            <span>Size (Optional)</span>
                                                            <input
                                                                type="text"
                                                                onChange={(e) => dispatch(setBrand(e.target.value))}
                                                                className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]' placeholder='Enter Item Size'
                                                            />
                                                        </label>
                                                    </div>
                                                    <label className='flex flex-col'>
                                                        <span>Description</span>
                                                        <textarea
                                                            cols="10"
                                                            rows="4"
                                                            onChange={(e) => dispatch(setDesc(e.target.value))}
                                                            className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]' placeholder='Enter Item Description
                                                            '></textarea>
                                                    </label>
                                                    <label className='flex flex-col'>
                                                        <span>Images</span>
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            multiple // Allow selecting multiple files
                                                            onChange={(e) => dispatch(setImage(e.target.files))} // Use e.target.files to get the selected files
                                                            className="appearance-none border-dashed border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]"
                                                        />
                                                    </label>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                            onClick={handleSubmit}
                                        >
                                            Create
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>

    )
}

export default FloatingButton;