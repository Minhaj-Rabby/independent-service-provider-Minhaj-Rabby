import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";

import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/" element={<Home />}></Route>
				<Route path="/blogs" element={<Blogs />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route
					path="/checkout"
					element={
						<RequireAuth>
							<CheckOut />
						</RequireAuth>
					}
				></Route>

				<Route path="*" element={<Error />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
