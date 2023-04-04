import React from "react";
import { BsSearch, BsListUl } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectFilterState, setSearchValue } from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/store";
import Container from "./Container";
import Modal from "./Modal";

const Search: React.FC = () => {
	const dispatch = useAppDispatch();
	const { searchValue, sortType } = useSelector(selectFilterState);
	const [modal, setModal] = React.useState(false);
	const onVisibleModal = () => setModal(!modal);

	return (
		<section className="search">
			<Container classNameFromProps="search__wrapper">
				<input
					type="search"
					name="search"
					autoComplete="off"
					value={searchValue}
					className="search__input"
					placeholder="Введи имя, тег, почту..."
					onChange={(event) => dispatch(setSearchValue(event.target.value))}
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
			</Container>
			{modal && <Modal onVisibleModal={onVisibleModal} />}
		</section>
	);
};

export default Search;
