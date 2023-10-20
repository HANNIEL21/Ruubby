import React from 'react';
import { DashboardTable, FloatingButton } from '../../Export';
import { useSelector } from 'react-redux';

const Products = () => {

  const { userDetails } = useSelector((state) => state.user);
  const data = [
    { id: "", name: "John Carter", item: "Nike Air Force", price: "20,000", data: Date.now() }
  ];

  const labels = [
    "Id",
    "Image",
    userDetails.userType === "admin" ? "Vendor" : "null",
    "Name",
    "Price",
    "Quantity",
    "Actions"
  ];


  const filter = [
    "Consumers",
    "Admin",
    "Merchant",
    "Landlord"
  ];

  return (
    <div className='px-5 py-6'>
      <FloatingButton title="New Product" />

      <DashboardTable title="Products" labels={labels} filter={filter} data={data} />
    </div>
  )
}

export default Products