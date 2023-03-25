import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
	method: "GET",
	url: "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users",
	params: { __dynamic: "true" },
	headers: { "Content-Type": "application/json", Prefer: "code=200, example=pr" },
};
export const getUsersData = createAsyncThunk("@@get-users-data", async () => {
	const data = axios.request(options);
	return data;
});

const initialState = {
	status: "loading",
	list: [],
};

const usersSlice = createSlice({
	name: "@@users",
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(getUsersData.pending, (state) => {
				state.list = [];
				state.status = "loading";
			})
			.addCase(getUsersData.rejected, (state) => {
				state.list = [];
				state.status = "rejected";
			})
			.addCase(getUsersData.fulfilled, (state, action) => {
				state.list = action.payload;
				state.status = "received";
			}),
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
