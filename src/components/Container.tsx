import React from "react";

type ContainerProps = {
	children: React.ReactNode;
	classNameFromProps?: string;
};

const Container: React.FC<ContainerProps> = ({ children, classNameFromProps }) => {
	return (
		<div className={classNameFromProps ? `container ${classNameFromProps}` : "container"}>
			{children}
		</div>
	);
};

export default Container;
