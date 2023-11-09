import React from 'react';
import { DashboardTable } from '../../Export';


const Properties = () => {

  const propertyData = [
    {
      image: "",
      name: "Ruubby",
      location: "Admin",
      owner: "Landlord 1",
      phoneNumber: "0123456789",
      userType: "Self Contain"
    },
    {
      image: "",
      name: "Ruubby",
      location: "Admin",
      owner: "Landlord 2",
      phoneNumber: "0123456789",
      userType: "2 BedRoom Flat"
    },
    {
      image: "",
      name: "Ruubby",
      location: "Admin",
      owner: "Landlord 3",
      phoneNumber: "0123456789",
      userType: "Mansion"
    }
  ]

  const labels = [
    "Id",
    "Name",
    "Location",
    "Owner",
    "Phone Number",
    "Type",
    "Actions"
  ]

  const filter = [
    "Self Contain",
    "2 Bedroom Flat",
    "Mansion"
  ]

  return (
    <div>
      <div className='px-5 py-6'>
        <DashboardTable title="Properties" labels={labels} filter={filter} data={propertyData} />
      </div>
    </div>
  )
}

export default Properties