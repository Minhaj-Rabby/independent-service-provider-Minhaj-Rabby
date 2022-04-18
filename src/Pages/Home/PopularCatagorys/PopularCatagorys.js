import React from "react";
import usePopular from "../../../hooks/usePopular";
import PopularCatagory from "../../PopularCatagory/PopularCatagory";

const PopularCatagorys = () => {
	const [populars] = usePopular();
	return (
		<div className="container mx-auto flex flex-col items-center cursor-pointer">
			<h4>POPULAR CATEGORY</h4>
			<h2 className="pt-2 md:w-96 text-3xl text-center">
				Hot & Popular Category For Learn
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-24 pt-20 ">
				{populars.map((popular) => (
					<PopularCatagory key={popular.id} popular={popular} />
				))}
			</div>
		</div>
	);
};

export default PopularCatagorys;