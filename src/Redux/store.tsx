import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rolSlice } from "./Slice";

export const store = configureStore({
	reducer: { rol: rolSlice },
	middleware: (getDefaultMiddleware: any) => {
		return getDefaultMiddleware({ serializableCheck: false });
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
