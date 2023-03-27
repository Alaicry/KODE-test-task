import React from "react";

const User: React.FC = ({ firstName, lastName }) => {
	return <div>{`${firstName} ${lastName}`}</div>;
};

export default User;
