import React from "react";
import { useDispatch } from "react-redux/es/exports";
import Departaments from "./components/Departaments";

import Header from "./components/Header";
import Search from "./components/Search";
import UserList from "./components/UserList";

const App = () => {
	return (
		<React.Fragment>
			<Header />
			<Search />
			<Departaments />
			<UserList />
		</React.Fragment>
	);
};

export default App;
