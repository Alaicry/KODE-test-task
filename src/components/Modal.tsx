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
		<div className="modal">
			<div className="modal__wrapper">
				<div className="modal__top">
					<h3 className="modal__title">Сортировка</h3>
					<button className="modal__button button-reset" onClick={onVisibleModal}>
						<VscClose />
					</button>
				</div>
				<div className="modal__bottom">
					<div className="modal__field">
						<input
							type="radio"
							name="sortType"
							className="modal__input"
							value="byAlphabet"
							onChange={handleChange}
							checked={data.sortType === "byAlphabet"}
						/>
						<label className="modal__label">По алфавиту</label>
					</div>
					<div className="modal__field">
						<input
							type="radio"
							name="sortType"
							className="modal__input"
							value="byBirthday"
							onChange={handleChange}
							checked={data.sortType === "byBirthday"}
						/>
						<label className="modal__label">По дню рождения</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
