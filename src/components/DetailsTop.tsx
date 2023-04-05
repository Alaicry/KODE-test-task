import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type DetailsTopProps = {
	avatarUrl: string;
	firstName: string;
	lastName: string;
	userTag: string;
	position: string;
};

const DetailsTop: React.FC<DetailsTopProps> = ({
	avatarUrl,
	firstName,
	lastName,
	userTag,
	position,
}) => {
	const navigate = useNavigate();
	return (
		<div className="details__top">
			<button className="details__button button-reset" onClick={() => navigate(-1)}>
				<IoIosArrowBack />
			</button>
			<img src={avatarUrl} alt={avatarUrl} className="details__avatar" />
			<h4 className="details__name">
				{`${firstName} ${lastName}`}
				<span className="details__tag">{userTag}</span>
			</h4>
			<p className="details__position">{position}</p>
		</div>
	);
};

export default DetailsTop;
