import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { selectFilterState } from "../redux/slices/filterSlice";
import { User } from "../types/user";

// type UserCardProps = Omit<User, "department" | "birthday" | "phone">;

const UserCard: React.FC<User> = ({
	id,
	avatarUrl,
	firstName,
	lastName,
	userTag,
	position,
	birthday,
	department,
	phone,
}) => {
	const { sortType } = useSelector(selectFilterState);

	const profileData = {
		id,
		avatarUrl,
		firstName,
		lastName,
		userTag,
		position,
		birthday,
		department,
		phone,
	};

	const birthdayDate = new Date(birthday)
		.toLocaleString("ru-RU", {
			day: "numeric",
			month: "short",
		})
		.replace(".", "");

	return (
		<li className="user">
			<img className="user__avatar" src={avatarUrl} alt={avatarUrl} />
			<div className="user__info">
				<Link className="user__link" key={id} to={`/user/${id}`} state={profileData}>
					<h2 className="user__name">{`${firstName} ${lastName}`}</h2>
				</Link>
				<span className="user__tag">{userTag}</span>
				<p className="user__position">{position}</p>
			</div>
			{sortType === "byBirthday" && <p className="user__birthday">{birthdayDate}</p>}
		</li>
	);
};

export default UserCard;
