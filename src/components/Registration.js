import React, { useState } from "react";
import InputField from "../microComponents/InputField";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { validateEmail, validatePassword } from "../utils/common";
import { registerUser } from "../slices/loginRegistrationSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const Registration = () => {
	const [inputFields, setInputFields] = useState({
		email: "",
		password: "",
		username: "",
		id: uuidv4(),
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitRegistration = (e) => {
		e.stopPropagation();
		e.preventDefault();
		const { email, password } = inputFields;
		if (!validateEmail(email)) {
			toast.error("Invalid Email");
		} else if (!validatePassword(password)) {
			toast.error(
				"minimum 8 characters with atleast \n1 Uppercase and 1 special character \n and 1 numeric"
			);
		} else {
			dispatch(registerUser(inputFields));
			toast.success("Registered Successfully");
			navigate(`/`);
		}
	};

	const handleInput = (value, field) => {
		setInputFields({ ...inputFields, [field]: value });
	};

	return (
		<div className="auth-form-container">
			<form className="register-form" onSubmit={(e) => submitRegistration(e)}>
				<label htmlFor="username">Username</label>
				<InputField
					type="text"
					placeholder="Enter Username"
					onChange={(e) => handleInput(e.target.value, "username")}
				/>
				<label htmlFor="email">Email</label>
				<InputField
					type="email"
					placeholder="Enter Email"
					onChange={(e) => handleInput(e.target.value, "email")}
				/>
				<label htmlFor="password">Password</label>
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
