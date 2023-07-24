import { Servicio } from "@/Models";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
type InitialState = {
	serviciosArray: Servicio[];
};

const initialState: InitialState = { serviciosArray: [] };

const servicioSlice = createSlice({
	name: "servicios",
	initialState,
	reducers: {
		postServicios: (state, action) => {
			state.serviciosArray = [
				...state.serviciosArray,
				{ ...action.payload, id: uuidv4() },
			];
		},
		deleteServicio: (state, action) => {
			state.serviciosArray = state.serviciosArray.filter(
				(serv) => serv.id !== action.payload.id
			);
		},
		editServicio: (state, action) => {
			let foundServicio = state.serviciosArray.find(
				(serv) => serv.id === action.payload.id
			);
			if (foundServicio) foundServicio = action.payload;
		},
	},
});

export const { postServicios, deleteServicio, editServicio } =
	servicioSlice.actions;

// export const useRolSelector = () => {
// 	return useAppSelector((state) => state.rol);
// };

export default servicioSlice.reducer;
