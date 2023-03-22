import React, { useState } from "react";
import InputField from "../microComponents/InputField";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/common";
import { registerUser } from "../slices/loginRegistrationSlice";
import { useDispatch } from "react-redux";

const Registration = () => {
	const [inputFields, setInputFields] = useState({
		email: "",
		password: "",
		username: "",
	});
	const dispatch = useDispatch();

	const submitRegistration = (e) => {
		e.stopPropagation();
		e.preventDefault();
		dispatch(registerUser(inputFields));
	};

	const handleInput = (field, value) => {
		setInputFields({ ...inputFields, [field]: value });
	};

	return (
		<div className="auth-form-container">
			<form className="register-form" onSubmit={(e) => submitRegistration(e)}>
				<InputField
					type="text"
					placeholder="Enter Username"
					onChange={(e) => handleInput(e.target.value, "username")}
				/>
				<InputField
					type="email"
					placeholder="Enter Email"
					onChange={(e) => handleInput(e.target.value, "email")}
				/>
				<InputField
					type="password"
					placeholder="Enter Password"
					onChange={(e) => handleInput(e.target.value, "password")}
				/>
				<button type="submit">Register</button>
			</form>
			<div>
				<Link to="/">
					<button className="link-btn">
						Already have an account? Login here.
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Registration;
