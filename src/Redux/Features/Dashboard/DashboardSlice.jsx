// adminSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    orders: [],
    products: [],
    properties: [],
    merchants: [],
    landlords: [],
    isLoading: false,
    error: null,
};

export const dashboardSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setUsers: (state, { payload }) => {
            state.users = payload;
        },
        setMerchants: (state, { payload }) => {
            state.merchants = payload;
        },
        setLandlords: (state, { payload }) => {
            state.landlords = payload;
        },
        setOrders: (state, { payload }) => {
            state.orders = payload;
        },
        setProducts: (state, { payload }) => {
            state.products = payload;
        },
        setProperties: (state, { payload }) => {
            state.properties = payload;
        },
        isLoadingTrue: (state) => {
            state.isLoading = true;
        },
        isLoadingFalse: (state) => {
            state.isLoading = false;
        },
    },
});

export const {
    setUsers,
    setLandlords,
    setMerchants,
    setOrders,
    setProducts,
    setProperties,
    isLoadingFalse,
    isLoadingTrue
} = dashboardSlice.actions;


export default dashboardSlice.reducer;
