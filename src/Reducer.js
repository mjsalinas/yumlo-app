import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    user: {},
    asesorias: [],
    asesoriasPendientes: [],
    asesoriasCompletas: [],
    selectedAsesoria: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      return state;
    },
    setAsesorias: (state, action) => {
      state.asesorias = action.payload;
      return state;
    },
    setSelectedAsesoria: (state, action) => {
      state.selectedAsesoria = action.payload;
      return state;
    },
    setAsesoriasPendientes: (state, action) => {
      state.asesoriasPendientes = action.payload;
      return state;
    },
    setAsesoriasCompletas: (state, action) => {
      state.asesoriasCompletas = action.payload;
      return state;
    },
  },
});

export const selectUser = (state) => state.user;
export const selectAsesorias = (state) => state.asesorias;
export const selectAsesoriasPendientes = (state) => state.asesoriasPendientes;
export const selectAsesoriasCompletas = (state) => state.asesoriasCompletas;
export const selectAsesoriaSeleccionada = (state) => state.selectedAsesoria;

export const {
  setUser,
  setAsesorias,
  setAsesoriasPendientes,
  setAsesoriasCompletas,
  setSelectedAsesoria,
} = UserSlice.actions;
export default UserSlice.reducer;
