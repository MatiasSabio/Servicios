import { Servicio } from "@/Models";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
type InitialState = { archivadosArray: Servicio[] };

const initialState: InitialState = { archivadosArray: [] };

const archivarServiciosSlice = createSlice({
	name: "archivados",
	initialState,
	reducers: {
		postArchivados: (state, action) => {
			state.archivadosArray = [...state.archivadosArray, { ...action.payload }];
		},
		deleteArchivados: (state, action) => {
			state.archivadosArray = state.archivadosArray.filter(
				(serv) => serv.id !== action.payload.id
			);
		},
		editArchivados: (state, action) => {
			let foundServicio = state.archivadosArray.find(
				(serv) => serv.id === action.payload.id
			);
			if (foundServicio) foundServicio = action.payload;
		},
	},
});

export const { postArchivados, deleteArchivados, editArchivados } =
	archivarServiciosSlice.actions;

// export const useRolSelector = () => {
// 	return useAppSelector((state) => state.rol);
// };

export default archivarServiciosSlice.reducer;
