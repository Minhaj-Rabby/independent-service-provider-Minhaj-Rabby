import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "tw-elements";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Navbar.css";
import { signOut } from "firebase/auth";
const Navbar = () => {
	const navigate = useNavigate();
	const handleLoginBtn = () => {
		navigate("/login");
	};
	const [user] = useAuthState(auth);

	const handleSignOut = () => {
		signOut(auth);
	};
	return (
		<nav
			className="
                   
                    w-full
                    flex flex-wrap
                    items-center
                    justify-between
                    py-4
                    bg-gray-100
                    text-gray-500
                    hover:text-gray-700
                    focus:text-gray-700
                    shadow-lg
                    navbar navbar-expand-lg navbar-light
					sticky
					top-0
					
                    "
			style={{ zIndex: "9999" }}
		>
			<div className="container mx-auto flex flex-wrap items-center justify-between px-6">
				<button
					className="
                            navbar-toggler
                            text-gray-500
                            border-0
                            hover:shadow-none hover:no-underline
                            py-2
                            px-2.5
                            bg-transparent
                            focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
                        "
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="bars"
						className="w-6"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
						></path>
					</svg>
				</button>
				<div
					className="collapse navbar-collapse flex-grow items-center"
					id="navbarSupportedContent"
				>
					<NavLink className="text-xl text-black" to="/home">
						{/* <img
							src="./img/educator.png"
							alt="logo"
							className="w-32 h-8"
						/> */}
						<h2 className="text-orange-400 font-semibold">Minhaj Wedding Photography</h2>
					</NavLink>
					{/* <!-- Left links --> */}
					<ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
						<li className="nav-item px-2">
							<NavLink
								className={(navInfo) =>
									navInfo.isActive
										? `active-l nav-link`
										: `a nav-link`
								}
								aria-current="page"
								to="/"
							>
							Home
							</NavLink>
						</li>

						<li className="nav-item pr-2">
							<NavLink
								className={(navInfo) =>
									navInfo.isActive
										? `active-l nav-link`
										: `a nav-link`
								}
								to={"/about"}
							>
								About
							</NavLink>
						</li>
						<li className="nav-item pr-2">
							<NavLink
								className={(navInfo) =>
									navInfo.isActive
										? `active-l nav-link`
										: `a nav-link`
								}
								to={"/blogs"}
							>
								Blogs
							</NavLink>
						</li>
					</ul>
					{/* <!-- Left links --> */}
				</div>
				{user ? (
					<button
						className="bg-red-500 text-white px-4 py-1 rounded hover:text-amber-500"
						onClick={handleSignOut}
					>
						Log out
					</button>
				) : (
					<button
						onClick={handleLoginBtn}
						className="bg-blue-700 text-white px-4 py-1 rounded hover:text-amber-500"
					>
						Login
					</button>
				)}

				{/* <!-- Collapsible wrapper --> */}
			</div>
		</nav>
	);
};

export default Navbar;
