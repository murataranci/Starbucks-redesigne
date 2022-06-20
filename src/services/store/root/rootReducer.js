import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import productStore from "../product/index";
import authStore from "../auth/index"

const createReducer = combineReducers({
    auth: authStore,
    product: productStore,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'product']
};

const rootReducer = persistReducer(persistConfig, createReducer);

export default rootReducer;