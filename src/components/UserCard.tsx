import React from "react";
import { Link, Navigate } from "react-router-dom";
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

	return (
		<li className="list__item user">
			<Link key={id} to={`/user/${id}`} state={profileData} className="user__link">
				<img src={avatarUrl} alt={avatarUrl} className="user__avatar" />
				<div className="user__content">
					<h3 className="user__name">{`${firstName} ${lastName}`}</h3>
					<span className="user__tag">{userTag}</span>
					<p className="user__position">{position}</p>
				</div>
			</Link>
		</li>
	);
};

export default UserCard;
