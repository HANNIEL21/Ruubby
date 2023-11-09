import React, { useEffect } from 'react';
import Axios from 'axios';
import { DashboardTable } from '../../Export';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingTrue, isLoadingFalse, setMerchants, clearState } from '../../Redux/Features/Dashboard/DashboardSlice';
import { Spinner } from '../../Export'; // Import your Spinner component

const Merchants = () => {
  const dispatch = useDispatch();
  const { merchants, isLoading } = useSelector((state) => state.dashboard);
  const { userDetails } = useSelector((state) => state.user);

  useEffect(() => {
    const getUsers = async () => {

      try {
        dispatch(isLoadingTrue());
        dispatch(clearState());


        if (userDetails.userType === "admin") {
          await Axios.get("http://localhost:5000/api/v1/merchant").then((res) => {
            dispatch(setMerchants(res.data.data));
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
        <div>
          <Spinner loaderText="Loading Merchants" />
        </div>
      ) : (
        <DashboardTable title="Merchants" labels={labels} filter={filter} data={merchants} />
      )}
    </div>
  )
}

export default Merchants