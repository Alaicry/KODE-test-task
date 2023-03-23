import React from "react";
import { options } from "../utils/constants/filter.constants";
import "./Categories.scss";

const Categories: React.FC = () => {
	return (
		<nav className="nav">
			<ul className="menu">
				{options.map((elem) => (
					<li className="menu__item" key={elem.label}>
						{elem.label}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Categories;
