import React from "react";
import { useSelector } from "react-redux";
import { selectFilterState, setDepartamentName } from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/store";
import { departaments } from "../utils/constants/departaments.constants";

const Departaments: React.FC = () => {
	const dispatch = useAppDispatch();
	const { departamentName } = useSelector(selectFilterState);
	return (
		<nav className="nav">
			<ul className="menu">
				{departaments.map((elem) => (
					<li
						className={
							elem.value === departamentName ? "menu__item menu__item--active" : "menu__item"
						}
						onClick={() => dispatch(setDepartamentName(elem.value))}
						key={elem.value}
					>
						{elem.label}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Departaments;
