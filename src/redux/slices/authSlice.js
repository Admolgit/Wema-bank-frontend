import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserCredentials: (state, action) => {
      console.log(action.payload, "action.payload");
      state.user = action.payload;
      Cookies.set("user", JSON.stringify(action.payload), { expires: 1 }, { sameSite: "strict" });
    },
    setDashboardCredentials: (state, action) => {
      console.log(action.payload, "action.payload");
      state.user = action.payload;
      Cookies.set("user", JSON.stringify(action.payload), { expires: 1 }, { sameSite: "strict" });
    },
    clearUserCredentials: (state, action) => {
      state.user = null;
      Cookies.remove("user", { path: '' });
    },
  },
});

export const { setUserCredentials, clearUserCredentials, setDashboardCredentials } = authSlice.actions;

export default authSlice.reducer;