import React from "react";
import { useNavigate } from "react-router-dom";

const PopularCatagory = ({ popular }) => {
	const { img, name, noClass, bgC } = popular;
	const navigate = useNavigate();
	const handleCheckOut = () => {
		navigate("/checkout");
	};
	return (
		<div
			onClick={handleCheckOut}
			className="flex items-center justify-between py-8 pl-12 pr-12 sm:pr-20 gap-10 rounded"
			style={{ background: bgC }}
		>
			<div>
				<img className="w-14 sm:w-20" src={img} alt="" />
			</div>
			<div className="flex flex-col">
				<h5>{name}</h5>
				<p>
					<i className="fa-solid fa-video"></i> {noClass} Classes
				</p>
			</div>
		</div>
	);
};

export default PopularCatagory;
