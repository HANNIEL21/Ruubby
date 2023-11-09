import React, { useEffect } from 'react';
import Axios from 'axios';
import { DashboardTable } from '../../Export';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingTrue, isLoadingFalse, setLandlords, clearState } from '../../Redux/Features/Dashboard/DashboardSlice';
import { Spinner } from '../../Export'; // Import your Spinner component

const Landlords = () => {
  const dispatch = useDispatch();
  const { landlords, isLoading } = useSelector((state) => state.dashboard);
  const { userDetails } = useSelector((state) => state.user);

  useEffect(() => {
    const getUsers = async () => {

      try {
        dispatch(isLoadingTrue());
        dispatch(clearState());


        if (userDetails.userType === "admin") {
          await Axios.get("http://localhost:5000/api/v1/landlord").then((res) => {
            dispatch(setLandlords(res.data.data));
            dispatch(isLoadingFalse());
          })
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(isLoadingFalse());
      }
    };

    getUsers();
  }, [dispatch, userDetails.userType]);
  const labels = [
    "Id",
    "Avatar",
    "Name",
    "Email",
    "Phone Number",
    "Type",
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
      {isLoading ? (
        <div className='w-full h-auto bg-blue-600 flex items-center justify-center'>
          <Spinner loaderText="Loading Landlords" />
        </div>
      ) : (
        <DashboardTable title="Landlords" labels={labels} filter={filter} data={landlords} />
      )}
    </div>
  )
}

export default Landlords