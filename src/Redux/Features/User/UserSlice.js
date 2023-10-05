import { createSlice } from "@reduxjs/toolkit";

const initState = {
    user: {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        confirm_password: "",
        user_type: "",
        referral: "",
    },
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
    token: null,
    userDetails: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState: initState,
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;

            return state;
        },
        setID: (state, { payload }) => {
            state.user.id = payload;
        },
        setEmail: (state, { payload }) => {
            state.user.email = payload;
        },
        setFirstName: (state, { payload }) => {
            state.user.first_name = payload;
        },
        setLastName: (state, { payload }) => {
            state.user.last_name = payload;
        },
        setPhoneNumber: (state, { payload }) => {
            state.user.phone_number = payload;
        },
        setPassword: (state, { payload }) => {
            state.user.password = payload;
        },
        setConfirmPassword: (state, { payload }) => {
            state.user.confirm_password = payload;
        },
        setReferral: (state, { payload }) => {
            state.user.referral = payload;
        },
        settype: (state, { payload }) => {
            state.user.user_type = payload;
        },
        isFetchingTrue: (state) => {
            state.isFetching = true;
        },
        isFetchingFalse: (state) => {
            state.isFetching = false;
        },
        setToken: (state, { payload }) => {
            state.token = payload;
        },
        setUserDetails: (state, { payload }) => {
            state.userDetails = payload;
        },
        Logout: (state) => {
            state.user = {};
            state.userDetails = null;
            state.token = null;
        },
    },
});

export const {
    clearState,
    setConfirmPassword,
    setEmail,
    setFirstName,
    setLastName,
    setPassword,
    setPhone,
    settype,
    setReferral,
    isFetchingFalse,
    isFetchingTrue,
    setToken,
    setUserDetails,
    Logout,
} = userSlice.actions;
export const userSelector = (state) => state.user;