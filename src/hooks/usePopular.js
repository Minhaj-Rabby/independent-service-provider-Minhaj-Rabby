import axios from "axios";
import React, { useEffect, useState } from "react";

const usePopular = () => {
	const [polpulars, setPopulars] = useState([]);
	useEffect(() => {
		axios("popular.json").then((data) => setPopulars(data.data));
	}, []);
	return [polpulars, setPopulars];
};

export default usePopular;
