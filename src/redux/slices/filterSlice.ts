import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterState {
	departamentName: string;
	searchValue: string;
}

const initialState: IFilterState = {
	departamentName: "all",
	searchValue: "",
};

const filterSlice = createSlice({
	name: "@@filter",
	initialState,
	reducers: {
		setDepartamentName: (state, action: PayloadAction<string>) => {
			state.departamentName = action.payload;
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		},
	},
});

export const { setDepartamentName, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilterState = (state: RootState) => state.filter;
