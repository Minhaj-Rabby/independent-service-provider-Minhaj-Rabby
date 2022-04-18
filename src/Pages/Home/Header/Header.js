import React from "react";
import "tw-elements";
import "./Header.css";
const Header = () => {
	return (
		<div
			className="flex justify-center items-center"
			style={{ minHeight: "50vh", background: "#ECF5F8" }}
		>
			<div className="flex flex-col md:w-96 mx-auto container">
				<h1 className="mb-4 text-4xl text-center font-bold">
					EASY, COMFORTABLE & SEAMLESS
				</h1>
				<h6 className="text-center">
					Learn from the best with our online photography courses in Fashion, Portrait, Wedding and Lighting. Get the best tips from professional photographers and watch real life shoots.
				</h6>
			</div>
		</div>
	);
};

export default Header;
