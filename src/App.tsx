import React from "react";
import { useDispatch } from "react-redux/es/exports";
import Categories from "./components/Categories";

import Header from "./components/Header";
import Search from "./components/Search";
import { getUsersData } from "./redux/slices/usersSlice";

const App = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getUsersData());
	}, []);
	return (
		<React.Fragment>
			<Header />
			<Search />
			<Categories />
		</React.Fragment>
	);
};

export default App;
