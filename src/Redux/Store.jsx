import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSlice } from "./Features/Auth/AuthSlice";
import { userSlice } from "./Features/User/UserSlice";
import { productSlice } from "./Features/Product/ProjectSlice";
import { dashboardSlice } from "./Features/Dashboard/DashboardSlice";

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer,
    product: productSlice.reducer,
    dashboard: dashboardSlice.reducer,
})

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);