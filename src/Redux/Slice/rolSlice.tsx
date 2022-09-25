import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

const rolSlice = createSlice({
	name: "rol",
	initialState: { rol: "usuarioAutorizado" },
	reducers: {
		nuevo: (state, action) => {
			state.rol = action.payload;
		},
	},
});

export const { nuevo: nuevoRol } = rolSlice.actions;

export const useRolSelector = () => {
	return useAppSelector((state) => state.rol);
};

export default rolSlice.reducer;
