import React from "react";
import { useSelector } from "react-redux";
import { selectFilterState } from "../redux/slices/filterSlice";
import { getUsersData, selectUsers, selectUserState } from "../redux/slices/usersSlice";
import { RootState, useAppDispatch } from "../redux/store";
import UserCard from "./UserCard";

const UserList: React.FC = () => {
	const dispatch = useAppDispatch();
	const { departamentName } = useSelector(selectFilterState);
	// const { list: users, status } = useSelector(selectUserState);
	const { searchValue } = useSelector(selectFilterState);
	const users = useSelector((state: RootState) => selectUsers(state, { searchValue }));

	React.useEffect(() => {
		dispatch(getUsersData(departamentName));
	}, [departamentName, dispatch]);

	return (
		<div className="users">
			<ul className="list users__list">
				{users && users.map((user) => <UserCard key={user.id} {...user} />)}
				{/* {status === "rejected" && <h1>Ошибка</h1>} */}
			</ul>
		</div>
	);
};

export default UserList;
