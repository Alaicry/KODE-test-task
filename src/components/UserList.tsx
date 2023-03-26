import React from "react";
import { useSelector } from "react-redux";
import { selectFilterState } from "../redux/slices/filterSlice";
import { getUsersData, selectUserList } from "../redux/slices/usersSlice";
import { useAppDispatch } from "../redux/store";

const UserList: React.FC = () => {
	const dispatch = useAppDispatch();
	const { departamentName } = useSelector(selectFilterState);
	const { items } = useSelector(selectUserList);
	console.log(items);

	React.useEffect(() => {
		dispatch(getUsersData(departamentName));
	}, []);

	return (
		<div className="users">
			<ul className="list">{}</ul>
		</div>
	);
};

export default UserList;
