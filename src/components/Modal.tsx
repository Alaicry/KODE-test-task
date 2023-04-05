import React from "react";
import { VscClose } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { selectFilterState, setSortType } from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/store";

type ModalProps = {
	onVisibleModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ onVisibleModal }) => {
	const dispatch = useAppDispatch();
	const data = useSelector(selectFilterState);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		dispatch(setSortType(event.target.value));

	return (
		<div className="modal modal--fixed modal--full">
			<div className="modal__wrapper modal__wrapper--relative">
				<h3 className="modal__title">Сортировка</h3>
				<button
					className="modal__button modal__button--absolute button-reset"
					onClick={onVisibleModal}
				>
					<VscClose />
				</button>
				<div className="field">
					<input
						type="radio"
						name="sortType"
						value="byAlphabet"
						className="field__input"
						onChange={handleChange}
						checked={data.sortType === "byAlphabet"}
					/>
					<label className="field__label">По алфавиту</label>
				</div>
				<div className="field">
					<input
						type="radio"
						name="sortType"
						value="byBirthday"
						className="field__input"
						onChange={handleChange}
						checked={data.sortType === "byBirthday"}
					/>
					<label className="field__label">По дню рождения</label>
				</div>
			</div>
		</div>
	);
};

export default Modal;
