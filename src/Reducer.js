import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    user: {},
    asesorias: [],
    asesoriasPendientes: [],
    selectedAsesoria: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAsesorias: (state, action) => {
      state.asesorias = action.payload;
    },
    setSelectedAsesoria: (state, action) => {
      state.selectedAsesoria = action.payload;
    },
    setAsesoriasPendientes: (state, action) =>{
      state.asesoriasPendientes = action.payload;
    }
  },
});

export const selectUser = (state) => state.user;
export const selectAsesorias = (state) => state.asesorias;
export const selectAsesoriasPendientes = (state) => state.asesoriasPendientes;
export const selectAsesoriaSeleccionada = (state) => state.selectedAsesoria;

export const { setUser, setAsesorias, setAsesoriasPendientes, setSelectedAsesoria } = UserSlice.actions;
export default UserSlice.reducer;
