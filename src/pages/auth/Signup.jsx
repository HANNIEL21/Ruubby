import React from 'react';
import Axios from "axios";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../Export';
import {
  clearState,
  setFirstName,
  setLastName,
  setPhoneNumber,
  setEmail,
  setPassword,
  setConfirmPassword,
  settype,
  setReferral,
  isLoadingTrue,
  isLoadingFalse,
  setUserDetails,
  setToken,
} from '../../Redux/Features/User/UserSlice';




const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError } = useSelector((state) => state.user)

  const errorDiv = isError ? (
    <small className='text-red-600 text-center w-52 mt-4'>
      Sorry, the credentials do not match our records
    </small>
  ) : null;

  const handleSignup = async () => {
      dispatch(isLoadingTrue());

    try {
      const response = await Axios.post("http://localhost:5000/Ruubby_api/v1/auth/signup", {
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phoneNumber: user.phone_number,
        password: user.password,
        referral: user.referral,
        userType: user.user_type,
      });

      const userData = response.data.data;
  
      dispatch(isLoadingFalse());
      dispatch(setUserDetails(userData));
      dispatch(setToken(response.data.token));
  
      if (response.status === 200) {
        navigate("/shop");
      } else {
        // Handle the response status if needed
      }
    } catch (error) {
      dispatch(isLoadingFalse());
      console.log(error.response.data.message);
      // Handle the error here, e.g., dispatch an action to show an error message
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
    dispatch(clearState());
  }


  return (
    <div className='flex h-screen w-full md:p-4'>
      <div className="w-[60%] hidden md:inline-flex bg-blue-800 rounded-3xl"></div>
      <div className="flex-1 h-screen flex justify-center align-center">
        <div className="flex h-screen w-[65%]  flex-col justify-evenly">
          <Link to='/' className='text-[#0F3460] font-semibold '>
            <button>
              <FaChevronLeft />
            </button>
          </Link>
          <div className='flex justify-center'>
            <img alt='logo' className='w-20' src="/Assets/logo.png" />
          </div>
          <form method='POST' onSubmit={handleSubmit} >
            <div className="grid grid-cols-1 gap-4 ">
              <div className='grid grid-cols-2 gap-4'>
                <input
                  className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]'
                  id='first_name'
                  name='first_name'
                  type='text'
                  placeholder='Enter your first name'
                  onChange={(e) => dispatch(setFirstName(e.target.value))}
                  autoFocus

                />
                <input
                  className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]'
                  id='username'
                  name='last_name'
                  type='text'
                  placeholder='Enter your last name'
                  onChange={(e) => dispatch(setLastName(e.target.value))}

                />
              </div>
              <div className=''>
                <input
                  className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]'
                  id='email'
                  name='email'
                  type='email'
                  // {...register("email", {
                  //   required: "Email Address is required",
                  //   pattern: {
                  //     value:
                  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  //     message: "Email must be a valid",
                  //   },
                  // })}
                  placeholder='Enter Email'
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                />
                <p className='text-red-600 text-base pt-2'>{errorDiv}</p>
              </div>
              <div className=''>
                <input
                  className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]'
                  id='tel'
                  type='tel'
                  name='phone'
                  placeholder='Enter Phone Number'
                  onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
                />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <input
                  className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                />
                <input
                  className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]'
                  id='confirm_password'
                  type='password'
                  name='confirm_password'
                  placeholder='Confirm Password'
                  onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
                />
              </div>
              <div className=''>
                <input
                  className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]'
                  id='referral'
                  name='referral'
                  type='text'
                  placeholder='Enter your referral code(optional)'
                  onChange={(e) => dispatch(setReferral(e.target.value))}
                />

              </div>
              <div className=''>
                <select
                  id='business-type'
                  name='user_id'
                  className='appearance-none border-solid border-2 rounded-xl w-full p-2 md:p-3 text-[#042349] leading-tight focus:outline-[#0F3460] focus:shadow-outline placeholder-[#052B73]'
                  onChange={(e) => dispatch(settype(e.target.value))}
                >
                  <option>Sign up as</option>
                  <option value='consumer'>Consumer</option>
                  <option value='admin'>Admin</option>
                  <option value='merchant'>Merchant</option>
                  <option value='landlord'>Landlord</option>

                </select>
              </div>
              <div className=''>
                <button
                  className='bg-[#0F3460] hover:bg-blue-900 w-full text-white font-bold p-2 md:p-3 rounded-xl focus:outline-none focus:shadow-outline '
                  type='submit'
                  onClick={handleSubmit}
                >
                  {isLoading ? (
                    <Spinner loaderText='Signing Up' />
                  ) : (
                    <p>Create My Account</p>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup