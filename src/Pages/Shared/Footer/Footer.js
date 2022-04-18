import React from "react";

const Footer = () => {
	return (
		<div className=" text-white" style={{ background: "#2F384A" }}>
			<div className="py-10 flex sm:flex-row flex-col justify-between container mx-auto md:px-16 gap-8 px-2">
				<div className="flex flex-col justify-start">
					<img className="w-40" src="img/footerIcon.png" alt="footer Icon"></img>
					<p className="md:w-80">Best plece for lean and supprot .</p>
				</div>
				<div className="flex flex-col justify-start">
					<p className="text-2xl">Contact us</p>
					<p>
						<i className="fa-solid fa-envelope"></i>
						{"  "}
						help.minhajPhoto@yahoo.com
					</p>
					<p>
						<i className="fa-solid fa-location-dot"></i>
						{"  "} Dhaka, Bangladesh
					</p>
					<p>
						<i className="fa-solid fa-phone"></i>
						{"  "} +8801625382484
					</p>
				</div>
			</div>
			<div className="flex justify-center py-8 border-t-2">
				<p>
					© {new Date().getFullYear()} Minhaj Wedding Photography, All Rights Reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
