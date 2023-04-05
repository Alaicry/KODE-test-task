import React from "react";
import Container from "./Container";
import { FiStar, FiPhone } from "react-icons/fi";

type DetailsBottomProps = {
	phone: string;
	birthday: string;
};

const DetailsBottom: React.FC<DetailsBottomProps> = ({ birthday, phone }) => {
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
		<div className="details__bottom">
			<Container>
				<div className="details__content">
					<FiStar className="details__icon" />
					<p className="details__info">{birthdayDate}</p>
					<p className="details__year">{declineYears(userYearsOld)}</p>
				</div>
				<div className="details__content">
					<FiPhone className="details__icon" />
					<p className="details__info">{addMaskPhone(phone)}</p>
				</div>
			</Container>
		</div>
	);
};

export default DetailsBottom;
