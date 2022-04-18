import React from "react";
import Courses from "../Courses/Courses";
import Header from "../Header/Header";
import PopularCatagorys from "../PopularCatagorys/PopularCatagorys";

const Home = () => {
	return (
		<div>
			<Header />
			<div></div>
			<Courses />
			<PopularCatagorys />
		</div>
	);
};

export default Home;