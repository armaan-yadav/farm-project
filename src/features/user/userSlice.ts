import { authServices } from "@/services/authServices";
import { createSlice } from "@reduxjs/toolkit";

export interface UserSlice {}

const initialState: UserSlice = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getCurrentUser: async () => {
      const user = await authServices.getCurrentUser();
      console.log(user);
    },

    logOut: async () => {
      try {
        await authServices.logout();
      } catch (error) {}
    },
  },
});

export const { getCurrentUser } = userSlice.actions;
export default userSlice.reducer;
