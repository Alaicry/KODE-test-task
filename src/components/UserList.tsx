import React from "react";
import { useSelector } from "react-redux";
import { selectFilterState } from "../redux/slices/filterSlice";
import { getUsersData, selectStatus, selectUsers } from "../redux/slices/usersSlice";
import { RootState, useAppDispatch } from "../redux/store";
import useUsers from "../utils/hooks/useUsers";
import Container from "./Container";
import Failure from "./Failure";
import UserCard from "./UserCard";

const UserList: React.FC = () => {
	const [status, users] = useUsers();

	return (
		<section className="users">
			<Container>
				<ul className="users__list">
					{users && users.map((user) => <UserCard key={user.id} {...user} />)}
					{status === "rejected" && <Failure />}
				</ul>
			</Container>
		</section>
	);
};

export default UserList;
