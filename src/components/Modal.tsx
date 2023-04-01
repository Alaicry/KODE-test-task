import React from "react";
import { VscClose } from "react-icons/vsc";

type ModalProps = {
	// setModal: React.Dispatch<React.SetStateAction<boolean>>;
	onVisibleModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ onVisibleModal }) => {
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
						<input type="radio" name="sort" className="modal__input" value="По алфавиту" checked />
						<label className="modal__label">По алфавиту</label>
					</div>
					<div className="modal__field">
						<input type="radio" name="sort" className="modal__input" value="По дню рождения" />
						<label className="modal__label">По дню рождения</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
