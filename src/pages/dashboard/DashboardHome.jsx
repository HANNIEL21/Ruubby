import React from 'react'
import { IoWallet } from "react-icons/io5"
import { RiFilePaperFill } from "react-icons/ri"
import { HiMiniUserGroup } from "react-icons/hi2"

const DashboardHome = () => {

  const data = [
    {
      title: "Total Sales",
      value: 0,
      desc: "Total number of sales",
      icon: <IoWallet />,
    },
    {
      title: "Total Customers",
      value: 0,
      desc: "Total number of Customers",
      icon: <HiMiniUserGroup />,
    },
    {
      title: "Transactions",
      value: 0,
      desc: "Total number of Transaction",
      icon: <RiFilePaperFill />,
    },
    {
      title: "Points and Referral",
      value: "0.00",
      desc: "Total number of sales",
      icon: <IoWallet />,
    }

  ];


  

  return (
    <div className='px-5'>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-8'>
        {data.map(({ title, value, desc, icon }, i) => {
          return (
            <div key={i} className='bg-white shadow rounded-md p-8 md:p-6 text-gray-400'>
              <div className='flex justify-between items-center'>
                <h2 className='text-sm font-semibold'>{title}</h2>
                <i className='text-xl'>{icon}</i>
              </div>
              <h2 className='font-bold text-3xl text-blue-800 my-2'>
                {!title.toLocaleLowerCase().includes("customers") && !title.toLocaleLowerCase().includes("sales") && (
                  <del className='decoration-double'>N</del>
                )}{" "}
                {value}
              </h2>
              <p className='text-xs'>{desc}</p>
            </div>
          );
        })}
      </section>
      <section>
        
      </section>
    </div>
  )
}

export default DashboardHome