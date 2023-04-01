import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FiStar, FiPhone } from "react-icons/fi";
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

	const addMaskPhone = (phone: string) => {
		const phoneArr = phone.split("");
		phoneArr.splice(2, 0, "(");
		phoneArr.splice(6, 0, ")");
		return phoneArr;
	};

	let declineYears = (num: number) => {
		let arr = ["год", "года", "лет"];
		return `${num} ${
			arr[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]]
		}`;
	};

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
				<div className="details__content">
					<p className="details__birthday">
						<FiStar className="details__icon" />
						{birthdayDate}
					</p>
					<p className="details__year">{declineYears(userYearsOld)}</p>
				</div>
				<div className="details__content">
					<p className="details__phone">
						<FiPhone className="details__icon" />
						{addMaskPhone(phone)}
					</p>
				</div>
			</div>
		</section>
	);
};

export default UserPage;
