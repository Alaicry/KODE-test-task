import React from "react";
import ufoIcon from "../assets/ufo.svg";

const Failure: React.FC = () => {
	const reloadPage = () => window.location.reload();
	return (
		<div className="error error--h-60">
			<div className="error__wrapper">
				<img src={ufoIcon} alt="ufo icon" className="error__icon" />
				<h4 className="error__message">Какой-то сверхразум все сломал</h4>
				<p className="error__description">Постараемся быстро починить</p>
				<button className="error__button button-reset" onClick={reloadPage}>
					Попробовать снова
				</button>
			</div>
		</div>
	);
};

export default Failure;
