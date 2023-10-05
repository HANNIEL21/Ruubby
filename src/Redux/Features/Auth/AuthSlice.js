import { createSlice } from "@reduxjs/toolkit"

const initState = {
    user: {
        id: "",
        email: "",
        password: "",
    },
    isLoading: false,
    isSuccess: false,
    IsError: false,
    errorMessage: "",
};

export const authSlice = createSlice(
    {
        name: "user",
        initialState: initState,
        reducers: {
            clearState: (state) => {
                state.IsError = false;
                state.isLoading = false;
                state.isSuccess = false;

                return state;
            },

            setId: (state, { payload }) => {
                state.user.id = payload;
            },

            setEmail: (state, { payload }) => {
                state.user.email = payload;
            },

            setPassword: (state, { payload }) => {
                state.user.password = payload;
            },

            isLoadingTrue: (state) => {
                state.isLoading = true;
            },

            isLoadingFalse: (state) => {
                state.isLoading = false;
            },

            Logout: (state) => {
                state.user = {};
            },
        },
    }
);

export const {
    clearState,
    setId,
    setEmail,
    setPassword,
    isLoadingFalse,
    isLoadingTrue,
    Logout
} = authSlice.actions;

export const userSelector = (state) => state.user;