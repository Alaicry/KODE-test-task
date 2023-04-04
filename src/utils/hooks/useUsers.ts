import React from "react";
import { getUsersData, selectStatus, selectUsers } from "./../../redux/slices/usersSlice";
import { selectFilterState } from "./../../redux/slices/filterSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./../../redux/store";
import { User } from "../../types/user";

const useUsers = (): [string, User[]] => {
	const dispatch = useAppDispatch();
	const { departamentName } = useSelector(selectFilterState);
	const { searchValue, sortType } = useSelector(selectFilterState);
	const status = useSelector(selectStatus);
	const users = useSelector((state: RootState) => selectUsers(state, { searchValue, sortType }));

	React.useEffect(() => {
		dispatch(getUsersData(departamentName));
	}, [departamentName, dispatch]);

	return [status, users];
};

export default useUsers;
