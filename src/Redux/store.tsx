import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rolSlice } from "./Slice/LoginSlice";
import { serviciosSlice } from "./Slice/ServiciosSlice";

export const store = configureStore({
	reducer: { rol: rolSlice, servicios: serviciosSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
