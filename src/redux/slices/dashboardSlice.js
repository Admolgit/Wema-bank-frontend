import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  dashboard: Cookies.get('dashboard') ? JSON.parse(Cookies.get('dashboard')) : null,
};

const authSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardCredentials: (state, action) => {
      state.dashboard = action.payload;
      Cookies.set("dashboard", JSON.stringify(action.payload), { expires: 1 }, { sameSite: "strict" });
    },
  },
});

export const { setDashboardCredentials } = authSlice.actions;

export default authSlice.reducer;