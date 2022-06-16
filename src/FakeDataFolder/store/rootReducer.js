import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import authStore from "./authStore";
import { persistReducer } from "redux-persist";

const createReducer = combineReducers({
 auth: authStore
});

const persistConfig = {
 key: 'root',
 storage,
 whitelist: ['auth']
};

const rootReducer = persistReducer(persistConfig, createReducer);

export default rootReducer;