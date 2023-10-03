import React, { useEffect, useState } from 'react';
import { DashboardTable } from '../../Export';

const Users = () => {
  const [users, setUsers] = useState([]);


  const userData = [
    {
      avatar: "",
      name: "Ruubby Admin",
      email: "RuubbyAdmin@gmail.com",
      phoneNumber: "0123456789",
      userType: "Admin"
    },
    {
      avatar: "",
      firstName: "Ruubby Merchant",
      email: "RuubbyMerchant@gmail.com",
      phoneNumber: "0123456789",
      userType: "Merchant"
    },
    {
      avatar: "",
      firstName: "Ruubby Landlord",
      email: "RuubbyLandlord@gmail.com",
      phoneNumber: "0123456789",
      userType: "Landlord"
    }
  ]

  const labels = [
    "Avatar",
    "Name",
    "Email",
    "Phone Number",
    "Type",
    "Actions"
  ]

  const filter = [
    "Consumers",
    "Admin",
    "Merchant",
    "Landlord"
  ]

  useEffect(() => {
    setUsers(userData);
  }, [])

  return (
    <div className='px-5 py-6'>
      <DashboardTable title="Users" labels={labels} filter={filter} data={userData} />
    </div>
  )
}

export default Users