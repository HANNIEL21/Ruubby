import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Features/Auth/AuthSlice";
import { userSlice } from "./Features/User/UserSlice";



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
    }
});