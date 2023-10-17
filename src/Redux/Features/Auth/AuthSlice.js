import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        email: "",
        password: "",
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
};

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.errorMessage = "";

            return state;
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
        loginSuccess: (state) => {
            state.isSuccess = true;
            state.isError = false;
            state.isLoading = false;
        },
        loginError: (state, { payload }) => {
            state.isError = true;
            state.isLoading = false;
            state.errorMessage = payload;
        },
        logout: (state) => {
            state.user = {
                email: "",
                password: "",
            };
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.errorMessage = "";
        },
    },
});

export const {
    clearState,
    setEmail,
    setPassword,
    isLoadingFalse,
    isLoadingTrue,
    loginSuccess,
    loginError,
    logout,
} = authSlice.actions;

export default authSlice.reducer;
