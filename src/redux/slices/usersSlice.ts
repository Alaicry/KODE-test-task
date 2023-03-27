import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./../store";
import { User } from "../../types/user";
import axios from "axios";

export const getUsersData = createAsyncThunk<User[], string>(
	"@@users/getUsersData",
	async (params: string) => {
		const data = await axios
			.get("https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users", {
				params: { __example: params, __dynamic: "true" },
			})
			.then<User[]>((res) => res.data.items);
		return data;
	}
);

interface IUsersState {
	list: User[];
	status: string;
}

const initialState: IUsersState = {
	list: [],
	status: "loading",
};

const usersSlice = createSlice({
	name: "@@users",
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(getUsersData.pending, (state) => {
				state.status = "loading";
				state.list = [];
			})
			.addCase(getUsersData.rejected, (state) => {
				state.status = "rejected";
				state.list = [];
			})
			.addCase(getUsersData.fulfilled, (state, action) => {
				state.status = "received";
				state.list = action.payload;
			}),
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;

export const selectUserList = (state: RootState) => state.users.list;
