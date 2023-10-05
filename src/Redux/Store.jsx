import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Features/Auth/AuthSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"


const rootReducer = combineReducers({
    auth: authSlice.reducer,
})

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(persistedReducer)
export const persistor = persistStore(store)