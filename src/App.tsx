import React from "react";
import Categories from "./components/Categories";

import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
	return (
		<React.Fragment>
			<Header />
			<Search />
			<Categories />
		</React.Fragment>
	);
};

export default App;
