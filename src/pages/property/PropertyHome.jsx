import React from 'react'

const PropertyHome = () => {
  return (
    <div className='bg-gray-100'>
      <div className='max-w-7xl mx-auto p-4 py-10'>
        <h2 className='font-bold text-2xl'>Explore Listings</h2>
        <p className='text-base'>
          Search for properties and spaces you may like
        </p>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
          {isLoading ? (
            <h2>Fetching Available Properties...</h2>
          ) : allProperties.length < 1 ? (
            <h2>
              There are no available properties at the moment, please check back
              later{" "}
            </h2>
          ) : (
            allProperties?.map((item, index) => {
              return <Property {...item} key={index} />;
            })
          )}
        </div> */}
      </div>
    </div>
  )
}

export default PropertyHome