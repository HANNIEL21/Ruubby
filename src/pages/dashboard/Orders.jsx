import React, { useEffect, useState } from 'react'
import { DashboardTable } from '../../Export';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const data = [
    {name: "John Carter", item:"Nike Air Force", price:"20,000", status: "Pending", data: Date.now()}
  ];

  const labels = [
    "Customer",
    "Ordered Item",
    "Price",
    "Status",
    "Date",
    "Action"
  ];

  const filter = [

  ];

  useEffect(() => {
    setOrders(data);
  }, [])

  return (
    <div className='px-5 py-6'>
      <DashboardTable title="Orders" labels={labels} filter={filter} data={orders} />
    </div>
  )
}

export default Orders