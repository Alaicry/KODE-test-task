import React from "react";
import { BsSearch, BsListUl } from "react-icons/bs";
import "./Search.scss";

const Search: React.FC = () => {
	const inputRef = React.useRef(null);
	if (inputRef.current) {
	}
	return (
		<div className="search">
			<input
				type="search"
				name="search"
				className="search__input"
				placeholder="Введи имя, тег, почту..."
				autoComplete="off"
				ref={inputRef}
			/>
			<BsSearch className="search__icon search__icon--search" />
			<BsListUl className="search__icon search__icon--list" />
		</div>
	);
};

export default Search;
