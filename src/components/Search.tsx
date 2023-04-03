import React from "react";
import { BsSearch, BsListUl } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectFilterState, setSearchValue } from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/store";
import Modal from "./Modal";

const Search: React.FC = () => {
	const dispatch = useAppDispatch();
	const { searchValue } = useSelector(selectFilterState);
	const [modal, setModal] = React.useState(false);
	const onVisibleModal = () => setModal(!modal);
	const { sortType } = useSelector(selectFilterState);
	return (
		<React.Fragment>
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
				<BsListUl
					className={
						sortType === "byAlphabet" || sortType === "byBirthday"
							? "search__icon search__icon--list search__icon--fill"
							: "search__icon search__icon--list"
					}
					onClick={() => setModal(!modal)}
				/>
			</div>
			{modal && <Modal onVisibleModal={onVisibleModal} />}
		</React.Fragment>
	);
};

export default Search;
