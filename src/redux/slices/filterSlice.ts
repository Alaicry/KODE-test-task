import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterState {
	departamentName: string;
	searchValue: string;
	sortType: string;
}

const initialState: IFilterState = {
	departamentName: "all",
	searchValue: "",
	sortType: "byAlphabet",
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
		setSortType: (state, action: PayloadAction<string>) => {
			state.sortType = action.payload;
		},
	},
});

export const { setDepartamentName, setSearchValue, setSortType } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilterState = (state: RootState) => state.filter;
