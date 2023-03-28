import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const UserPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div>
			<button onClick={() => navigate(-1)}>
				<IoIosArrowBack />
			</button>
		</div>
	);
};

export default UserPage;
