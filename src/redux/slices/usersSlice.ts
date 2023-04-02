import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types/user";
import { RootState } from "./../store";

export const getUsersData = createAsyncThunk<User[], string>(
	"@@users/getUsersData",
	async (params: string) => {
		const data = await axios
			.get("https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users", {
				params: { __example: params },
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

export const selectStatus = (state: RootState) => state.users.status;

export const selectUsers = (state: RootState, { searchValue = "", sortType = "" }) => {
	if (sortType === "byBirthday")
		return state.users.list
			.filter(
				(user) =>
					user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
					user.lastName.toLowerCase().includes(searchValue.toLowerCase())
			)
			.sort((a, b) => new Date(b.birthday).valueOf() - new Date(a.birthday).valueOf());
	else if (sortType === "byAlphabet")
		return state.users.list
			.filter(
				(user) =>
					user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
					user.lastName.toLowerCase().includes(searchValue.toLowerCase())
			)
			.sort((a, b) => a.firstName.localeCompare(b.firstName));
};
