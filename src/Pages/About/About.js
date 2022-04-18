import React from "react";

const About = () => {
	return (
		<div className="container py-20">
			<div className="flex justify-center">
				<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
					<img
						className=" w-3/4  p-2 m-2 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
						src="img/About.png"
						alt=""
					/>
					<div className="p-6 flex flex-col justify-start">
						<h5 className="text-gray-900 text-2xl font-medium mb-2">
							Simple goal of my life
						</h5>
						<p className="text-gray-700 text-base mb-4">
							The main objective when working as a developer is to be productive and deliver value to the company. As a developer, the aim is to build practical applications that will be 100% successful.
							Goal is to be a web developer, Make some of complex web
							application. Will try to do something extra-ordinary.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
