import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Features/Auth/AuthSlice";
import { userSlice } from "./Features/User/UserSlice";
import { dashboardSlice } from "./Features/Dashboard/DashboardSlice";



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        dashboard: dashboardSlice.reducer,
    }
});