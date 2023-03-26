import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filterSlice from "./slices/filterSlice";
import usersSlice from "./slices/usersSlice";

const store = configureStore({
	reducer: {
		filter: filterSlice,
		users: usersSlice,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
