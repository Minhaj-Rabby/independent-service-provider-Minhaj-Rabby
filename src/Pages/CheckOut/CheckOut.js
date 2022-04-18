import React, { useState } from "react";
import InputField from "../Login/InputField/InputField";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
	const [values, setValues] = useState({
		username: "",

		address: "",
		phone: "",
	});
	const [showModal, setShowModal] = useState(false);
	//navigate function
	const navigate = useNavigate();

	// const [createUserWithEmailAndPassword, user] =
	// 	useCreateUserWithEmailAndPassword(auth);

	//inputs array
	const navigateToHome = () => {
		navigate("/");
	};

	const inputs = [
		{
			id: 1,
			name: "username",
			type: "text",
			placeholder: "Your name",
			errorMessage: "*Username  shouldn't include any special character!",
			label: "Your name",
			required: true,
			pattern: "^[a-z0-9_.]+$",
		},
		{
			id: 2,
			name: "phone",
			type: "text",
			placeholder: "Phone number",
			errorMessage: "*It should be valid phone number",
			label: "Phone number",
			required: true,
			pattern: "(?:(?:\\+|00)88|01)?\\d{11}",
		},
	];

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	//console.log(values);
	//navigate
	// if (user) {
	// 	navigate("/inventory");
	// }

	//create user function
	const handleCreateUser = (e) => {
		e.preventDefault();
		// if (values.password !== values.confirmPassword) {
		// 	return;
		// }
		// createUserWithEmailAndPassword(values.email, values.password);
	};

	const handleCheckOut = (e) => {
		e.preventDefault();
		//toast("Enrollment Succesfull!");
		setShowModal(true);
	};
	return (
		<div className="pt-10 form-field flex items-center justify-center min-h-screen">
			<form className="shadow-lg" onSubmit={handleCreateUser}>
				<h1 className="text-center mb-4 text-2xl">
					CheckOut Information
				</h1>
				{inputs.map((input) => (
					<InputField
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}
				<textarea
					className="border-2 w-full"
					name="address"
					rows="4"
					cols="50"
					placeholder="Your address"
					required
					onChange={onChange}
				></textarea>

				<button
					onClick={handleCheckOut}
					type="submit"
					className="
                    mt-4
                        w-full
                        px-6
                        py-2.5
                        bg-zinc-600
                        text-white
                        font-bold
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-stone-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out"
				>
					Submit
				</button>
			</form>
			<ToastContainer />
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				navigateToHome={navigateToHome}
			/>
		</div>
	);
};

export default CheckOut;
