import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "../types/user";

type UserDetails = Omit<User, "id" | "department">;

const UserPage: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { avatarUrl, firstName, lastName, userTag, position, birthday, phone }: UserDetails =
		location.state;

	const birthdayDate = new Date(birthday)
		.toLocaleString("ru-RU", {
			year: "numeric",
			day: "numeric",
			month: "long",
		})
		.replace("г.", "");
	const currentYear = new Date().getFullYear();
	const birthdayYear = new Date(birthday).getFullYear();
	const userYearsOld = currentYear - birthdayYear;

	return (
		<section className="details">
			<div className="details__top">
				<button className="details__button button-reset" onClick={() => navigate(-1)}>
					<IoIosArrowBack />
				</button>
				<img src={avatarUrl} alt={avatarUrl} className="details__avatar" />
				<h4 className="details__name">{`${firstName} ${lastName}`}</h4>
				<span className="details__tag">{userTag}</span>
				<p className="details__position">{position}</p>
			</div>
			<div className="details__bottom">
				<span className="details__birtday">{birthdayDate}</span>
				<span className="details__birtday">{userYearsOld}</span>
				<p className="details__birtday">{phone}</p>
			</div>
		</section>
	);
};

export default UserPage;
