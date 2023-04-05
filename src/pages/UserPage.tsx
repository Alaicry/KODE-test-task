import React from "react";
import { useLocation } from "react-router-dom";
import { User } from "../types/user";
import DetailsTop from "../components/DetailsTop";
import DetailsBottom from "../components/DetailsBottom";

type UserDetails = Omit<User, "id" | "department">;

const UserPage: React.FC = () => {
	const location = useLocation();
	const { avatarUrl, firstName, lastName, userTag, position, birthday, phone }: UserDetails =
		location.state;

	return (
		<section className="details">
			<DetailsTop {...{ avatarUrl, firstName, lastName, userTag, position }} />
			<DetailsBottom {...{ phone, birthday }} />
		</section>
	);
};

export default UserPage;
