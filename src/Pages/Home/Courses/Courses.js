import React from "react";
import useCourses from "../../../hooks/useCourses";
import Course from "../Course/Course";

const Courses = () => {
	const [courses, setCourses] = useCourses();
	return (
		<div className="py-16">
			<h2 className="text-center pb-8 font-bold uppercase text-2xl">
				Services
			</h2>
			<div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto ">
				{courses.map((course) => (
					<Course key={course.id} course={course} />
				))}
			</div>
		</div>
	);
};

export default Courses;
