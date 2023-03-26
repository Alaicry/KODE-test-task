import React from "react";
import { BsSearch, BsListUl, BsXLg } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectFilterState, setSearchValue } from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/store";


const Search: React.FC = () => {
	const dispatch = useAppDispatch();
	const { searchValue } = useSelector(selectFilterState);

	return (
		<div className="search">
			<input
				type="search"
				name="search"
				className="search__input"
				placeholder="Введи имя, тег, почту..."
				autoComplete="off"
				onChange={(event) => dispatch(setSearchValue(event.target.value))}
				value={searchValue}
			/>
			<BsSearch className="search__icon search__icon--search" />
			<BsListUl className="search__icon search__icon--list" />
		</div>
	);
};

export default Search;
