import React from "react";
import Container from "./Container";

const Header: React.FC = () => {
	return (
		<header className="header">
			<Container>
				<h1 className="header__title">Поиск</h1>
			</Container>
		</header>
	);
};

export default Header;
