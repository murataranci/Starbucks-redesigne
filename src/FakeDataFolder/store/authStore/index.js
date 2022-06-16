import { createSlice } from "@reduxjs/toolkit";
import { AuthEnums } from "../../utils/enums/auth";
import { authCreateToken } from "../../utils/services/auth";

const _authLogout = (state, action) => {
 state.token = undefined;
};

const authSlice = createSlice({
 name: "auth",
 initialState: {
  token: undefined
 },
 reducers: {
  authLogout: _authLogout
 },
 extraReducers: {
  [authCreateToken.fulfilled]: (state, action) => {
   state.token = action.payload;
   state.role = AuthEnums.ADMIN;
  },
  [authCreateToken.rejected]: (state, action) => {
   state.token = undefined;
  }
 }
});

export const { authLogout } = authSlice.actions;

export default authSlice.reducer;