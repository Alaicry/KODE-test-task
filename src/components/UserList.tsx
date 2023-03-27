import React from "react";
import { useSelector } from "react-redux";
import { selectFilterState } from "../redux/slices/filterSlice";
import { getUsersData, selectUserList } from "../redux/slices/usersSlice";
import { useAppDispatch } from "../redux/store";
import User from "./User";

const UserList: React.FC = () => {
	const dispatch = useAppDispatch();
	const { departamentName } = useSelector(selectFilterState);
	const users = useSelector(selectUserList);

	React.useEffect(() => {
		dispatch(getUsersData(departamentName));
	}, [departamentName, dispatch]);

	return (
		<div className="users">
			<ul className="list">{users && users.map((user) => <User key={user.id} {...user} />)}</ul>
		</div>
	);
};

export default UserList;
