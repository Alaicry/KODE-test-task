import React from "react";
import { useSelector } from "react-redux";
import { selectFilterState, setDepartamentName } from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/store";
import { departaments } from "../utils/constants/departaments.constants";
import Container from "./Container";

const Departaments: React.FC = () => {
	const dispatch = useAppDispatch();
	const { departamentName } = useSelector(selectFilterState);
	return (
		<section className="sort">
			<Container>
				<ul className="menu">
					{departaments.map((elem) => (
						<li
							className={
								elem.value === departamentName
									? "menu__item text-medium menu__item--active"
									: "menu__item text-medium"
							}
							onClick={() => dispatch(setDepartamentName(elem.value))}
							key={elem.value}
						>
							{elem.label}
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
};

export default Departaments;
