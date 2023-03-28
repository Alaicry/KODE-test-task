import React from "react";
import Departaments from "../components/Departaments";
import Header from "../components/Header";
import Search from "../components/Search";
import UserList from "../components/UserList";

type Props = {};

const HomePage = (props: Props) => {
	return (
		<React.Fragment>
			<Header />
			<Search />
			<Departaments />
			<UserList />
		</React.Fragment>
	);
};

export default HomePage;
