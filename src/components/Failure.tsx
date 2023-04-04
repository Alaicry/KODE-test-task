import React from "react";
import ufoIcon from "../assets/ufo.svg";

const Failure: React.FC = () => {
	const reloadPage = () => window.location.reload();
	return (
		<div>
			<div>
				<img src={ufoIcon} alt="ufo icon" />
				<h4>Какой-то сверхразум все сломал</h4>
				<p>Постараемся быстро починить</p>
				<button onClick={reloadPage}>Попробовать снова</button>
			</div>
		</div>
	);
};

export default Failure;
