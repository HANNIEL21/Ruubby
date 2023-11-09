import React from 'react'
import { DashboardTable } from '../../Export';

const Orders = () => {
  
  const data = [
    {id:"", name: "John Carter", item:"Nike Air Force", price:"20,000", status: "Pending", data: Date.now()}
  ];

  const labels = [
    "Id",
    "Customer",
    "Ordered Item",
    "Price",
    "Status",
    "Date",
    "Action"
  ];

  const filter = [

  ];


  return (
    <div className='px-5 py-6'>
      <DashboardTable title="Orders" labels={labels} filter={filter} data={data} />
    </div>
  )
}

export default Orders