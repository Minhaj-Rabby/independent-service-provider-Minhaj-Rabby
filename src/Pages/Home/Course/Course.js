import React from "react";
import { useNavigate } from "react-router-dom";
import "./Course.css";
const Course = (props) => {
	const { name, picture, duration, review, noLecture, price } = props.course;
	const navigate = useNavigate();
	const handleCheckOut = () => {
		navigate("/checkout");
	};
	return (
		<div className="flex justify-center ">
			<div className="rounded shadow-lg bg-gray-50 relative">
				<img className="rounded w-full p-6" src={picture} alt="" />

				<div className="p-6">
					<h5 className="text-gray-900 text-xl  mb-2 font-bold">
						{name}
					</h5>
					<div className="flex justify-between text-gray-400 text-sm mt-4">
						<span>{noLecture} Lectures</span>
						<span>
							<i className="fa-solid fa-clock"></i> {duration}
						</span>
						<span>
							<i className="fa-solid fa-star"></i> {review}{" "}
							Reviews
						</span>
					</div>
					<button
						onClick={handleCheckOut}
						type="button"
						className="font-bold w-full mt-6 inline-block px-6 py-2.5 btn text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover: text-white focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						style={{ color: "#0A033C" }}
					>
						enroll now
					</button>
				</div>
				<p className="flex justify-center items-center w-14 h-8 absolute bg-yellow-50 rounded-sm text-black top-3 left-4">
					${price}
				</p>
			</div>
		</div>
	);
};

export default Course;
