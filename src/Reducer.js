import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    user:{},
    asesorias: {}
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAsesorias: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const selectUser = (state) => state.user;
export const selectAsesorias = (state) => state.asesorias;

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
