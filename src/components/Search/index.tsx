import React from "react";
import { BsSearch, BsListUl } from "react-icons/bs";
import "./Search.scss";

const Search: React.FC = () => {
	return (
		<div className="search">
			<BsSearch className="search__icon search__icon--search" />
			<input
				type="search"
				name="search"
				className="search__input"
				placeholder="Введи имя, тег, почту..."
				autoComplete="off"
			/>
			<BsListUl className="search__icon search__icon--list" />
		</div>
	);
};

export default Search;
